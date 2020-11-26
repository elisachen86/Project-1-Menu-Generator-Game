// // // VARIABLES 
import {allMenuItems} from "./menu-items.js"
import {allPrompts} from "./questions-answers.js"

const startBtn = document.getElementById("start")
const welcomeScreen = document.getElementById("welcomeScreen")
const playScreen = document.getElementById("playScreen") 
const menuTable = document.getElementById("fullMenuTable")
const sortDownBtnName = document.getElementById("aToZName")
const sortDownBtnType = document.getElementById("aToZType")
const sortDownBtnPrice = document.getElementById("descPrice")
const playerChoicesTable = document.getElementById("playerChoicesTable")
const question = document.getElementById("question")
const submitBtn = document.getElementById("submit")
const responseDiv = document.getElementById("response")
const response = document.getElementById("responseText")
const newPromptBtn = document.getElementById("newPrompt")
const timer = document.getElementById("timer")
const score = document.getElementById("score")
const winScreen = document.getElementById("winScreen")
const loseScreen = document.getElementById("loseScreen")
const resetGameLose = document.getElementById("resetGameLose")
const resetGameWin = document.getElementById("resetGameWin")

let allDataCells // DOM selector for all data cells in menuItems table
let allChoiceCells // DOM selector for all data cells in playerChoice table
let htmlAllMenuItems = allMenuItems
let playerChoices = []
let selectedPrompt // gets filled in with a random prompt with printPrompt function
let currentScore = 10  

loadMenuItems(htmlAllMenuItems);

// ********************************************************************************
// // // FUNCTIONS

//For initializing the game 
function showWelcomeScreen() {welcomeScreen.style.display = "flex"}
function hidePlayScreen() {playScreen.style.display = "none"}
function resetScore() {
    currentScore = 10;
    score.textContent = `Score: ${currentScore}`
}

//For moving on to play the game 
function hideWelcomeScreen() {welcomeScreen.style.display = "none"}
function showPlayScreen() {playScreen.style.display = "grid"}

function getRandomInteger(number) {
  return Math.floor(Math.random() * Math.floor(number));
}
function printPrompt(array) {
    let index = getRandomInteger(array.length)
    selectedPrompt = array[index]
    question.textContent = selectedPrompt.question
}

function loadMenuItems(array) {
    menuTable.innerHTML = ""
    array.forEach((element) => {
// CAN I CREATE A CLASS METHOD FOR THE LINES BELOW?
    let newItem = document.createElement('tr');
    newItem.classList.add("menuItem", element.name);
    newItem.onclick = (evt) => {
        if (playerChoices.length < 3) {addItemToPlayerChoices(evt.target)}
        if (htmlAllMenuItems.length > 16) {removeItemFromMenu(evt.target)}
        loadMenuItems(htmlAllMenuItems);
        renderPlayerChoicesTable(playerChoices)
    }
// simplify using innerhtml
    newItem.innerHTML += `<td class="col1">${element.description}</td>
    <td class="col2">${element.category}</td>
    <td class="col3">$${element.price}</td>`

    menuTable.appendChild(newItem);
    });
    allDataCells = [... document.querySelectorAll("#fullMenuTable td")]
};
function renderPlayerChoicesTable(array) {
    playerChoicesTable.innerHTML = ""
    array.forEach((element) => {
    let newItem = document.createElement('tr');
    newItem.classList.add("menuItem", element.name);
    newItem.onclick = (evt) => {
        addItemToMenu(evt.target)
        removeItemFromPlayerChoices(evt.target)
        loadMenuItems(htmlAllMenuItems);
        renderPlayerChoicesTable(playerChoices)
    }

    newItem.innerHTML += `<td class="col1">${element.description}</td>
    <td class="col2">${element.category}</td>
    <td class="col3">$${element.price}</td>`

    playerChoicesTable.appendChild(newItem);
    });
    allChoiceCells = [... document.querySelectorAll("#playerChoicesTable td")]
}
function hideResponseSection() {
    responseDiv.style.backgroundColor = "transparent"
}

function showResponseSection() {
    responseDiv.style.backgroundColor = "var(--header-footer-color)"

}

