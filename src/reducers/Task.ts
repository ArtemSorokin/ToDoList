// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    console.log(nums)

    return nums.reduce((acc, el) => acc + el)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    let triangle = a + b > c && b + c > a && a + c > b

    if (triangle && a === b && a === c) {
        return '10'
    } else if (triangle && (a === b || b === c || c === a)) {
        return '01'
    } else if (triangle && a !== b && a !== c && b !== a) {
        return '11'
    } else return "00" //


}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let arr = number.toString().split('')
    let numArr = arr.map((it) => Number(it))
    console.log(numArr)

    return numArr.reduce((acc, el) => acc + el)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.
// [1, 100, 2, 200]
export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let chet = 0
    let nechet = 0

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            chet += arr[i]
        } else nechet += arr[i]
    }

    return chet > nechet
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    let copyArr = [...array]
    return copyArr.filter((el) => (el % 2 === 0) && el > 0).map(el => el * el);


}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно


export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    let count = 0
    for (let i = 0; i <= N; i++) {
        count = i + count
    }

    return count
}


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let result = [];

    if (amountOfMoney > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            let local = banknotes[i]
            while (amountOfMoney - banknotes[i] >= 0) {

                amountOfMoney -= local
                result.push(local)
            }
        }
    }

    return result

}