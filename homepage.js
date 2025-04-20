const facts = [
  "Every 10 seconds, a child dies from hunger-related causes.",
  "Hunger kills more people each year than AIDS, malaria, and tuberculosis combined.",
  "1 in 9 people around the world do not get enough food to lead a healthy life.",
  "Food waste in developed countries could feed all the hungry people in the world.",
  "Malnutrition is the single largest contributor to disease in the world."
];

function showFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact-output").textContent = fact;
}
