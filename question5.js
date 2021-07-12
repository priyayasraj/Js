let joinArray = (array,seperator) => {
    return array.join(seperator);
}
console.log (joinArray(["Red", "Green", "White", "Black"], "+"));
console.log(joinArray(["Red", "Green", "White", "Black"], "**"));