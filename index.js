var i;
for(i=0;i<7;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function ()
{
   //this.style.color="white";
   var pressed = this.innerHTML;
   makeSound(pressed);
   animation(pressed);
})
}

document.addEventListener("keypress",function(event)
{
   makeSound(event.key);
   animation(event.key);
})

function makeSound(ch)
{
   switch (ch) {
      case "w":
         var audio = new Audio("sounds/tom-1.mp3")
          audio.play();
         break;
      case "a":
         var audio = new Audio("sounds/tom-2.mp3")
         audio.play();
         break;
      case "s":
         var audio = new Audio("sounds/tom-3.mp3")
         audio.play();
         break;
      case "d":
         var audio = new Audio("sounds/tom-4.mp3")
         audio.play();
         break;
      case "j":
         var audio = new Audio("sounds/crash.mp3")
         audio.play();
         break;
      case "k":
         var audio = new Audio("sounds/kick-bass.mp3")
         audio.play();
         break;
      case "l":
         var audio = new Audio("sounds/snare.mp3")
         audio.play();
         break;
   }
}

function animation(ani)
{
   var animatedButton= document.querySelector("."+ani);
   animatedButton.classList.add("pressed");

   setTimeout(function()
   {
      animatedButton.classList.remove("pressed");
   }, 100);

}