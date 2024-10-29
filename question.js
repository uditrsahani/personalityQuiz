function selectedOption() {
  document.getElementsByClassName(".option1").style.backgroundColor = "#cab5b4";
  console.log("clicked");
}

//list of questions
const questions = [
  {
    question:
      "You step through the door after a week filled with exciting projects and adventures. The comforting scent of home brings an instant sense of calm. What’s on your mind as you step into your Home Sweet Home?",
    answers: [
      {
        text1: "I can't wait to grab a snack and indulge a little.",
        appliance: "Refrigerator",
        score: 1,
      },
      {
        text2: "I’ll just take a deep breath and soak in this moment.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text3: "Time to kick off my shoes and get into something cozy.",
        appliance: "Washing Machine",
        score: 1,
      },
      {
        text4: "Let me check my phone—what did I miss today?",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
    ],
  },
  {
    question:
      "You settle your in the living room, the cozy atmosphere invites you to unwind. What’s next on your mind as you embrace the evening?",
    answers: [
      {
        text1: "I’m sinking into the couch - we’re becoming one.",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text2: "I’ll tidy up a few things before fully unwinding.",
        appliance: "Vacuum Cleaner",
        score: 2,
      },
      {
        text3: "Let’s catch up on my favorite show!",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4: "I’ll grab a blanket and settle into a good book.",
        appliance: "Refrigerator",
        score: 1,
      },
    ],
  },
  {
    question:
      "Changing out of your day clothes, you slip into something more comfortable.",
    answers: [
      {
        text1: "Or not... I’m gonna finish up some unfinished businesses.",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
      {
        text2: "My favorite pajamas, and back to the living room I go!",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text3: "Let’s get into some workout clothes and move a little.",
        appliance: "Washing Machine",
        score: 2,
      },
      {
        text4: "I’ll slip into loungewear and start planning my evening.",
        appliance: "Refrigerator",
        score: 1,
      },
    ],
  },
  {
    question:
      "Your stomach gives you a gentle reminder—it’s now dinner o’clock. Standing in the kitchen, how do you feel about dinner tonight?",
    answers: [
      {
        text1: "I’ll make a quick snack—something simple and satisfying.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text2: "I’m in the mood for a hearty homemade meal!",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text3: "Ordering takeout sounds perfect for tonight.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4: "I’ll reheat some leftovers or make something light.",
        appliance: "Refrigerator",
        score: 2,
      },
    ],
  },
  {
    question:
      "With dinner done, both you and your tummy are happy, what feels like the best way to unwind?",
    answers: [
      {
        text1: "I’m ready for a movie night!",
        appliance: "Rice Cooker",
        score: 2,
      },
      {
        text2: "I’ll curl up with a good book.",
        appliance: "Refrigerator",
        score: 1,
      },
      {
        text3:
          "Music or a podcast would be the perfect background for relaxing.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4: "I’ll just sit quietly and reflect on the day—what a week!",
        appliance: "Vacuum Cleaner",
        score: 2,
      },
    ],
  },
  {
    question:
      "As the day winds down, you head to the bathroom. You meet your reflection on the mirror.",
    answers: [
      {
        text1: "A quick shower will refresh me before bed.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text2: "I’m taking a long, luxurious bath with candles and music.",
        appliance: "Refrigerator",
        score: 2,
      },
      {
        text3: "Hot shower is what I need, to wash away all the fatigue.",
        appliance: "Washing Machine",
        score: 2,
      },
      {
        text4:
          "I’ll just brush my teeth and get ready for bed—it’s time to rest.",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
    ],
  },
  {
    question: "Now your feathery bed and pillows are calling to you.",
    answers: [
      {
        text1:
          "My bed! I’ve missed you so much! with that you fall asleep right away.",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
      {
        text2: "Let me reflect on the day’s highlights before I sleep.",
        appliance: "Refrigerator",
        score: 1,
      },
      {
        text3: "I’ll read for a bit until I’m ready to sleep.",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text4: "A quick meditation will help clear my mind before bed.",
        appliance: "Washing Machine",
        score: 2,
      },
    ],
  },
  {
    question:
      "After a restful night, you head to the kitchen to start your Saturday.",
    answers: [
      {
        text1: "I’ll make a hearty breakfast with all my favorites.",
        appliance: "Rice Cooker",
        score: 2,
      },
      {
        text2: "A quick, fresh smoothie sounds like a great way to energize.",
        appliance: "Refrigerator",
        score: 2,
      },
      {
        text3: "I’m in the mood for something light and simple.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4:
          "Brunch with pancakes and coffee—it’s going to be a great morning!",
        appliance: "Refrigerator",
        score: 1,
      },
    ],
  },
  {
    question:
      "With breakfast done, the morning sunlight fills the living room. You have the entire weekend to yourself. What’s your next move?",
    answers: [
      {
        text1: "I’ll grab my book and continue where I left off last night.",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text2: "I can’t linger, I have plans to go out today!",
        appliance: "Washing Machine",
        score: 2,
      },
      {
        text3: "Music is perfect for setting a relaxing tone.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4: "Let’s catch up on the news before diving into the day.",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
    ],
  },
  {
    question:
      "Last question: as you’re taking this test, what are you thinking about right now?",
    answers: [
      {
        text1:
          "I'm contemplating the best way to organize my space for the upcoming week.",
        appliance: "Refrigerator",
        score: 1,
      },
      {
        text2: "I just want to finish this as fast as I can.",
        appliance: "Washing Machine",
        score: 1,
      },
      {
        text3: "What is this? Is this a smudge on my screen?",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
      {
        text4: "The chores I’ll do so that I can fully relax later.",
        appliance: "Dishwasher",
        score: 1,
      },
    ],
  },
  {
    question:
      "11Last question: as you’re taking this test, what are you thinking about right now?",
    answers: [
      {
        text1:
          "I'm contemplating the best way to organize my space for the upcoming week.",
        appliance: "Refrigerator",
        score: 1,
      },
      {
        text2: "I just want to finish this as fast as I can.",
        appliance: "Washing Machine",
        score: 1,
      },
      {
        text3: "What is this? Is this a smudge on my screen?",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
      {
        text4: "The chores I’ll do so that I can fully relax later.",
        appliance: "Dishwasher",
        score: 1,
      },
    ],
  },
];

const questions2 = [
  {
    question:
      "You step through the door after a week filled with exciting projects and adventures. The comforting scent of home brings an instant sense of calm. What’s on your mind as you step into your Home Sweet Home?",
    answers: [
      {
        text1: "I can't wait to grab a snack and indulge a little.",
        appliance: "Refrigerator",
        score: 1,
      },
      {
        text2: "I’ll just take a deep breath and soak in this moment.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text3: "Time to kick off my shoes and get into something cozy.",
        appliance: "Washing Machine",
        score: 1,
      },
      {
        text4: "Let me check my phone—what did I miss today?",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
    ],
  },
  {
    question:
      "You settle your in the living room, the cozy atmosphere invites you to unwind. What’s next on your mind as you embrace the evening?",
    answers: [
      {
        text1: "I’m sinking into the couch - we’re becoming one.",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text2: "I’ll tidy up a few things before fully unwinding.",
        appliance: "Vacuum Cleaner",
        score: 2,
      },
      {
        text3: "Let’s catch up on my favorite show!",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4: "I’ll grab a blanket and settle into a good book.",
        appliance: "Refrigerator",
        score: 1,
      },
    ],
  },
  {
    question:
      "Changing out of your day clothes, you slip into something more comfortable.",
    answers: [
      {
        text1: "Or not... I’m gonna finish up some unfinished businesses.",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
      {
        text2: "My favorite pajamas, and back to the living room I go!",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text3: "Let’s get into some workout clothes and move a little.",
        appliance: "Washing Machine",
        score: 2,
      },
      {
        text4: "I’ll slip into loungewear and start planning my evening.",
        appliance: "Refrigerator",
        score: 1,
      },
    ],
  },
  {
    question:
      "Changing out of your day clothes, you slip into something more comfortable.",
    answers: [
      {
        text1: "Or not... I’m gonna finish up some unfinished businesses.",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
      {
        text2: "My favorite pajamas, and back to the living room I go!",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text3: "Let’s get into some workout clothes and move a little.",
        appliance: "Washing Machine",
        score: 2,
      },
      {
        text4: "I’ll slip into loungewear and start planning my evening.",
        appliance: "Refrigerator",
        score: 1,
      },
    ],
  },
  {
    question:
      "Your stomach gives you a gentle reminder—it’s now dinner o’clock. Standing in the kitchen, how do you feel about dinner tonight?",
    answers: [
      {
        text1: "I’ll make a quick snack—something simple and satisfying.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text2: "I’m in the mood for a hearty homemade meal!",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text3: "Ordering takeout sounds perfect for tonight.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4: "I’ll reheat some leftovers or make something light.",
        appliance: "Refrigerator",
        score: 2,
      },
    ],
  },
  {
    question:
      "Your stomach gives you a gentle reminder—it’s now dinner o’clock. Standing in the kitchen, how do you feel about dinner tonight?",
    answers: [
      {
        text1: "I’ll make a quick snack—something simple and satisfying.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text2: "I’m in the mood for a hearty homemade meal!",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text3: "Ordering takeout sounds perfect for tonight.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4: "I’ll reheat some leftovers or make something light.",
        appliance: "Refrigerator",
        score: 2,
      },
    ],
  },
  {
    question:
      "With dinner done, both you and your tummy are happy, what feels like the best way to unwind?",
    answers: [
      {
        text1: "I’m ready for a movie night!",
        appliance: "Rice Cooker",
        score: 2,
      },
      {
        text2: "I’ll curl up with a good book.",
        appliance: "Refrigerator",
        score: 1,
      },
      {
        text3:
          "Music or a podcast would be the perfect background for relaxing.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4: "I’ll just sit quietly and reflect on the day—what a week!",
        appliance: "Vacuum Cleaner",
        score: 2,
      },
    ],
  },
  {
    question:
      "With dinner done, both you and your tummy are happy, what feels like the best way to unwind?",
    answers: [
      {
        text1: "I’m ready for a movie night!",
        appliance: "Rice Cooker",
        score: 2,
      },
      {
        text2: "I’ll curl up with a good book.",
        appliance: "Refrigerator",
        score: 1,
      },
      {
        text3:
          "Music or a podcast would be the perfect background for relaxing.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4: "I’ll just sit quietly and reflect on the day—what a week!",
        appliance: "Vacuum Cleaner",
        score: 2,
      },
    ],
  },
  {
    question:
      "As the day winds down, you head to the bathroom. You meet your reflection on the mirror.",
    answers: [
      {
        text1: "A quick shower will refresh me before bed.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text2: "I’m taking a long, luxurious bath with candles and music.",
        appliance: "Refrigerator",
        score: 2,
      },
      {
        text3: "Hot shower is what I need, to wash away all the fatigue.",
        appliance: "Washing Machine",
        score: 2,
      },
      {
        text4:
          "I’ll just brush my teeth and get ready for bed—it’s time to rest.",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
    ],
  },
  {
    question:
      "As the day winds down, you head to the bathroom. You meet your reflection on the mirror.",
    answers: [
      {
        text1: "A quick shower will refresh me before bed.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text2: "I’m taking a long, luxurious bath with candles and music.",
        appliance: "Refrigerator",
        score: 2,
      },
      {
        text3: "Hot shower is what I need, to wash away all the fatigue.",
        appliance: "Washing Machine",
        score: 2,
      },
      {
        text4:
          "I’ll just brush my teeth and get ready for bed—it’s time to rest.",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
    ],
  },
  {
    question: "Now your feathery bed and pillows are calling to you.",
    answers: [
      {
        text1:
          "My bed! I’ve missed you so much! with that you fall asleep right away.",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
      {
        text2: "Let me reflect on the day’s highlights before I sleep.",
        appliance: "Refrigerator",
        score: 1,
      },
      {
        text3: "I’ll read for a bit until I’m ready to sleep.",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text4: "A quick meditation will help clear my mind before bed.",
        appliance: "Washing Machine",
        score: 2,
      },
    ],
  },
  {
    question: "Now your feathery bed and pillows are calling to you.",
    answers: [
      {
        text1:
          "My bed! I’ve missed you so much! with that you fall asleep right away.",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
      {
        text2: "Let me reflect on the day’s highlights before I sleep.",
        appliance: "Refrigerator",
        score: 1,
      },
      {
        text3: "I’ll read for a bit until I’m ready to sleep.",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text4: "A quick meditation will help clear my mind before bed.",
        appliance: "Washing Machine",
        score: 2,
      },
    ],
  },
  {
    question:
      "After a restful night, you head to the kitchen to start your Saturday.",
    answers: [
      {
        text1: "I’ll make a hearty breakfast with all my favorites.",
        appliance: "Rice Cooker",
        score: 2,
      },
      {
        text2: "A quick, fresh smoothie sounds like a great way to energize.",
        appliance: "Refrigerator",
        score: 2,
      },
      {
        text3: "I’m in the mood for something light and simple.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4:
          "Brunch with pancakes and coffee—it’s going to be a great morning!",
        appliance: "Refrigerator",
        score: 1,
      },
    ],
  },
  {
    question:
      "After a restful night, you head to the kitchen to start your Saturday.",
    answers: [
      {
        text1: "I’ll make a hearty breakfast with all my favorites.",
        appliance: "Rice Cooker",
        score: 2,
      },
      {
        text2: "A quick, fresh smoothie sounds like a great way to energize.",
        appliance: "Refrigerator",
        score: 2,
      },
      {
        text3: "I’m in the mood for something light and simple.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4:
          "Brunch with pancakes and coffee—it’s going to be a great morning!",
        appliance: "Refrigerator",
        score: 1,
      },
    ],
  },
  {
    question:
      "With breakfast done, the morning sunlight fills the living room. You have the entire weekend to yourself. What’s your next move?",
    answers: [
      {
        text1: "I’ll grab my book and continue where I left off last night.",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text2: "I can’t linger, I have plans to go out today!",
        appliance: "Washing Machine",
        score: 2,
      },
      {
        text3: "Music is perfect for setting a relaxing tone.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4: "Let’s catch up on the news before diving into the day.",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
    ],
  },
  {
    question:
      "With breakfast done, the morning sunlight fills the living room. You have the entire weekend to yourself. What’s your next move?",
    answers: [
      {
        text1: "I’ll grab my book and continue where I left off last night.",
        appliance: "Rice Cooker",
        score: 1,
      },
      {
        text2: "I can’t linger, I have plans to go out today!",
        appliance: "Washing Machine",
        score: 2,
      },
      {
        text3: "Music is perfect for setting a relaxing tone.",
        appliance: "Dishwasher",
        score: 1,
      },
      {
        text4: "Let’s catch up on the news before diving into the day.",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
    ],
  },
  {
    question:
      "Last question: as you’re taking this test, what are you thinking about right now?",
    answers: [
      {
        text1:
          "I'm contemplating the best way to organize my space for the upcoming week.",
        appliance: "Refrigerator",
        score: 1,
      },
      {
        text2: "I just want to finish this as fast as I can.",
        appliance: "Washing Machine",
        score: 1,
      },
      {
        text3: "What is this? Is this a smudge on my screen?",
        appliance: "Vacuum Cleaner",
        score: 1,
      },
      {
        text4: "The chores I’ll do so that I can fully relax later.",
        appliance: "Dishwasher",
        score: 1,
      },
    ],
  },
];

let questionNumber = 1;
//score counting variables
let refrigerator = 0;
let washingMachine = 0;
let vacuumCleaner = 0;
let dishwasher = 0;
let riceCooker = 0;
let resultTitle = document.getElementById("resultTitle");
let questionImage = "";

// //next question
function nextQuestion(event) {
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
  if(questionNumber == 0){
    document.querySelectorAll('.arrow').forEach(element => {
      element.style.display = "none";
    });
  }
  document.getElementById("questionText").innerText =
    questions[questionNumber]["question"];
  document.getElementById("option1Text").innerText =
    questions[questionNumber]["answers"][0]["text1"];
  document.getElementById("option2Text").innerText =
    questions[questionNumber]["answers"][1]["text2"];
  document.getElementById("option3Text").innerText =
    questions[questionNumber]["answers"][2]["text3"];
  document.getElementById("option4Text").innerHTML =
    questions[questionNumber]["answers"][3]["text4"];
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

function resultSection() {
  document.getElementById("bodyId").style.backgroundImage =
    "url('/questionImages/q9.jpg')";

  document.querySelectorAll(".hideResultSection").forEach((element) => {
    element.style.display = "block";
  });

  let resultDescription = document.getElementById("resultDescription");

  //hide all accordions
  let refrigeratorAccordion = document.getElementById("accordion-refrigerator");
  refrigeratorAccordion.style.display = "none";
  let washingMachineAccordion = document.getElementById(
    "accordion-washingMachine"
  );
  washingMachineAccordion.style.display = "none";
  let vacuumCleanerAccordion = document.getElementById(
    "accordion-vacuumCleaner"
  );
  vacuumCleanerAccordion.style.display = "none";
  let riceCookerAccordion = document.getElementById("accordion-riceCooker");
  riceCookerAccordion.style.display = "none";
  let dishwasherAccordion = document.getElementById("accordion-dishwasher");
  dishwasherAccordion.style.display = "none";

  //hide all slides
  let refrigeratorSlider = document.getElementById("refrigerator-slider");
  refrigeratorSlider.style.display = "none";

  let washingMachineSlider = document.getElementById("washingMachine-slider");
  washingMachineSlider.style.display = "none";

  let dishwasherSlider = document.getElementById("dishwasher-slider");
  dishwasherSlider.style.display = "none";

  let vacuumCleanerSlider = document.getElementById("vacuumCleaner-slider");
  vacuumCleanerSlider.style.display = "none";

  let riceCookerSlider = document.getElementById("riceCooker-slider");
  riceCookerSlider.style.display = "none";

  if (
    refrigerator >= washingMachine &&
    refrigerator >= vacuumCleaner &&
    refrigerator >= dishwasher &&
    refrigerator >= riceCooker
  ) {
    refrigeratorAccordion.style.display = "block";
    refrigeratorSlider.style.display = "block";

    resultTitle.innerText = "Refrigerator";
    resultDescription.innerText = `Just like a refrigerator, you are all about keeping things fresh and organized. Your knack for preserving the quality of both your environment and relationships makes you a steady and reliable presence. You ensure everything around you run smoothly, allowing you and those close to you to enjoy life without unnecessary stress.

Your practical and nurturing side shines through in the way you maintain a well-organized home, making it a welcoming space for family and friends. Whether it's preparing a delicious meal or ensuring everyone feels cared for, you’re the one people count on.

Your calm and thoughtful approach makes you someone people turn to when they need a sense of stability. Keep embracing your strength in bringing order and harmony—your ability to create comfort and security is something truly special!`;
  } else if (
    washingMachine >= refrigerator &&
    washingMachine >= vacuumCleaner &&
    washingMachine >= dishwasher &&
    washingMachine >= riceCooker
  ) {
    washingMachineAccordion.style.display = "block";
    washingMachineSlider.style.display = "block";

    resultTitle.innerText = "Washing Machine";
    resultDescription.innerText = `Like a washing machine, you’re all about keeping things flowing smoothly. You’re efficient and practical, making sure that tasks are handled quickly so that you can focus on what matters most—enjoying life and spending time with the people you care about.

You know how to balance work and relaxation, and your sense of routine allows you to manage responsibilities without missing out on the fun. People admire how you keep everything running smoothly, ensuring that even the busiest days feel manageable.

Your steady approach to life makes you a source of comfort for those around you. Keep embracing your natural ability to create balance—your mix of productivity and relaxation is truly something to be admired!`;
  } else if (
    vacuumCleaner >= refrigerator &&
    vacuumCleaner >= washingMachine &&
    vacuumCleaner >= dishwasher &&
    vacuumCleaner >= riceCooker
  ) {
    vacuumCleanerAccordion.style.display = "block";
    vacuumCleanerSlider.style.display = "block";

    resultTitle.innerText = "Vacuum Cleaner";
    resultDescription.innerText = `Like a vacuum cleaner, you are always focused on keeping things neat and clutter-free. You’re someone who enjoys taking care of the little details, making sure that everything is in place so that life runs more smoothly.

Your attention to your surroundings allows you to create a space where others feel comfortable and at ease. Whether you’re working quietly in the background or actively helping, you have a talent for making life feel more organized and peaceful.

Your thoughtful nature makes you a valuable presence in any situation. Keep embracing your role as someone who brings clarity and order to everyday life—your knack for making things better is something that everyone appreciates!
`;
  } else if (
    dishwasher >= refrigerator &&
    dishwasher >= washingMachine &&
    dishwasher >= vacuumCleaner &&
    dishwasher >= riceCooker
  ) {
    dishwasherAccordion.style.display = "block";
    dishwasherSlider.style.display = "block";

    resultTitle.innerText = "Dishwasher";
    resultDescription.innerText = `Like a dishwasher, you excel at bringing order and ease to everyday life. Your thoughtful approach ensures that tasks are handled efficiently, leaving more time to enjoy what really matters: spending quality time with friends and family.

You know how to make life flow smoothly, from preparing meals to tidying up afterward. Your ability to manage the details means that gatherings are always enjoyable, and everyone can focus on the fun without worrying about the cleanup.

Your thoughtful approach to life ensures that those around you can count on you when things get hectic. Keep embracing your role as someone who simplifies and enhances experiences—your skill in bringing order and ease to everyday life is truly remarkable!`;
  } else if (
    riceCooker >= refrigerator &&
    riceCooker >= washingMachine &&
    riceCooker >= vacuumCleaner &&
    riceCooker >= dishwasher
  ) {
    riceCookerAccordion.style.display = "block";
    riceCookerSlider.style.display = "block";

    resultTitle.innerText = "Rice Cooker";
    resultDescription.innerText = `Like a rice cooker, you are a warm and nurturing presence, bringing comfort and joy to those around you. Your creativity and care shine through in everything you do, whether you’re preparing a meal or fostering connections.

You have a unique ability to turn ordinary moments into cherished memories, whether through cooking or simply being present for others. Your nurturing spirit helps create an atmosphere where everyone feels valued and cared for.

Your calm and reliable nature makes you a source of comfort for friends and family. Keep embracing your role as a provider of warmth and connection—your ability to enrich the lives of those around you is truly heartwarming!`;
  } else {
    highest = "Not working"; // This will execute if all appliances have equal values or any issue occurs
  }
}

//back button
function backButton() {

  if (questionNumber == 1) {
    alert("This is the first question");
    
  } else {
    questionNumber = questionNumber - 2;
    nextQuestion();
  }

  
}

//hide back button arrows
document.getElementById("arrow1").style.display = "none";
document.getElementById("arrow2").style.display = "none";

//score counting
function scoreCounting() {
  if (questionNumber) {
  }
}
