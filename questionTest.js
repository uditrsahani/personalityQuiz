function nextQuestion(event) {
  event.stopPropagation();
  alert(questionNumber);
  try {
    var labelText = event.target.textContent.trim();
    console.log(labelText);
  } catch (err) {
    console.log("");
  }
  console.log(questionNumber);
  if (questionNumber == 1) {
    //show back button arrows
    document.getElementById("arrow1").style.display = "block";
    document.getElementById("arrow2").style.display = "block";
    document.getElementById("bodyId").style.backgroundImage =
      "url('/questionImages/q1.jpg')";
  } else if (questionNumber == 2) {
    document.getElementById("bodyId").style.backgroundImage =
      "url('/questionImages/q2.jpg')";
  } else if (questionNumber == 3) {
    document.getElementById("bodyId").style.backgroundImage =
      "url('/questionImages/q3.jpg')";
  } else if (questionNumber == 4) {
    document.getElementById("bodyId").style.backgroundImage =
      "url('/questionImages/q4.jpg')";
  } else if (questionNumber == 5) {
    document.getElementById("bodyId").style.backgroundImage =
      "url('/questionImages/q5.jpg')";
  } else if (questionNumber == 6) {
    document.getElementById("bodyId").style.backgroundImage =
      "url('/questionImages/q6.jpg')";
  } else if (questionNumber == 7) {
    document.getElementById("bodyId").style.backgroundImage =
      "url('/questionImages/q7.jpg')";
  } else if (questionNumber == 8) {
    document.getElementById("bodyId").style.backgroundImage =
      "url('/questionImages/q8.jpg')";
  } else if (questionNumber == 9) {
    document.getElementById("bodyId").style.backgroundImage =
      "url('/questionImages/q9.jpg')";
  } else {
    document.getElementById("bodyId").style.backgroundImage =
      "url('/questionImages/q0.jpg')";
  }
  if (questionNumber == 0) {
    document.querySelectorAll(".arrow").forEach((element) => {
      element.style.display = "none";
    });
  }

  //question replacement
  var questionTextParent = document.getElementById("questionText");
  questionTextParent.innerText = "";
  var questionText = questions[questionNumber]["question"];
  questionTextParent.innerText = questionText;

  //option 1 replacement
  var option1Parent = document.getElementById("option1Text");
  option1Parent.innerText = "";
  var option1Text = questions[questionNumber]["answers"][0]["text1"];
  var option1Textnode = document.createTextNode(option1Text);

  //input option 1
  const radioInput1 = document.createElement("input");
  // Set the attributes for the radio input
  radioInput1.type = "radio";
  radioInput1.className = "radio-icon";
  //parent
  option1Parent = document.getElementById("option1Text");
  option1Parent.appendChild(radioInput1);

  option1Parent.appendChild(option1Textnode);

  //option 2 replacement
  var option2Parent = document.getElementById("option2Text");
  option2Parent.innerText = "";
  var option2Text = questions[questionNumber]["answers"][1]["text2"];
  var option2Textnode = document.createTextNode(option2Text);

  //input option 2
  const radioInput2 = document.createElement("input");
  // Set the attributes for the radio input
  radioInput2.type = "radio";
  radioInput2.className = "radio-icon2";
  //parent
  option2Parent = document.getElementById("option2Text");
  option2Parent.appendChild(radioInput2);

  option2Parent.appendChild(option2Textnode);

  //option 3 replacement
  var option3Parent = document.getElementById("option3Text");
  option3Parent.innerText = "";
  var option3Text = questions[questionNumber]["answers"][2]["text3"];
  var option3Textnode = document.createTextNode(option3Text);

  //input option 3
  const radioInput3 = document.createElement("input");
  // Set the attributes for the radio input
  radioInput3.type = "radio";
  radioInput3.className = "radio-icon3";
  //parent
  option3Parent = document.getElementById("option3Text");
  option3Parent.appendChild(radioInput3);

  option3Parent.appendChild(option3Textnode);

  //option 4 replacement
  var option4Parent = document.getElementById("option4Text");
  option4Parent.innerText = "";
  var option4Text = questions[questionNumber]["answers"][3]["text4"];
  var option4Textnode = document.createTextNode(option4Text);

  //input option 4
  const radioInput4 = document.createElement("input");
  // Set the attributes for the radio input
  radioInput4.type = "radio";
  radioInput4.className = "radio-icon4";
  //parent
  option4Parent = document.getElementById("option4Text");
  option4Parent.appendChild(radioInput4);

  option4Parent.appendChild(option4Textnode);

  document.getElementById("pagination").innerText =
    questionNumber + 1 + " / 10";

  questionNumber++;

  //score counting logic
  let option1 = document.getElementById("option1Text");
  let option2 = document.getElementById("option1Text");
  let option3 = document.getElementById("option1Text");
  let option4 = document.getElementById("option1Text");

  //option1
  if (labelText == "I can't wait to grab a snack and indulge a little.") {
    refrigerator = refrigerator + 1;
  } else if (labelText == "I’m sinking into the couch - we’re becoming one.") {
    riceCooker = riceCooker + 1;
  } else if (
    labelText == "Or not... I’m gonna finish up some unfinished businesses."
  ) {
    vacuumCleaner = vacuumCleaner + 1;
  } else if (
    labelText == "I’ll make a quick snack—something simple and satisfying."
  ) {
    dishwasher = dishwasher + 1;
  } else if (labelText == "I’m ready for a movie night!") {
    riceCooker = riceCooker + 1;
  } else if (labelText == "A quick shower will refresh me before bed.") {
    dishwasher = dishwasher + 1;
  } else if (
    labelText ==
    "My bed! I’ve missed you so much! with that you fall asleep right away."
  ) {
    vacuumCleaner = vacuumCleaner + 1;
  } else if (
    labelText == "I’ll make a hearty breakfast with all my favorites."
  ) {
    riceCooker = riceCooker + 1;
  } else if (
    labelText == "I’ll grab my book and continue where I left off last night."
  ) {
    riceCooker = riceCooker + 1;
  } else if (
    labelText ==
    "I'm contemplating the best way to organize my space for the upcoming week."
  ) {
    refrigerator = refrigerator + 1;
  } //option2
  else if (
    labelText == "I’ll just take a deep breath and soak in this moment."
  ) {
    dishwasher = dishwasher + 1;
  } else if (labelText == "I’ll tidy up a few things before fully unwinding.") {
    vacuumCleaner = vacuumCleaner + 2;
  } else if (
    labelText == "My favorite pajamas, and back to the living room I go!"
  ) {
    riceCooker = riceCooker + 1;
  } else if (labelText == "I’m in the mood for a hearty homemade meal!") {
    riceCooker = riceCooker + 1;
  } else if (labelText == "I’ll curl up with a good book.") {
    refrigerator = refrigerator + 1;
  } else if (
    labelText == "I’m taking a long, luxurious bath with candles and music."
  ) {
    refrigerator = refrigerator + 2;
  } else if (
    labelText == "Let me reflect on the day’s highlights before I sleep."
  ) {
    refrigerator = refrigerator + 1;
  } else if (
    labelText == "A quick, fresh smoothie sounds like a great way to energize."
  ) {
    refrigerator = refrigerator + 2;
  } else if (labelText == "I can’t linger, I have plans to go out today!") {
    washingMachine = washingMachine + 2;
  } else if (labelText == "I just want to finish this as fast as I can.") {
    washingMachine = washingMachine + 1;
  } //option3
  else if (
    labelText == "Time to kick off my shoes and get into something cozy."
  ) {
    washingMachine = washingMachine + 1;
  } else if (labelText == "Let’s catch up on my favorite show!") {
    dishwasher = dishwasher + 1;
  } else if (
    labelText == "Let’s get into some workout clothes and move a little."
  ) {
    washingMachine = washingMachine + 2;
  } else if (labelText == "Ordering takeout sounds perfect for tonight.") {
    dishwasher = dishwasher + 1;
  } else if (
    labelText ==
    "Music or a podcast would be the perfect background for relaxing."
  ) {
    dishwasher = dishwasher + 1;
  } else if (
    labelText == "Hot shower is what I need, to wash away all the fatigue."
  ) {
    washingMachine = washingMachine + 2;
  } else if (labelText == "I’ll read for a bit until I’m ready to sleep.") {
    riceCooker = riceCooker + 1;
  } else if (labelText == "I’m in the mood for something light and simple.") {
    dishwasher = dishwasher + 1;
  } else if (labelText == "Music is perfect for setting a relaxing tone.") {
    dishwasher = dishwasher + 1;
  } else if (labelText == "What is this? Is this a smudge on my screen?") {
    vacuumCleaner = vacuumCleaner + 1;
  } //option4
  else if (labelText == "Let me check my phone—what did I miss today?") {
    vacuumCleaner = vacuumCleaner + 1;
  } else if (labelText == "I’ll grab a blanket and settle into a good book.") {
    refrigerator = refrigerator + 1;
  } else if (
    labelText == "I’ll slip into loungewear and start planning my evening."
  ) {
    refrigerator = refrigerator + 1;
  } else if (
    labelText == "’ll reheat some leftovers or make something light."
  ) {
    refrigerator = refrigerator + 2;
  } else if (
    labelText == "I’ll just sit quietly and reflect on the day—what a week!"
  ) {
    vacuumCleaner = vacuumCleaner + 2;
  } else if (
    labelText ==
    "I’ll just brush my teeth and get ready for bed—it’s time to rest."
  ) {
    vacuumCleaner = vacuumCleaner + 1;
  } else if (
    labelText == "A quick meditation will help clear my mind before bed."
  ) {
    washingMachine = washingMachine + 2;
  } else if (
    labelText ==
    "Brunch with pancakes and coffee—it’s going to be a great morning!"
  ) {
    refrigerator = refrigerator + 1;
  } else if (
    labelText == "Let’s catch up on the news before diving into the day."
  ) {
    vacuumCleaner = vacuumCleaner + 1;
  } else if (
    labelText == "The chores I’ll do so that I can fully relax later."
  ) {
    dishwasher = dishwasher + 1;
  }

  if (questionNumber == 11) {
    document.querySelectorAll(".hideQuestionUI").forEach((element) => {
      element.style.display = "none";
    });
    resultSection();
  }
}
