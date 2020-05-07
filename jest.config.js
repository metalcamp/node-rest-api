module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    // verbose: true,
    // collectCoverage: true,
    testPathIgnorePatterns: ["/dist/", "/node_modules/"],
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ]
};
