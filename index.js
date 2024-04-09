function addValues(value1, value2) {
    if (
        !(typeof value1 === "number" && typeof value2 === "number") &&
        !(typeof value1 === "bigint" && typeof value2 === "bigint") &&
        !(typeof value1 === "string" && typeof value2 === "string")
    )
        throw new Error("Incorrect types of arguments");

    return value1 + value2;
}

function stringifyValue(value) {
    if (typeof value === "function") value = value();

    if (value === null) return "null";
    if (value === undefined) return "undefined";
    if (typeof value === "object") return JSON.stringify(value);

    return value.toString();
}