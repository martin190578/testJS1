// const fruits = ["Banana", "Orange", "Center", "Apple", "Mango"];
// document.getElementById('p1').innerHTML = fruits.sort();
// document.getElementById('p2').innerHTML = fruits.sort().reverse();
// var points = [40, 100, 1, 5, 25, 10];

// document.getElementById('p3').innerHTML = points;
// points.sort(function(a, b) { return a - b; });
// // document.getElementById('p4').innerHTML = points.sort();
// document.getElementById('p5').innerHTML = points;
// var points = [40, 100, 1, 5, 25, 10];
// document.getElementById('p1').innerHTML = points;

// function myfunc1() {
//     document.getElementById('p2').innerHTML = points.sort();
// }
var points = [40, 100, 1, 5, 25, 10];
document.getElementById('p1').innerHTML = points;

// function myfunc2() {
//     points.sort(function(a, b) { return 0.1 - Math.random() });
//     document.getElementById('p2').innerHTML = points;

// }
// document.getElementById('p2').innerHTML = myfunc1(points);

// function myfunc1(arr) {
//     return Math.min.apply(null, arr);

// }
const cars = [{ name: 'BMW', price: '100' }, { name: 'audi', price: '200' }, { name: 'toyota', price: '300' }];
cars.sort(function(a, b) { return a.name - b.price });
myfunc1();

function myfunc1() {
    document.getElementById('p2').innerHTML =
        cars[0].name + "   " + cars[0].price + "<br>" +
        cars[1].name + "   " + cars[1].price + "<br>" +
        cars[2].name + "   " + cars[2].price + "<br>"
}