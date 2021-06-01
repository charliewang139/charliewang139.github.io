let d = new Date();
alert("Today's date is"+ d);

window.alert("Welcome to apex legneds");

    function myFunction1(){
        alert("my email is wangchanglin139@163.com")
      }

function oneFunction() {
  var greeting;
  var time = new Date().getHours();
  if (time < 12) {
    greeting = "Good BurgerKing Breakfast";
  } else if (time < 18) {
    greeting = "Good BurgerKing Lunch";
  } else {
    greeting = "Good BurgerKing Dinner";
  }
  document.getElementById("happy").innerHTML = greeting;
}

function myFunction(){ 
var element=document.body; 
element.classList.toggle("dark-mode"); 
} 
function buttonFunction(){ 
var t = new Date(); 
alert(t); 
switch(new Date().getDay()){ 
case 0: 
alert("Tomorrow is Monnday"); 
break; 
case 1: 
alert("Tomorrow is Tuesday"); 
break; 
case 2: 
alert("Tomorrow is Wednesday"); 
break; 
case 3: 
alert("Tomorrow is Thursday"); 
break; 
case 4: 
alert("Tomorrow is Friday"); 
break; 
case 5: 
alert("Tomorrow is Saturday"); 
break; 
case 6: 
alert("Tomorrow is Sunday"); 
} 
} 
function ranFunction(){ 
var arr = [""]; 
for (var i=1; i<=1;i++){ 
var num = Math.floor(Math.random() * 100); 
arr.push(num); 
} 
alert(arr); 
} 
function sexFunction(){ 
var ans = window.prompt("Are you a male or a femal?"); 
if (ans == "male"){ 
alert("Hello sir"); 
} 
else if(ans == "female"){ 
alert("Hello madam"); 
} 
else{ 
alert("Please entry a valid gender"); 
} 

} 
function toC(){ 
var f = window.prompt("Please entry a number for fahrenheit"); 
var degree = (f-32)*(5/9); 
alert(degree); 
} 

function pick(){
	var arr = ['BANGALORE','HORIZON','GIBRALTAR','FUSE','CRYPTO','CAUSTIC','VALKYRIE'];
	var random = Math.floor(Math.random()*7);
	document.getElementById('chang').innerHTML = random;
	alert(arr[random]);
}
var message = "Not allowed."; 
    function rtclickcheck(keyp){ 
        if (navigator.appName == "Netscape" && keyp.which == 3){    
            alert(message); return false; 
        } 
        if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {
            alert(message);     
            return false;
        }
    } 
    document.onmousedown = rtclickcheck;