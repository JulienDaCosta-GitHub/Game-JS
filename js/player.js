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
    calcAttack: function() {
        //Who attack first ?
        let getPlayerSpeed = player.speed;
        let getEnnemySpeed = ennemy.speed;
        let playerAttack = function() {
            let calcBaseDamage;
            if(player.mana > 0){
                calcBaseDamage = player.strength * player.mana /1000;
            }
            else{
                calcBaseDamage = player.strength * player.agility /1000;
            }
            // TO get different damage every attacks
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
    
            //How many time we attack the ennemy
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) +1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
    
        }
    
        //Ennemy attacks
        let ennemyAttack = function() {
            let calcBaseDamage;
            if(ennemy.mana > 0){
                calcBaseDamage = ennemy.strength * ennemy.mana /1000;
            }
            else{
                calcBaseDamage = ennemy.strength * ennemy.agility /1000;
            }
            // TO get different damage every attacks
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
    
            //How many time we attack the ennemy
            let numberOfHits = Math.floor(Math.random() * Math.floor(ennemy.agility / 10) / 2) +1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
            
        }
        //get ennemy and player health
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnnemyHealth = document.querySelector(".health-ennemy");
    
        //initiate attacks
        if (getPlayerSpeed >= getEnnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            ennemy.health = ennemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
    
            //check if the ennemy is dead
            if (ennemy.health <= 0 ) {
                alert("You win! Refresh browser to play again.");
                getPlayerHealth.innerHTML = 'Health: ' + player.health; 
                getEnnemyHealth.innerHTML = 'Health: 0';  
            }else{
                getEnnemyHealth.innerHTML = 'Health: ' + ennemy.health; 
                //ennemy attacks ! 
                let ennemyAttackValues = ennemyAttack();
                let totalDamage = ennemyAttackValues[0] * ennemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("ennemy hit " + ennemyAttackValues[0] + " damage " + ennemyAttackValues[1] + " times.");
    
                //check if the ennemy is dead
                if (player.health <= 0 ) {
                    alert("You loose! Refresh browser to play again.");
                    getPlayerHealth.innerHTML = 'Health: 0'; 
                    getEnnemyHealth.innerHTML = 'Health: 0' + ennemy.health;  
                }else{
                    //If ennemy didnt kill us 
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
         }
            // THE opposite ( when ennemy is fatser he attacks first)
         else if (getEnnemySpeed >= getPlayerSpeed) {
            let ennemyAttackValues = ennemyAttack();
            let totalDamage = ennemyAttackValues[0] * ennemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("You hit " + ennemyAttackValues[0] + " damage " + ennemyAttackValues[1] + " times.");
    
            
            if (player.health <= 0 ) {
                alert("You win! Refresh browser to play again.");
                getEnnemyHealth.innerHTML = 'Health: ' + ennemy.health; 
                getPlayerHealth.innerHTML = 'Health: 0';  
            }else{
                getPlayerHealth.innerHTML = 'Health: ' + player.health; 
                // attacks ! 
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                ennemy.health = ennemy.health - totalDamage;
                alert("player hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
    
                //check if the player is dead
                if (ennemy.health <= 0 ) {
                    alert("You loose! Refresh browser to play again.");
                    getEnnemyHealth.innerHTML = 'Health: 0'; 
                    getPlayerHealth.innerHTML = 'Health: 0' + player.health;  
                }else{
                    //If player didnt kill ennemy 
                    getEnnemyHealth.innerHTML = 'Health: ' + ennemy.health;
                }
            }
         }
    }
    
}

