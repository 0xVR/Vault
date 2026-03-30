import { useState } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-xcxhhmzk87';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { mockImages } from '../data/mockImages';

export default function VaultsScreen() {
  const navigate = useNavigate();
  const [selectedVault, setSelectedVault] = useState<string>('all');

  const vaults = {
    all: mockImages,
    menus: mockImages.filter((img) => img.category === 'menu'),
    schedules: mockImages.filter((img) => img.category === 'schedule'),
    events: mockImages.filter((img) => img.category === 'event'),
    whiteboards: mockImages.filter((img) => img.category === 'whiteboard'),
  };

  const currentImages = vaults[selectedVault as keyof typeof vaults] || mockImages;

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f8fafc]">
      <Header
        title="Vaults"
        showBack={false}
        rightAction={
          <button
            type="button"
            onClick={() => navigate('/settings')}
            aria-label="Open settings"
            className="flex size-[40px] shrink-0 items-center justify-center rounded-[9999px]"
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
        }
      />

      <div className="w-full border-b border-[#e2e8f0] bg-white px-[16px] py-[12px]">
        <div className="mx-auto flex max-w-[430px] gap-[8px] overflow-x-auto">
          {[
            { key: 'all', label: 'All', count: vaults.all.length },
            { key: 'menus', label: 'Menus', count: vaults.menus.length },
            { key: 'schedules', label: 'Schedules', count: vaults.schedules.length },
            { key: 'events', label: 'Events', count: vaults.events.length },
            { key: 'whiteboards', label: 'Whiteboards', count: vaults.whiteboards.length },
          ].map((vault) => (
            <button
              key={vault.key}
              type="button"
              onClick={() => setSelectedVault(vault.key)}
              className={`whitespace-nowrap rounded-[20px] px-[16px] py-[8px] ${
                selectedVault === vault.key ? 'bg-[#126d62] text-white' : 'bg-[#f1f5f9] text-[#64748b]'
              }`}
            >
              <span className="font-['Inter:Medium',sans-serif] text-[14px] font-medium">
                {vault.label} ({vault.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-[120px]">
        <div className="mx-auto grid max-w-[430px] grid-cols-2 gap-[16px] p-[16px]">
          {currentImages.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => navigate(`/image/${image.id}`)}
              className="overflow-hidden rounded-[12px] bg-white text-left shadow-sm"
            >
              <div className="relative aspect-square">
                <img src={image.thumbnail} alt={image.title} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="p-[12px]">
                <h3 className="mb-[4px] truncate font-['Inter:Bold',sans-serif] text-[14px] font-bold text-[#0f172a]">
                  {image.title}
                </h3>
                <p className="truncate font-['Inter:Regular',sans-serif] text-[12px] text-[#64748b]">{image.tags[0]}</p>
                <p className="mt-[4px] font-['Inter:Regular',sans-serif] text-[10px] text-[#94a3b8]">{image.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
