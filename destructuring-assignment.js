function foo({ x, y = 2 }) {
    console.log(x, y);
}

foo({});
foo();//error
foo({ x: -1, y: 0 });

function foo({ x, y = 2 } = {}) {
    console.log(x, y);
}

foo() // undefined 2

//指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数
console.log((function () { }).lenght);
console.log((function (a, b, c = 1) { }).length);
console.log((function (a, b = 1, c = 5) { }).length);

//箭头函数
var f = function (v) {
    return v;
}
var f = v => v;

var f = function () {
    return 1;
}
var f = () => 1;

var sun = (num1, num2) => num1 + num2;

let getItem = id => ({ id: id, name: yoyo });
let foo = () => noReturn();

const name = ({ firstName, lastName }) => firstName + ' ' + lastName;
const isEven = n => n % 2 == 0;

[1, 2, 3].map(x => x * x);

const headAndTail = (head, ...tail) => [head, tail];
headAndTail(1, 2, 3, 4, 5);//[1,[2,3,4,5]]


//函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;

foo.call({ id: 42 }); //id: 42


//计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n) 。
function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}
factorial(5);//120

//改写成尾递归，只保留一个调用记录，复杂度 O(1)
function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}

factorial(5, 1) // 120


//扩展运算符提供了复制数组的简便写法。
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
//上面的两种写法，a2都是a1的克隆。

