// Mobile navigation, theme toggle, project popups, and footer year.
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const themeToggle = document.querySelector("#themeToggle");
const projectDialog = document.querySelector("#projectDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogDescription = document.querySelector("#dialogDescription");
const dialogTags = document.querySelector("#dialogTags");

const projectInfo = {
  portfolio: {
    title: "Personal Developer Portfolio",
    description: "A responsive portfolio that introduces the developer, displays skills and projects, offers a theme toggle, and provides contact links. Next step: add your real GitHub repository and deployed website URL.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive design"]
  },
  tasks: {
    title: "Task Tracker",
    description: "A small productivity app idea. Build it by allowing visitors to add a task, mark it complete, delete it, and optionally save tasks in localStorage.",
    tags: ["DOM manipulation", "Events", "CSS", "JavaScript"]
  },
  weather: {
    title: "Weather Dashboard",
    description: "A weather dashboard idea for practising API requests. A complete version should request weather data from a weather API, handle loading and error states, and show the selected city’s current conditions.",
    tags: ["Fetch API", "JSON", "Async JavaScript", "CSS"]
  }
};

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isLight = theme === "light";
  themeToggle.innerHTML = isLight ? "🌙 <span>Theme</span>" : "☀️ <span>Theme</span>";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  try { localStorage.setItem("portfolio-theme", theme); } catch (error) { /* Storage may be unavailable. */ }
}

let savedTheme = "dark";
try { savedTheme = localStorage.getItem("portfolio-theme") || "dark"; } catch (error) { /* Keep dark theme. */ }
setTheme(savedTheme);
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme || "dark";
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

document.querySelectorAll(".project-details").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projectInfo[button.dataset.project];
    if (!project) return;
    dialogTitle.textContent = project.title;
    dialogDescription.textContent = project.description;
    dialogTags.replaceChildren();
    project.tags.forEach((tag) => {
      const chip = document.createElement("span");
      chip.textContent = tag;
      dialogTags.append(chip);
    });
    projectDialog.showModal();
  });
});

document.querySelector("#dialogClose").addEventListener("click", () => projectDialog.close());
document.querySelector("#dialogDone").addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

document.querySelector("#year").textContent = new Date().getFullYear();
