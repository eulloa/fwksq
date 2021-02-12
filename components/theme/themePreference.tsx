import { useEffect } from 'react';
import { getStorageItem } from '../../helpers/storage';

const THEME = 'dark';

export default function ThemePreference() {
  useEffect(() => {
    const root = document.getElementsByTagName('html')[0];
    const theme = getStorageItem(THEME);

    if (theme && theme === 'on') {
      root.classList.add(THEME);
    }
  }, []);

  return null;
}
