import { useState } from "react"

export const ThemeSelector = () => {
  const [theme, setTheme] = useState('light');
  
  const onHandleTheme = () => {
    document.querySelector('html')?.classList.toggle('dark')
    if(theme === 'light') setTheme('dark');
    if(theme === 'dark') setTheme('light');
  };
  
  return (
    <button
      onClick={onHandleTheme}
      className="h-8 w-8 flex cursor-default items-center justify-center rounded-md hover:bg-zinc-100 transition-colors border shadow hover:shadow-sm dark:border-neutral-600 dark:hover:bg-neutral-700"
      aria-label="Theme palette button switcher"
    >
      {
        theme === 'light' ? <SunIcon /> : <MoonIcon  />
      }

    </button>
  )
}

const SunIcon = () => {
  return (
    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"></path>
      <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"></circle>
    </svg>
  )
}

const MoonIcon = () => {
  return (
    <svg
    className="size-4"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
  )
}