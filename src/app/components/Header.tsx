import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-xcxhhmzk87';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  /** When set, called instead of browser history back (e.g. `() => navigate('/home')`). */
  onBack?: () => void;
  rightAction?: ReactNode;
  className?: string;
}

export default function Header({ title, showBack = true, onBack, rightAction, className = '' }: HeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={`relative w-full border-b border-[rgba(18,109,98,0.1)] bg-white ${className}`}>
      <div className="mx-auto flex w-full max-w-[430px] items-center justify-between px-[16px] pb-[9px] pt-[16px]">
        {showBack ? (
          <button
            type="button"
            onClick={handleBack}
            aria-label="Go back"
            className="flex size-[40px] shrink-0 items-center justify-center rounded-[9999px]"
          >
            <div className="relative size-[16px] shrink-0">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <path d={svgPaths.p300a1100} fill="#126D62" />
                </g>
              </svg>
            </div>
          </button>
        ) : (
          <div className="size-[40px] shrink-0" />
        )}

        <div className="min-h-px min-w-px flex-[1_0_0] px-[8px]">
          <div className="flex w-full flex-col items-center">
            <h1 className="truncate text-center font-['Inter:Bold',sans-serif] text-[18px] font-bold tracking-[-0.45px] text-[#0f172a]">
              {title}
            </h1>
          </div>
        </div>

        {rightAction || <div className="size-[40px] shrink-0" />}
      </div>
    </div>
  );
}
