// 1) print unique array for input [1, 1, 1, 2, 3,5,6,6] (single line solution)
// 2) using promise.all ignore errors on individual promises and return only array of resolved promises
// 3) convert method using callbacks to method using promises (without nodejs utils) - see callbacks.js and promises.js
// 4) convert array [{ value: 1, id: "test1"}, {value: 2, id: "test2"}, { value:3, id: "test3"}] to object {"test1": 1, "test2": 2, "test3": 3} using reduce

// solution @1
const input1 = [1, 1, 1, 2, 3, 5, 6, 6]
// console.log([...new Set(input1)]);

// solution 1 @4
const input4 = [{value: 1, id: "test1"}, {value: 2, id: "test2"}, {value: 3, id: "test3"}]
const reducer = (accumulator, currentValue) => {
    accumulator[currentValue.id] = currentValue.value;
    return accumulator;
};
// console.log(input4.reduce(reducer, {}));

// solution 2 @4
const arrayToObject = (arr, keyField, valueField) => Object.assign({}, ...arr.map(item => ({[item[keyField]]: item[valueField]})));
// console.log(arrayToObject(input4, "id", "value"));
