function classRoomPopulation (students) {
    return students / 30; //Very basic function to return a number of students divided by 30
}

console.log(`If you have 12 students out of a classroom size of
30 students, the total percentage of students attending is ${classRoomPopulation((12) * 100).toFixed(2)} percent!`); //Use of toFixed to ensure I don't get messy numbers

//---------------------------------------------
function calcScore (score1, score2, score3) { //Function calculates the average of three inputs, function to be called later
    return (score1 + score2 + score3) / 3;
}

/* This function will take in three arguments and determine which one of them is higher with a basic output using an if/else statement.
*/
function checkWinner (turtleScore, foxScore) { //Function calls calcScore and assigns argument
    turtleScore = calcScore(10, 22, 10);
    foxScore = calcScore (20, 20, 0);
    
    if (turtleScore > foxScore) {
        return `Turtles win with an average score of ${turtleScore.toFixed(2)} vs.
        ${foxScore.toFixed(2)}.`;
    } else if (foxScore > turtleScore) {
        return `Foxs win with an average score of ${foxScore.toFixed(2)} vs.
        ${turtleScore.toFixed(2)}.`;
    } else if (turtleScore === foxScore || turtleScore <= 10 || foxScore <= 10) {
        return `No team wins! Score is either a draw or an average of 10 was not met for one or both of the teams!`;
    }
}
console.log(checkWinner());
