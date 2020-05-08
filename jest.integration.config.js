module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    displayName: "Integration tests",
    testMatch: [
        "<rootDir>/tests/integration/**/*.{ts,js}",
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    verbose: true,
    // collectCoverage: true,
    testPathIgnorePatterns: ["/dist/", "/node_modules/"],
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ]
};
