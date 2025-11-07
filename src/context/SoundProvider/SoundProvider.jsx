'use client';

import React, { createContext, useContext, useState } from 'react';

const SoundContext = createContext(null);

export function useSoundContext() {
  return useContext(SoundContext);
}

function SoundProvider({ children }) {
  const [isSoundOn, setIsSoundOn] = useState(true);

  function toggleSound() {
    setIsSoundOn(currentValue => !currentValue);
  }

  const value = {isSoundOn, toggleSound};
  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export default SoundProvider;
