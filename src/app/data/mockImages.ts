export interface VaultImage {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  date: string;
  tags: string[];
  extractedText: string;
  detectedDate?: string;
  aiContext: string;
  category: string;
}

export const assetUrl = (fileName: string) => new URL(`../../assets/${fileName}`, import.meta.url).href;
export const cameraPreviewImage = assetUrl('efffb604142e67826b1bfd4bc231b31dabe4f067.png');

export const mockImages: VaultImage[] = [
  {
    id: '1',
    url: assetUrl('89d3cfcfc340b39631fa07246e1466a73d1fdf15.png'),
    thumbnail: assetUrl('89d3cfcfc340b39631fa07246e1466a73d1fdf15.png'),
    title: 'Coffee Counter Menu',
    date: 'Oct 26, 2024',
    tags: ['Menus'],
    extractedText: 'Coffee 101\nPick Up Your Take Out Here\nSandwiches\nSalads',
    aiContext: 'A coffee shop wall menu with drinks, sandwiches, and pickup instructions.',
    category: 'menu',
  },
  {
    id: '2',
    url: assetUrl('8eead97ac7cb16ae1c359cdb379a7e8db194d4f3.png'),
    thumbnail: assetUrl('8eead97ac7cb16ae1c359cdb379a7e8db194d4f3.png'),
    title: 'Project Whiteboard',
    date: 'Oct 25, 2024',
    tags: ['Whiteboards'],
    extractedText: 'Sketches\nFlow lines\nNotes and planning marks',
    aiContext: 'A whiteboard covered with project sketches, notes, and flow diagrams.',
    category: 'whiteboard',
  },
  {
    id: '3',
    url: assetUrl('3902dfc790e7373799ef67d0823664012ebe0442.png'),
    thumbnail: assetUrl('3902dfc790e7373799ef67d0823664012ebe0442.png'),
    title: 'Wall Calendar',
    date: 'Oct 24, 2024',
    tags: ['Schedules'],
    extractedText: 'Monthly calendar grid with marked dates',
    aiContext: 'A wall calendar showing a month view for upcoming dates and appointments.',
    category: 'schedule',
  },
  {
    id: '4',
    url: assetUrl('58f765ef7a259945fce5f139b500ecb2dffd0d02.png'),
    thumbnail: assetUrl('58f765ef7a259945fce5f139b500ecb2dffd0d02.png'),
    title: 'Transit Departure Board',
    date: 'Oct 23, 2024',
    tags: ['Schedules', 'Transit'],
    extractedText: 'Transit times and platform listings on a station departure board',
    detectedDate: 'Valid until Dec 31, 2024',
    aiContext: 'A public transit departure board at a station showing upcoming routes and times.',
    category: 'schedule',
  },
  {
    id: '5',
    url: assetUrl('8831a3251c7151966ed7841810b871a6163ff556.png'),
    thumbnail: assetUrl('8831a3251c7151966ed7841810b871a6163ff556.png'),
    title: 'Spring Fling Poster',
    date: 'Oct 22, 2024',
    tags: ['Events', 'Posters'],
    extractedText: 'Spring Fling\nWednesday, March 25, 2026\n12:30-1:30 pm | JKC Comfy\nFree pizza',
    detectedDate: 'March 25, 2026',
    aiContext: 'An event flyer for Spring Fling with date, time, and location details.',
    category: 'event',
  },
  {
    id: '6',
    url: assetUrl('e703ec5596448e067220ce5991ecbb505ab56a63.png'),
    thumbnail: assetUrl('e703ec5596448e067220ce5991ecbb505ab56a63.png'),
    title: 'Jazz Concert Ticket',
    date: 'Oct 21, 2024',
    tags: ['Events', 'Tickets'],
    extractedText: 'End of Term Jazz Concert\nFeaturing ...\nThe Bomber\nSaturday 8:00 PM',
    detectedDate: 'Saturday 8:00 PM',
    aiContext: 'A printed concert ticket or poster for an end-of-term jazz concert.',
    category: 'event',
  },
  {
    id: '7',
    url: assetUrl('efffb604142e67826b1bfd4bc231b31dabe4f067.png'),
    thumbnail: assetUrl('efffb604142e67826b1bfd4bc231b31dabe4f067.png'),
    title: 'Cafe Chalkboard Menu',
    date: 'Oct 20, 2024',
    tags: ['Menus', 'Food'],
    extractedText: 'Food + Maple\nPlease pay in store',
    aiContext: 'A handwritten chalkboard cafe menu listing sandwiches, soups, and specials.',
    category: 'menu',
  },
  {
    id: '8',
    url: assetUrl('1546a8f93707b6f26a7c22202386fcad0f1082b0.png'),
    thumbnail: assetUrl('1546a8f93707b6f26a7c22202386fcad0f1082b0.png'),
    title: 'Bulletin Board Schedule',
    date: 'Oct 19, 2024',
    tags: ['Schedules', 'Notices'],
    extractedText: 'Printed notices and schedules pinned to a public bulletin board',
    aiContext: 'A bulletin board with printed schedules, notices, and reference sheets.',
    category: 'schedule',
  },
  {
    id: '9',
    url: assetUrl('8abd9dad6b7c32f725d8492b2dafb41a8c0f0a75.png'),
    thumbnail: assetUrl('8abd9dad6b7c32f725d8492b2dafb41a8c0f0a75.png'),
    title: 'Metro Line Map',
    date: 'Oct 18, 2024',
    tags: ['Schedules', 'Transit', 'Maps'],
    extractedText: 'Metro Line Map\nRed Line - North/South\nBlue Line - East/West\nGreen Line - Circular',
    aiContext: 'A transit map showing metro lines in different colors and directions',
    category: 'schedule',
  },
  {
    id: '10',
    url: assetUrl('9321f2f5306926b0b91ed0bb27b2fdfe8ad95172.png'),
    thumbnail: assetUrl('9321f2f5306926b0b91ed0bb27b2fdfe8ad95172.png'),
    title: 'Competition Poster',
    date: 'Oct 17, 2024',
    tags: ['Events', 'Posters'],
    extractedText: '2026 Waterloo Competition\nEvent branding and date details',
    aiContext: 'A printed poster promoting the Waterloo Competition event.',
    category: 'event',
  },
  {
    id: '11',
    url: assetUrl('82591d994a6a08529b86101a7b41de6c43774c02.png'),
    thumbnail: assetUrl('82591d994a6a08529b86101a7b41de6c43774c02.png'),
    title: 'Framed Menu Board',
    date: 'Oct 16, 2024',
    tags: ['Menus'],
    extractedText: 'Menu board with listed dishes and prices',
    aiContext: 'A framed restaurant menu displayed on a dark green wall.',
    category: 'menu',
  },
  {
    id: '12',
    url: assetUrl('f00064cbe713520593b63ef267b5c6da185d6ca7.png'),
    thumbnail: assetUrl('f00064cbe713520593b63ef267b5c6da185d6ca7.png'),
    title: 'Transit Route Board',
    date: 'Oct 15, 2024',
    tags: ['Schedules', 'Transit', 'Maps'],
    extractedText: 'Transit route map and stop information board',
    aiContext: 'A route board showing transit lines, maps, and stop information.',
    category: 'schedule',
  },
];

