let playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType;
let playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType;

let playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue;
let playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue;

function isValidMoveType(moveType) {
    // Move type missing
    if (typeof moveType !== 'string') {
        return false;
    }

    // Move type invalid
    if (moveType !== 'rock' && moveType !== 'paper' && moveType !== 'scissors') {
        return false;
    }
    
    return true;
}

function isValidMoveValue(moveValue) {
    // Move value missing
    if (typeof moveValue !== 'number') {
        return false;
    }

    // Move value invalid
    if (moveValue < 1 || moveValue > 99) {
        return false;
    }

    return true;
}

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    // Edge cases
    let areValidMoveTypes = isValidMoveType(moveOneType) && isValidMoveType(moveTwoType) && isValidMoveType(moveThreeType);
    let areValidMoveValues = isValidMoveValue(moveOneValue) && isValidMoveValue(moveTwoValue) && isValidMoveValue(moveThreeValue);

    if (!areValidMoveTypes || !areValidMoveValues) {
        return;
    }

    if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
        return;
    }
    
    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;

        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;

        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}