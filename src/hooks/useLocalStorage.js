import { useEffect, useState } from "react";

function useLocalStorage(tag) {
  const [item, setItem] = useState(JSON.parse(localStorage.getItem(tag)) || []);

  const getStorageItem = () => {
    return JSON.parse(localStorage.getItem(tag));
  };

  const setStorageItem = (newItem) => {
    localStorage.setItem(tag, JSON.stringify(newItem));
    setItem(newItem);
  };

  const addItem = (newItem) => {
    const items = getStorageItem();
    const newArray = [...items, newItem];
    setStorageItem(newArray);
  };

  useEffect(() => {
    if (!getStorageItem()) {
      setStorageItem(item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag, item]);

  return {
    item,
    setItem,
    getStorageItem,
    setStorageItem,
    addItem,
  };
}

export { useLocalStorage };
