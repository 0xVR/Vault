import { useNavigate } from 'react-router';
import BottomNav from '../components/BottomNav';
import svgPaths from '../../imports/svg-xcxhhmzk87';

export default function SettingsScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8fafc] flex flex-col min-h-screen w-full">
      <BottomNav />
      
      {/* Header */}
      <div className="flex items-center justify-between pb-[9px] pt-[16px] px-[16px] shrink-0 w-full border-b border-[rgba(18,109,98,0.1)] bg-white">
        <button
          onClick={() => navigate(-1)}
          className="relative rounded-[9999px] shrink-0 size-[40px]"
        >
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[16px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <path d={svgPaths.p300a1100} fill="#126D62" />
                </g>
              </svg>
            </div>
          </div>
        </button>
        
        <div className="flex-[1_0_0] min-h-px min-w-px">
          <div className="content-stretch flex flex-col items-center relative w-full">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-[#0f172a] text-center tracking-[-0.45px]">
              Settings
            </h1>
          </div>
        </div>
        
        <div className="relative shrink-0 size-[40px]" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-[120px] w-full">
        {/* Profile Section */}
        <div className="bg-white p-[24px] border-b border-[#e2e8f0] max-w-[430px] mx-auto w-full">
          <div className="flex items-center gap-[16px]">
            <div className="bg-[#126d62] rounded-full size-[64px] flex items-center justify-center">
              <svg className="w-[32px] h-[32px]" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="12" r="5" stroke="white" strokeWidth="2" fill="none" />
                <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-[#0f172a] mb-[4px]">
                John Doe
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                john.doe@example.com
              </p>
            </div>
          </div>
        </div>

        {/* Settings Options */}
        <div className="p-[16px] space-y-[8px] max-w-[430px] mx-auto w-full">
          {/* Notification Settings */}
          <button
            onClick={() => navigate('/notifications')}
            className="w-full bg-white rounded-[16px] p-[20px] shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
          >
            <div className="flex items-center gap-[16px]">
              <div className="bg-[#f1f5f9] rounded-full p-[12px]">
                <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 01-3.46 0"
                    stroke="#126D62"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#0f172a]">
                  Notification Settings
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                  Manage cleanup reminders
                </p>
              </div>
            </div>
            <div className="h-[12px] w-[7.4px]">
              <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
                <path d={svgPaths.p28c84800} fill="#94A3B8" opacity="0.4" />
              </svg>
            </div>
          </button>

          {/* Vault Storage Info */}
          <button
            onClick={() => {}}
            className="w-full bg-white rounded-[16px] p-[20px] shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
          >
            <div className="flex items-center gap-[16px]">
              <div className="bg-[#f1f5f9] rounded-full p-[12px]">
                <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                    stroke="#126D62"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="#126D62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="12" y1="22.08" x2="12" y2="12" stroke="#126D62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#0f172a]">
                  Vault Storage Info
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                  12.4 GB used of 50 GB
                </p>
              </div>
            </div>
            <div className="h-[12px] w-[7.4px]">
              <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
                <path d={svgPaths.p28c84800} fill="#94A3B8" opacity="0.4" />
              </svg>
            </div>
          </button>

          {/* Help & Support */}
          <button
            onClick={() => {}}
            className="w-full bg-white rounded-[16px] p-[20px] shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
          >
            <div className="flex items-center gap-[16px]">
              <div className="bg-[#f1f5f9] rounded-full p-[12px]">
                <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#126D62" strokeWidth="2" />
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="#126D62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="17" r="1" fill="#126D62" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#0f172a]">
                  Help & Support
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                  Get help and contact us
                </p>
              </div>
            </div>
            <div className="h-[12px] w-[7.4px]">
              <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
                <path d={svgPaths.p28c84800} fill="#94A3B8" opacity="0.4" />
              </svg>
            </div>
          </button>

          {/* About */}
          <button
            onClick={() => {}}
            className="w-full bg-white rounded-[16px] p-[20px] shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
          >
            <div className="flex items-center gap-[16px]">
              <div className="bg-[#f1f5f9] rounded-full p-[12px]">
                <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#126D62" strokeWidth="2" />
                  <line x1="12" y1="16" x2="12" y2="12" stroke="#126D62" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="8" r="1" fill="#126D62" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#0f172a]">
                  About Vault
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                  Version 1.0.0
                </p>
              </div>
            </div>
            <div className="h-[12px] w-[7.4px]">
              <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
                <path d={svgPaths.p28c84800} fill="#94A3B8" opacity="0.4" />
              </svg>
            </div>
          </button>
        </div>

        {/* Sign Out */}
        <div className="px-[16px] pb-[24px] mt-[24px]">
          <button className="w-full bg-white border-2 border-[#ef4444] rounded-[16px] py-[16px] hover:bg-[#fef2f2] transition-colors">
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#ef4444]">
              Sign Out
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}