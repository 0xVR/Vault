import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import svgPaths from '../../imports/svg-xcxhhmzk87';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import SettingsGearButton from '../components/SettingsGearButton';
import { searchImages } from '../data/mockImages';

export default function SearchScreen() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);

    const nextParams = new URLSearchParams(searchParams);
    if (value.trim()) {
      nextParams.set('q', value);
    } else {
      nextParams.delete('q');
    }

    setSearchParams(nextParams, { replace: true });
  };

  const results = searchQuery.length > 0 ? searchImages(searchQuery) : [];
  const filteredResults = results.filter((image) => {
    if (activeFilter === 'All' || activeFilter === 'Images') return true;
    if (activeFilter === 'Schedules') return image.category === 'schedule';
    if (activeFilter === 'Stops') return image.tags.some((tag) => tag.toLowerCase().includes('transit'));
    return true;
  });
  const showNoResults = searchQuery.length > 0 && filteredResults.length === 0;

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f8fafc]">
      <Header
        title="Search"
        className="relative z-10"
        rightAction={<SettingsGearButton />}
      />

      <div className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[430px] flex-col p-[16px]">
          <div className="relative flex h-[48px] w-full items-center rounded-[12px] p-px">
            <div aria-hidden="true" className="absolute inset-0 rounded-[12px] border border-[rgba(18,109,98,0.5)]" />

            <div className="flex h-full items-center justify-center pl-[16px]">
              <div className="relative size-[18px] shrink-0">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <g>
                    <path d={svgPaths.p8a35e00} fill="#126D62" />
                  </g>
                </svg>
              </div>
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search your Vault"
              className="h-full min-w-0 flex-[1_0_0] border-0 bg-transparent px-[12px] py-[13px] font-['Inter:Regular',sans-serif] text-[16px] font-normal text-[#0f172a] outline-none"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange('')}
                aria-label="Clear search"
                className="flex h-full items-center justify-center pr-[12px]"
              >
                <div className="relative size-[20px] shrink-0">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p28843fc0} fill="#126D62" fillOpacity="0.67" />
                    </g>
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="relative h-[43px] w-full border-b border-[rgba(18,109,98,0.1)] bg-white">
        <div className="mx-auto h-full max-w-[430px] overflow-x-auto">
          <div className="flex h-full min-w-full gap-[24px] px-[16px]">
            {['All', 'Images', 'Schedules', 'Stops'].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className="relative shrink-0 self-stretch"
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 border-b-2 border-solid ${
                    activeFilter === filter ? 'border-[#126d62]' : 'border-transparent'
                  }`}
                />
                <div className="flex h-full items-center pb-[14px] pt-[8px]">
                  <span
                    className={`font-['Inter:Medium',sans-serif] text-[14px] ${
                      activeFilter === filter ? 'font-bold text-[#126d62]' : 'font-medium text-[#94a3b8]'
                    }`}
                  >
                    {filter}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-[120px]">
        {showNoResults ? (
          <div className="mx-auto flex w-full max-w-[430px] flex-col p-[32px]">
            <div className="w-full rounded-[12px] bg-[rgba(18,109,98,0.1)]">
              <div className="flex flex-col items-center justify-center p-[32px]">
                <div className="pb-[16px]">
                  <div className="flex size-[80px] items-center justify-center rounded-[9999px] bg-[rgba(18,109,98,0.1)]">
                    <div className="relative h-[28.5px] w-[30px] shrink-0">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 28.5">
                        <g>
                          <path d={svgPaths.p12d27880} fill="#126D62" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-center font-['Inter:Bold',sans-serif] text-[18px] font-bold text-[#0f172a]">
                  No results found
                </p>
                <p className="mt-[8px] max-w-[240px] text-center font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                  Try a different keyword or switch filters.
                </p>
              </div>
            </div>
          </div>
        ) : filteredResults.length > 0 ? (
          <div className="mx-auto grid w-full max-w-[430px] grid-cols-2 gap-[16px] p-[16px]">
            {filteredResults.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => navigate(`/image/${image.id}`)}
                className="overflow-hidden rounded-[12px] bg-white text-left shadow-sm"
              >
                <div className="relative aspect-square">
                  <img src={image.thumbnail} alt={image.title} className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="p-[12px]">
                  <h3 className="mb-[4px] truncate font-['Inter:Bold',sans-serif] text-[14px] font-bold text-[#0f172a]">
                    Matched: {image.title}
                  </h3>
                  <p className="truncate font-['Inter:Regular',sans-serif] text-[12px] text-[#64748b]">{image.tags[0]}</p>
                  <p className="mt-[4px] font-['Inter:Regular',sans-serif] text-[10px] text-[#94a3b8]">
                    Updated {image.date}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="mx-auto flex h-[300px] max-w-[430px] items-center justify-center px-[24px] text-center">
            <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#94a3b8]">
              Start typing to search your Vault.
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
