SKILL_SET = [
  {
    skillName: "None",
    receiveDamage: true,
    action: function(player){
      console.log("None");
    }
  },
  {
    skillName: "SpeedUp",
    receiveDamage: true,
    timeSpan: 5000,
    speed: 3,
    action: function(player){
      console.log("SpeedUp activated");
    }
  },
  {
    //Rotating blade
    skillName: "Helix",
    receiveDamage: true,
    timeSpan: 5000,
    strength: 3,
    action: function(player){
      console.log("Helix activated");
    }
  },
  {
    skillName: "Iron Immunity",
    receiveDamage: false,
    timeSpan: 3000,
    action: function(player){
      console.log("Iron Immunity activated");
    }
  }
];
