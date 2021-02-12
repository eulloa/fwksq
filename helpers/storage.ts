export const getStorageItem = (item: string): string | null => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(item);
  }

  return null;
};

export const setStorageItem = (item: string, value: string): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(item, value);
  }
};
