import { useLocation, useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-hqoih3hkly';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { label: 'Home', path: '/home', active: location.pathname === '/home' },
    { label: 'Search', path: '/search', active: location.pathname === '/search' },
    { label: 'Camera', path: '/', active: location.pathname === '/' },
    { label: 'Vaults', path: '/vaults', active: location.pathname === '/vaults' },
    { label: 'Cleanup', path: '/cleanup', active: location.pathname === '/cleanup' },
  ];

  const renderIcon = (label: string, active: boolean) => {
    switch (label) {
      case 'Home':
        return (
          <svg className="size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
            <g>
              <path d={svgPaths.p12a32500} fill={active ? '#126D62' : '#94A3B8'} />
            </g>
          </svg>
        );
      case 'Search':
        return (
          <svg className="size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g>
              <path d={svgPaths.p8a35e00} fill={active ? '#126D62' : '#94A3B8'} />
            </g>
          </svg>
        );
      case 'Camera':
        return (
          <svg className="h-[25px] w-[27.5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5 25">
            <g>
              <path d={svgPaths.p10f12e00} fill="white" />
            </g>
          </svg>
        );
      case 'Vaults':
        return (
          <svg className="h-[16px] w-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <g>
              <path d={svgPaths.p1f1e400} fill={active ? '#126D62' : '#94A3B8'} />
            </g>
          </svg>
        );
      default:
        return (
          <div className="relative">
            <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g>
                <path d={svgPaths.p16b07800} fill={active ? '#126D62' : '#94A3B8'} />
              </g>
            </svg>
            <div className="absolute right-[-4px] top-[-4px] size-[8px] rounded-[9999px] bg-current text-inherit" />
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-[#e2e8f0] bg-[rgba(255,255,255,0.9)] px-[12px] pb-[calc(16px+env(safe-area-inset-bottom))] pt-[10px] backdrop-blur-[8px]">
      <div className="mx-auto grid h-[72px] w-full max-w-[430px] grid-cols-5 items-end">
        {items.map((item) => {
          const isCamera = item.label === 'Camera';
          const activeTextClass = item.active ? 'text-[#126d62]' : 'text-[#94a3b8]';

          return (
            <div key={item.label} className={`flex justify-center ${isCamera ? 'items-start' : 'items-end'}`}>
              <button
                type="button"
                aria-label={item.label}
                onClick={() => navigate(item.path)}
                className={`flex items-center justify-center ${
                  isCamera
                    ? 'mt-[-22px] size-[56px] rounded-[9999px] bg-[#126d62] shadow-[0px_8px_18px_rgba(18,109,98,0.24)]'
                    : `min-h-[52px] min-w-[64px] flex-col gap-[6px] rounded-[16px] px-[8px] py-[6px] ${activeTextClass}`
                }`}
              >
                {renderIcon(item.label, item.active)}
                {!isCamera && (
                  <span className={`text-center font-['Inter:Medium',sans-serif] text-[10px] font-medium uppercase tracking-[0.5px] ${activeTextClass}`}>
                    {item.label}
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
