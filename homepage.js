// homepage.js

const facts = [
  "Over 800 million people go to bed hungry every night.",
  "Every 10 seconds, a child dies from hunger-related causes.",
  "Malnutrition is responsible for nearly half of deaths in children under 5.",
  "Hunger kills more people each year than AIDS, malaria, and tuberculosis combined.",
  "1 in 9 people in the world suffer from chronic hunger.",
  "Most people suffering from hunger live in developing countries.",
  "Food insecurity is rising due to conflict and climate change.",
  "Women and children are most affected by starvation.",
  "The world produces enough food to feed everyone.",
  "Reducing food waste could help solve world hunger."
];

function showFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact-output").textContent = facts[randomIndex];
}

// Smooth scrolling for nav links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
