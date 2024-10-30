function firstSection(){
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

