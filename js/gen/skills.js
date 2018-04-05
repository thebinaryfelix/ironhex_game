SKILL_SET = [
  {
    //Default skill properties
    skillName: "None",
    receiveDamage: true,
    credit: 0,
    action: function(player) {
      //Code here...
    }
  },
  {
    //DESCRIPTION: Timed immunity for actual player
    skillName: "Iron Immunity",
    receiveDamage: false,
    credit: 50,
    action: function(player) {
      console.log("Iron Immunity Activated");
      player.skillPoints -= this.credit;
      player.receiveDamage = this.receiveDamage;
      setTimeout(
        function() {
          player.receiveDamage = true;
        }.bind(this),
        3000
      );
    }
  },
  {
    //DESCRIPTION: Increases player speed by *3
    skillName: "SpeedUp",
    receiveDamage: true,
    credit: 100,
    speed: 3,
    action: function(player) {
      console.log("SpeedUp Activated");
      player.skillPoints -= this.credit;
      player.speed *= this.speed;
      setTimeout(
        function() {
          player.speed = SPEED;
          player.receiveDamage = true;
        }.bind(this),
        3000
      );
    }
  },
  {
    //DESCRIPTION: Breaks other player's defense
    skillName: "Helix",
    receiveDamage: true,
    credit: 150,
    strength: 3,
    action: function(player) {
      console.log("Helix Activated");
      player.skillPoints -= this.credit;
      player.overrideDefense = true;
      debugger;
      player.strength *= this.strength;
      setTimeout(
        function() {
          player.receiveDamage = true;
          player.overrideDefense = false;
          player.strength = player.life * 1.5;
        }.bind(this),
        3000
      );
    }
  }
];
