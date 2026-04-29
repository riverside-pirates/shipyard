/* =============================================================
   THE SHIPYARD — ACTIVITY DASHBOARD (app.js)
   =============================================================
   This file loads data from data.json and renders it into the
   HTML page. It uses plain JavaScript — no frameworks needed!

   How it works:
     1. When the page loads, we fetch data.json
     2. If the fetch fails, we use built-in sample data
     3. We call a render function for each section of the page
     4. Each render function takes data and creates HTML elements

   KEY CONCEPTS FOR STUDENTS:
     - fetch()        : loads data from a file or URL
     - async/await    : lets us wait for data before using it
     - template literals (`${}`) : build strings with variables
     - document.getElementById() : find elements on the page
     - innerHTML      : set the HTML content of an element
   ============================================================= */


/* -------------------------------------------------------------
   SAMPLE DATA
   This is used as a fallback if data.json hasn't been created
   yet. It also serves as documentation — you can see exactly
   what shape the data should be in.
   ------------------------------------------------------------- */
const SAMPLE_DATA = {
  bounties: [
    {
      id: 1,
      title: "Add a dark-mode toggle to the dashboard",
      description: "Let users switch between light and dark themes. Store the preference in localStorage.",
      difficulty: "beginner",
      createdAt: "2026-03-15",
      labels: ["enhancement", "good first issue"]
    },
    {
      id: 2,
      title: "Create a search/filter for bounties",
      description: "Add a text input that filters the bounty list as the user types.",
      difficulty: "intermediate",
      createdAt: "2026-03-20",
      labels: ["enhancement"]
    },
    {
      id: 3,
      title: "Build a contribution streak tracker",
      description: "Show each contributor's streak of consecutive weeks with at least one PR.",
      difficulty: "advanced",
      createdAt: "2026-03-25",
      labels: ["feature"]
    }
  ],

  recentShips: [
    {
      id: 101,
      title: "Fix typo in README welcome message",
      author: "Maria S.",
      mergedAt: "2026-03-27",
      prNumber: 42
    },
    {
      id: 102,
      title: "Add pirate-themed 404 page",
      author: "James T.",
      mergedAt: "2026-03-26",
      prNumber: 41
    },
    {
      id: 103,
      title: "Improve mobile navigation menu",
      author: "Anika R.",
      mergedAt: "2026-03-24",
      prNumber: 39
    }
  ],

  contributors: [
    { name: "Maria S.", contributions: 12, joinedAt: "2025-09-05" },
    { name: "James T.", contributions: 8, joinedAt: "2025-09-12" },
    { name: "Anika R.", contributions: 15, joinedAt: "2025-09-05" },
    { name: "Dev P.",   contributions: 5, joinedAt: "2025-10-01" },
    { name: "Sofia L.", contributions: 9, joinedAt: "2025-09-20" }
  ]
};


/* -------------------------------------------------------------
   MAIN: Load data and render the page
   This function runs when the page finishes loading.
   ------------------------------------------------------------- */
async function initDashboard() {
  // Try to load data.json; fall back to sample data if it fails
  const data = await loadData();

  // Render each section of the dashboard
  renderStats(data);
  renderRecentShips(data.recentShips);
  renderOpenBounties(data.bounties);
  renderContributors(data.contributors);
}


/* -------------------------------------------------------------
   LOAD DATA
   Fetches data.json from the same directory as this page.
   If the file is missing or there's a network error, we use
   the sample data so the dashboard still works.
   ------------------------------------------------------------- */
async function loadData() {
  try {
    const response = await fetch("data.json");

    // If the server returns an error status (like 404), throw
    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    // Log the error so developers can see what went wrong
    console.warn(
      "Could not load data.json — using sample data instead.",
      error.message
    );
    return SAMPLE_DATA;
  }
}


/* -------------------------------------------------------------
   RENDER: Summary Stats
   Counts up the totals and puts them in the stat cards at the
   top of the page.
   ------------------------------------------------------------- */
function renderStats(data) {
  const totalBounties = data.bounties.length;
  const totalContributors = data.contributors.length;
  const totalPRs = data.recentShips.length;

  // Find each stat element by its id and set the number
  document.getElementById("stat-bounties").textContent = totalBounties;
  document.getElementById("stat-contributors").textContent = totalContributors;
  document.getElementById("stat-prs").textContent = totalPRs;
}


/* -------------------------------------------------------------
   RENDER: Recent Ships (Merged PRs)
   Creates a card for each merged pull request and puts them
   into the #ships-list container.
   ------------------------------------------------------------- */
function renderRecentShips(ships) {
  const container = document.getElementById("ships-list");

  // If there are no ships, show a friendly message
  if (!ships || ships.length === 0) {
    container.innerHTML = '<p class="loading-message">No ships have sailed yet. Be the first!</p>';
    return;
  }

  // Build an HTML string for all the ship cards
  // We use .map() to transform each ship object into an HTML string,
  // then .join("") to combine them into one big string.
  const html = ships.map(function (ship) {
    return `
      <article class="card">
        <div class="card-title">
          ${escapeHtml(ship.title)}
          <span class="badge badge-merged">Merged</span>
        </div>
        <div class="card-meta">
          PR #${ship.prNumber} by ${escapeHtml(ship.author)} &mdash; ${formatDate(ship.mergedAt)}
        </div>
      </article>
    `;
  }).join("");

  container.innerHTML = html;
}


