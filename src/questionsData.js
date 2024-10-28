// src/data/questionsData.js
const questionsData = [
  {
    type: "para",
   para: "WElcome to our gym lets get to know your fitness goals so we can help you achieve them!",
  },
  {
    type: "text",
    question: "What is your name?",
  },
  {
    type: "text",
    question: "How often do you work?",
  },
  {
    type: "yesNo",
    question: "How Old are you?",
  },
  
  {
    type: "text",
    question: "What time of day do you prefer to work out?",
  },

    {
      type: "multipleChoice",
      question: "What is your fitness goal?",
      options: ["Lose Weight", "Build Muscle", "Improve Endurance", "Get six pack"],
    },
    {
      type: "yesNo",
      question: "Do you have any medical conditions?",
    },
    {
      type: "multipleChoice",
      question: "What type of workout are you most intersted in?",
      options: ["Weight  Training", "Cardio", "Yoga/Pilates", "Personal Training"],
    }, 
     {
      type: "text",
      question: "How did You Hear About Us?",
    },
  
    {
      type: "statement",
      statement: "Thank you for completing the survey!",
    },
  ];
  
  export default questionsData;
  