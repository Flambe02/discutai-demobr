import { ThemeId, themes, themeIds } from './themes';

export function isValidThemeId(id: string | null | undefined): id is ThemeId {
  if (!id) return false;
  return themeIds.includes(id as ThemeId);
}

export function getThemeFromQuery(searchParams: URLSearchParams): ThemeId | null {
  const themeParam = searchParams.get('theme');
  if (isValidThemeId(themeParam)) {
    return themeParam;
  }
  return null;
}

export function getThemeFromLocalStorage(): ThemeId | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem('theme');
    if (isValidThemeId(stored)) {
      return stored;
    }
  } catch (error) {
    console.error('Error reading theme from localStorage:', error);
  }

  return null;
}

export function setThemeInLocalStorage(themeId: ThemeId): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem('theme', themeId);
  } catch (error) {
    console.error('Error saving theme to localStorage:', error);
  }
}

export function getDefaultTheme(): ThemeId {
  return 'tprc';
}

export function resolveTheme(
  queryTheme: ThemeId | null,
  _localStorageTheme: ThemeId | null
): ThemeId {
  // Si pas de paramètre ?theme= dans l'URL, toujours afficher la page d'accueil TPRC
  // Le localStorage n'est plus utilisé pour éviter de tomber sur un thème de démo
  return queryTheme || getDefaultTheme();
}

export function getTheme(themeId: ThemeId) {
  return themes[themeId];
}
