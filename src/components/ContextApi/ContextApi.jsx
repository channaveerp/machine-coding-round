import React, { createContext, useState } from 'react';

export const contextTheme = createContext();

export const ThemeProvider = () => {
  const [theme, setTheme] = useState('light');

  const handletheme = () => {
    setTheme(() => (theme === 'light' ? 'dark' : 'light'));
  };
  console.log('theme,', theme);

  return (
    <contextTheme.Provider value={{ theme }}>
      <div style={{ background: theme === 'light' ? 'red' : 'blue' }}>
        theme
      </div>
      <button onClick={handletheme}>themeChange</button>
    </contextTheme.Provider>
  );
};