export function getImageById(id: string): VaultImage | undefined {
  return mockImages.find((img) => img.id === id);
}

export type SearchTabFilter = 'All' | 'Images' | 'Schedules' | 'Stops';

export function getVaultCatalogSlices(items: VaultImage[]) {
  return {
    all: items,
    menus: items.filter((img) => img.category === 'menu'),
    schedules: items.filter((img) => img.category === 'schedule'),
    events: items.filter((img) => img.category === 'event'),
    whiteboards: items.filter((img) => img.category === 'whiteboard'),
  } as const;
}

export function filterVaultByTab(items: VaultImage[], tab: SearchTabFilter): VaultImage[] {
  switch (tab) {
    case 'All':
      return items;
    case 'Images':
      return items.filter((img) => img.category !== 'schedule');
    case 'Schedules':
      return items.filter((img) => img.category === 'schedule');
    case 'Stops':
      return items.filter((img) => {
        const hay = [
          img.title,
          img.extractedText,
          img.aiContext,
          ...img.tags,
        ]
          .join(' ')
          .toLowerCase();
        return hay.includes('transit') || hay.includes('bus ') || hay.includes('metro');
      });
    default:
      return items;
  }
}

export function getSearchTabCounts(items: VaultImage[]): Record<SearchTabFilter, number> {
  return {
    All: filterVaultByTab(items, 'All').length,
    Images: filterVaultByTab(items, 'Images').length,
    Schedules: filterVaultByTab(items, 'Schedules').length,
    Stops: filterVaultByTab(items, 'Stops').length,
  };
}

export function matchesVaultSearch(img: VaultImage, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    img.title.toLowerCase().includes(q) ||
    img.tags.some((tag) => tag.toLowerCase().includes(q)) ||
    img.extractedText.toLowerCase().includes(q) ||
    img.aiContext.toLowerCase().includes(q) ||
    img.category.toLowerCase().includes(q) ||
    (img.detectedDate?.toLowerCase().includes(q) ?? false)
  );
}

export function searchImages(query: string): VaultImage[] {
  return mockImages.filter((img) => matchesVaultSearch(img, query));
}
