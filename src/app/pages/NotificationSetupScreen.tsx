import { useState } from 'react';
import { useNavigate } from 'react-router';
import BottomNav from '../components/BottomNav';
import svgPaths from '../../imports/svg-xcxhhmzk87';

export default function NotificationSetupScreen() {
  const navigate = useNavigate();
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [reminderType, setReminderType] = useState<'days' | 'months' | 'years'>('months');
  const [reminderValue, setReminderValue] = useState(6);

  const handleSave = () => {
    // In a real app, save settings
    navigate('/settings');
  };

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
              Notifications
            </h1>
          </div>
        </div>
        
        <button
          onClick={handleSave}
          className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#126d62]"
        >
          Save
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-[120px] w-full">
        <div className="p-[16px] space-y-[16px] max-w-[430px] mx-auto w-full">
          {/* Reminder Toggle */}
          <div className="bg-white rounded-[16px] p-[20px] shadow-sm">
            <div className="flex items-center justify-between mb-[16px]">
              <div>
                <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#0f172a] mb-[4px]">
                  Cleanup Reminders
                </h2>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                  Get notified when images expire
                </p>
              </div>
              <button
                onClick={() => setReminderEnabled(!reminderEnabled)}
                className={`relative w-[51px] h-[31px] rounded-full transition-colors ${
                  reminderEnabled ? 'bg-[#126d62]' : 'bg-[#e2e8f0]'
                }`}
              >
                <div
                  className={`absolute top-[3px] w-[25px] h-[25px] rounded-full bg-white shadow-sm transition-transform ${
                    reminderEnabled ? 'right-[3px]' : 'left-[3px]'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Reminder Settings */}
          {reminderEnabled && (
            <>
              <div className="bg-white rounded-[16px] p-[20px] shadow-sm">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a] mb-[16px]">
                  Remind me when image deadline passes:
                </h3>
                
                <div className="space-y-[12px]">
                  {[
                    { value: 7, type: 'days' as const, label: '7 days later' },
                    { value: 30, type: 'days' as const, label: '30 days later' },
                    { value: 3, type: 'months' as const, label: '3 months later' },
                    { value: 6, type: 'months' as const, label: '6 months later' },
                    { value: 1, type: 'years' as const, label: '1 year later' },
                  ].map((option) => (
                    <button
                      key={`${option.value}-${option.type}`}
                      onClick={() => {
                        setReminderValue(option.value);
                        setReminderType(option.type);
                      }}
                      className={`w-full flex items-center justify-between p-[16px] rounded-[12px] border-2 transition-colors ${
                        reminderValue === option.value && reminderType === option.type
                          ? 'border-[#126d62] bg-[#f0f9f7]'
                          : 'border-[#e2e8f0] bg-white'
                      }`}
                    >
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0f172a]">
                        {option.label}
                      </span>
                      <div
                        className={`size-[20px] rounded-full border-2 flex items-center justify-center ${
                          reminderValue === option.value && reminderType === option.type
                            ? 'border-[#126d62]'
                            : 'border-[#cbd5e1]'
                        }`}
                      >
                        {reminderValue === option.value && reminderType === option.type && (
                          <div className="size-[10px] rounded-full bg-[#126d62]" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Reminder */}
              <div className="bg-white rounded-[16px] p-[20px] shadow-sm">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a] mb-[12px]">
                  Custom Reminder
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#64748b] mb-[16px]">
                  Set a custom time for cleanup reminders
                </p>
                
                <div className="flex gap-[12px]">
                  <input
                    type="number"
                    min="1"
                    value={reminderValue}
                    onChange={(e) => setReminderValue(parseInt(e.target.value) || 1)}
                    className="flex-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] px-[16px] py-[12px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0f172a] outline-none focus:border-[#126d62]"
                  />
                  <select
                    value={reminderType}
                    onChange={(e) => setReminderType(e.target.value as 'days' | 'months' | 'years')}
                    className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] px-[16px] py-[12px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0f172a] outline-none focus:border-[#126d62]"
                  >
                    <option value="days">Days</option>
                    <option value="months">Months</option>
                    <option value="years">Years</option>
                  </select>
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-[#f0f9f7] border border-[#d1e7dd] rounded-[16px] p-[16px]">
                <div className="flex gap-[12px]">
                  <div className="shrink-0">
                    <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="9" stroke="#126D62" strokeWidth="2" />
                      <path d="M10 6v4M10 14h.01" stroke="#126D62" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#126d62] mb-[4px]">
                      About Cleanup Reminders
                    </h4>
                    <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#4f625f]">
                      You'll receive notifications to review images after their detected deadline or the time period you set. This helps keep your Vault organized and clutter-free.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}