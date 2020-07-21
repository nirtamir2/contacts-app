module.exports = {
  extends: ["react-app", "prettier", "prettier/@typescript-eslint"],
  plugins: ["sort-export-all"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    {
      files: ["**/index.ts"],
      rules: {
        // Sort exports in index.ts files
        "sort-export-all/sort-export-all": 2,
      },
    },
    {
      files: ["**/graphql-generated/**"],
      rules: {
        "import/no-default-export": 0,
        "import/no-duplicates": 0,
      },
    },
  ],
  rules: {
    // Prettier has problems
    quotes: 0,
    "no-shadow": 0,
    "comma-dangle": 0,
    // FlowType has problems
    "flowtype/no-types-missing-file-annotation": 0,
    curly: 0,
    // Sort exports in index.ts files
    "sort-export-all/sort-export-all": 0,
    "import/no-default-export": 2,
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "index", "sibling"],
        ],
        pathGroups: [
          {
            pattern: "./assets/*.svg",
            group: "sibling",
            position: "after",
          },
          {
            pattern: "../assets/*.svg",
            group: "sibling",
            position: "after",
          },
          {
            pattern: "./*.css",
            group: "sibling",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
  settings: {
    // Refer ../ packages as internal for import/order rule
    "import/internal-regex": "^../",
  },
};
