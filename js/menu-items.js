class MenuItem {
    constructor(item) {
        this.name = item.name;
        this.description = item.description; // name of menu item
        this.category = item.category; // app, main, sweets
        this.price = item.price; // numerical price without dollar sign
        this.noFish = item.noFish; //true or false
        this.noShrimp = item.noShrimp; //true or false
        this.noCheese = item.noCheese; //true or false
        this.noMilk = item.noMilk; //true or false
        this.glutenFree = item.glutenFree; //true or false
        this.vegetarian = item.vegetarian; //true or false
        this.noBooze = item.noBooze; //true or false
        this.noRaw = item.noRaw; //true or false
        this.halal = item.halal; //true or false
        this.kosher = item.kosher; //true or false
        this.richness = item.richness // 1 = very light, 5 = very rich
    }
}

const ricottaCarrots = new MenuItem({
    name: "ricottaCarrots",
    description: "Smoked ricotta with roasted carrots",
    category: 'APP',
    price: 7,
    noFish: true,
    noShrimp: true,
    noCheese: false,
    noMilk: false,  
    glutenFree: true,
    vegetarian: true,
    noBooze: true,
    noRaw: true,
    halal: true,
    kosher: true,
    richness: 2,  
});

const pateEnCroute = new MenuItem({
    name: "pateEnCroute",
    description: 'Paté en croute',
    category: 'APP',
    price: 12,
    noFish: true,
    noShrimp: true,
    noCheese: true,
    noMilk: true,  
    glutenFree: false,
    vegetarian: false,
    noBooze: false,
    noRaw: false,
    halal: false,
    kosher: false,
    richness: 4    
})

const eggplantCaviar = new MenuItem({
    name: "eggplantCaviar",
    description: 'Eggplant caviar',
    category: 'APP',
    price: 7,
    noFish: true,
    noShrimp: true,
    noCheese: true,
    noMilk: true,  
    glutenFree: true,
    vegetarian: true,
    noBooze: true,
    noRaw: true,
    halal: true,
    kosher: true,
    richness: 1    
})

const baconScone = new MenuItem({
    name: "baconScone",
    description: 'Bacon scone with maple syrup and clotted cream',
    category: 'APP',
    price: 9,
    noFish: true,
    noShrimp: true,
    noCheese: true,
    noMilk: false,  
    glutenFree: false,
    vegetarian: false,
    noBooze: true,
    noRaw: false,
    halal: false,
    kosher: false,
    richness: 4    
})

const caesarSalad = new MenuItem({
    name: "caesarSalad",
    description: 'Caesar salad',
    category: 'APP',
    price: 9,
    noFish: false,
    noShrimp: true,
    noCheese: false,
    noMilk: false,  
    glutenFree: true,
    vegetarian: false,
    noBooze: true,
    noRaw: false,
    halal: false,
    kosher: false,
    richness: 3    
})

const vitelloTonnato = new MenuItem({
    name: "vitelloTonnato",
    description: 'Vitello tonnato',
    category: 'APP',
    price: 11,
    noFish: true,
    noShrimp: true,
    noCheese: false,
    noMilk: false,  
    glutenFree: true,
    vegetarian: false,
    noBooze: true,
    noRaw: true,
    halal: true,
    kosher: false,
    richness: 3    
})

const chickenTagine = new MenuItem({
    name: "chickenTagine",
    description: 'Chicken Tagine with Bulgour',
    category: 'MAIN',
    price: 19,
    noFish: true,
    noShrimp: true,
    noCheese: true,
    noMilk: true,  
    glutenFree: false,
    vegetarian: false,
    noBooze: true,
    noRaw: true,
    halal: true,
    kosher: true,
    richness: 3    
})

const blanquetteVeau = new MenuItem({
    name: "blanquetteVeau",
    description: 'Blanquette de veau',
    category: 'MAIN',
    price: 21,
    noFish: true,
    noShrimp: true,
    noCheese: true,
    noMilk: false,  
    glutenFree: true,
    vegetarian: false,
    noBooze: false,
    noRaw: true,
    halal: true,
    kosher: false,
    richness: 4    
})

const fennelGratin = new MenuItem({
    name: "fennelGratin",
    description: 'Fennel gratin with olives and confit lemon',
    category: 'MAIN',
    price: 16,
    noFish: true,
    noShrimp: true,
    noCheese: false,
    noMilk: false,  
    glutenFree: false,
    vegetarian: true,
    noBooze: true,
    noRaw: true,
    halal: true,
    kosher: true,
    richness: 3    
})

const thaiGreenCurry = new MenuItem({
    name: "thaiGreenCurry",
    description: 'Thai green curry',
    category: 'MAIN',
    price: 17,
    noFish: false,
    noShrimp: false,
    noCheese: true,
    noMilk: true,  
    glutenFree: true,
    vegetarian: true,
    noBooze: true,
    noRaw: true,
    halal: true,
    kosher: true,
    richness: 2    
})

