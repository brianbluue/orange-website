


   let currentDivIndex = 0;
   const divs = document.querySelectorAll('.page');
 
   function nextDiv() {
     // Remove the 'active' class and set opacity to 0 for the current div
     divs[currentDivIndex].classList.remove('active');
     divs[currentDivIndex].style.opacity = 0;
 
     // Calculate the index of the next div
     currentDivIndex = (currentDivIndex + 1) % divs.length;
 
     // Add the 'active' class to the next div
     divs[currentDivIndex].classList.add('active');
 
     // Set a timeout to add the 'next' class after a short delay
     setTimeout(() => {
       divs[currentDivIndex].classList.add('next');
 
       // Reset the opacity and remove the 'next' class after the transition
       setTimeout(() => {
         divs[currentDivIndex].style.opacity = 1;
         divs[currentDivIndex].classList.remove('next');
       }, 500); // Use the same duration as the transition (0.5s)
     }, 50); // A short delay before adding 'next' class
   }

   function autoSwitch() {
     setInterval(() => {
       nextDiv();
     }, 3500);
   }
 
   // Show the first div initially
   divs[currentDivIndex].classList.add('active');
   autoSwitch();