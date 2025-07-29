const nav = document.getElementById("primary-navigation");
const toggle = document.querySelector(".mobile-nav-toggle");

toggle.addEventListener("click", () => {
  const isVisible = nav.getAttribute("data-visible") === "true";
  nav.setAttribute("data-visible", !isVisible);
  toggle.setAttribute("aria-expanded", !isVisible);

  document.body.classList.toggle("menu-open", !isVisible);
});

document.querySelectorAll(".accordian-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".accordian-item");
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".accordian-toggle").forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      btn.closest(".accordian-item").classList.remove("open");
    });
    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
      item.classList.add("open");
    }
  });
});

const playBtn = document.getElementById("playBtn");
const pipPlayer = document.getElementById("pipPlayer");
const youtubeFrame = document.getElementById("youtubeFrame");
const closeBtn = document.getElementById("closeBtn");

const videoUrl = "https://www.youtube.com/embed/D0UnqGm_miA?autoplay=1";

playBtn.addEventListener("click", () => {
  youtubeFrame.src = videoUrl;
  pipPlayer.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  youtubeFrame.src = "";
  pipPlayer.classList.add("hidden");
});

const navLinks = document.querySelectorAll(".nav-list a");
const sections = document.querySelectorAll("section");
console.log(navLinks);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => observer.observe(section));
