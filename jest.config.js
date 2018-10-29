module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/example/", "lib"],
  coveragePathIgnorePatterns: ["/example/", "jsdom-setup.ts"],
  setupFiles: ["./test/jsdom-setup.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
