module.exports = {
  extends: ['@totominc/react'],

  // Add this part if you are using the ESLint config on a TypeScript project
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
