"use strict";

function fight() {
	let hero = prompt("Choose you hero!"); //Asks for hero name
	let monster = prompt("Name the Monster you are fighting!"); //Asks for monster name

	// set health for both
	let villainHealth = 50;
	let heroHealth = 50;

	// empty string for both hero and monster messages
	let heroMessage;
	let monsterMessage;

	// while loop runs while both hero and monster health is greater then 10
	while (heroHealth > 0 && villainHealth > 0) {
		// picks a random number between 1 and 20 for hero and monster dice roll
		let heroRoll = Math.floor(Math.random() * 20) + 1;
		let monsterRoll = Math.floor(Math.random() * 20) + 1;

		// if else statments that check for both hero and monster dice rolls
		if (heroRoll === 1 || heroRoll === 2) {
			heroHealth -= 5;
			heroMessage = `${hero} accidentally stab themselves`;
		} else if (heroRoll >= 3 && heroRoll <= 10) {
			villainHealth -= 0;
			heroMessage = `${hero} missed.`;
		} else if (heroRoll >= 11 && heroRoll <= 18) {
			villainHealth -= 10;
			heroMessage = `Hit! ${hero} made a hit.`;
		} else if (heroRoll === 19 || heroRoll === 20) {
			villainHealth -= 20;
			heroMessage = `Critical hit! ${hero} made a critical attack!`;
		}

		if (monsterRoll === 1 || monsterRoll === 2) {
			villainHealth -= 5;
			monsterMessage = `${monster} accidentally stab themselves`;
		} else if (monsterRoll >= 3 && monsterRoll <= 10) {
			heroHealth -= 0;
			monsterMessage = `${monster} missed.`;
		} else if (monsterRoll >= 11 && monsterRoll <= 18) {
			heroHealth -= 10;
			monsterMessage = `Hit! ${monster} made a hit.`;
		} else if (monsterRoll === 19 || monsterRoll === 20) {
			heroHealth -= 20;
			monsterMessage = `Critical hit! ${monster} made a critical attack!`;
		}

		alert(
			`${heroMessage}\n${monsterMessage}\n${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`,
		);

		// checks if monster or hero have reached <= 0
		if (villainHealth <= 0 && villainHealth < heroHealth) {
			alert(`${hero} defeated ${monster}, ${hero} saves the world!!`);
		} else if (heroHealth <= 0 && heroHealth < villainHealth) {
			alert(`${monster} defeated ${hero}, ${monster} now rules the world!!`);
		}
	}
}

fight();
