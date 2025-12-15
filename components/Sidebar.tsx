
"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6">

      {/* Model Selector */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Model Selector
        </label>
        <select
          className="w-full border rounded px-3 py-2"
          aria-label="Model selector"
        >
          <option>GPT-3.5</option>
          <option>ChatGPT-4</option>
          <option>Custom</option>
        </select>
      </div>

      {/* Temperature */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Temperature
        </label>
        <input
          type="range"
          className="w-full"
          aria-label="Temperature"
        />
      </div>

      {/* Max Tokens */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Max Tokens
        </label>
        <input
          type="range"
          className="w-full"
          aria-label="Max tokens"
        />
      </div>

      {/* Theme Toggle */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Theme
        </label>
        <button
          onClick={toggleTheme}
          className="border rounded px-3 py-2 w-full"
          aria-label="Toggle theme"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

    </div>
  );
}

