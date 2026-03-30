import { useNavigate } from 'react-router';
import HomeDashboardMichelle from '../../imports/HomeDashboardMichelle';
import BottomNav from '../components/BottomNav';
import FigmaWrapper from '../components/FigmaWrapper';

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div 
      className="relative min-h-screen w-full overflow-y-auto pb-[120px] bg-[#f8fafc]"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        
        // Check for image clicks
        if (target.closest('[data-name*=\"Card\"]') || target.tagName === 'IMG') {
          // Navigate to image detail
          // Get the image ID from context if possible, otherwise use mock
          navigate('/image/1');
        }
        // Check for search input
        else if (target.closest('[data-name=\"Input\"]') || target.closest('input')) {
          navigate('/search');
        }
        // Check for settings icon
        else if (target.closest('[data-name=\"Button2\"]')) {
          navigate('/settings');
        }
      }}
    >
      <FigmaWrapper>
        <HomeDashboardMichelle />
      </FigmaWrapper>
      <BottomNav />
    </div>
  );
}