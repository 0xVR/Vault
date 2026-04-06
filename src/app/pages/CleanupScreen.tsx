import { useState } from 'react';
import { useNavigate } from 'react-router';
import CleanupHadi from '../../imports/CleanupHadi';
import BottomNav from '../components/BottomNav';
import FigmaWrapper from '../components/FigmaWrapper';

export default function CleanupScreen() {
  const navigate = useNavigate();
  const [showExpiredSuggestion, setShowExpiredSuggestion] = useState(true);
  const [showDuplicateSuggestion, setShowDuplicateSuggestion] = useState(true);

  return (
    <div 
      className="relative min-h-screen w-full overflow-y-auto pb-[120px] bg-[#f8fafc]"
      onClick={(e) => {
        const target = e.target as HTMLElement;

        if (target.closest('[data-settings-gear]')) {
          navigate('/settings');
        } else if (target.closest('[data-cleanup-back]')) {
          navigate('/home');
        }
      }}
    >
      <FigmaWrapper>
        <CleanupHadi
          showExpiredSuggestion={showExpiredSuggestion}
          showDuplicateSuggestion={showDuplicateSuggestion}
          onDismissExpiredSuggestion={() => setShowExpiredSuggestion(false)}
          onClearAll={() => {
            setShowExpiredSuggestion(false);
            setShowDuplicateSuggestion(false);
          }}
        />
      </FigmaWrapper>
      <BottomNav />
    </div>
  );
}
