module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@ts/(.*)": "<rootDir>/src/public/ts/$1",
    "@root/(.*)": "<rootDir>/$1",
  },
};
