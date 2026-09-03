document.getElementById("year").textContent = new Date().getFullYear();

const GITHUB_USERNAME = "isabela256";

// --- Theme toggle ---
const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

toggleBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

// --- Live GitHub activity ---
async function loadRecentRepos() {
  const list = document.getElementById("repo-list");
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`
    );
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
    const repos = await res.json();

    if (!repos.length) {
      list.innerHTML = `<li class="repo-error">No public repositories yet.</li>`;
      return;
    }

    list.innerHTML = repos
      .filter((r) => !r.fork)
      .map(
        (r) => `
        <li>
          <a href="${r.html_url}" target="_blank" rel="noopener">${r.name}</a>
          <div class="repo-desc">${r.description ? r.description : "No description"} · updated ${new Date(
            r.updated_at
          ).toLocaleDateString()}</div>
        </li>`
      )
      .join("");
  } catch (err) {
    list.innerHTML = `<li class="repo-error">Couldn't load GitHub activity right now. <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" rel="noopener">View on GitHub →</a></li>`;
  }
}

loadRecentRepos();
