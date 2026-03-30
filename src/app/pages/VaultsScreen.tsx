import { useState } from 'react';
import { useNavigate } from 'react-router';
import { mockImages } from '../data/mockImages';
import BottomNav from '../components/BottomNav';
import svgPaths from '../../imports/svg-xcxhhmzk87';

export default function VaultsScreen() {
  const navigate = useNavigate();
  const [selectedVault, setSelectedVault] = useState<string>('all');

  // Group images by category
  const vaults = {
    all: mockImages,
    menus: mockImages.filter(img => img.category === 'menu'),
    schedules: mockImages.filter(img => img.category === 'schedule'),
    events: mockImages.filter(img => img.category === 'event'),
    whiteboards: mockImages.filter(img => img.category === 'whiteboard'),
  };

  const currentImages = vaults[selectedVault as keyof typeof vaults] || mockImages;

  return (
    <div className="bg-[#f8fafc] flex flex-col min-h-screen w-full">
      <BottomNav />
      
      {/* Header */}
      <div className="flex items-center justify-between pb-[9px] pt-[16px] px-[16px] shrink-0 w-full border-b border-[rgba(18,109,98,0.1)] bg-white">
        <div className="flex-[1_0_0] min-h-px min-w-px">
          <div className="content-stretch flex items-center gap-[12px]">
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path
                    d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z"
                    stroke="#126D62"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </g>
              </svg>
            </div>
            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-[#0f172a] tracking-[-0.45px]">
              Vaults
            </h1>
          </div>
        </div>
        
        <button
          onClick={() => navigate('/settings')}
          className="relative rounded-[9999px] shrink-0"
        >
          <div className="content-stretch flex flex-col items-start p-[8px] relative">
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g>
                  <path d={svgPaths.p1b1900c0} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p22be0800} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Vault Filters */}
      <div className="bg-white border-b border-[#e2e8f0] px-[16px] py-[12px] w-full">
        <div className="flex gap-[8px] overflow-x-auto">
          {[
            { key: 'all', label: 'All', count: vaults.all.length },
            { key: 'menus', label: 'Menus', count: vaults.menus.length },
            { key: 'schedules', label: 'Schedules', count: vaults.schedules.length },
            { key: 'events', label: 'Events', count: vaults.events.length },
            { key: 'whiteboards', label: 'Whiteboards', count: vaults.whiteboards.length },
          ].map((vault) => (
            <button
              key={vault.key}
              onClick={() => setSelectedVault(vault.key)}
              className={`px-[16px] py-[8px] rounded-[20px] whitespace-nowrap ${
                selectedVault === vault.key
                  ? 'bg-[#126d62] text-white'
                  : 'bg-[#f1f5f9] text-[#64748b]'
              }`}
            >
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px]">
                {vault.label} ({vault.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto pb-[120px] w-full">
        <div className="grid grid-cols-2 gap-[16px] p-[16px] max-w-[430px] mx-auto">
          {currentImages.map((image) => (
            <button
              key={image.id}
              onClick={() => navigate(`/image/${image.id}`)}
              className="bg-white rounded-[12px] overflow-hidden shadow-sm"
            >
              <div className="aspect-square relative">
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-[12px]">
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#0f172a] mb-[4px] truncate">
                  {image.title}
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#64748b] truncate">
                  {image.tags[0]}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[10px] text-[#94a3b8] mt-[4px]">
                  {image.date}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}