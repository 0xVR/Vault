import { useState } from 'react';
import { useNavigate } from 'react-router';
import { searchImages } from '../data/mockImages';
import BottomNav from '../components/BottomNav';
import svgPaths from '../../imports/svg-xcxhhmzk87';

export default function SearchScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  
  const results = searchQuery.length > 0 ? searchImages(searchQuery) : [];
  const showNoResults = searchQuery.length > 0 && results.length === 0;

  return (
    <div className="bg-[#f8fafc] flex flex-col min-h-screen w-full">
      <BottomNav />
      
      {/* Header */}
      <div className="flex items-center justify-between pb-[9px] pt-[16px] px-[16px] shrink-0 w-full z-[4]">
        <div aria-hidden="true" className="absolute border-[rgba(18,109,98,0.1)] border-b border-solid left-0 right-0 pointer-events-none" />
        
        <button
          onClick={() => navigate('/home')}
          className="relative rounded-[9999px] shrink-0 size-[40px]"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[16px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <path d={svgPaths.p300a1100} fill="#126D62" />
                </g>
              </svg>
            </div>
          </div>
        </button>
        
        <div className="flex-[1_0_0] min-h-px min-w-px relative">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] text-center tracking-[-0.45px] w-[214px]">
              <p className="leading-[22.5px]">Search Results</p>
            </div>
          </div>
        </div>
        
        <div className="relative shrink-0 size-[40px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end size-full" />
        </div>
        
        <button
          onClick={() => navigate('/settings')}
          className="relative rounded-[9999px] shrink-0"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative">
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path d={svgPaths.p1b1900c0} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p22be0800} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white flex flex-col items-start p-[16px] shrink-0 w-full z-[3]">
        <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full">
          <div className="bg-[rgba(18,109,98,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px p-px relative rounded-[12px] w-full">
            <div aria-hidden="true" className="absolute border border-[rgba(18,109,98,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            
            <div className="h-full relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center pl-[16px] relative">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g>
                      <path d={svgPaths.p8a35e00} fill="#126D62" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your Vault..."
              className="flex-[1_0_0] h-full min-h-px min-w-px bg-transparent border-0 outline-none px-[12px] py-[13px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#0f172a]"
            />
            
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="h-full relative shrink-0"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center pr-[12px] relative">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g>
                        <path d={svgPaths.p28843fc0} fill="#126D62" fillOpacity="0.67" />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="h-[43px] shrink-0 w-full z-[2]">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[24px] items-start pb-px px-[16px] relative size-full">
            {['All', 'Images', 'Schedules', 'Stops'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="relative self-stretch shrink-0"
              >
                <div aria-hidden="true" className={`absolute border-b-2 border-solid inset-0 pointer-events-none ${activeFilter === filter ? 'border-[#126d62]' : 'border-[rgba(0,0,0,0)]'}`} />
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center pb-[14px] pt-[8px] relative">
                    <div className={`flex flex-col font-['Inter:${activeFilter === filter ? 'Bold' : 'Medium'}',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] ${activeFilter === filter ? 'text-[#126d62] font-bold' : 'text-[#94a3b8] font-medium'}`}>
                      <p className="leading-[20px]">{filter}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(18,109,98,0.1)] border-b border-solid inset-0 pointer-events-none" />
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto w-full pb-[120px]">
        {showNoResults ? (
          <div className="flex flex-col items-start p-[32px] w-full z-[1]">
            <div className="bg-[rgba(18,109,98,0.1)] relative rounded-[12px] shrink-0 w-full">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-[32px] relative w-full">
                  <div className="content-stretch flex flex-col h-[96px] items-start pb-[16px] relative shrink-0 w-[80px]">
                    <div className="bg-[rgba(18,109,98,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[80px]">
                      <div className="h-[28.5px] relative shrink-0 w-[30px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 28.5">
                          <g>
                            <path d={svgPaths.p12d27880} fill="#126D62" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] text-center w-[194.78px]">
                      <p className="leading-[28px]">No more results found</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-2 gap-[16px] p-[16px] max-w-[430px] mx-auto w-full">
            {results.map((image) => (
              <button
                key={image.id}
                onClick={() => navigate(`/image/${image.id}`)}
                className="bg-white rounded-[12px] overflow-hidden shadow-sm"
              >
                <div className="aspect-square relative">
                  <img
                    src={image.thumbnail}
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-[12px]">
                  <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#0f172a] mb-[4px] truncate">
                    Matched: {image.title}
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#64748b] truncate">
                    {image.tags[0]}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[10px] text-[#94a3b8] mt-[4px]">
                    Updated {image.date}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[300px] text-[#94a3b8]">
            <p className="font-['Inter:Regular',sans-serif] text-[16px]">
              Start typing to search your Vault
            </p>
          </div>
        )}
      </div>
    </div>
  );
}