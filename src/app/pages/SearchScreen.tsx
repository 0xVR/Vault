import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import svgPaths from '../../imports/svg-xcxhhmzk87';
import VaultImageCard from '../components/VaultImageCard';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import SettingsGearButton from '../components/SettingsGearButton';
import {
  filterVaultByTab,
  getSearchTabCounts,
  matchesVaultSearch,
  type SearchTabFilter,
} from '../data/mockImages';
import { useVaultCatalog } from '../hooks/useVaultCatalog';

const TABS: SearchTabFilter[] = ['All', 'Images', 'Schedules', 'Stops'];

export default function SearchScreen() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { items, isLoading, error } = useVaultCatalog();
  const inputRef = useRef<HTMLInputElement>(null);

  const initialQuery = searchParams.get('q') ?? '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState<SearchTabFilter>('All');

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

  /** Focus input when tapping the bar (icon, padding); skip clear button. */
  const handleSearchBarPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button[aria-label="Clear search"]')) return;
    inputRef.current?.focus();
  };

  const tabCounts = useMemo(() => getSearchTabCounts(items), [items]);

  const filteredByTab = useMemo(
    () => filterVaultByTab(items, activeFilter),
    [items, activeFilter],
  );

  const filteredResults = useMemo(
    () => filteredByTab.filter((img) => matchesVaultSearch(img, searchQuery)),
    [filteredByTab, searchQuery],
  );

  const queryTrimmed = searchQuery.trim();
  const showNoMatches = queryTrimmed.length > 0 && filteredResults.length === 0 && !isLoading && !error;
  const showEmptyCategory =
    queryTrimmed.length === 0 && filteredResults.length === 0 && !isLoading && !error;

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f8fafc]">
      <Header
        title="Search"
        className="relative z-10"
        rightAction={<SettingsGearButton />}
      />

      <div className="relative z-[1] w-full bg-white">
        <div className="mx-auto flex w-full max-w-[430px] flex-col p-[16px]">
          <div className="relative flex h-[48px] w-full items-center rounded-[12px] p-px">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 rounded-[12px] border border-[rgba(18,109,98,0.5)]"
            />

            <div
              role="search"
              className="relative z-[1] flex h-full min-w-0 flex-1 cursor-text items-center"
              onPointerDown={handleSearchBarPointerDown}
            >
              <div className="flex h-full shrink-0 items-center justify-center pl-[16px]">
                <div className="relative size-[18px] shrink-0">
                  <svg className="pointer-events-none absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g>
                      <path d={svgPaths.p8a35e00} fill="#126D62" />
                    </g>
                  </svg>
                </div>
              </div>

              <input
                ref={inputRef}
                type="search"
                enterKeyHint="search"
                autoComplete="off"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search your Vault"
                className="relative z-[1] h-full min-w-0 flex-1 border-0 bg-transparent px-[12px] py-[13px] font-['Inter:Regular',sans-serif] text-[16px] font-normal text-[#0f172a] outline-none"
              />

              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => handleSearchChange('')}
                  aria-label="Clear search"
                  className="relative z-[1] flex h-full shrink-0 items-center justify-center pr-[12px]"
                >
                  <div className="relative size-[20px] shrink-0">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g>
                        <path d={svgPaths.p28843fc0} fill="#126D62" fillOpacity="0.67" />
                      </g>
                    </svg>
                  </div>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0 h-[43px] w-full border-b border-[rgba(18,109,98,0.1)] bg-white">
        <div className="mx-auto h-full max-w-[430px] overflow-x-auto">
          <div className="flex h-full min-w-full gap-[24px] px-[16px]">
            {TABS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className="relative shrink-0 self-stretch"
                aria-label={`${filter}, ${tabCounts[filter]} items`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 bottom-0 border-b-2 border-solid ${
                    activeFilter === filter ? 'border-[#126d62]' : 'border-transparent'
                  }`}
                />
                <div className="flex h-full items-center pb-[14px] pt-[8px]">
                  <span
                    className={`font-['Inter:Medium',sans-serif] text-[14px] ${
                      activeFilter === filter ? 'font-bold text-[#126d62]' : 'font-medium text-[#94a3b8]'
                    }`}
                  >
                    {filter} ({tabCounts[filter]})
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-0 flex-1 overflow-y-auto pb-[120px]">
        {error ? (
          <div className="mx-auto flex w-full max-w-[430px] flex-col p-[32px]">
            <div className="rounded-[12px] border border-[#fecaca] bg-[#fef2f2] p-[24px] text-center">
              <p className="font-['Inter:Bold',sans-serif] text-[16px] font-bold text-[#991b1b]">Something went wrong</p>
              <p className="mt-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#b91c1c]">{error}</p>
            </div>
          </div>
        ) : isLoading ? (
          <div className="mx-auto grid w-full max-w-[430px] grid-cols-2 gap-[16px] p-[16px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[12px] bg-white shadow-sm"
                aria-hidden
              >
                <div className="aspect-square animate-pulse bg-[#e2e8f0]" />
                <div className="space-y-2 p-[12px]">
                  <div className="h-[14px] animate-pulse rounded bg-[#e2e8f0]" />
                  <div className="h-[12px] w-2/3 animate-pulse rounded bg-[#f1f5f9]" />
                </div>
              </div>
            ))}
          </div>
        ) : showNoMatches ? (
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
        ) : showEmptyCategory ? (
          <div className="mx-auto flex min-h-[200px] max-w-[430px] items-center justify-center px-[24px] text-center">
            <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#94a3b8]">
              No items in this category yet.
            </p>
          </div>
        ) : (
          <div className="mx-auto grid w-full max-w-[430px] grid-cols-2 gap-[16px] p-[16px]">
            {filteredResults.map((image) => (
              <VaultImageCard key={image.id} image={image} onOpen={() => navigate(`/image/${image.id}`)} />
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
