const root = document.documentElement;
const THEME_KEY = "theme";

// Theme toggle
const themeButton = document.querySelector("[data-theme-toggle]");
const themeColor = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeColor.content = getComputedStyle(root).getPropertyValue("--color-label").trim();
  const next = theme === "dark" ? "light" : "dark";
  themeButton.setAttribute("aria-label", themeButton.dataset[`label${next === "dark" ? "Dark" : "Light"}`]);
}

applyTheme(root.dataset.theme);

themeButton.addEventListener("click", () => {
  const theme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {}
});

// Experience accordions
document.querySelectorAll(".exp").forEach((exp) => {
  const button = exp.querySelector(".toggle");
  const label = button.querySelector(".toggle__label");

  button.addEventListener("click", () => {
    const open = !exp.classList.contains("exp--open");
    exp.classList.toggle("exp--open", open);
    button.setAttribute("aria-expanded", String(open));
    label.textContent = open ? button.dataset.less : button.dataset.more;
  });
});

// Copy email, if not possible open mail app
document.querySelectorAll("[data-copy]").forEach((button) => {
  const text = button.querySelector(".mail__text");
  const original = text.textContent;
  let timeout;

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      text.textContent = button.dataset.copied;
    } catch {
      window.location.href = `mailto:${button.dataset.copy}`;
      return;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => (text.textContent = original), 1600);
  });
});
