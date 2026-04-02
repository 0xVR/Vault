import type { VaultImage } from '../data/mockImages';

interface VaultImageCardProps {
  image: VaultImage;
  onOpen: () => void;
}

/** Shared grid card for Vaults and Search — matches layout, typography, and tap behavior. */
export default function VaultImageCard({ image, onOpen }: VaultImageCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
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
  );
}
