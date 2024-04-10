function addValues(value1, value2) {
    if (
        typeof value1 === "number" &&
        typeof value2 === "number" &&
        !isNaN(value1) &&
        !isNaN(value2) &&
        isFinite(value1) &&
        isFinite(value2)
    ) {
        let result = value1 + value2;
        if (!Number.isSafeInteger(result))
            result = BigInt(value1) + BigInt(value2);
        return result;
    }
    if (
        (typeof value1 === "bigint" && typeof value2 === "bigint") ||
        (typeof value1 === "string" && typeof value2 === "string")
    ) {
        return value1 + value2;
    }

    throw new Error("Incorrect arguments");
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

function coerceToType(value, type) {
    switch (type) {
        case "string": {
            return stringifyValue(value);
        }
        case "number": {
            return convertToNumber(value);
        }
        case "bigint": {
            return BigInt(value);
        }
        case "symbol": {
            return Symbol(value);
        }
        case "null": {
            return null;
        }
        case "undefined": {
            return undefined;
        }
        case "boolean": {
            return Boolean(value);
        }
        case "object": {
            return { value };
        }
        default: {
            throw new Error("Incorrect type");
        }
    }
}

function getIsStrInt(str) {
    if (typeof str !== "string") return false;
    if (str.startsWith("+") || str.startsWith("-")) str = str.slice(1);
    if (str.length === 0) return false;

    for (let char of str) {
        if (isNaN(Number(char))) return false;
    }
    return true;
}
