import { useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-xcxhhmzk87';

interface SettingsGearButtonProps {
  className?: string;
}

/** Same settings navigation + markup as Search / Vault headers; reuse for consistent `/settings` behavior. */
export default function SettingsGearButton({ className = '' }: SettingsGearButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate('/settings')}
      aria-label="Open settings"
      className={`flex size-[40px] shrink-0 items-center justify-center rounded-[9999px] ${className}`}
    >
      <div className="relative size-[24px] shrink-0">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.p1b1900c0} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p22be0800} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </button>
  );
}
