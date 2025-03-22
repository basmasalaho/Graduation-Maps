import { createContext, useState, useContext, useEffect } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
   const [gameQuery, setGameQuery] = useState({
    platform: null,
    genre: null,
    sortOrder: '',
  
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const setGenre = (genre) => {
    setGameQuery(prev => ({ ...prev, genre }));
    setIsSidebarOpen(false);
  };

  const setPlatform = (platform) => {
    setGameQuery(prev => ({ ...prev, platform }));
  };

  const setSortOrder = (sortOrder) => {
    setGameQuery(prev => ({ ...prev, sortOrder }));
  };

  return (
    <GameContext.Provider value={{
    
      gameQuery,
      isSidebarOpen,
      toggleSidebar,
      setGenre,
      setPlatform,
      setSortOrder
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};