// var myinput = document.getElementById("i");
// var mybuttons = document.querySelectorAll("span")

// for(let i = 0 ; i< mybuttons.length ;i++){
//     mybuttons[i].addEventListener("click",() => {
//     var myvalue = mybuttons[i].textContent ;
//     if(myvalue ==="c"){
//             clearitem();
//         }
//         else if(myvalue ==="="){
//                 equalitem();
//             }
//             else{
//                     calculate(myvalue)}  })   }
// function clearitem(){
//         myinput.value = "";   }
// function equalitem(){
//         myinput.value = eval(myinput.value);    }
//     function calculate(myvalue){
// myinput.value +=myvalue;      }


//     var myinput = document.getElementById("i");
// var mybuttons = document.querySelectorAll("span");

// mybuttons.forEach(span => {
//     span.addEventListener("click" , function(ele){
//         let value = ele.target.innerText;
// if(value === "c"){
//     cleardata() ;
// }
// else if(value === "="){
//     equaldata()
// }else{
//     operationdata(val) ;
// }
//     })
// })
// function cleardata(){
//     myinput.value = " " ;
// }
// function equaldata(){
//     myinput.value = eval(myinput.value);
// }
// function operationdata(calc){
//     myinput.value += calc;
// }



var myinput = document.getElementById("i");
var mybuttons = document.querySelectorAll("span");

mybuttons.forEach(span => {
    span.addEventListener("click", function(ele) {
        let value = ele.target.innerText;  // Get the button text

        if (value === "c") {
            cleardata();
        } else if (value === "=") {
            equaldata();
        } else {
            operationdata(value);
        }
    });
});

function cleardata(){
    myinput.value = "" ;
}
function equaldata(){
    myinput.value = eval(myinput.value);
}
function operationdata(calc){
    myinput.value += calc;
}
