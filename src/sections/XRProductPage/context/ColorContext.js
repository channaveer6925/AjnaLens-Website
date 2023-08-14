import { useState } from 'react';
import { createContext } from 'react';

export const ColorContext = createContext({});

export const ColorContextProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState({
    color: '#9BB5CE',
    text: 'Sierra Blue',
    rgbColor: '155, 181, 206',
  });

  let changeColorContext = (colorObj) => {
    setCurrentColor(colorObj);
  };

  return <ColorContext.Provider value={{ currentColor, changeColorContext }}>{children}</ColorContext.Provider>;
};
