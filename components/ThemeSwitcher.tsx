"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

function ThemeSwitcher() {

    const {theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])
    
    if (!mounted) return null;
  return (
    
    <Tabs>
        <TabsList>
            <TabsTrigger value='light' onClick={() => setTheme("light")}>
                <SunIcon />
            </TabsTrigger>
            <TabsTrigger value='dark' onClick={() => setTheme("dark")}>
                <MoonIcon />
            </TabsTrigger>
            <TabsTrigger value='system' onClick={() => setTheme("system")}>
                <DesktopIcon />
            </TabsTrigger>
        </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher