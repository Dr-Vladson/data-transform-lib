function addValues(value1, value2) {
    if (
        !(typeof value1 === "number" && typeof value2 === "number") &&
        !(typeof value1 === "bigint" && typeof value2 === "bigint") &&
        !(typeof value1 === "string" && typeof value2 === "string")
    )
        throw new Error("Incorrect types of arguments");

    return value1 + value2;
}