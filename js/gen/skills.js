SKILL_SET = [
  {
    //Gained after eating 50 points in Iron Snacks
    skillName: "None",
    receiveDamage: true,
    action: function(player){
      console.log("Helix activated");
    }
  },
  {
    //Gained after eating 50 points in Iron Snacks
    skillName: "Helix",
    receiveDamage: true,
    timeSpan: 5000,
    strength: 3,
    action: function(player){
      console.log("Helix activated");
    }
  },
  {
    //Gained after eating 100 points in Iron Snacks
    skillName: "Iron Immunity",
    receiveDamage: false,
    timeSpan: 3000,
    action: function(player){
      console.log("Iron Immunity activated");
    }
  }
];