// for the player to select items 
function addItemToPlayerChoices(clickedElement) {
        htmlAllMenuItems.forEach(item => {
            if (clickedElement.closest("tr").classList.contains(item.name)) {
                playerChoices.push(item);
            }})
}
function removeItemFromMenu(clickedElement) {
    htmlAllMenuItems = htmlAllMenuItems.filter(item => {
        return !(clickedElement.closest("tr").classList.contains(item.name))
    })
}

function removeItemFromPlayerChoices(clickedElement) {
    playerChoices = playerChoices.filter(item => {
        return !(clickedElement.closest("tr").classList.contains(item.name))
    })
}
function addItemToMenu(clickedElement) {
    playerChoices.forEach(item => {
        if (clickedElement.closest("tr").classList.contains(item.name)) {
            htmlAllMenuItems.push(item);
        }})
}


// for evaluating the player's choices and generating a response
function isVegetarian() {
        let isVegetarian = []
        playerChoices.forEach(item =>  isVegetarian.push(item.vegetarian) )
        let isTrue = isVegetarian.every((el) => el === true)
        return isTrue;
}
function containsNoFish() {
        let noFish = []
        playerChoices.forEach(item =>  noFish.push(item.noFish) )
        let isTrue = noFish.every((el) => el === true)
        return isTrue
}
function containsNoShrimp() {
        let noShrimp = []
        playerChoices.forEach(item =>  noShrimp.push(item.noShrimp) )
        let isTrue = noShrimp.every((el) => el === true)
        return isTrue
}
function containsNoCheese() {
        let noCheese = []
        playerChoices.forEach(item =>  noCheese.push(item.noCheese) )
        let isTrue = noCheese.every((el) => el === true)
        return isTrue
}
function containsNoLactose() {
        let noLactose = []
        playerChoices.forEach(item =>  noLactose.push(item.noMilk) )
        let isTrue = noLactose.every((el) => el === true)
        return isTrue  
}
function isHalal() {
        let isHalal = []
        playerChoices.forEach(item =>  isHalal.push(item.halal) )
        let isTrue = isHalal.every((el) => el === true)
        return isTrue
}
function isKosher() {
        let isKosher = []
        playerChoices.forEach(item =>  isKosher.push(item.kosher) )
        let isTrue = isKosher.every((el) => el === true)
        return isTrue
}
function isGlutenFree() {
        let isGlutenFree = []
        playerChoices.forEach(item =>  isGlutenFree.push(item.glutenFree) )
        let isTrue = isGlutenFree.every((el) => el === true)
        return isTrue
}
function isLighter() {
        let isLighter = []
        playerChoices.forEach(item =>  isLighter.push(item.richness) )
        let averageRichness = isLighter.reduce((acc,num) => acc + num) / isLighter.length
        let isTrue
        if (averageRichness <= 3) {isTrue = true} else {isTrue = false}
        return isTrue
}
function containsNoAlcohol() {
        let noAlcohol = []
        playerChoices.forEach(item =>  noAlcohol.push(item.noBooze) )
        let isTrue = noAlcohol.every((el) => el === true)
        return isTrue
}
function containsNoRaw() {
        let noRaw = []
        playerChoices.forEach(item =>  noRaw.push(item.noRaw) )
        let isTrue = noRaw.every((el) => el === true)
        return isTrue
}
function okForPregnancy() {
        let noAlcohol = containsNoAlcohol()
        let noRaw = containsNoRaw()
        const isTrue = noAlcohol && noRaw
        return isTrue
}

function isCriteriaFulfilled(object) {
    const prompt = object.uniqID;
    let trueOrFalse
    switch (prompt) {        
        case "vegetarian" : trueOrFalse = isVegetarian();
        break;
        case "noFish" : trueOrFalse = containsNoFish();
        break;
        case "noShrimp" : trueOrFalse = containsNoShrimp();
        break;
        case "noCheese" : trueOrFalse = containsNoCheese();
        break;
        case "noLactose" : trueOrFalse = containsNoLactose();
        break;
        case "halal" : trueOrFalse = isHalal();
        break;
        case "kosher" : trueOrFalse = isKosher();
        break;
        case "glutenFree" : trueOrFalse = isGlutenFree();
        break;
        case "lighter" : trueOrFalse = isLighter();
        break;
        case "noAlcohol" : trueOrFalse = containsNoAlcohol();
        break;
        case "pregnant" : trueOrFalse = okForPregnancy();
        break;
    }
    return trueOrFalse
}
function printResult(boolean) {
    response.textContent = selectedPrompt.response(boolean)
}
function changeScore(boolean) {
    boolean ? currentScore += 4 : currentScore -= 4
    score.textContent = `Score: ${currentScore}`    
}

