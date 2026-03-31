import { useNavigate } from 'react-router';
import CleanupHadi from '../../imports/CleanupHadi';
import BottomNav from '../components/BottomNav';
import FigmaWrapper from '../components/FigmaWrapper';

export default function CleanupScreen() {
  const navigate = useNavigate();

  return (
    <div 
      className="relative min-h-screen w-full overflow-y-auto pb-[120px] bg-[#f8fafc]"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        
        // Settings button
        if (target.closest('[data-name="Button2"]')) {
          navigate('/settings');
        }
        // Back button
        else if (target.closest('[data-name="Container11"]')) {
          navigate('/home');
        }
      }}
    >
      <FigmaWrapper>
        <CleanupHadi />
      </FigmaWrapper>
      <button
        type="button"
        aria-label="Open settings"
        onClick={() => navigate('/settings')}
        className="absolute right-[12px] top-[12px] z-[20] size-[48px] rounded-[9999px]"
      />
      <BottomNav />
    </div>
  );
}
