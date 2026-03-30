import { useState } from 'react';
import { useNavigate } from 'react-router';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

type SettingsCardId = 'storage' | 'support' | 'about';

export default function SettingsScreen() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState<SettingsCardId | null>('storage');

  const toggleCard = (cardId: SettingsCardId) => {
    setExpandedCard((current) => (current === cardId ? null : cardId));
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f8fafc]">
      <Header title="Settings" />

      <div className="flex-1 overflow-y-auto pb-[120px]">
        <div className="mx-auto w-full max-w-[430px] border-b border-[#e2e8f0] bg-white p-[24px]">
          <div className="flex items-center gap-[16px]">
            <div className="flex size-[64px] items-center justify-center rounded-full bg-[#126d62]">
              <svg className="h-[32px] w-[32px]" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="12" r="5" stroke="white" strokeWidth="2" fill="none" />
                <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="mb-[4px] font-['Inter:Bold',sans-serif] text-[18px] font-bold text-[#0f172a]">John Doe</h2>
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">john.doe@example.com</p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[430px] space-y-[8px] p-[16px]">
          <button
            type="button"
            onClick={() => navigate('/notifications')}
            className="flex w-full items-center justify-between rounded-[16px] bg-white p-[20px] text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-[16px]">
              <div className="rounded-full bg-[#f1f5f9] p-[12px]">
                <svg className="h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 01-3.46 0"
                    stroke="#126D62"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-[#0f172a]">Notification Settings</h3>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">Manage cleanup reminders</p>
              </div>
            </div>
            <span className="text-[20px] leading-none text-[#94A3B8]">{'>'}</span>
          </button>

          <button
            type="button"
            onClick={() => toggleCard('storage')}
            className="flex w-full items-center justify-between rounded-[16px] bg-white p-[20px] text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-[16px]">
              <div className="rounded-full bg-[#f1f5f9] p-[12px]">
                <svg className="h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24">
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
              <div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-[#0f172a]">Vault Storage Info</h3>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">12.4 GB used of 50 GB</p>
              </div>
            </div>
            <span className="text-[20px] leading-none text-[#94A3B8]">{expandedCard === 'storage' ? '-' : '+'}</span>
          </button>
          {expandedCard === 'storage' && (
            <div className="rounded-[16px] border border-[#e2e8f0] bg-white px-[20px] py-[16px] text-left">
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                Your prototype vault is using 24.8% of available storage. Review older captures regularly to keep search fast and cleanup reminders useful.
              </p>
              <button type="button" onClick={() => navigate('/vaults')} className="mt-[12px] text-[14px] font-medium text-[#126d62]">
                Open Vaults
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={() => toggleCard('support')}
            className="flex w-full items-center justify-between rounded-[16px] bg-white p-[20px] text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-[16px]">
              <div className="rounded-full bg-[#f1f5f9] p-[12px]">
                <svg className="h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#126D62" strokeWidth="2" />
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="#126D62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="17" r="1" fill="#126D62" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-[#0f172a]">Help & Support</h3>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">Get help and contact us</p>
              </div>
            </div>
            <span className="text-[20px] leading-none text-[#94A3B8]">{expandedCard === 'support' ? '-' : '+'}</span>
          </button>
          {expandedCard === 'support' && (
            <div className="rounded-[16px] border border-[#e2e8f0] bg-white px-[20px] py-[16px] text-left">
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                Need help finding something? Use Search for text, dates, and tags, then adjust your notification settings if you want reminders for older captures.
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={() => toggleCard('about')}
            className="flex w-full items-center justify-between rounded-[16px] bg-white p-[20px] text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-[16px]">
              <div className="rounded-full bg-[#f1f5f9] p-[12px]">
                <svg className="h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#126D62" strokeWidth="2" />
                  <line x1="12" y1="16" x2="12" y2="12" stroke="#126D62" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="8" r="1" fill="#126D62" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-[#0f172a]">About Vault</h3>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">Version 1.0.0</p>
              </div>
            </div>
            <span className="text-[20px] leading-none text-[#94A3B8]">{expandedCard === 'about' ? '-' : '+'}</span>
          </button>
          {expandedCard === 'about' && (
            <div className="rounded-[16px] border border-[#e2e8f0] bg-white px-[20px] py-[16px] text-left">
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                Vault captures posters, schedules, menus, and notes, then helps you organize them with search, annotations, and cleanup reminders.
              </p>
            </div>
          )}
        </div>

        <div className="mx-auto mt-[24px] w-full max-w-[430px] px-[16px] pb-[24px]">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full rounded-[16px] border-2 border-[#ef4444] bg-white py-[16px] transition-colors hover:bg-[#fef2f2]"
          >
            <span className="font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-[#ef4444]">Sign Out</span>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
