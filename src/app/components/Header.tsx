import { useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-xcxhhmzk87';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
}

export default function Header({ title, showBack = true, rightAction }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] pt-[16px] px-[16px] relative shrink-0 w-full border-b border-[rgba(18,109,98,0.1)] bg-white">
      <div aria-hidden="true" className="absolute border-[rgba(18,109,98,0.1)] border-b border-solid inset-0 pointer-events-none" />
      
      {showBack ? (
        <button
          onClick={() => navigate(-1)}
          className="relative rounded-[9999px] shrink-0 size-[40px]"
        >
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[16px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <path d={svgPaths.p300a1100} fill="#126D62" />
                </g>
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <div className="relative shrink-0 size-[40px]" />
      )}
      
      <div className="flex-[1_0_0] min-h-px min-w-px">
        <div className="content-stretch flex flex-col items-center relative w-full">
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-[#0f172a] text-center tracking-[-0.45px]">
            {title}
          </h1>
        </div>
      </div>
      
      {rightAction || <div className="relative shrink-0 size-[40px]" />}
    </div>
  );
}
