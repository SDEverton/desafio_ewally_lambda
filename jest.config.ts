// eslint-disable-next-line import/no-import-module-exports
import dotenv from "dotenv";

dotenv.config();
module.exports = {
  preset: "ts-jest",
  testTimeout: 150000,
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
