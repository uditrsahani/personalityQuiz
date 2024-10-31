

// Add an event listener to handle window resize
window.addEventListener("resize", applyChromeStyles);


function firstSection(){

  const contentWrappers = document.querySelectorAll('.content-wrapper');
  const newContentWrappers = document.querySelectorAll('.new-content-wrapper');

  // Animate the current content to swipe up and disappear
  contentWrappers.forEach(wrapper => {
    wrapper.style.transform = 'translateY(-100px)'; // Move up
    wrapper.style.opacity = '0'; // Set to invisible
  });

  // Trigger reappearance of new content after a delay
  setTimeout(() => {
    newContentWrappers.forEach(newWrapper => {
      // Move the new content into view
      newWrapper.style.transform = 'translateY(0)'; // Move to original position
      newWrapper.style.opacity = '1'; // Make it visible
    });
  }, 1000); // Match the duration of the transition
  
  //buttons
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('startBtn').style.display = 'block';

  //containers
  document.getElementById('firstContainer').style.display = 'none';
  document.getElementById('secondContainer').style.display = 'block';

  //menu
  document.getElementById('section2ComputerMenu').style.display='block';

  document.getElementById('section1ComputerMenu').style.display = 'none';
  document.getElementsByClassName('red-bar').style.top ='3rem!important';

  document.querySelectorAll('.hideSectionOne').forEach(element => {
    element.style.display = "none";
  });

  document.querySelectorAll('.hideQuestionUI').forEach(element => {
    element.style.display = "block";
  });

  document.querySelectorAll('.hideSecondSection').forEach(element => {
    element.style.display = "block";
  });

  document.getElementById('section2MobileMenu').style.display = 'block';
  document.getElementById('section2MobileMenu').style.visibility = 'visible';

}

//second Section
function secondSection(){

  document.getElementById('section1MobileMenu').style.display = 'none';
  

  document.querySelectorAll('.hideQuestionUI').forEach(element => {
    element.style.display = "block";
    document.getElementById('bodyId').style.backgroundImage = "url('/questionImages/q0.jpg')";
});

document.querySelectorAll('.hideSecondSection').forEach(element => {
  element.style.display = "none";
});

}

//Question section

// Select the button by ID

