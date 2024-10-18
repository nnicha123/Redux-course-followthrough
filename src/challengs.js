// 1
import { pipe } from "lodash/fp";

const extractTag = (obj) => obj.tag;
const convertToLowercase = (str) => str.toLowercase();
const addParenthesis = (str) => `(${str})`;

const transform = pipe(extractTag, convertToLowercase, addParenthesis);

console.log(transform({ tag: "JAVASCRIPT" }));

// 2
const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"],
};

const newReceipe = {
  ...recipe,
  ingredients: [...recipe.ingredients, "cream"],
};

const replace = {
  ...recipe,
  ingredients: recipe.ingredients.map((ingredient) =>
    ingredient === "egg" ? "egg white" : ingredient
  ),
};

const deleted = {
  ...recipe,
  ingredients: recipe.ingredients.filter((ingredient) => ingredient !== "egg"),
};

console.log({ recipe, newReceipe, replace, deleted });