// for selecting a new prompt
function clearResponse() {response.textContent = ""}

// sort menu items 
function sortItemsByAtoZName(array) {
    array.sort((a,b) => {return a.name.localeCompare(b.name)});
    return array;
}
function sortItemsByAtoZType(array) {
    array.sort((a,b) => {return a.category.localeCompare(b.category)});
    return array;
}
function sortItemsByAscPrice(array) {
    array.sort((a,b) => {return a.price - b.price});
    return array;
}

function makeSubmitButtonAppear() {submitBtn.style.display = "block"}
function makeSubmitButtonDisappear() {submitBtn.style.display = "none"}

function makeNewPromptButtonAppear() {newPromptBtn.style.display = "block"}
function makeNewPromptButtonDisppear() {newPromptBtn.style.display = "none"}

let timeout
function submitButtonTimeout() {
    timeout = setTimeout(resetPrompt, 3000)
}

function resetPrompt() {
    printPrompt(allPrompts);
    htmlAllMenuItems = allMenuItems
    playerChoices = []
    loadMenuItems(htmlAllMenuItems);
    renderPlayerChoicesTable(playerChoices)
    response.textContent = "";
    hideResponseSection()
    makeSubmitButtonAppear()
    makeNewPromptButtonDisppear()
}

function endGame() {
    if (currentScore <= 5) {
        hidePlayScreen()
        loseScreen.style.display = "flex"
    } else if (currentScore >= 15) {
        hidePlayScreen()
        winScreen.style.display = "flex"
    }
}

function hideWinLoseScreens() {
    loseScreen.style.display = "none"
    winScreen.style.display = "none"
}

// shuffle menu items? 
// filter menu items 

// ********************************************************************************
// // // FLOW LOGIC


// INITIALIZE WELCOME SCREEN
window.onload = () => {
    showWelcomeScreen();
    hidePlayScreen();
}

// MOVE TO PLAY SCREEN
startBtn.onclick = () => {
    hideWelcomeScreen();
    showPlayScreen();
    printPrompt(allPrompts); 
    hideResponseSection()
    resetScore()
    makeSubmitButtonAppear()
    makeNewPromptButtonDisppear()
}

sortDownBtnName.onclick = () => {
    sortItemsByAtoZName(htmlAllMenuItems)
    loadMenuItems(htmlAllMenuItems)
}

sortDownBtnType.onclick = () => {
    sortItemsByAtoZType(htmlAllMenuItems)
    loadMenuItems(htmlAllMenuItems)
}

sortDownBtnPrice.onclick = () => {
    sortItemsByAscPrice(htmlAllMenuItems)
    loadMenuItems(htmlAllMenuItems)
}

// PLAYER SUBMITS CHOICES 
submitBtn.onclick = () => {
    if (playerChoices.length < 2) {
        alert("Please select at least two choices!") ;       
    } else {
        makeSubmitButtonDisappear()
        makeNewPromptButtonAppear()
        printResult(isCriteriaFulfilled(selectedPrompt)) 
        showResponseSection()
        changeScore(isCriteriaFulfilled(selectedPrompt))
        endGame()
        submitButtonTimeout()
    }
}

newPromptBtn.onclick = () => {
    resetPrompt()
    clearTimeout(timeout)
}

resetGameLose.onclick = () => {
    htmlAllMenuItems = allMenuItems
    playerChoices = []
    response.textContent = "";
    loadMenuItems(htmlAllMenuItems);
    renderPlayerChoicesTable(playerChoices)

    hideWinLoseScreens();
    showWelcomeScreen();
    hidePlayScreen();
}

resetGameWin.onclick = () => {
    htmlAllMenuItems = allMenuItems
    playerChoices = []
    response.textContent = "";
    loadMenuItems(htmlAllMenuItems);
    renderPlayerChoicesTable(playerChoices)

    hideWinLoseScreens();
    showWelcomeScreen();
    hidePlayScreen();
}