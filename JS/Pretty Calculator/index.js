function SendInput(input)
{
    output.value+=input;
}
function Operation(key)
{
    number=parseInt(output.value);
    switch (key) 
    {
        case '+':
            workingValue+=number;
            console.log(workingValue);
            break;
        case '-':
            workingValue
            console.log("-");
            break;
        case '*':
            console.log("*");
            break;
        case '/':
            console.log("/");
            break;
        case '=':
            console.log("=");
            break;
        case 'C':
            output.value="";
            //console.log("C");
            break;
        case 'CE':
            output.value="";
            workingValue=0;
            //console.log('CE');
            break;
        case 'Inv':
            console.log('Inv');
            break;
        case '%':
            console.log('%');
            break;
        default:
            console.log("default case");
            break;
    }
}
window.addEventListener('load',()=>
{
    output=document.querySelector("#textoutput");
    output.value="";
    workingValue=0;
})