function AddColors()
{
    for (let i=0; i<boxes.length;i++)
    {
        let r=Math.random()*1000%256;
        let g=Math.random()*1000%256;
        let b=Math.random()*1000%256;
        boxes[i].style.backgroundColor="rgb("+r+","+g+","+b+")";
        boxes[i].onclick=function()
        {
            if(boxes[i].style.backgroundColor==document.querySelector("#guess").innerHTML)
            {
                document.querySelector("#guess").innerHTML="Correct!";
            }
            else
            {
                document.querySelector("#guess").innerHTML="Incorrect!";
            }
            console.log(r,g,b);
            console.log(document.querySelector("#guess").innerHTML);
        }
    }
}
function GameSetup()
{
    let i=Math.round((Math.random()*100)%6);
    document.querySelector("#guess").innerHTML=boxes[i].style.backgroundColor;
}
function Retry()
{
    AddColors();
    GameSetup();
}
window.addEventListener('load',()=>
{
    boxes=document.getElementsByClassName("colorDiv");
    Retry();
})