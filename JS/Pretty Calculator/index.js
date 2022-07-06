//add code to disable leading zeroes (boolean saying if the previous entry is a number or not)
//add code to enable working values and a smoother experience
function SendInput(input)
{
    output.value+=input;
}
function Operation(key)
{
    number=parseInt(output.value);
    switch (key) 
    {
        case '=':
            if(percentage!=0)
            {
                output.value=output.value*percentage/100;
            }
            else
            {
                output.value=(eval(output.value)!=null?eval(output.value):0);
            }
            break;
        case 'C':
            output.value=output.value.slice(0,output.value.length-1);
            break;
        case 'CE':
            percentage=0;
            output.value="";
            //workingValue=0;
            break;
        case 'Inv':
            console.log('Inv');
            break;
        case '%':
            percentage=output.value;
            output.value="";
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
    percentage=0;
    //workingValue=0;
})