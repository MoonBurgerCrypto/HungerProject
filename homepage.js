const facts = [
  "Every 10 seconds, a child dies from hunger-related causes.",
  "Over one-third of all food produced globally is wasted — enough to feed 2 billion people.",
  "In some countries, families survive on less than $1 a day, making food a luxury.",
  "Malnourished children are 9 times more likely to die from diseases like diarrhea or pneumonia.",
  "Access to clean water is also crucial — many die from drinking dirty water due to food shortages.",
  "Hunger affects children's ability to learn in school and reduces chances of escaping poverty.",
  "Women and girls are more likely to suffer from hunger in many regions due to gender inequality.",
  "Hunger and starvation are entirely preventable with global cooperation and support.",
  "Chronic hunger can cause stunted growth and cognitive impairment in children.",
  "Communities facing famine often also deal with displacement due to war or climate disasters.",
  "About 45% of all child deaths worldwide are linked to undernutrition.",
  "Starvation weakens the immune system, making common illnesses deadly.",
  "Hunger can be both a cause and a result of poverty, creating a vicious cycle.",
  "In emergencies, food aid is essential to saving lives — but long-term solutions are needed.",
  "Access to education, especially for girls, is a powerful way to fight hunger."
];

function showFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomIndex];
  document.getElementById("fact-output").textContent = fact;
}
