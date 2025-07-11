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

function getRoundWinner(roundNumber) {
    let playerOneMoveType, playerOneMoveValue;
    let playerTwoMoveType, playerTwoMoveValue;

    switch (roundNumber) {
        case 1:
            playerOneMoveType = playerOneMoveOneType;
            playerOneMoveValue = playerOneMoveOneValue;
            playerTwoMoveType = playerTwoMoveOneType;
            playerTwoMoveValue = playerTwoMoveOneValue;
            break;
        case 2:
            playerOneMoveType = playerOneMoveTwoType;
            playerOneMoveValue = playerOneMoveTwoValue;
            playerTwoMoveType = playerTwoMoveTwoType;
            playerTwoMoveValue = playerTwoMoveTwoValue;
            break;
        case 3:
            playerOneMoveType = playerOneMoveThreeType;
            playerOneMoveValue = playerOneMoveThreeValue;
            playerTwoMoveType = playerTwoMoveThreeType;
            playerTwoMoveValue = playerTwoMoveThreeValue;
            break;
        default:
            return null;
    }

    if (!isValidMoveType(playerOneMoveType) || !isValidMoveType(playerTwoMoveType)
        || !isValidMoveValue(playerOneMoveValue) || !isValidMoveValue(playerTwoMoveValue)) {
        return null;
    }

    if (playerOneMoveType === playerTwoMoveType) {
        if (playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        } else if (playerOneMoveValue < playerTwoMoveValue) {
            return 'Player Two';
        } else {
            return 'Tie';
        }
    }

    switch (playerOneMoveType) {
        case 'rock':
            if (playerTwoMoveType === 'scissors') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        case 'paper':
            if (playerTwoMoveType === 'rock') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
        case 'scissors':
            if (playerTwoMoveType === 'paper') {
                return 'Player One';
            } else {
                return 'Player Two';
            }
    }

}

function countSubstringOccurrences(mainString, subString) {
    if (subString.length === 0) {
        return 0; // Avoid infinite loops or unexpected results for empty substring
    }
    return mainString.split(subString).length - 1;
}

function getGameWinner() {
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let roundWinner, roundWinners;

    roundWinner = getRoundWinner(1);
    if (roundWinner === null) {
        return null;
    }
    roundWinners = roundWinner;

    roundWinner = getRoundWinner(2);
    if (roundWinner === null) {
        return null;
    }
    roundWinners = roundWinners.concat(',', roundWinner);

    roundWinner = getRoundWinner(3);
    if (roundWinner === null) {
        return null;
    }
    roundWinners = roundWinners.concat(',', roundWinner);

    playerOneScore = countSubstringOccurrences(roundWinners, 'Player One');
    playerTwoScore = countSubstringOccurrences(roundWinners, 'Player Two');

    if (playerOneScore > playerTwoScore) {
        return 'Player One';
    } else if (playerTwoScore > playerOneScore) {
        return 'Player Two';
    } else {
        return 'Tie';
    }
}