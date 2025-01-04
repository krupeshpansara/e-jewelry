const pathMapping = {
  form: "./src/components/inputs/",
  layout: "./src/components/",
  page: "./src/pages/",
};

const componentGenerator = {
  description: "Generate a new React component",
  prompts: [
    {
      type: "list", // Changed to `list` for better UX
      name: "type",
      message: "Select the type of component:",
      choices: [
        { name: "Form Component", value: "form" },
        { name: "Layout Component", value: "layout" },
        { name: "Page Component", value: "page" },
      ],
    },
    {
      type: "input",
      name: "name",
      message: "Enter the component name:",
      validate: (input) => (input ? true : "Component name cannot be empty!"),
    },
  ],
  actions: ({ type }) => {
    const basePath = pathMapping[type];
    if (!basePath) {
      throw new Error("Invalid component type selected!");
    }

    return [
      {
        type: "add",
        path: `${basePath}{{pascalCase name}}/{{pascalCase name}}.jsx`,
        templateFile: "plop-templates/Component.js.hbs",
      },
      {
        type: "add",
        path: `${basePath}{{pascalCase name}}/{{pascalCase name}}.scss`,
        templateFile: "plop-templates/Component.scss.hbs",
      },
      {
        type: "add",
        path: `${basePath}{{pascalCase name}}/index.js`,
        templateFile: "plop-templates/index.js.hbs",
      },
    ];
  },
};

// Helper to convert strings to lowercase
const lowerCaseHelper = (str) => str.toLowerCase();

const classNameHelper = (str) =>
  str
    .split(/(?=[A-Z])/) // Split at each capital letter
    .map((word) => word.toLowerCase()) // Convert each part to lowercase
    .join("-");
// Plop configuration export
module.exports = (plop) => {
  // Register the component generator
  plop.setGenerator("component", componentGenerator);

  // Register custom helpers
  plop.setHelper("lowerCase", lowerCaseHelper);
  plop.setHelper("classNameHelper", classNameHelper);
};
