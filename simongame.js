let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let start = false;
let level =0;
let h2 =document.querySelector("h2")


document.addEventListener("keypress",function()
{
    if(start== false)
    {
        console.log("game is started");
        started = true;
        levelup();
    }
});

function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);

}
function levelup()
{
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randindx= Math.floor(Math.random()*3)
    let randcolor=btns[randindx];
    let randbtn = document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor)

    btnflash(randbtn);

}
function checkans(idx)
{
    if(userseq[idx]=== gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}<b> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";

        },250)
        reset();

    }

}
function btnpress()
{
    let btn = this;
    btnflash(btn);
    usercolor= btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);

}

let allbtns= document.querySelectorAll(".btn")
{
    for(btn of allbtns)
    {
        btn.addEventListener("click",btnpress);
    }
}
function reset()
{
    started = false;
    gameseq=[];
    userseq=[];
    level=0;
}