var selectedLetter="global right now";
function GetLink()
{
    fetch("https://random-word-api.herokuapp.com/word")
    .then(
        r=>
        {
            if(r.status!=200)
                return;
            r.json().then(
                c=>
                {
                    for (let i=0; i<c[0].length; i++)
                    {
                        p=document.createElement("div");
                        p.innerHTML="_";
                        if(i==0)
                        {
                            p.setAttribute("id","first");
                        }
                        p.classList.add("word");
                        document.querySelector("#word").appendChild(p)
                    }

                });
        }
    )
}
function SetupKeyboard()
{
    letters=document.getElementsByClassName("word");
    //so much trouble was caused when doing selectedLetter=letters[0], always equates to undefined for some reason
    selectedLetter=document.getElementById("first");
}
document.onkeydown= function(e) {
    console.log(e.key);
    selectedLetter.innerHTML=e.key;    
}

window.addEventListener('load', ()=>{
    GetLink();
    SetupKeyboard();
});