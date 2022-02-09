//Задача №1
/*
let A = [];
A.length = 10;
let MainArray = [];

for (i = 0; i < A.length; i++) {
	A[i] = Math.floor((Math.random() * 120));


}
console.log(A);

max = A[0];
min = A[0];
for (i = 0; i < A.length; i++) {

	if (A[i] > max) {
		max = A[i];
	}
	if (A[i] < min) {
		min = A[i];
	}

	if (A[i] < 2) {
		continue;
	}

	let isPrime = true;
	for (let j = 2; j < A[i]; j++) {

		if (A[i] % j === 0) {
			isPrime = false;
			console.log(A[i], 'это число не простое');
			break;
		}
	}
	if (isPrime) {
		console.log(A[i], 'простое число');
		MainArray.push(A[i]);
	}
}
console.log(min, max)
console.log(MainArray);
*/

//Задача №2
/*
let Arr = [];
Arr = new Array(12);

for (i = 0; i < Arr.length; i++) {
	Arr[i] = Math.floor((Math.random() * 120));


}
console.log(Arr);

for (i = 0; i < Arr.length / 2; i++) {

	let lost = Arr[i];
	Arr[i] = Arr[(Arr.length - 1) - i];
	Arr[(Arr.length - 1) - i] = lost;
}
console.log(Arr);
*/

//Задача №3
/*
let ArrayFirst = [];
let ArraySecond = [];
ArrayFirst = new Array(10);
ArraySecond = new Array(10);
for (i = 0; i < ArrayFirst.length; i++) {
	ArrayFirst[i] = Math.floor((Math.random() * 32) - 15)
}
console.log(ArrayFirst)
for (i = 0; i < ArraySecond.length; i++) {
	ArraySecond[i] = Math.floor((Math.random() * 32) - 15)
}
console.log(ArraySecond)
let LastArray = [];
for (i = 0; i < ArrayFirst.length; i++) {
	for (j = 0; j < ArraySecond.length; j++) {
		if (ArrayFirst[i] == ArraySecond[j]) {
			LastArray.push(ArrayFirst[i]);
		}
	}

}
console.log(LastArray);
*/

//Задача №4
/*
let ArrayFour = [];
ArrayFour = new Array(10);
for (i = 0; i < ArrayFour.length; i++) {
	ArrayFour[i] = Math.floor(Math.random() * 60);
}
console.log(ArrayFour);

for (i = 0; i < ArrayFour.length; i = i + 2) {

	let lost = ArrayFour[i];
	ArrayFour[i] = ArrayFour[i + 1];
	ArrayFour[i + 1] = lost;

}
console.log(ArrayFour);
*/