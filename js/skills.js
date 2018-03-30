function Skills(board) {
  this._skillSet = [
    {
      //Starting point
      skillName: "None",
      activeSkill: true,
      receiveDamage: true
    },
    {
      //Gained after eating 50 Iron Snacks
      skillName: "Helix",
      activeSkill: false,
      receiveDamage: true,
      useFor: 2 //Number of times it can be used
    },
    {
      //Gained after eating 100 Iron Snacks
      skillName: "Iron Immunity",
      activeSkill: false,
      receiveDamage: false,
      timeSpan: 5 //In seconds, the time of skill duration
    }
  ];
}




