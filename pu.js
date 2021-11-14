var p=document.getElementById('K');
function Management()
{
if(p.textContent.includes('Management'))
{
    document.getElementById('Management');
    p.style.color="green";
}
else
{
    p.style.visibility="hidden";
}
}
var p=document.getElementById('Technology');
function Technology()
{
if(p.textContent.includes('Technology'))
{
    document.getElementById('Technology');
    p.style.color="red";
}
else
{
    p.style.color="grey";
}
}
