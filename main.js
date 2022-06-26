// // var names = ['ahmad', 'saman', 'ali', 'reza', 'shima'];
// // console.log(num);
// // num.sort();
// // console.log(num);

// // function nons(a, b) {
// //     return a - b;
// // }
// // console.log(num);
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(
// //     fruits.sort().reverse());
// // const points = [40, 100, 1, 5, 25, 10];
// // document.getElementById("p1").innerHTML = points;
// // points.sort(function(a, b) { return a - b });
// // document.getElementById("p2").innerHTML = points;
// document.getElementById('p1').innerHTML = num;
// num.sort(function(a, b) { return a - b });

var num = [20, 10, 4, 43, 50, 14, 40, 80, 64];
document.getElementById('p1').innerHTML = num;

function myfunc1() {
    num.sort();
    document.getElementById('p2').innerHTML = num;

}

function myfunc2() {
    num.sort(function(a, b) {
        return a - b
    });
    document.getElementById('p3').innerHTML = num;
}