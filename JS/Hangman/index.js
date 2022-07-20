async function GetLink() 
{
    let r = await fetch("https://random-word-api.herokuapp.com/word");
    if (r.status != 200)
        return;
    let c = await r.json();
    for (let i = 0; i < c[0].length; i++) 
    {
        p = document.createElement("div");
        p.innerHTML = "_";
        p.classList.add("word");
        document.querySelector("#word").appendChild(p)
    }
}

function SetupKeyboard()
{
    letters=document.getElementsByClassName("word");
    //so much trouble was caused when doing selectedLetter=letters[0], always equates to undefined for some reason
    selectedLetter=letters[0];
}

document.onkeydown= function(e) {
    console.log(e.key);
}

window.addEventListener('load', ()=>{
    GetLink();
});