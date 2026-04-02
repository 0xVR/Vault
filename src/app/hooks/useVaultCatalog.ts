import { useMemo } from 'react';
import { mockImages, type VaultImage } from '../data/mockImages';

/**
 * Single catalog source for Home search preview, Vaults grid, and Search screen.
 * Swap `mockImages` for an API fetch later without changing consumers.
 */
export function useVaultCatalog(): {
  items: VaultImage[];
  isLoading: boolean;
  error: string | null;
} {
  return useMemo(() => {
    try {
      return { items: mockImages, isLoading: false, error: null };
    } catch {
      return { items: [], isLoading: false, error: 'Could not load your Vault.' };
    }
  }, []);
}