const scallopsLeeks = new MenuItem({
    name: "scallopsLeeks",
    description: 'Scallops with buttered leeks',
    category: 'MAIN',
    price: 28,
    noFish: false,
    noShrimp: false,
    noCheese: true,
    noMilk: false,  
    glutenFree: true,
    vegetarian: false,
    noBooze: false,
    noRaw: true,
    halal: true,
    kosher: false,
    richness: 2    
})

const pithiviers = new MenuItem({
    name: "pithiviers",
    description: 'Pithiviers',
    category: 'MAIN',
    price: 27,
    noFish: true,
    noShrimp: true,
    noCheese: true,
    noMilk: true,  
    glutenFree: false,
    vegetarian: false,
    noBooze: false,
    noRaw: false,
    halal: false,
    kosher: false,
    richness: 5    
})

const pumpkinTortellini = new MenuItem({
    name: "pumpkinTortellini",
    description: 'Pumpkin and Ricotta Tortellini',
    category: 'MAIN',
    price: 18,
    noFish: true,
    noShrimp: true,
    noCheese: false,
    noMilk: false,  
    glutenFree: false,
    vegetarian: true,
    noBooze: true,
    noRaw: false,
    halal: true,
    kosher: true,
    richness: 3    
})

const chocolateCake = new MenuItem({
    name: "chocolateCake",
    description: 'Chocolate cake with vanilla bourbon ice cream',
    category: 'SWEET',
    price: 8,
    noFish: true,
    noShrimp: true,
    noCheese: true,
    noMilk: false,  
    glutenFree: false,
    vegetarian: true,
    noBooze: false,
    noRaw: true,
    halal: false,
    kosher: true,
    richness: 4    
})

const babaAuRhum = new MenuItem({
    name: "babaAuRhum",
    description: 'Baba au rhum',
    category: 'SWEET',
    price: 10,
    noFish: true,
    noShrimp: true,
    noCheese: true,
    noMilk: false,  
    glutenFree: false,
    vegetarian: true,
    noBooze: false,
    noRaw: true,
    halal: false,
    kosher: true,
    richness: 4    
})

const tiramisu = new MenuItem({
    name: "tiramisu",
    description: 'Tiramisu',
    category: 'SWEET',
    price: 8,
    noFish: true,
    noShrimp: true,
    noCheese: true,
    noMilk: false,  
    glutenFree: false,
    vegetarian: true,
    noBooze: false,
    noRaw: true,
    halal: false,
    kosher: true,
    richness: 4    
})

const chocChipCookies = new MenuItem({
    name: "chocChipCookies",
    description: 'Chocolate chip cookies',
    category: 'SWEET',
    price: 6,
    noFish: true,
    noShrimp: true,
    noCheese: true,
    noMilk: true,  
    glutenFree: true,
    vegetarian: true,
    noBooze: true,
    noRaw: true,
    halal: true,
    kosher: true,
    richness: 3    
})

const poachedPears = new MenuItem({
    name: "poachedPears",
    description: 'Poached pears',
    category: 'SWEET',
    price: 9,
    noFish: true,
    noShrimp: true,
    noCheese: true,
    noMilk: true,  
    glutenFree: true,
    vegetarian: true,
    noBooze: false,
    noRaw: true,
    halal: false,
    kosher: true,
    richness: 1    
})

const pineappleCarpaccio = new MenuItem({
    name: "pineappleCarpaccio",
    description: 'Pineapple Carpaccio',
    category: 'SWEET',
    price: 7,
    noFish: true,
    noShrimp: true,
    noCheese: true,
    noMilk: true,  
    glutenFree: true,
    vegetarian: true,
    noBooze: true,
    noRaw: true,
    halal: true,
    kosher: true,
    richness: 1    
})

let allMenuItems = []
allMenuItems.push(ricottaCarrots)
allMenuItems.push(pateEnCroute)
allMenuItems.push(eggplantCaviar)
allMenuItems.push(baconScone)
allMenuItems.push(caesarSalad)
allMenuItems.push(vitelloTonnato)
allMenuItems.push(chickenTagine)
allMenuItems.push(blanquetteVeau)
allMenuItems.push(fennelGratin)
allMenuItems.push(thaiGreenCurry)
allMenuItems.push(scallopsLeeks)
allMenuItems.push(pithiviers)
allMenuItems.push(pumpkinTortellini)
allMenuItems.push(chocolateCake)
allMenuItems.push(tiramisu)
allMenuItems.push(babaAuRhum)
allMenuItems.push(chocChipCookies)
allMenuItems.push(poachedPears)
allMenuItems.push(pineappleCarpaccio)

export {allMenuItems}

// console.log(allMenuItems[1].halal)
// allMenuItems[1].halal = !allMenuItems[1].halal
// console.log(allMenuItems[1].halal)

