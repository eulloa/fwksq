import { useRef } from 'react';
import { getStorageItem, setStorageItem } from '../../helpers/storage';

const THEME = 'dark';

export default function ThemeToggle() {
  const inputRef = useRef<HTMLInputElement>(null);
  const intialTheme = getStorageItem(THEME);
  const checked: boolean | undefined =
    Boolean(intialTheme && intialTheme === 'on') || undefined;

  const handleClick = () => {
    // @ts-ignore: Object is possibly 'null'
    inputRef!.current.checked = !inputRef.current.checked;

    const appliedTheme = getStorageItem(THEME);
    const root = document.getElementsByTagName('html')[0];

    if (appliedTheme) {
      if (appliedTheme === 'off') {
        setStorageItem(THEME, 'on');
        root.classList.add(THEME);
      } else {
        setStorageItem(THEME, 'off');
        root.classList.remove(THEME);
      }
    } else {
      setStorageItem(THEME, 'on');
      root.classList.add(THEME);
    }
  };

  return (
    <button
      className="bg-gray-300 dark:bg-gray-400 rounded-lg relative w-10 h-5 theme-switch focus:outline-none"
      onClick={handleClick}
    >
      <input
        checked={checked}
        className="invisible w-full h-full"
        readOnly={true}
        ref={inputRef}
        type="checkbox"
      />
      <span className="absolute top-0 bottom-0 left-0 right-0" />
      <i className="sun absolute left-0">&#9728;</i>
      <i className="moon absolute right-0.5 -bottom-px">&#9790;</i>
    </button>
  );
}
