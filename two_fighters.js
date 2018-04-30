function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

let fighter1 = new Fighter("Lew", 10, 2)
let fighter2 = new Fighter("Harry", 5, 4)

console.log(fighter1);

function declareWinner(fighter1, fighter2, firstAttacker) {
  
  return "Write your code here";
}
// declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew")


//
// Lew attacks Harry; Harry now has 3 health.
// Harry attacks Lew; Lew now has 6 health.
// Lew attacks Harry; Harry now has 1 health.
// Harry attacks Lew; Lew now has 2 health.
// Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
