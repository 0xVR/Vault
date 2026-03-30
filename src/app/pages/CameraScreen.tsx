import { useNavigate } from 'react-router';
import CameraCaptureScreenEmma from '../../imports/CameraCaptureScreenEmma';
import { useState } from 'react';
import FigmaWrapper from '../components/FigmaWrapper';

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
      className="relative min-h-screen w-full overflow-hidden bg-black"
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
      <FigmaWrapper>
        <CameraCaptureScreenEmma />
      </FigmaWrapper>
    </div>
  );
}