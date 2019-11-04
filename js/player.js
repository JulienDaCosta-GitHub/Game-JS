let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        //Who attack first ?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        let playerAttack = function () {
            let calcBaseDamage;
            if (player.mana > 0) {
                calcBaseDamage = player.strength * player.mana / 1000;
            }
            else {
                calcBaseDamage = player.strength * player.agility / 1000;
            }
            // TO get different damage every attacks
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            //How many time we attack the ennemy
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;

        }

        //Ennemy attacks
        let enemyAttack = function () {
            let calcBaseDamage;
            if (ennemy.mana > 0) {
                calcBaseDamage = ennemy.strength * ennemy.mana / 1000;
            }
            else {
                calcBaseDamage = ennemy.strength * ennemy.agility / 1000;
            }
            // TO get different damage every attacks
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            //How many time we attack the ennemy
            let numberOfHits = Math.floor(Math.random() * Math.floor(ennemy.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;

        }
        //get ennemy and player health
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-ennemy");

        //initiate attacks
        if (getPlayerSpeed >= getEnnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");

            //check if the ennemy is dead
            if (enemy.health <= 0) {
                alert("You win! Refresh browser to play again.");
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                //ennemy attacks ! 
                let enemyAttackValues = ennemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");

                //check if the enemy is dead
                if (player.health <= 0) {
                    alert("You loose! Refresh browser to play again.");
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: 0' + ennemy.health;
                } else {
                    //If enemy didnt kill us 
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        }
        // THE opposite ( when enemy is fatser he attacks first)
        else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("You hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");


            if (player.health <= 0) {
                alert("You win! Refresh browser to play again.");
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                // attacks ! 
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("player hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");

                //check if the player is dead
                if (enemy.health <= 0) {
                    alert("You loose! Refresh browser to play again.");
                    getEnemyHealth.innerHTML = 'Health: 0';
                    getPlayerHealth.innerHTML = 'Health: 0' + player.health;
                } else {
                    //If player didnt kill ennemy 
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
            }
        }
    }

}

