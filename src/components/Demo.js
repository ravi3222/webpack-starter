import { useState } from "react";

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

const Demo = () => {
  const [receipe, setReceipe] = useState({});
  return (
    <div>
      <h3>Current Receipe</h3>
      <button onClick={() => setReceipe(elevenShieldRecipe)}>
        Eleven Shield Recipe
      </button>
      <button onClick={() => setReceipe(elevenMoonReceipe)}>
        Eleven Moon Receipe
      </button>
      <ul>
        {Object.keys(receipe).map((material) => (
          <li key={material}>
            {material}:{receipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;
