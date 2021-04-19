import "./styles/index.scss";

const elevenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedmoonstone: 4,
};

const elevenMoonReceipe = {
  ...elevenShieldRecipe,
  leather: 1,
  refinedmoonstone: 3,
};

console.log(elevenShieldRecipe);
console.log(elevenMoonReceipe);
