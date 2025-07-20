const nav = document.getElementById("primary-navigation");
const toggle = document.querySelector(".mobile-nav-toggle");

toggle.addEventListener("click", () => {
  const isVisible = nav.getAttribute("data-visible") === "true";
  nav.setAttribute("data-visible", !isVisible);
  toggle.setAttribute("aria-expanded", !isVisible);
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
