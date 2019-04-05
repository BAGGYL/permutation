//Создание массива всех комбинаций
function permutation(min, max) {
	let result = [];
	result.push([min]);
	result.push([min + 1]);
	result.push([min, min + 1]);

	for (let i = min + 2; i <= max; i++) {
		oldLength = result.length;
		result.push([i]);
		for (let j = 0; j < oldLength; j++) {
			result.push(result[j].concat(i));
		}
	}

	return result;
}

//Создание массива всех комбинаций по маске
function permutationMask(arr) {
	let arrLen = arr.length;
	let count = 2 ** arrLen;
	let result = new Array(count - 1);

	for (let i = 1; i < count; i++) {
		let mask = i.toString(2);
		let maskLen = mask.length;
		let difLen = arrLen - maskLen;
		result[i - 1] = [];

		for (let j = maskLen - 1; j >= 0; j--) {
			if (+mask[j]) {
				result[i - 1].push(arr[j + difLen]);
			}
		}
	}

	return result;
}

let max = 10;
let min = 1;

console.time("Permutation Number");
var a = permutation(min, max);
console.timeEnd("Permutation Number");

let arr = [];
for (let i = max; i >= min; i--) {
	arr.push(i + "");
}
console.time("Permutation Mask");
var b = permutationMask(arr);
console.timeEnd("Permutation Mask");

console.log(a);
console.log(b);