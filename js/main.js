// b1: chuyển chuỗi thành mảng
// b2: dùng filter lọc các phần tử không phải là số
// b3: dùng map chuyển các phần tử thành số
function convertToNumberArray(arr) {
    const numArr = convertStringToArray(arr);
    // Sử dụng phương thức filter để lọc các phần tử không phải là số
    var filteredArr = numArr.filter(function (element) {
        return !isNaN(element) && element !== "" && element !== null && element !== undefined;
    });

    // Sử dụng phương thức map để chuyển đổi các phần tử còn lại thành số
    var numberArray = filteredArr.map(function (element) {
        return Number(element);
    });

    return numberArray;
}




// Hàm chuyển đổi chuỗi thành mảng 
function convertStringToArray(numbers) {

    return numbers.split(" ");
}

// Hàm tính tổng các số dương trong mảng
function calculateSumOfPositiveNumbers() {
    const arrayInput = document.getElementById('numbers').value;
    const numbers = convertToNumberArray(arrayInput);
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(+numbers[i])) {
            console.log('numbers[i]: ', numbers[i]);
            numbers.splice(i, 1);

        }
    }
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }

    document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i>Tổng các số dương trong mảng: ${sum}`;
}

// Hàm đếm số lượng số dương trong mảng
function countPositiveNumbers() {
    const arrayInput = document.getElementById('numbers').value;
    const numbers = convertToNumberArray(arrayInput);
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }

    document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i> Số lượng số dương trong mảng: ${count}`;
}

// Hàm tìm số nhỏ nhất trong mảng
function findMinimumNumber() {
    const arrayInput = document.getElementById('numbers').value;
    const numbers = convertToNumberArray(arrayInput);
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i>Số nhỏ nhất: ${min} `;
}

// Hàm tìm số dương nhỏ nhất trong mảng
function findMinimumPositiveNumber() {
    const arrayInput = document.getElementById('numbers').value;
    const numbers = convertToNumberArray(arrayInput);
    let minPositive = -1;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            if (minPositive === -1 || numbers[i] < minPositive) {
                minPositive = numbers[i];
            }
        }
    }

    document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i> Số dương nhỏ nhất: ${minPositive}`;
}

// Hàm tìm số chẵn cuối cùng trong mảng
function findLastEvenNumber() {
    const arrayInput = document.getElementById('numbers').value;
    const numbers = convertToNumberArray(arrayInput);
    let lastEven = -1;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            lastEven = numbers[i];
        }
    }

    document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i>số chẵn cuối cùng: ${lastEven}`;
}

// Hàm đổi chỗ 2 giá trị trong mảng
function swapValues() {
    const arrayInput = document.getElementById('numbers').value;
    const numbers = convertToNumberArray(arrayInput);
    const position1 = parseInt(prompt("Nhập vị trí thứ nhất:"));
    const position2 = parseInt(prompt("Nhập vị trí thứ hai:"));

    if (position1 >= 0 && position1 < numbers.length && position2 >= 0 && position2 < numbers.length) {
        const temp = numbers[position1];
        numbers[position1] = numbers[position2];
        numbers[position2] = temp;

        document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i> Mảng sau khi đổi vị trị: ${numbers}`;
    } else {
        document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i>Vị trí không hợp lệ!`;
    }
}

// Hàm sắp xếp mảng theo thứ tự tăng dần

function sortArray() {
    const arrayInput = document.getElementById('numbers').value;
    const numbers = convertToNumberArray(arrayInput);
    numbers.sort(function (a, b) {
        return a - b;
    });

    document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i>Sắp xếp tăng dần:${numbers}`;
}

// Hàm kiểm tra xem một số có phải là số nguyên tố hay không
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Hàm tìm số nguyên tố đầu tiên trong mảng
function findFirstPrimeNumber() {
    const arrayInput = document.getElementById('numbers').value;
    const numbers = convertToNumberArray(arrayInput);

    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i>Số nguyên tố đầu tiên trong mảng: ${numbers[i]}`;
            return;
        }
    }

    document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i> Không có số nguyên tố nào đươc tìm thấy!`;
}

// Hàm đếm số lượng số nguyên trong mảng số thực
function countIntegerNumbers() {
    const arrayInput = document.getElementById('numbers').value;
    const numbers = convertToNumberArray(arrayInput);
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            count++;
        }
    }

    document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i> Số lượng số nguyên trong mảng: ${count}`;
}

// Hàm so sánh số lượng số dương và số lượng số âm
function comparePositiveAndNegativeNumbers() {
    const arrayInput = document.getElementById('numbers').value;
    const numbers = convertToNumberArray(arrayInput);
    let positiveCount = 0;
    let negativeCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveCount++;
        } else if (numbers[i] < 0) {
            negativeCount++;
        }
    }

    if (positiveCount > negativeCount) {
        document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i> Số dương nhiều hơn số âm.`;
    } else if (positiveCount < negativeCount) {
        document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i> Số âm nhiều hơn số dương.`;
    } else {
        document.getElementById("result").innerHTML = `<i class='bx bxs-hand-right'></i> Số lượng số dương = số lượng số âm.`;
    }
}