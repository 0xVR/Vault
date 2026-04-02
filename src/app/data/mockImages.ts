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
export const cameraPreviewImage = assetUrl('f541a30f3d1b90c2056cbf467e70db360274ee5b.png');

export const mockImages: VaultImage[] = [
  {
    id: '1',
    url: assetUrl('89d3cfcfc340b39631fa07246e1466a73d1fdf15.png'),
    thumbnail: assetUrl('89d3cfcfc340b39631fa07246e1466a73d1fdf15.png'),
    title: 'Bistro Menu',
    date: 'Oct 26, 2024',
    tags: ['Menus'],
    extractedText: 'BISTRO MENU\nGrilled Cheese $8\nPesto Cheese $9\nBacon Apple Butter $10',
    detectedDate: 'October 26, 2024',
    aiContext: 'A bistro menu featuring various grilled cheese options with prices ranging from $8-10',
    category: 'menu',
  },
  {
    id: '2',
    url: assetUrl('8eead97ac7cb16ae1c359cdb379a7e8db194d4f3.png'),
    thumbnail: assetUrl('8eead97ac7cb16ae1c359cdb379a7e8db194d4f3.png'),
    title: 'Whiteboard Note',
    date: 'Oct 25, 2024',
    tags: ['Whiteboards'],
    extractedText: 'Project Timeline\nQ1 - Planning\nQ2 - Development\nQ3 - Testing\nQ4 - Launch',
    aiContext: 'A whiteboard showing a project timeline divided into quarters with different phases',
    category: 'whiteboard',
  },
  {
    id: '3',
    url: assetUrl('3902dfc790e7373799ef67d0823664012ebe0442.png'),
    thumbnail: assetUrl('3902dfc790e7373799ef67d0823664012ebe0442.png'),
    title: 'Weekly Schedule',
    date: 'Oct 24, 2024',
    tags: ['Schedules'],
    extractedText: 'Monday - Team Meeting 9AM\nWednesday - Client Call 2PM\nFriday - Review Session 4PM',
    aiContext: 'A weekly schedule showing meeting times throughout the week',
    category: 'schedule',
  },
  {
    id: '4',
    url: assetUrl('1546a8f93707b6f26a7c22202386fcad0f1082b0.png'),
    thumbnail: assetUrl('1546a8f93707b6f26a7c22202386fcad0f1082b0.png'),
    title: 'Bus Schedule',
    date: 'Oct 23, 2024',
    tags: ['Schedules', 'Transit'],
    extractedText: 'Line 42 - Downtown\nWeekdays: Every 15 min\nWeekends: Every 30 min',
    detectedDate: 'Valid until Dec 31, 2024',
    aiContext: 'A bus schedule for Line 42 showing frequency on weekdays and weekends',
    category: 'schedule',
  },
  {
    id: '5',
    url: assetUrl('82591d994a6a08529b86101a7b41de6c43774c02.png'),
    thumbnail: assetUrl('82591d994a6a08529b86101a7b41de6c43774c02.png'),
    title: 'Event Poster',
    date: 'Oct 22, 2024',
    tags: ['Events', 'Posters'],
    extractedText: 'SUMMER FESTIVAL\nJuly 15-17, 2024\nCity Park\nFree Admission',
    detectedDate: 'July 15-17, 2024',
    aiContext: 'An event poster for a summer festival happening in July at City Park with free admission',
    category: 'event',
  },
  {
    id: '6',
    url: assetUrl('efffb604142e67826b1bfd4bc231b31dabe4f067.png'),
    thumbnail: assetUrl('efffb604142e67826b1bfd4bc231b31dabe4f067.png'),
    title: 'Concert Ticket',
    date: 'Oct 21, 2024',
    tags: ['Events', 'Tickets'],
    extractedText: 'City Lights Festival\nGeneral Admission\nSEPT 20',
    detectedDate: 'September 20, 2024',
    aiContext: 'A concert ticket for City Lights Festival general admission on September 20th',
    category: 'event',
  },
  {
    id: '7',
    url: assetUrl('58f765ef7a259945fce5f139b500ecb2dffd0d02.png'),
    thumbnail: assetUrl('58f765ef7a259945fce5f139b500ecb2dffd0d02.png'),
    title: 'Restaurant Menu',
    date: 'Oct 20, 2024',
    tags: ['Menus', 'Food'],
    extractedText: 'Daily Specials\nPasta Primavera $14\nGrilled Salmon $18\nVeggie Burger $12',
    aiContext: 'A restaurant menu showing daily specials with prices',
    category: 'menu',
  },
  {
    id: '8',
    url: assetUrl('f00064cbe713520593b63ef267b5c6da185d6ca7.png'),
    thumbnail: assetUrl('f00064cbe713520593b63ef267b5c6da185d6ca7.png'),
    title: 'Lecture Notes',
    date: 'Oct 19, 2024',
    tags: ['Whiteboards', 'Education'],
    extractedText: "Physics 101\nNewton's Laws\n1. Inertia\n2. F=ma\n3. Action-Reaction",
    aiContext: "Lecture notes on Newton's Laws of Motion from a Physics class",
    category: 'whiteboard',
  },
  {
    id: '9',
    url: assetUrl('8abd9dad6b7c32f725d8492b2dafb41a8c0f0a75.png'),
    thumbnail: assetUrl('8abd9dad6b7c32f725d8492b2dafb41a8c0f0a75.png'),
    title: 'Transit Map',
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
    title: 'Job Posting',
    date: 'Oct 17, 2024',
    tags: ['Jobs', 'Opportunities'],
    extractedText: 'Now Hiring\nSoftware Engineer\nFull-time position\nApply at careers@company.com',
    aiContext: 'A job posting for a full-time software engineer position',
    category: 'job',
  },
  {
    id: '11',
    url: assetUrl('8831a3251c7151966ed7841810b871a6163ff556.png'),
    thumbnail: assetUrl('8831a3251c7151966ed7841810b871a6163ff556.png'),
    title: 'Spring Fling Event',
    date: 'Oct 16, 2024',
    tags: ['Events', 'Posters'],
    extractedText: 'Spring Fling\nWednesday, March 25, 2026\n12:30-1:30 pm | JKC Comfy\nFree pizza and a chance to connect',
    detectedDate: 'March 25, 2026',
    aiContext: 'An event poster for Spring Fling happening on March 25, 2026 with free pizza',
    category: 'event',
  },
  {
    id: '12',
    url: assetUrl('e703ec5596448e067220ce5991ecbb505ab56a63.png'),
    thumbnail: assetUrl('e703ec5596448e067220ce5991ecbb505ab56a63.png'),
    title: 'Coffee Menu',
    date: 'Oct 15, 2024',
    tags: ['Menus', 'Coffee'],
    extractedText: 'Coffee Menu\nEspresso $3\nCappuccino $4.50\nLatte $4.50\nMocha $5',
    aiContext: 'A coffee shop menu with espresso drinks and prices',
    category: 'menu',
  },
];

