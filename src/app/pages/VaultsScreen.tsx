import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import VaultImageCard from '../components/VaultImageCard';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import SettingsGearButton from '../components/SettingsGearButton';
import { getVaultCatalogSlices } from '../data/mockImages';
import { useVaultCatalog } from '../hooks/useVaultCatalog';

export default function VaultsScreen() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { items } = useVaultCatalog();

  const vaults = useMemo(() => getVaultCatalogSlices(items), [items]);

  const requestedVault = searchParams.get('vault');
  const selectedVaultKey = requestedVault && requestedVault in vaults ? requestedVault : 'all';
  const [selectedVault, setSelectedVault] = useState<string>(selectedVaultKey);

  useEffect(() => {
    setSelectedVault(selectedVaultKey);
  }, [selectedVaultKey]);

  const handleSelectVault = (vaultKey: string) => {
    setSelectedVault(vaultKey);
    if (vaultKey === 'all') {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ vault: vaultKey }, { replace: true });
    }
  };

  const currentImages = vaults[selectedVault as keyof typeof vaults] || items;

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f8fafc]">
      <Header
        title="Vaults"
        onBack={() => navigate('/home')}
        className="relative z-10"
        rightAction={<SettingsGearButton />}
      />

      <div className="w-full border-b border-[#e2e8f0] bg-white px-[16px] py-[12px]">
        <div className="mx-auto flex max-w-[430px] gap-[8px] overflow-x-auto">
          {[
            { key: 'all', label: 'All', count: vaults.all.length },
            { key: 'menus', label: 'Menus', count: vaults.menus.length },
            { key: 'schedules', label: 'Schedules', count: vaults.schedules.length },
            { key: 'events', label: 'Events', count: vaults.events.length },
            { key: 'whiteboards', label: 'Whiteboards', count: vaults.whiteboards.length },
          ].map((vault) => (
            <button
              key={vault.key}
              type="button"
              onClick={() => handleSelectVault(vault.key)}
              className={`whitespace-nowrap rounded-[20px] px-[16px] py-[8px] ${
                selectedVault === vault.key ? 'bg-[#126d62] text-white' : 'bg-[#f1f5f9] text-[#64748b]'
              }`}
            >
              <span className="font-['Inter:Medium',sans-serif] text-[14px] font-medium">
                {vault.label} ({vault.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-[120px]">
        <div className="mx-auto grid max-w-[430px] grid-cols-2 gap-[16px] p-[16px]">
          {currentImages.map((image) => (
            <VaultImageCard key={image.id} image={image} onOpen={() => navigate(`/image/${image.id}`)} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
