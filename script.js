const projectCards = document.querySelectorAll("[data-project-card]");

projectCards.forEach((card) => {
  const toggle = card.querySelector(".project-toggle");
  const detail = card.querySelector(".project-detail");

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    projectCards.forEach((otherCard) => {
      const otherToggle = otherCard.querySelector(".project-toggle");
      const otherDetail = otherCard.querySelector(".project-detail");
      const shouldCollapse = otherCard !== card || isExpanded;

      if (shouldCollapse) {
        otherToggle.setAttribute("aria-expanded", "false");
        otherDetail.hidden = true;
        otherCard.classList.remove("is-open");
        otherToggle.querySelector("span").textContent = "View More";
      }
    });

    if (!isExpanded) {
      toggle.setAttribute("aria-expanded", "true");
      detail.hidden = false;
      card.classList.add("is-open");
      toggle.querySelector("span").textContent = "View";
    }
  });
});
