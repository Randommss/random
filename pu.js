function Management()
{
    var write=document.getElementById("Management");
    write.style.color="limegreen";
    var write1=document.getElementById("Science");
    write1.style.visibility="hidden";
    var write2=document.getElementById("Health");
    write2.style.visibility="hidden";
    var write3=document.getElementById("Humanities");
    write3.style.visibility="hidden";
}
function Science()
{
    var write1=document.getElementById("Science");
    write1.style.color="red";
    var write=document.getElementById("Management");
    write.style.visibility="hidden";
    var write2=document.getElementById("Health");
    write2.style.visibility="hidden";
    var write3=document.getElementById("Humanities");
    write3.style.visibility="hidden";
}


