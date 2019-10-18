/*eslint-env browser*/


function calculateTax(){

    var income = document.forms["myForm"]["income"].value;
    var wealth = document.forms["myForm"]["wealth"].value;
    var tax = (0.35 * income) + (0.25 * wealth);

    document.forms["myForm"]["tax"].value = tax;

}
