import { useEffect, useState, useCallback } from 'react';

const useDarkMode = () => {
  let [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      localStorage.setItem('darshansudhakar-theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('darshansudhakar-theme', 'light');
      setTheme('light');
    }
  }, [theme]);

  useEffect(() => {
    const localTheme = localStorage.getItem('darshansudhakar-theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
