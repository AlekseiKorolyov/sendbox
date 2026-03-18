/*
Instructions

Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
 */

// Solution

function combat(health, damage) {
    health -= damage;
    if (health > 0) {
        return health;
    } else
        return 0;
}

// Sample tests

describe("The combat() function", function () {
    it("should work for some example tests", function () {
        Test.assertEquals(combat(100, 5), 95);
        Test.assertEquals(combat(92, 8), 84);
        Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");
    });
});