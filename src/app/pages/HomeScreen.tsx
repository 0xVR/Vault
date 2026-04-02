import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import HomeDashboardMichelle from '../../imports/HomeDashboardMichelle';
import BottomNav from '../components/BottomNav';
import FigmaWrapper from '../components/FigmaWrapper';
import { searchImages } from '../data/mockImages';

export default function HomeScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return [];
    return searchImages(trimmedQuery).slice(0, 3);
  }, [searchQuery]);

  const handleSearchSubmit = () => {
    const trimmedQuery = searchQuery.trim();
    navigate(trimmedQuery ? `/search?q=${encodeURIComponent(trimmedQuery)}` : '/search');
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-y-auto pb-[120px] bg-[#f8fafc]"
      onClick={(e) => {
        const target = e.target as HTMLElement;

        const smartVaultCard = target.closest('[data-name="Background+Border+Shadow"]') as HTMLElement | null;
        const smartVaultText = smartVaultCard?.innerText.toLowerCase() ?? '';

        if (smartVaultText.includes('menus')) {
          navigate('/vaults?vault=menus');
        } else if (smartVaultText.includes('schedules')) {
          navigate('/vaults?vault=schedules');
        } else if (smartVaultText.includes('event posters')) {
          navigate('/vaults?vault=events');
        }
        // Check for image clicks
        else if (target.closest('[data-name*=\"Card\"]') || target.tagName === 'IMG') {
          // Navigate to image detail
          // Get the image ID from context if possible, otherwise use mock
          navigate('/image/1');
        }
        // Check for settings icon
        else if (target.closest('[data-settings-gear]')) {
          navigate('/settings');
        }
      }}
    >
      <div className="absolute inset-x-0 top-[68px] z-[25] mx-auto w-full max-w-[430px] px-[16px]">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-[16px] flex items-center">
            <svg className="size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path
                d="M12.9375 11.8125H12.345L12.135 11.61C12.87 10.755 13.3125 9.645 13.3125 8.4375C13.3125 5.745 11.13 3.5625 8.4375 3.5625C5.745 3.5625 3.5625 5.745 3.5625 8.4375C3.5625 11.13 5.745 13.3125 8.4375 13.3125C9.645 13.3125 10.755 12.87 11.61 12.135L11.8125 12.345V12.9375L15.5625 16.68L16.68 15.5625L12.9375 11.8125ZM8.4375 11.8125C6.57 11.8125 5.0625 10.305 5.0625 8.4375C5.0625 6.57 6.57 5.0625 8.4375 5.0625C10.305 5.0625 11.8125 6.57 11.8125 8.4375C11.8125 10.305 10.305 11.8125 8.4375 11.8125Z"
                fill="#94A3B8"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              e.stopPropagation();
              if (e.key === 'Enter') {
                handleSearchSubmit();
              }
            }}
            placeholder="Search your Vault..."
            aria-label="Search your Vault"
            className="h-[48px] w-full rounded-[12px] border border-[rgba(18,109,98,0.18)] bg-white pl-[44px] pr-[16px] text-[16px] text-[#0f172a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none focus:border-[#126d62]"
          />

          {searchResults.length > 0 && (
            <div
              className="absolute left-0 right-0 top-[56px] overflow-hidden rounded-[16px] border border-[#dbe4ea] bg-white shadow-[0px_10px_30px_rgba(15,23,42,0.08)]"
              onClick={(e) => e.stopPropagation()}
            >
              {searchResults.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => navigate(`/image/${image.id}`)}
                  className="flex w-full items-center gap-[12px] px-[14px] py-[12px] text-left transition-colors hover:bg-[#f8fafc]"
                >
                  <img src={image.thumbnail} alt={image.title} className="size-[52px] rounded-[12px] object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[14px] font-semibold text-[#0f172a]">{image.title}</p>
                    <p className="truncate text-[12px] text-[#64748b]">{image.aiContext}</p>
                  </div>
                </button>
              ))}
              <button
                type="button"
                onClick={handleSearchSubmit}
                className="w-full border-t border-[#e2e8f0] px-[14px] py-[12px] text-left text-[13px] font-medium text-[#126d62]"
              >
                View all results for "{searchQuery.trim()}"
              </button>
            </div>
          )}
        </div>
      </div>
      <FigmaWrapper>
        <HomeDashboardMichelle />
      </FigmaWrapper>
      <BottomNav />
    </div>
  );
}
