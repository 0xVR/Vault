import { useState } from 'react';
import { useNavigate } from 'react-router';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

export default function NotificationSetupScreen() {
  const navigate = useNavigate();
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [reminderType, setReminderType] = useState<'days' | 'months' | 'years'>('months');
  const [reminderValue, setReminderValue] = useState(6);

  const handleSave = () => {
    navigate('/settings');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f8fafc]">
      <Header
        title="Notifications"
        rightAction={
          <button type="button" onClick={handleSave} className="text-[14px] font-semibold text-[#126d62]">
            Save
          </button>
        }
      />

      <div className="flex-1 overflow-y-auto pb-[120px]">
        <div className="mx-auto w-full max-w-[430px] space-y-[16px] p-[16px]">
          <div className="rounded-[16px] bg-white p-[20px] shadow-sm">
            <div className="mb-[16px] flex items-center justify-between gap-[16px]">
              <div>
                <h2 className="mb-[4px] font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-[#0f172a]">
                  Cleanup Reminders
                </h2>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">Get notified when images expire</p>
              </div>
              <button
                type="button"
                onClick={() => setReminderEnabled(!reminderEnabled)}
                className={`relative h-[31px] w-[51px] rounded-full transition-colors ${
                  reminderEnabled ? 'bg-[#126d62]' : 'bg-[#e2e8f0]'
                }`}
              >
                <div
                  className={`absolute top-[3px] h-[25px] w-[25px] rounded-full bg-white shadow-sm transition-transform ${
                    reminderEnabled ? 'translate-x-[23px]' : 'translate-x-[3px]'
                  }`}
                />
              </button>
            </div>
          </div>

          {reminderEnabled && (
            <>
              <div className="rounded-[16px] bg-white p-[20px] shadow-sm">
                <h3 className="mb-[16px] font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#0f172a]">
                  Remind me when image deadline passes:
                </h3>

                <div className="space-y-[12px]">
                  {[
                    { value: 7, type: 'days' as const, label: '7 days later' },
                    { value: 30, type: 'days' as const, label: '30 days later' },
                    { value: 3, type: 'months' as const, label: '3 months later' },
                    { value: 6, type: 'months' as const, label: '6 months later' },
                    { value: 1, type: 'years' as const, label: '1 year later' },
                  ].map((option) => {
                    const isSelected = reminderValue === option.value && reminderType === option.type;

                    return (
                      <button
                        key={`${option.value}-${option.type}`}
                        type="button"
                        onClick={() => {
                          setReminderValue(option.value);
                          setReminderType(option.type);
                        }}
                        className={`flex w-full items-center justify-between rounded-[12px] border-2 p-[16px] transition-colors ${
                          isSelected ? 'border-[#126d62] bg-[#f0f9f7]' : 'border-[#e2e8f0] bg-white'
                        }`}
                      >
                        <span className="font-['Inter:Medium',sans-serif] text-[14px] font-medium text-[#0f172a]">{option.label}</span>
                        <div
                          className={`flex size-[20px] items-center justify-center rounded-full border-2 ${
                            isSelected ? 'border-[#126d62]' : 'border-[#cbd5e1]'
                          }`}
                        >
                          {isSelected && <div className="size-[10px] rounded-full bg-[#126d62]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[16px] bg-white p-[20px] shadow-sm">
                <h3 className="mb-[12px] font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#0f172a]">
                  Custom Reminder
                </h3>
                <p className="mb-[16px] font-['Inter:Regular',sans-serif] text-[12px] text-[#64748b]">
                  Set a custom time for cleanup reminders
                </p>

                <div className="flex gap-[12px]">
                  <input
                    type="number"
                    min="1"
                    value={reminderValue}
                    onChange={(e) => setReminderValue(parseInt(e.target.value, 10) || 1)}
                    className="flex-1 rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] px-[16px] py-[12px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0f172a] outline-none focus:border-[#126d62]"
                  />
                  <select
                    value={reminderType}
                    onChange={(e) => setReminderType(e.target.value as 'days' | 'months' | 'years')}
                    className="rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] px-[16px] py-[12px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0f172a] outline-none focus:border-[#126d62]"
                  >
                    <option value="days">Days</option>
                    <option value="months">Months</option>
                    <option value="years">Years</option>
                  </select>
                </div>
              </div>

              <div className="rounded-[16px] border border-[#d1e7dd] bg-[#f0f9f7] p-[16px]">
                <div className="flex gap-[12px]">
                  <div className="shrink-0">
                    <svg className="h-[20px] w-[20px]" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="9" stroke="#126D62" strokeWidth="2" />
                      <path d="M10 6v4M10 14h.01" stroke="#126D62" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-[4px] font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#126d62]">
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

      <BottomNav />
    </div>
  );
}
