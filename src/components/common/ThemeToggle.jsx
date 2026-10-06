import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="
        group relative flex h-10 min-w-[108px] items-center
        rounded-full border px-1.5
        transition-all duration-300
      "
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      <motion.span
        layout
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 32,
        }}
        className="
          absolute h-7 w-7 rounded-full
        "
        style={{
          left: isDark ? "calc(100% - 34px)" : "6px",
          background: isDark
            ? "linear-gradient(135deg,#164e63,#7c3aed)"
            : "linear-gradient(135deg,#fde047,#fb923c)",
        }}
      />

      <div className="relative z-10 flex w-full items-center justify-between px-1">
        <Sun
          size={15}
          className={
            isDark
              ? "text-text-subtle"
              : "text-amber-600"
          }
        />

        <span
          className="mx-1 text-[10px] font-semibold"
          style={{ color: "var(--text-secondary)" }}
        >
          {isDark ? "Dark" : "Light"}
        </span>

        <Moon
          size={14}
          className={
            isDark
              ? "text-brand-300"
              : "text-text-subtle"
          }
        />
      </div>
    </button>
  );
}

export default ThemeToggle;