
    function Management()
{
    var write=document.getElementById("Management");
    write.style.visibility="visible";
    var write1=document.getElementById("Science");
    write1.style.visibility="hidden";
    var write2=document.getElementById("Health");
    write2.style.visibility="hidden";
    var write3=document.getElementById("Humanities");
    write3.style.visibility="hidden";
}
    function Science()
{
    var write4=document.getElementById("Management");
    write4.style.visibility="hidden";
    var write5=document.getElementById("Science");
    write5.style.visibility="visible";
    var write6=document.getElementById("Health");
    write6.style.visibility="hidden";
    var write7=document.getElementById("Humanities");
    write7.style.visibility="hidden";
}
    function Health()
{
    var write8=document.getElementById("Management");
    write8.style.visibility="hidden";
    var write9=document.getElementById("Science");
    write9.style.visibility="hidden";
    var write10=document.getElementById("Health");
    write10.style.visibility="visible";
    var write11=document.getElementById("Humanities");
    write11.style.visibility="hidden";
}
    function Humanities()
{
    var write12=document.getElementById("Management");
    write12.style.visibility="hidden";
    var write13=document.getElementById("Science");
    write13.style.visibility="hidden";
    var write14=document.getElementById("Health");
    write14.style.visibility="hidden";
    var write15=document.getElementById("Humanities");
    write15.style.visibility="visible";
}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var i=0;
function read()
{
    if(!i)
    {
        document.getElementById("more").style.
        display="inline";
        document.getElementById("dots").style.
        display="none";
        document.getElementById("read").
        innerHTML="Read less";
        i=1;
    }
    else
    {
        document.getElementById("more").style.
        display="none";
        document.getElementById("dots").style.
        display="inline";
        document.getElementById("read").
        innerHTML="Read more";
        i=0; 
    }
}




