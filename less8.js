if (!("a" in window)) { //"!" срабатывает как исключение
    var a = 1;          // var а не получает число
}
alert(a);               //undefined

var b = function a(x) {
    x && a(--x);
};
alert(a);               //вызов переменной, not defined

function a(x) {
    return x * 2;
}
var a;
alert(a);               //вызов переменной а, undefined

function b(x, y, a) {
    arguments[2] = 10;  // arguments[2] - это a
    alert(a);           // соответственно а = 10
}
b(1, 2, 3);             // третий аргумент = 10, вывод: 10

function a() {          // т.к нет вызывающего элемента,
    alert(this);        // в этом случае this - window
}
a.call(null);           // call вызывает this,        
                        // вывод: window
                        