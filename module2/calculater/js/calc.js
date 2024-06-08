
function UserValue(val)
{
document.getElementById("result").value+=val;
}


function clr()
{
document.getElementById("result").value="";
}

function bck()
{
var back=document.getElementById("result").value;
var res=back.slice(0,-1);
document.getElementById("result").value=res;
}

function finalresult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}


function sq()
{
    var num=document.getElementById("result").value;
    var res=Math.pow(num,2);
    document.getElementById("result").value=res;
} 

function sqr()
{
    var num=document.getElementById("result").value;
    var res=Math.sqrt(num);
    document.getElementById("result").value=res;
} 