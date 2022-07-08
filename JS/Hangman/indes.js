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
                    console.log(c);
                    c[0].forEach(letter => 
                    {
                        p=document.createElement("div");
                        document.querySelector("#word").appendChild(p)
                    });
                })
        }
    )
}
GetLink();