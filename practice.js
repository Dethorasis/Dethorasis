//----------------------Exercise #1----------------------------
function classRoomPopulation (students) {
    return students / 30; //Very basic function to return a number of students divided by 30
}

console.log(`If you have 12 students out of a classroom size of
30 students, the total percentage of students attending is ${classRoomPopulation((12) * 100).toFixed(2)} percent!`); //Use of toFixed to ensure I don't get messy numbers

//-------------------------- Exercise #2---------------------------
function calcScore (score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner (turtleScore, foxScore) {
    turtleScore = calcScore(10, 10, 10);
    foxScore = calcScore (20, 12, 0);
    
    if (turtleScore > foxScore && foxScore >= 10) {
        return `Turtles win with an average score of ${turtleScore.toFixed(2)} vs.
        ${foxScore.toFixed(2)}.`;
    } else if (foxScore > turtleScore && turtleScore >= 10) {
        return `Foxs win with an average score of ${foxScore.toFixed(2)} vs.
        ${turtleScore.toFixed(2)}.`;
    } else {
        return `No team wins! Score is either a draw or an average of 10 was not met for one or both of the teams!`;
    }
}
console.log(checkWinner());
