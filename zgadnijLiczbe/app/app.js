var amount = document.getElementById("number");

var btn1 = document.getElementById("guessA");


btn1.addEventListener('click', function() {

   var show1 = document.getElementById('formA');
   var show2 = document.getElementById('formB');

   if (show1.style.display === 'none') {
       show1.style.display = 'block';
       show2.style.display = 'block';
       
   } else {
       show1.style.display = 'none';
       show2.style.display = 'block';
   }

    var res = document.getElementById('result');
});

var start = document.getElementById("start");
var stop = document.getElementById("stop");

var losuj = Math.ceil(parseInt(start.value) + (Math.random() * (parseInt(stop.value)-parseInt(start.value))));

console.log(losuj);


//var losuj = Math.floor(Math.random() *100);
//console.log(losuj);
//
//
//var btn = document.getElementById("guess");
//
//btn.addEventListener('click', function() {
//    var res = document.getElementById('result');
//    if (amount.value == losuj){
//        res.innerHTML = "Wygraleś - liczba jest taka sama!"
//        }
//    else if (amount.value > losuj){
//        res.innerHTML = "Liczba jest za duza"
//    }
//    else if (amount.value < losuj){
//        res.innerHTML = "Liczba jest za mała"
//    }
//    else {
//        res.innerHTML = "Zgaduj dalej"
//        }
//        
//})