export function getImageById(id: string): VaultImage | undefined {
  return mockImages.find((img) => img.id === id);
}

/** Search page tab filters; same catalog as Vaults (`mockImages`). */
export type SearchTabFilter = 'All' | 'Images' | 'Schedules' | 'Stops';

/**
 * Vaults page chips (menus / schedules / events / whiteboards) use `category` only.
 * This is the single helper so counts stay aligned with that model.
 */
export function getVaultCatalogSlices(items: VaultImage[]) {
  return {
    all: items,
    menus: items.filter((img) => img.category === 'menu'),
    schedules: items.filter((img) => img.category === 'schedule'),
    events: items.filter((img) => img.category === 'event'),
    whiteboards: items.filter((img) => img.category === 'whiteboard'),
  } as const;
}

/**
 * Search tab rules (same `items` array as Vaults):
 * - **All** — full catalog (same as Vault “All”).
 * - **Schedules** — `category === 'schedule'` (same rows as Vault “Schedules” chip).
 * - **Images** — everything that is not a schedule capture: menus + events + whiteboards + job
 *   (`category !== 'schedule'`). Intentionally different from **All** so schedule-heavy items
 *   live under Schedules; **Images** stays different from **All**.
 * - **Stops** — transit / bus / metro signals (Search-only slice; no Vault chip equivalent).
 */
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

/** Pre-tab counts for Search labels; uses the same `filterVaultByTab` as the grid. */
export function getSearchTabCounts(items: VaultImage[]): Record<SearchTabFilter, number> {
  return {
    All: filterVaultByTab(items, 'All').length,
    Images: filterVaultByTab(items, 'Images').length,
    Schedules: filterVaultByTab(items, 'Schedules').length,
    Stops: filterVaultByTab(items, 'Stops').length,
  };
}

/** True if `query` matches any searchable field (empty query matches all). */
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
