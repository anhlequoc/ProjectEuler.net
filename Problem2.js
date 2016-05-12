//Problem 2
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of th

var fiboArr = new Array();
var sum = 0;
var i = 0;

//add number to fiboArr
do {
	fiboArr.push(fibonaciNumber(i));
	i++;
} while (lastArrElement() <= 4000000)

for(var index = 0; index < fiboArr.length-1; index++){ //lấy fiboArr.length-1 vì số cuối cùng của mảng luôn > 4000000)
	if (fiboArr[index] % 2 == 0) {
		sum = sum + fiboArr[index];
	}
}

function lastArrElement() {
	if (fiboArr.length == 0) {
		return 0;
	} else {
		var lastIndex = fiboArr.length - 1;
		return fiboArr[lastIndex];		
	}
}

function fibonaciNumber(i) {
	if (i==0) {
		return 1;		
	} else if (i==1) {
		return 2;		
	} else {
		return fibonaciNumber(i-1) + fibonaciNumber(i-2);
	}
}
console.log(fiboArr);
console.log(sum);