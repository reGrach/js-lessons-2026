
function game() {
    let pointsA = 0;
    let pointsB = 0;
    let continueCondition = true;

    while (continueCondition) {
        
        if (getRandomInt()) {
            pointsA++
        } else {
            pointsB++
        }
        console.log(`Команда А: ${pointsA} | Команда B: ${pointsB}`)
        
        continueCondition = getContinueCondition(pointsA, pointsB)
    }
}

function getRandomInt() {
    let rnd = Math.random();
    return Math.round(rnd);
}

function getContinueCondition(teamA, teamB) {
    const finishPoints = 24;

    if (teamA <= finishPoints && teamB <= finishPoints)
    {
        return true;
    }
    else
    {
        const diff = Math.abs(teamA - teamB);
        return diff < 2;
    }
}


game();


