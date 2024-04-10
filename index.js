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

function invertBoolean(value) {
    if (typeof value !== "boolean")
        throw new Error("argument should be of boolean type");
    return !value;
}

function convertToNumber(value) {
    let result;
    if (typeof value === "string") result = parseFloat(value);
    else if (typeof value === "symbol") {
        const strOfSymbol = value.toString();
        result = parseFloat(strOfSymbol.slice(7, strOfSymbol.length - 1));
    } else result = Number(value);

    if (isNaN(result)) throw new Error("Value can`t be converted to number");
    return result;
}