import { useEffect, useState } from "react";

export default function ThemeToggle({ size = "small" }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark = storedTheme === "dark" || (!storedTheme && prefersDark);
    setIsDark(shouldUseDark);

    if (shouldUseDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const baseClasses = size === "large"
    ? "p-4 rounded-lg text-3xl"
    : "p-2 rounded-full text-xl";

  return (
    <button
      onClick={toggleTheme}
      className={`transition-all duration-300 shadow-md 
                  bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-300 
                  hover:scale-105 ${baseClasses}`}
      title="Toggle Theme"
    >
      {isDark ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 
            6.364l-1.414-1.414M6.05 6.05L4.636 
            4.636m0 14.728l1.414-1.414M17.95 
            6.05l1.414-1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      )}
    </button>
  );
}
