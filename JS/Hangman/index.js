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
                    console.log(c,c.length);
                    for (let i=0; i<c[0].length; i++)
                    {
                        p=document.createElement("div");
                        p.innerHTML="_";
                        p.classList.add("word");
                        document.querySelector("#word").appendChild(p)
                    }

                });
        }
    )
}
GetLink();