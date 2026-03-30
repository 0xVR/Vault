import { useNavigate, useLocation } from 'react-router';
import svgPaths from '../../imports/svg-hqoih3hkly';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/home' && location.pathname === '/home') return true;
    if (path === '/search' && location.pathname === '/search') return true;
    if (path === '/vaults' && location.pathname === '/vaults') return true;
    if (path === '/cleanup' && location.pathname === '/cleanup') return true;
    return false;
  };

  const homeActive = isActive('/home');
  const searchActive = isActive('/search');
  const vaultsActive = isActive('/vaults');
  const cleanupActive = isActive('/cleanup');

  return (
    <div className="fixed backdrop-blur-[8px] bg-[rgba(255,255,255,0.9)] bottom-0 left-0 right-0 z-[100] flex justify-center pb-[24px] pt-[9px] px-[16px]">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="h-[56px] max-w-[430px] w-full relative shrink-0">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          {/* Home */}
          <button
            onClick={() => navigate('/home')}
            className="-translate-y-1/2 absolute content-stretch flex flex-col h-[44px] items-center left-[20px] top-[calc(50%+13px)]"
          >
            <div className="h-[18px] relative shrink-0 w-[16px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                <g>
                  <path d={svgPaths.p12a32500} fill={homeActive ? "#126D62" : "#94A3B8"} />
                </g>
              </svg>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[-8px] top-[44px]">
              <div className={`flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] tracking-[0.5px] uppercase w-[32.28px] ${homeActive ? 'text-[#126d62]' : 'text-[#94a3b8]'}`}>
                <p className="leading-[15px]">Home</p>
              </div>
            </div>
          </button>

          {/* Search */}
          <button
            onClick={() => navigate('/search')}
            className="absolute h-[51px] left-[75px] rounded-[9999px] top-[12px] w-[59px]"
          >
            <div className="absolute content-stretch flex flex-col h-[23px] items-start left-[6px] top-[30px]">
              <div className={`flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] tracking-[0.3px] w-[47px] ${searchActive ? 'text-[#126d62]' : 'text-[#94a3b8]'}`}>
                <p className="leading-[18px]">SEARCH</p>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute bottom-[18px] left-[calc(50%-87px)] size-[18px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g>
                  <path d={svgPaths.p8a35e00} fill={searchActive ? "#126D62" : "#94A3B8"} />
                </g>
              </svg>
            </div>
          </button>

          {/* Vaults */}
          <button
            onClick={() => navigate('/vaults')}
            className="-translate-y-1/2 absolute content-stretch flex flex-col h-[44px] items-center left-[244px] top-[calc(50%+13px)] w-[45px]"
          >
            <div className="h-[16px] relative shrink-0 w-[20px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                <g>
                  <path d={svgPaths.p1f1e400} fill={vaultsActive ? "#126D62" : "#94A3B8"} />
                </g>
              </svg>
            </div>
            <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[15px] items-start left-[calc(50%+74.68px)] top-[44px]">
              <div className={`flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] tracking-[0.5px] uppercase w-[41.36px] ${vaultsActive ? 'text-[#126d62]' : 'text-[#94a3b8]'}`}>
                <p className="leading-[15px]">Vaults</p>
              </div>
            </div>
          </button>

          {/* Camera Button */}
          <button
            onClick={() => navigate('/')}
            className="absolute bg-[#126d62] content-stretch flex items-center justify-center left-[163px] rounded-[9999px] size-[56px] top-[4px]"
          >
            <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] size-[56px] top-0" />
            <div className="h-[25px] relative shrink-0 w-[27.5px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5 25">
                <g>
                  <path d={svgPaths.p10f12e00} fill="white" />
                </g>
              </svg>
            </div>
          </button>

          {/* Cleanup */}
          <button
            onClick={() => navigate('/cleanup')}
            className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] h-[44px] items-center left-[325px] top-[calc(50%+13px)] w-[54px]"
          >
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="relative shrink-0 size-[24px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <path d={svgPaths.p16b07800} fill={cleanupActive ? "#126D62" : "#94A3B8"} />
                  </g>
                </svg>
              </div>
              <div className="absolute content-stretch flex items-start right-[-4px] size-[8px] top-[-4px]">
                <div className={`absolute left-0 opacity-75 rounded-[9999px] size-[8px] top-0 ${cleanupActive ? 'bg-[#126d62]' : 'bg-[#94a3b8]'}`} />
                <div className={`rounded-[9999px] shrink-0 size-[8px] ${cleanupActive ? 'bg-[#126d62]' : 'bg-[#94a3b8]'}`} />
              </div>
            </div>
            <div className={`flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[9px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center tracking-[0.5px] uppercase w-[58px] ${cleanupActive ? 'text-[#126d62]' : 'text-[#94a3b8]'}`}>
              <p className="leading-[15px]">Cleanup</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}