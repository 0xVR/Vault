import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Frame5 from '../../imports/Frame5';
import svgPaths from '../../imports/svg-05ntm7f1ec';

export default function AnnotateScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [notes, setNotes] = useState('');
  const [tags, setTags] = useState<string[]>(['Schedules', 'Menus', 'Whiteboards']);
  const [newTag, setNewTag] = useState('');

  const handleAddToVault = () => {
    // In a real app, this would save the image with notes and tags
    navigate('/home');
  };

  const handleSkip = () => {
    // Skip annotation and go straight to home
    navigate('/home');
  };

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="bg-[#f8fafa] min-h-screen w-full flex flex-col">
      {/* Header */}
      <div className="bg-white flex items-center justify-between pb-[9px] pt-[16px] px-[16px] w-full border-b border-[rgba(18,109,98,0.1)] relative z-10">
        <div aria-hidden="true" className="absolute border-[rgba(18,109,98,0.1)] border-b border-solid inset-0 pointer-events-none" />
        
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
              Annotate
            </h1>
          </div>
        </div>
        
        <button
          onClick={handleSkip}
          className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#126d62]"
        >
          Skip
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full overflow-y-auto">
        <div className="w-full max-w-[430px] mx-auto flex flex-col flex-1">
          {/* Image Preview */}
          <div className="w-full aspect-square bg-[#94a3b8] flex items-center justify-center">
            <div className="text-white text-center">
              <div className="mb-[16px]">
                <svg className="w-[64px] h-[64px] mx-auto" fill="none" viewBox="0 0 64 64">
                  <rect x="8" y="8" width="48" height="48" rx="4" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="24" cy="24" r="4" fill="white" />
                  <path d="M8 48L24 32L40 48M32 40L48 24L56 32V56H8V48" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <p className="font-['Inter:Medium',sans-serif] text-[16px]">Captured Image</p>
            </div>
          </div>

          {/* Notes Input */}
          <div className="px-[16px] pt-[16px]">
            <div className="bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[15px]">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add notes..."
                className="w-full h-[55px] font-['Inter:Regular',sans-serif] text-[16px] text-[#0f172a] placeholder:text-[#aeaeae] border-0 outline-none resize-none"
              />
            </div>
          </div>

          {/* Tags Section */}
          <div className="px-[16px] pt-[16px]">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.68)] mb-[12px]">
              Tags
            </p>
            
            <div className="flex flex-wrap gap-[8px] mb-[12px]">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleRemoveTag(tag)}
                  className="bg-[#98a6a4] rounded-[25px] px-[16px] py-[8px] flex items-center gap-[8px]"
                >
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-center text-white">
                    {tag}
                  </span>
                  <span className="text-white text-[12px]">×</span>
                </button>
              ))}
            </div>

            {/* Add New Tag */}
            <div className="flex gap-[8px]">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                placeholder="Add new tag"
                className="flex-1 bg-[#f1f5f9] border border-[#e2e8f0] rounded-[25px] px-[16px] py-[8px] font-['Inter:Medium',sans-serif] text-[14px] text-[#334155] outline-none focus:border-[#126d62]"
              />
              <button
                onClick={handleAddTag}
                disabled={!newTag.trim()}
                className="bg-[#98a6a4] rounded-[25px] px-[20px] py-[8px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white disabled:opacity-50"
              >
                Add
              </button>
            </div>
          </div>

          {/* Add to Vault Button */}
          <div className="mt-auto px-[16px] pb-[32px] pt-[24px]">
            <button
              onClick={handleAddToVault}
              className="w-full bg-[#126d62] rounded-[25px] py-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
            >
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-center text-white">
                Add to Vault
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}