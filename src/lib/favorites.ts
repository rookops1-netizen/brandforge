import { SavedFavorite } from '@/types';

const FAVORITES_KEY = 'brandforge_favorites';

export function getFavorites(): SavedFavorite[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveFavorite(favorite: SavedFavorite): void {
  const favorites = getFavorites();
  if (!favorites.find((f) => f.name === favorite.name)) {
    favorites.push(favorite);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function removeFavorite(name: string): void {
  const favorites = getFavorites().filter((f) => f.name !== name);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function isFavorite(name: string): boolean {
  return getFavorites().some((f) => f.name === name);
}

export function toggleFavorite(
  name: string,
  meaning: string,
  style: string,
  industry: string
): boolean {
  if (isFavorite(name)) {
    removeFavorite(name);
    return false;
  } else {
    saveFavorite({
      id: crypto.randomUUID(),
      name,
      meaning,
      style,
      industry,
      savedAt: new Date().toISOString(),
    });
    return true;
  }
}