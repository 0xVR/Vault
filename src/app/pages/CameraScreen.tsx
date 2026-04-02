import { useNavigate } from 'react-router';
import CameraCaptureScreenEmma from '../../imports/CameraCaptureScreenEmma';
import { useState } from 'react';
import SettingsGearButton from '../components/SettingsGearButton';

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
        <SettingsGearButton className="absolute right-[20px] top-[20px] z-[30] size-[48px] bg-white/90 shadow-[0px_4px_10px_rgba(0,0,0,0.18)]" />
      </div>
    </div>
  );
}
