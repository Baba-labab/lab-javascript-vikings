// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health -= damage;

    }

}

// Viking


class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    /*attack() {
            return this.strength;
        } */

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else if(this.health <= 0 ) {
            return `${this.name} has died in act of combat`
        }
        }
    

    battleCry() {
        return `Odin Owns You All!`;
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else if (this.health <= 0) {
            return `A Saxon has died in combat`;
        }
    }
}

// War
 class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy =[];
    }
        addViking(viking) {
        this.vikingArmy.push(viking);
        }
        addSaxon(saxon) {
            this.saxonArmy.push(saxon);
        }
// Saxon chosen at random
//Saxon receiveDamage() equal to strength of a Viking
//Remove Dead Saxon from army
//return result of calling receiveDamage() of a Saxon
        vikingAttack() {
            let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)+1; 
            let randomSaxon = this.saxonArmy[randomSaxonIndex];

            let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)+1;
            let randomViking = this.vikingArmy[randomVikingIndex];

         randomSaxon.receiveDamage(randomViking.strength);
        
            if (randomSaxon.health <= 0) {
                this.saxonArmy.splice(randomSaxonIndex, 1);
            } else {
                return randomSaxon.health; 
            }
        }

//Saxon version of vikingAttack
//Viking receives damage equal to the strength of a Saxon
        saxonAttack() {

        }          
} 
