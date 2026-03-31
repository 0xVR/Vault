import { useNavigate } from 'react-router';
import CameraCaptureScreenEmma from '../../imports/CameraCaptureScreenEmma';
import { useState } from 'react';
import svgPaths from '../../imports/svg-xcxhhmzk87';

export default function CameraScreen() {
  const navigate = useNavigate();
  const [justCaptured, setJustCaptured] = useState(false);

  // Simulate camera capture
  const handleCapture = () => {
    setJustCaptured(true);
    // Simulate processing delay then navigate to annotate
    setTimeout(() => {
      navigate('/annotate/new');
    }, 300);
  };

  // Override the navigation handlers in the imported component
  return (
    <div
      className="relative flex min-h-screen w-full justify-center overflow-hidden bg-black"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        // Check if capture button was clicked (look for the white circle)
        if (target.closest('[data-name=\"Button4\"]') || target.closest('.size-\\[80px\\]')) {
          handleCapture();
        }
        // Check if home icon was clicked
        else if (target.closest('[data-name=\"Link - Left: Home Icon\"]')) {
          navigate('/home');
        }
        // Check if gallery icon was clicked
        else if (target.closest('[data-name=\"Link - Right: Gallery/Vault Icon\"]')) {
          navigate('/vaults');
        }
      }}
    >
      <div className="relative h-screen w-full max-w-[430px] overflow-hidden">
        <CameraCaptureScreenEmma />
        <button
          type="button"
          aria-label="Open settings"
          onClick={() => navigate('/settings')}
          className="absolute right-[20px] top-[20px] z-[30] flex size-[48px] items-center justify-center rounded-[9999px] bg-white/90 shadow-[0px_4px_10px_rgba(0,0,0,0.18)]"
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
      </div>
    </div>
  );
}
