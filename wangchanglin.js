alert(Date())



setInterval("getDate()",2000);

function image(){
        document.getElementById("img").src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEQsE9Sn2y-A3gOb4_CPzDyvCjGG4yTOXkg&usqp=CAU';

}

function wsx(){
        var text_change = document.getElementById('paragraph1');
        text_change.innerHTML = 'changeeeeeeeeeee';
}

function qaz(){
        alert('??????????????????????????????????????');
}

function parachange(){
        var select = document.getElementById('paragraph2');
                select.style.backgroundColor = 'red';
                select.style.textAlign = 'center';
                select.style.fontFamily = 'Arial';
}

function temp(f){
        return(f-32)*5/9;
}

function tgb(){
        var select = document.getElementById('temp');
        select.innerHTML = temp(20);
}

function rfv(){
        var a = parseFloat(prompt('number 1'));
        var b = parseFloat(prompt('number 2'));
        alert(a+b);
}

function edc(){
        var GN = prompt('First Name:');
        var FM = prompt('Family Name:');
        alert('have a nice day '+ GN + ' ' + FM);
}