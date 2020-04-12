module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.tsx", "**/*.spec.heavy.tsx"],
  moduleNameMapper: {
    "@ts/(.*)": "<rootDir>/src/public/ts/$1",
    "@root/(.*)": "<rootDir>/$1",
  },
};