/* -------------------------------------------------------------
   RENDER: Open Bounties
   Creates a card for each bounty showing its title, description,
   difficulty badge, and when it was posted.
   ------------------------------------------------------------- */
function renderOpenBounties(bounties) {
  const container = document.getElementById("bounties-list");

  if (!bounties || bounties.length === 0) {
    container.innerHTML = '<p class="loading-message">No open bounties right now. Check back soon!</p>';
    return;
  }

  const html = bounties.map(function (bounty) {
    // Pick the right CSS class for the difficulty badge
    const badgeClass = getDifficultyBadgeClass(bounty.difficulty);

    return `
      <article class="card">
        <div class="card-title">
          ${escapeHtml(bounty.title)}
          <span class="badge ${badgeClass}">${escapeHtml(bounty.difficulty)}</span>
        </div>
        <div class="card-meta">Posted ${formatDate(bounty.createdAt)}</div>
        <div class="card-description">${escapeHtml(bounty.description)}</div>
      </article>
    `;
  }).join("");

  container.innerHTML = html;
}


/* -------------------------------------------------------------
   RENDER: Contributors
   Creates a small card for each contributor showing their name,
   total contributions, and when they joined.
   ------------------------------------------------------------- */
function renderContributors(contributors) {
  const container = document.getElementById("contributors-list");

  if (!contributors || contributors.length === 0) {
    container.innerHTML = '<p class="loading-message">No contributors yet. You could be the first!</p>';
    return;
  }

  // Sort contributors by number of contributions (highest first)
  const sorted = contributors.slice().sort(function (a, b) {
    return b.contributions - a.contributions;
  });

  const html = sorted.map(function (person) {
    // Pluralize "contribution" properly
    const label = person.contributions === 1 ? "contribution" : "contributions";

    return `
      <div class="contributor-card">
        <div class="contributor-name">${escapeHtml(person.name)}</div>
        <div class="contributor-contributions">${person.contributions} ${label}</div>
        <div class="contributor-joined">Joined ${formatDate(person.joinedAt)}</div>
      </div>
    `;
  }).join("");

  container.innerHTML = html;
}


/* =============================================================
   HELPER FUNCTIONS
   Small utilities used by the render functions above.
   ============================================================= */


/* -------------------------------------------------------------
   FORMAT DATE
   Takes a date string like "2026-03-27" and returns a
   friendlier format like "Mar 27, 2026".
   ------------------------------------------------------------- */
function formatDate(dateString) {
  // If no date is provided, return a placeholder
  if (!dateString) return "Unknown date";

  try {
    // Parse the date string into a Date object
    const date = new Date(dateString + "T00:00:00");

    // Use the built-in Intl formatter for a nice readable date
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });

  } catch (error) {
    // If the date is in a weird format, just return it as-is
    return dateString;
  }
}


/* -------------------------------------------------------------
   GET DIFFICULTY BADGE CLASS
   Returns the appropriate CSS class name for a difficulty level.
   ------------------------------------------------------------- */
function getDifficultyBadgeClass(difficulty) {
  switch ((difficulty || "").toLowerCase()) {
    case "beginner":     return "badge-beginner";
    case "intermediate": return "badge-intermediate";
    case "advanced":     return "badge-advanced";
    default:             return "badge-beginner";
  }
}


/* -------------------------------------------------------------
   ESCAPE HTML
   Prevents XSS (cross-site scripting) attacks by converting
   special characters into safe HTML entities.

   For example: <script> becomes &lt;script&gt;

   WHY THIS MATTERS: If someone puts HTML or JavaScript code
   in a bounty title, we don't want it to actually execute
   in the browser. This function makes it display as plain text.
   ------------------------------------------------------------- */
function escapeHtml(text) {
  if (typeof text !== "string") return "";

  const div = document.createElement("div");
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}


/* -------------------------------------------------------------
   SHOW ERROR
   If something goes seriously wrong, display an error message
   on the page so the user knows what happened.
   ------------------------------------------------------------- */
function showError(message) {
  // Find the main element and prepend the error at the top
  const main = document.querySelector("main");
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.setAttribute("role", "alert");
  errorDiv.textContent = message;
  main.insertBefore(errorDiv, main.firstChild);
}


/* -------------------------------------------------------------
   START THE DASHBOARD
   We wait for the DOM to be fully loaded before running our
   code. This ensures all the HTML elements exist before we
   try to find them with getElementById().
   ------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  initDashboard().catch(function (error) {
    console.error("Dashboard failed to initialize:", error);
    showError("Something went wrong loading the dashboard. Check the browser console for details.");
  });
});
