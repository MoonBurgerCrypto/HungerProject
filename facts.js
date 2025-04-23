const rotatingFacts = [
  "Over 9 million people die from hunger each year.",
  "Wasting affects over 45 million children globally.",
  "Food waste contributes to nearly 1/3 of all food produced.",
  "Conflict is the biggest driver of hunger worldwide.",
  "Hunger kills more people annually than AIDS, malaria, and TB combined.",
  "Hunger makes it harder for kids to focus in school.",
  "Women make up 60% of the world’s hungry population.",
];

function rotateFacts() {
  const factText = document.getElementById("auto-fact-text");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % rotatingFacts.length;
    if (factText) {
      factText.textContent = rotatingFacts[index];
    }
  }, 5000); // updates every 5 seconds
}

document.addEventListener("DOMContentLoaded", rotateFacts);

