// ThemeProvider.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { dark, light, Theme } from '../utils/theme';

type Mode = 'light' | 'dark' | 'system';
type Ctx = { theme: Theme; mode: Mode; setMode: (m: Mode)=>void; isDark: boolean };
const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({children}: {children: React.ReactNode}) {
  const system = useColorScheme(); // 'light' | 'dark' | null
  const [mode, setModeState] = useState<Mode>('system');

  useEffect(() => { (async () => {
    const saved = await AsyncStorage.getItem('@mode');
    if (saved === 'light' || saved === 'dark' || saved === 'system') setModeState(saved);
  })(); }, []);

  const setMode = async (m: Mode) => { setModeState(m); await AsyncStorage.setItem('@mode', m); };

  const isDark = mode === 'system' ? system === 'dark' : mode === 'dark';
  const theme = useMemo(() => (isDark ? dark : light), [isDark]);

  const value = useMemo(() => ({ theme, mode, setMode, isDark }), [theme, mode, isDark]);
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error('Wrap your app in <ThemeProvider/>');
  return ctx;
}
