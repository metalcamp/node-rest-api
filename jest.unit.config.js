module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    displayName: "Unit tests",
    testMatch: [
        "<rootDir>/tests/unit/**/*.{ts,js}",
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    verbose: true,
    // collectCoverage: true,
    testPathIgnorePatterns: ["/dist/", "/node_modules/"],
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ]
};
