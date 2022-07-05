//var minutes,seconds,miliseconds;
var interval;
var milisecondsCount=secondsCount=minutesCount=0;
function Start()
{
    interval=setInterval(Stopwatch,10);
}
function Stop()
{
    clearInterval(interval);
}
function Restart()
{
    clearInterval(interval);
    count=0;
    miliseconds.innerHTML=seconds.innerHTML=minutes.innerHTML="00";
}

function Stopwatch()
{
    milisecondsCount++;
    if(milisecondsCount<10)
    {
        miliseconds.innerHTML="0"+milisecondsCount;
    }
    else if(milisecondsCount>9)
    {
        miliseconds.innerHTML=milisecondsCount;
    }
    if(milisecondsCount>99)
    {
        secondsCount++;
        milisecondsCount=0;
        if(secondsCount<10)
        {
            seconds.innerHTML="0"+secondsCount;
        }
        else
        {
            seconds.innerHTML=secondsCount;
        }
        miliseconds.innerHTML="00";
    }
    if(secondsCount>59)
    {
        minutesCount++;
        secondsCount=0;
        if(minutesCount<10)
        {
            minutes.innerHTML="0"+minutesCount;
        }
        else
        {
            minutes.innerHTML=minutesCount;
        }
        miliseconds.innerHTML="00";
        seconds.innerHTML="00";
    }
}

document.addEventListener('load',()=>
{
    var minutes=document.querySelector("#minutes");    
    var seconds=document.querySelector("#seconds");    
    var miliseconds=document.querySelector("#miliseconds");    
});