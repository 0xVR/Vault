import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Header from '../components/Header';
import { cameraPreviewImage } from '../data/mockImages';

export default function AnnotateScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [notes, setNotes] = useState('');
  const [tags, setTags] = useState<string[]>(['Schedules', 'Menus', 'Whiteboards']);
  const [newTag, setNewTag] = useState('');

  const handleAddToVault = () => {
    navigate('/home');
  };

  const handleSkip = () => {
    navigate('/home');
  };

  const handleAddTag = () => {
    const trimmedTag = newTag.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f8fafa]">
      <Header
        title={id === 'new' ? 'Annotate Capture' : 'Annotate Image'}
        rightAction={
          <button type="button" onClick={handleSkip} className="text-[14px] font-medium text-[#126d62]">
            Skip
          </button>
        }
      />

      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="mx-auto flex w-full max-w-[430px] flex-1 flex-col">
          <div className="aspect-square w-full overflow-hidden bg-[#94a3b8]">
            <img src={cameraPreviewImage} alt="Captured preview" className="h-full w-full object-cover" />
          </div>

          <div className="px-[16px] pt-[16px]">
            <div className="rounded-[12px] bg-white p-[15px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add notes to help you find this later"
                className="min-h-[88px] w-full resize-none border-0 font-['Inter:Regular',sans-serif] text-[16px] text-[#0f172a] outline-none placeholder:text-[#aeaeae]"
              />
            </div>
          </div>

          <div className="px-[16px] pt-[16px]">
            <p className="mb-[12px] font-['Inter:Medium',sans-serif] text-[14px] font-medium text-[rgba(0,0,0,0.68)]">Tags</p>

            <div className="mb-[12px] flex flex-wrap gap-[8px]">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="flex items-center gap-[8px] rounded-[25px] bg-[#98a6a4] px-[16px] py-[8px]"
                >
                  <span className="text-center font-['Inter:Medium',sans-serif] text-[14px] font-medium text-white">{tag}</span>
                  <span className="text-[12px] text-white">&times;</span>
                </button>
              ))}
            </div>

            <div className="flex gap-[8px]">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                placeholder="Add new tag"
                className="flex-1 rounded-[25px] border border-[#e2e8f0] bg-[#f1f5f9] px-[16px] py-[8px] font-['Inter:Medium',sans-serif] text-[14px] text-[#334155] outline-none focus:border-[#126d62]"
              />
              <button
                type="button"
                onClick={handleAddTag}
                disabled={!newTag.trim()}
                className="rounded-[25px] bg-[#98a6a4] px-[20px] py-[8px] font-['Inter:Medium',sans-serif] text-[14px] font-medium text-white disabled:opacity-50"
              >
                Add
              </button>
            </div>
          </div>

          <div className="mt-auto px-[16px] pb-[32px] pt-[24px]">
            <button
              type="button"
              onClick={handleAddToVault}
              className="w-full rounded-[25px] bg-[#126d62] py-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
            >
              <span className="text-center font-['Inter:Medium',sans-serif] text-[14px] font-medium text-white">Add to Vault</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
