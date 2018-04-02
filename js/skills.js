SKILL_SET = [
  {
    //Starting point
    skillName: "None",
    receiveDamage: true,
    timeSpan: false,
    action: function(player){
      console.log("You do not have any skills! Too bad :)");
    }
  },
  {
    //Gained after eating 50 points in Iron Snacks
    skillName: "Helix",
    receiveDamage: true,
    timeSpan: 5000,
    strength: 3,
    action: function(player){
      console.log("helix activated");
    }
  },
  {
    //Gained after eating 100 points in Iron Snacks
    skillName: "Iron Immunity",
    receiveDamage: false,
    timeSpan: 3000,
    action: function(player){
      return;
    }
  }
];

