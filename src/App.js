const GLASSWARE = {
  "Beveled Coupe": { icon: "🍸" },
  "Beveled Rocks Glass": { icon: "🥃" },
  "Chilled Coupe": { icon: "🍸" },
  "Collins Glass": { icon: "🥤" },
  "Flute Glass": { icon: "🥂" },
  "Irish Glass": { icon: "☕" },
  "Metal Cup": { icon: "🏆" },
  "Nick & Nora": { icon: "🍸" },
  "Oliver's Glass": { icon: "🥂" },
  "Pint Glass": { icon: "🍺" },
  "Rocks Glass": { icon: "🥃" },
  "Snifter Glass": { icon: "🥃" },
  "Tall Martini Glass": { icon: "🍸" }
};

const METHODS = {
  "Shake": "Standard shake with ice",
  "Build": "Build drink in serving glass",
  "Stir": "Stir with ice",
  "Dry Shake": "Shake without ice",
  "Warm Glass, Stir": "Warm glass before building",
  "Dry-Wet-Dry Shake": "Multiple shake process",
  "Absinthe Prep, Stir": "Prepare glass with absinthe"
};

const STRAINING = {
  "Single": "Single strain",
  "Double": "Double strain",
  "Build": "No straining required",
  "None": "No straining"
};

const INGREDIENTS = {
  spirits: [
    { name: "Amaretto", icon: "🥃" },
    { name: "Aperol", icon: "🥃" },
    { name: "Benedictine", icon: "🥃" },
    { name: "Blackwell Rum", icon: "🥃" },
    { name: "Bourbon", icon: "🥃" },
    { name: "Buffalo Trace", icon: "🥃" },
    { name: "Bulleit Bourbon", icon: "🥃" },
    { name: "Casamigos Reposado", icon: "🥃" },
    { name: "Citrus Vodka", icon: "🥃" },
    { name: "Corazon Tequila", icon: "🥃" },
    { name: "Dewar's", icon: "🥃" },
    { name: "Empress Gin", icon: "🥃" },
    { name: "Gin", icon: "🥃" },
    { name: "Jameson", icon: "🥃" },
    { name: "Longleaf Vodka", icon: "🥃" },
    { name: "Remy Martin VSOP", icon: "🥃" },
    { name: "Rum", icon: "🥃" },
    { name: "St. George Chili Vodka", icon: "🥃" },
    { name: "St. George Citrus Vodka", icon: "🥃" },
    { name: "Tabernero Pisco", icon: "🥃" },
    { name: "Tanteo Jalapeno Tequila", icon: "🥃" },
    { name: "Tequila", icon: "🥃" },
    { name: "Vodka", icon: "🥃" },
    { name: "Woodford Rye", icon: "🥃" }
  ],
  liqueurs: [
    { name: "Allspice Liqueur", icon: "🍸" },
    { name: "Banana Liquor", icon: "🍸" },
    { name: "Campari", icon: "🍸" },
    { name: "Chambord", icon: "🍸" },
    { name: "Cointreau", icon: "🍸" },
    { name: "Coochi Sweet Vermouth", icon: "🍸" },
    { name: "Creme de violette", icon: "🍸" },
    { name: "Dirty Sue", icon: "🍸" },
    { name: "Drambuie", icon: "🍸" },
    { name: "Dry Vermouth", icon: "🍸" },
    { name: "Espresso Liqueur", icon: "🍸" },
    { name: "Fleur Charmante", icon: "🍸" },
    { name: "Giffard Coconut Syrup", icon: "🍸" },
    { name: "Giffard Triple Sec", icon: "🍸" },
    { name: "Grapefruit Liqueur", icon: "🍸" },
    { name: "Green Chartreuse", icon: "🍸" },
    { name: "Limoncello", icon: "🍸" },
    { name: "Luxardo Maraschino Liqueur", icon: "🍸" },
    { name: "Pimm's", icon: "🍸" },
    { name: "St. George Spice", icon: "🍸" },
    { name: "Sweet Vermouth", icon: "🍸" }
  ],
  mixers: [
    { name: "Agave", icon: "🌵" },
    { name: "Apple Cider", icon: "🍎" },
    { name: "Blackberry Shrub", icon: "🫐" },
    { name: "Champagne", icon: "🍾" },
    { name: "Coffee", icon: "☕" },
    { name: "Coke", icon: "🥤" },
    { name: "Cold Brew", icon: "☕" },
    { name: "Cranberry", icon: "🫐" },
    { name: "Demerara Syrup", icon: "💧" },
    { name: "Egg White", icon: "🥚" },
    { name: "Fee Foam", icon: "🫧" },
    { name: "Ginger Beer", icon: "🥤" },
    { name: "Gomme Syrup", icon: "💧" },
    { name: "Grapefruit Soda", icon: "🥤" },
    { name: "Gum Syrup", icon: "💧" },
    { name: "Heavy Cream", icon: "🥛" },
    { name: "Honey", icon: "🍯" },
    { name: "Juice", icon: "🧃" },
    { name: "Lemon", icon: "🍋" },
    { name: "Lime", icon: "🍈" },
    { name: "Orgeat", icon: "💧" },
    { name: "Peach Puree", icon: "🍑" },
    { name: "Pineapple", icon: "🍍" },
    { name: "Prosecco", icon: "🍾" },
    { name: "Rose", icon: "🍷" },
    { name: "Simple", icon: "💧" },
    { name: "Soda", icon: "🥤" },
    { name: "Zing Zang", icon: "🥤" }
  ],
  bitters: [
    { name: "Cassia Bark Bitters", icon: "💧" },
    { name: "Chicory Pecan Bitters", icon: "💧" },
    { name: "Havana & Hyde Bitters", icon: "💧" },
    { name: "Mole Bitters", icon: "💧" },
    { name: "Orange Bitters", icon: "💧" },
    { name: "Pecan Bitters", icon: "💧" },
    { name: "Peychaud's Bitters", icon: "💧" }
  ]
};

const MEASUREMENTS = [
  { amount: 0.25, unit: "oz" },
  { amount: 0.5, unit: "oz" },
  { amount: 0.75, unit: "oz" },
  { amount: 1, unit: "oz" },
  { amount: 1.5, unit: "oz" },
  { amount: 2, unit: "oz" },
  { amount: 2.5, unit: "oz" },
  { amount: 3, unit: "oz" },
  { amount: 4, unit: "oz" },
  { amount: 1, unit: "dash" },
  { amount: 2, unit: "dashes" },
  { amount: 3, unit: "dashes" },
  { amount: 4, unit: "dashes" },
  { amount: 1, unit: "splash" },
  { amount: 1, unit: "top" }
];

const GARNISHES = {
  "Citrus": [
    "Dehydrated Lemon",
    "Dehydrated Lime",
    "Lemon Twist",
    "Lemon Wedge",
    "Lime Wheel",
    "Lime Wedge",
    "Orange Slice",
    "Orange Twist"
  ],
  "Fruits": [
    "Cherry",
    "Cucumber & Strawberry Slices",
    "Dehydrated Apple",
    "Dehydrated Banana",
    "Pineapple Fronds"
  ],
  "Other": [
    "Bitters Pinwheel",
    "Espresso Beans",
    "Ice",
    "Mint Sprig",
    "None",
    "Olives",
    "Nutmeg",
    "Primitivo Float",
    "Red Salt",
    "Salt Rim",
    "Salt/Sugar Rim",
    "Sugar Rim",
    "Whipped Cream"
  ]
};

const RECIPES = {
  "Amaretto Sour": {
    ingredients: [
      { name: "Amaretto", amount: 2, unit: "oz" },
      { name: "Lemon", amount: 0.75, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" }
    ],
    glass: "Rocks Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Ice", { name: "Cherry", quantity: 2 }]
  },
  "Aperol Spritz": {
    ingredients: [
      { name: "Aperol", amount: 1.5, unit: "oz" },
      { name: "Prosecco", amount: 4, unit: "oz" },
      { name: "Soda", amount: 1, unit: "top" }
    ],
    glass: "Oliver's Glass",
    method: "Build",
    straining: "Build",
    garnishes: ["Ice", "Orange Slice"]
  },
  "Aviation": {
    ingredients: [
      { name: "Gin", amount: 2, unit: "oz" },
      { name: "Luxardo Maraschino Liqueur", amount: 0.5, unit: "oz" },
      { name: "Creme de violette", amount: 0.25, unit: "oz" },
      { name: "Lemon", amount: 0.75, unit: "oz" }
    ],
    glass: "Chilled Coupe",
    method: "Shake",
    straining: "Double",
    garnishes: [{ name: "Cherry", quantity: 1 }]
  },
  "B+B": {
    ingredients: [
      { name: "Remy Martin VSOP", amount: 1.5, unit: "oz" },
      { name: "Benedictine", amount: 1.5, unit: "oz" }
    ],
    glass: "Snifter Glass",
    method: "Build",
    straining: "Build",
    garnishes: ["None"]
  },
  "Bellini (Peach)": {
    ingredients: [
      { name: "Peach Puree", amount: 0.25, unit: "oz" },
      { name: "Prosecco", amount: 1, unit: "top" }
    ],
    glass: "Flute Glass",
    method: "Build",
    straining: "Build",
    garnishes: ["Prosecco Top"]
  },
  "Blackberry Harvest": {
    ingredients: [
      { name: "Vodka", amount: 1.5, unit: "oz" },
      { name: "Blackberry Shrub", amount: 1, unit: "oz" },
      { name: "Allspice Liqueur", amount: 0.5, unit: "oz" },
      { name: "Lemon", amount: 0.5, unit: "oz" },
      { name: "Soda", amount: 1, unit: "top" }
    ],
    glass: "Collins Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Ice", "Lit Rosemary"]
  },
  "Bloody Mary": {
    ingredients: [
      { name: "Vodka", amount: 2, unit: "oz" },
      { name: "Zing Zang", amount: 1, unit: "top" }
    ],
    glass: "Metal Cup",
    method: "Build",
    straining: "Build",
    garnishes: ["Red Salt", "Ice", "Lime Wheel", { name: "Olives", quantity: 2 }]
  },
  "Bloody Mary (Spicy)": {
    ingredients: [
      { name: "St. George Chili Vodka", amount: 2, unit: "oz" },
      { name: "Zing Zang", amount: 1, unit: "top" }
    ],
    glass: "Metal Cup",
    method: "Build",
    straining: "Build",
    garnishes: ["Red Salt", "Ice", "Lime Wheel", { name: "Olives", quantity: 2 }]
  },
  "Coconut Coffee": {
    ingredients: [
      { name: "Blackwell Rum", amount: 2, unit: "oz" },
      { name: "Giffard Coconut Syrup", amount: 1, unit: "oz" },
      { name: "Heavy Cream", amount: 0.5, unit: "oz" },
      { name: "Cold Brew", amount: 1, unit: "top" }
    ],
    glass: "Pint Glass",
    method: "Stir",
    straining: "Build",
    garnishes: ["Ice", "Whipped Cream"]
  },
  "Cosmopolitan": {
    ingredients: [
      { name: "St. George Citrus Vodka", amount: 2, unit: "oz" },
      { name: "Cointreau", amount: 0.75, unit: "oz" },
      { name: "Cranberry", amount: 0.25, unit: "oz" },
      { name: "Lime", amount: 0.25, unit: "oz" },
      { name: "Simple", amount: 0.25, unit: "oz" }
    ],
    glass: "Chilled Coupe",
    method: "Shake",
    straining: "Double",
    garnishes: ["Lime Wheel", "Rim Glass"]
  },
  "Daiquiri": {
    ingredients: [
      { name: "Rum", amount: 2, unit: "oz" },
      { name: "Lime", amount: 0.75, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" }
    ],
    glass: "Chilled Coupe",
    method: "Shake",
    straining: "Double",
    garnishes: ["Dehydrated Lime"]
  },
  "Dark n Stormy": {
    ingredients: [
      { name: "Blackwell Rum", amount: 2, unit: "oz" },
      { name: "Lime", amount: 0.5, unit: "oz" },
      { name: "Ginger Beer", amount: 1, unit: "top" }
    ],
    glass: "Metal Cup",
    method: "Build",
    straining: "Build",
    garnishes: ["Lime Wheel"]
  },
  "French 75": {
    ingredients: [
      { name: "Empress Gin", amount: 1.5, unit: "oz" },
      { name: "Lemon", amount: 0.5, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" },
      { name: "Prosecco", amount: 1, unit: "top" }
    ],
    glass: "Flute Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Lemon Twist"]
  },
  "Gimlet": {
    ingredients: [
      { name: "Gin", amount: 2, unit: "oz" },
      { name: "Lime", amount: 0.75, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" }
    ],
    glass: "Chilled Coupe",
    method: "Shake",
    straining: "Double",
    garnishes: ["Dehydrated Lime"]
  },
  "Hot Toddy": {
    ingredients: [
      { name: "Bourbon", amount: 2, unit: "oz" },
      { name: "Honey", amount: 0.5, unit: "oz" }
    ],
    glass: "Irish Glass",
    method: "Warm Glass, Stir",
    straining: "Build",
    garnishes: ["Lemon Wedge"]
  },
  "Irish Coffee": {
    ingredients: [
      { name: "Jameson", amount: 2, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" },
      { name: "Coffee", amount: 1, unit: "top" }
    ],
    glass: "Irish Glass",
    method: "Warm Glass, Stir",
    straining: "Build",
    garnishes: ["Whipped Cream"]
  },
  "Jack Dawson": {
    ingredients: [
      { name: "Bulleit Bourbon", amount: 2, unit: "oz" },
      { name: "Fleur Charmante", amount: 1, unit: "oz" },
      { name: "Cassia Bark Bitters", amount: 2, unit: "dashes" },
      { name: "Chicory Pecan Bitters", amount: 2, unit: "dashes" }
    ],
    glass: "Chilled Coupe",
    method: "Stir",
    straining: "Double",
    garnishes: [{ name: "Cherry", quantity: 1 }]
  },
  "Jungle Bird": {
    ingredients: [
      { name: "Blackwell Rum", amount: 1.5, unit: "oz" },
      { name: "Campari", amount: 0.25, unit: "oz" },
      { name: "Pineapple", amount: 1.5, unit: "oz" },
      { name: "Lime", amount: 0.5, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" }
    ],
    glass: "Oliver's Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Ice", "Dehydrated Lime", "Pineapple Fronds"]
  },
  "Last Word": {
    ingredients: [
      { name: "Gin", amount: 0.75, unit: "oz" },
      { name: "Lime", amount: 0.75, unit: "oz" },
      { name: "Green Chartreuse", amount: 0.75, unit: "oz" },
      { name: "Luxardo Maraschino Liqueur", amount: 0.75, unit: "oz" }
    ],
    glass: "Nick & Nora",
    method: "Shake",
    straining: "Double",
    garnishes: [{ name: "Cherry", quantity: 1 }]
  },
  "Lemon Hello": {
    ingredients: [
      { name: "Limoncello", amount: 1, unit: "oz" },
      { name: "Longleaf Vodka", amount: 1, unit: "oz" },
      { name: "Simple", amount: 1, unit: "oz" },
      { name: "Lemon", amount: 0.5, unit: "oz" }
    ],
    glass: "Chilled Coupe",
    method: "Shake",
    straining: "Double",
    garnishes: ["Dehydrated Lemon"]
  },
  "Long Island": {
    ingredients: [
      { name: "Tequila", amount: 0.5, unit: "oz" },
      { name: "Vodka", amount: 0.5, unit: "oz" },
      { name: "Gin", amount: 0.5, unit: "oz" },
      { name: "Rum", amount: 0.5, unit: "oz" },
      { name: "Giffard Triple Sec", amount: 0.5, unit: "oz" },
      { name: "Lemon", amount: 0.5, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" },
      { name: "Coke", amount: 1, unit: "top" }
    ],
    glass: "Collins Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Ice", "Lemon Wedge"]
  },
  "Manhattan": {
    ingredients: [
      { name: "Woodford Rye", amount: 2, unit: "oz" },
      { name: "Sweet Vermouth", amount: 1, unit: "oz" },
      { name: "Orange Bitters", amount: 3, unit: "dashes" },
      { name: "Havana & Hyde Bitters", amount: 2, unit: "dashes" }
    ],
    glass: "Nick & Nora",
    method: "Stir",
    straining: "Double",
    garnishes: [{ name: "Cherry", quantity: 1 }]
  },
  "Margarita (1, House)": {
    ingredients: [
      { name: "Tequila", amount: 2, unit: "oz" },
      { name: "Giffard Triple Sec", amount: 0.75, unit: "oz" },
      { name: "Lime", amount: 0.75, unit: "oz" },
      { name: "Agave", amount: 0.5, unit: "oz" }
    ],
    glass: "Beveled Rocks Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Ice", "Lime Wedge", "Salt/Sugar Rim"]
  },
  "Margarita (Apple Cider)": {
    ingredients: [
      { name: "Casamigos Reposado", amount: 2, unit: "oz" },
      { name: "Apple Cider", amount: 2, unit: "oz" },
      { name: "Lemon", amount: 0.5, unit: "oz" },
      { name: "Agave", amount: 0.5, unit: "oz" }
    ],
    glass: "Beveled Rocks Glass",
    method: "Shake",
    straining: "Single",
    garnishes: [{ name: "Dehydrated Apples", quantity: 3 }, "Salt", "Lemon Wheel"]
  },
  "Margarita (Jalapeno)": {
    ingredients: [
      { name: "Tanteo Jalapeno Tequila", amount: 2, unit: "oz" },
      { name: "Cointreau", amount: 0.75, unit: "oz" },
      { name: "Lime", amount: 0.75, unit: "oz" },
      { name: "Agave", amount: 0.5, unit: "oz" }
    ],
    glass: "Beveled Rocks Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Red Salt", "Ice", "Lime Wheel"]
  },
  "Margarita (Speciality Flavor)": {
    ingredients: [
      { name: "Corazon Tequila", amount: 2, unit: "oz" },
      { name: "Giffard or Blended Flavored Liqueur", amount: 0.75, unit: "oz" },
      { name: "Lime", amount: 0.75, unit: "oz" },
      { name: "Agave", amount: 0.5, unit: "oz" }
    ],
    glass: "Beveled Rocks Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Salt/Sugar Rim", "Ice", "Lime Wheel"]
  },
  "Margarita (Top Shelf)": {
    ingredients: [
      { name: "Casamigos Reposado", amount: 2, unit: "oz" },
      { name: "Cointreau", amount: 0.75, unit: "oz" },
      { name: "Lime", amount: 0.75, unit: "oz" },
      { name: "Agave", amount: 0.5, unit: "oz" }
    ],
    glass: "Beveled Rocks Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Salt/Sugar Rim", "Ice", "Lime Wheel"]
  },
  "Martini": {
    ingredients: [
      { name: "Gin", amount: 2.5, unit: "oz" },
      { name: "Dry Vermouth", amount: 0.5, unit: "oz" }
    ],
    glass: "Chilled Coupe",
    method: "Shake",
    straining: "Double",
    garnishes: ["Lemon Twist"]
  },
  "Martini (Dirty)": {
    ingredients: [
      { name: "Gin", amount: 2.5, unit: "oz" },
      { name: "Dirty Sue", amount: 0.5, unit: "oz" }
    ],
    glass: "Chilled Coupe",
    method: "Shake",
    straining: "Double",
    garnishes: [{ name: "Olives", quantity: 3 }]
  },
  "Martini (Espresso)": {
    ingredients: [
      { name: "Vodka", amount: 2, unit: "oz" },
      { name: "Espresso Liqueur", amount: 1, unit: "oz" },
      { name: "Cold Brew", amount: 1, unit: "oz" },
      { name: "Simple", amount: 0.25, unit: "oz" },
      { name: "Fee Foam", amount: 2, unit: "dashes" }
    ],
    glass: "Tall Martini Glass",
    method: "Dry Shake",
    straining: "Double",
    garnishes: [{ name: "Espresso Beans", quantity: 3 }]
  },
  "Martini (French)": {
    ingredients: [
      { name: "Vodka", amount: 2, unit: "oz" },
      { name: "Chambord", amount: 0.5, unit: "oz" },
      { name: "Pineapple", amount: 1.5, unit: "oz" },
      { name: "Simple", amount: 0.25, unit: "oz" }
    ],
    glass: "Tall Martini Glass",
    method: "Shake",
    straining: "Double",
    garnishes: ["None"]
  },
  "Martini (Lemon Drop, V2)": {
    ingredients: [
      { name: "Vodka", amount: 2, unit: "oz" },
      { name: "Cointreau", amount: 0.5, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" },
      { name: "Lemon", amount: 0.5, unit: "oz" }
    ],
    glass: "Chilled Coupe",
    method: "Shake",
    straining: "Double",
    garnishes: ["1/4 Sugar Rim"]
  },
  "Martini (Lemon Drop)": {
    ingredients: [
      { name: "St. George Citrus Vodka", amount: 2, unit: "oz" },
      { name: "Cointreau", amount: 0.25, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" },
      { name: "Lemon", amount: 0.5, unit: "oz" }
    ],
    glass: "Chilled Coupe",
    method: "Shake",
    straining: "Double",
    garnishes: ["1/4 Sugar Rim"]
  },
  "Mimosa": {
    ingredients: [
      { name: "Champagne", amount: 1, unit: "top" },
      { name: "Juice", amount: 1, unit: "top" }
    ],
    glass: "Oliver's Glass",
    method: "Build",
    straining: "Build",
    garnishes: ["None"]
  },
  "Moonglow": {
    ingredients: [
      { name: "Longleaf Vodka", amount: 1.5, unit: "oz" },
      { name: "St. George Spice", amount: 1, unit: "oz" },
      { name: "Orgeat", amount: 0.5, unit: "oz" },
      { name: "Lemon", amount: 0.5, unit: "oz" }
    ],
    glass: "Chilled Coupe",
    method: "Shake",
    straining: "Double",
    garnishes: ["Primitivo Float"]
  },
  "Moscow Mule": {
    ingredients: [
      { name: "Vodka", amount: 2, unit: "oz" },
      { name: "Lime", amount: 0.5, unit: "oz" },
      { name: "Ginger Beer", amount: 1, unit: "top" }
    ],
    glass: "Metal Cup",
    method: "Build",
    straining: "Build",
    garnishes: ["Lime Wheel", "Ice"]
  },
  "Negroni": {
    ingredients: [
      { name: "Gin", amount: 1, unit: "oz" },
      { name: "Campari", amount: 1, unit: "oz" },
      { name: "Coochi Sweet Vermouth", amount: 1, unit: "oz" }
    ],
    glass: "Rocks Glass",
    method: "Stir",
    straining: "Single",
    garnishes: ["Ice", "Orange Twist"]
  },
  "New York Sour": {
    ingredients: [
      { name: "Bourbon", amount: 2, unit: "oz" },
      { name: "Lemon", amount: 0.75, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" }
    ],
    glass: "Rocks Glass",
    method: "Stir",
    straining: "Single",
    garnishes: ["Ice", "Primitivo Float"]
  },
  "Old Fashioned": {
    ingredients: [
      { name: "Buffalo Trace", amount: 2, unit: "oz" },
      { name: "Havana & Hyde Bitters", amount: 3, unit: "dashes" },
      { name: "Gomme Syrup", amount: 0.25, unit: "oz" }
    ],
    glass: "Rocks Glass",
    method: "Stir",
    straining: "Single",
    garnishes: ["Ice", "Orange Twist"]
  },
  "Old Fashioned (Banana Nut)": {
    ingredients: [
      { name: "Buffalo Trace", amount: 1.5, unit: "oz" },
      { name: "Banana Liquor", amount: 0.75, unit: "oz" },
      { name: "Demerara Syrup", amount: 0.5, unit: "oz" },
      { name: "Pecan Bitters", amount: 3, unit: "dashes" },
      { name: "Mole Bitters", amount: 3, unit: "dashes" }
    ],
    glass: "Rocks Glass",
    method: "Stir",
    straining: "Single",
    garnishes: ["Ice", "Dehydrated Banana", "Nutmeg"]
  },
  "Paloma": {
    ingredients: [
      { name: "Casamigos Reposado", amount: 2, unit: "oz" },
      { name: "Agave", amount: 0.5, unit: "oz" },
      { name: "Lime", amount: 0.5, unit: "oz" },
      { name: "Grapefruit Soda", amount: 1, unit: "top" }
    ],
    glass: "Collins Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Ice", "Dehydrated Lime"]
  },
  "Pimm's Cup": {
    ingredients: [
      { name: "Pimm's", amount: 2, unit: "oz" },
      { name: "Lemon", amount: 0.75, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" },
      { name: "Ginger Beer", amount: 1, unit: "top" }
    ],
    glass: "Collins Glass",
    method: "Stir",
    straining: "Build",
    garnishes: ["Cucumber & Strawberry Slices", "Mint Sprig"]
  },
  "Pisco Sour": {
    ingredients: [
      { name: "Tabernero Pisco", amount: 2, unit: "oz" },
      { name: "Simple", amount: 1, unit: "oz" },
      { name: "Lime", amount: 0.5, unit: "oz" },
      { name: "Lemon", amount: 0.5, unit: "oz" },
      { name: "Egg White", amount: 1, unit: "oz" }
    ],
    glass: "Beveled Coupe",
    method: "Dry-Wet-Dry Shake",
    straining: "Double",
    garnishes: ["Bitters Pinwheel"]
  },
  "Ranch Water": {
    ingredients: [
      { name: "Tequila", amount: 2, unit: "oz" },
      { name: "Lime", amount: 0.75, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" },
      { name: "Soda", amount: 1, unit: "top" }
    ],
    glass: "Collins Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Ice", "Lime Wedge"]
  },
  "Rusty Nail": {
    ingredients: [
      { name: "Dewar's", amount: 1.5, unit: "oz" },
      { name: "Drambuie", amount: 1.5, unit: "oz" }
    ],
    glass: "Rocks Glass",
    method: "Stir",
    straining: "Single",
    garnishes: ["Ice", "Lemon Twist"]
  },
  "Sangrini": {
    ingredients: [
      { name: "Tequila", amount: 2, unit: "oz" },
      { name: "Giffard Triple Sec", amount: 0.75, unit: "oz" },
      { name: "Lime", amount: 0.75, unit: "oz" },
      { name: "Agave", amount: 0.5, unit: "oz" }
    ],
    glass: "Beveled Coupe",
    method: "Shake",
    straining: "Double",
    garnishes: ["Primitivo Float"]
  },
  "Sazerac": {
    ingredients: [
      { name: "Woodford Rye", amount: 2, unit: "oz" },
      { name: "Giffard Gum Syrup", amount: 0.25, unit: "oz" },
      { name: "Peychaud's Bitters", amount: 4, unit: "dashes" }
    ],
    glass: "Rocks Glass",
    method: "Absinthe Prep, Stir",
    straining: "Single",
    garnishes: ["Ice", "Lemon Twist"]
  },
  "Sidecar": {
    ingredients: [
      { name: "Remy Martin VSOP", amount: 1.5, unit: "oz" },
      { name: "Lemon", amount: 0.5, unit: "oz" },
      { name: "Gomme Syrup", amount: 0.5, unit: "oz" },
      { name: "Cointreau", amount: 0.75, unit: "oz" }
    ],
    glass: "Chilled Coupe",
    method: "Shake",
    straining: "Double",
    garnishes: ["Sugar Rim", "Orange Twist"]
  },
  "Spritzer with a Twist": {
    ingredients: [
      { name: "Rose", amount: 3, unit: "oz" },
      { name: "Prosecco", amount: 3, unit: "oz" },
      { name: "Grapefruit Liqueur", amount: 1, unit: "oz" }
    ],
    glass: "Oliver's Glass",
    method: "Stir",
    straining: "Single",
    garnishes: ["Ice", "Lemon Twist"]
  },
  "Tom Collins": {
    ingredients: [
      { name: "Gin", amount: 2, unit: "oz" },
      { name: "Lemon", amount: 1, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" },
      { name: "Soda", amount: 1, unit: "top" }
    ],
    glass: "Collins Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Ice", "Lemon Wedge", { name: "Cherry", quantity: 1 }]
  },
  "Whiskey Sour": {
    ingredients: [
      { name: "Bourbon", amount: 2, unit: "oz" },
      { name: "Lemon", amount: 0.75, unit: "oz" },
      { name: "Simple", amount: 0.5, unit: "oz" }
    ],
    glass: "Rocks Glass",
    method: "Shake",
    straining: "Single",
    garnishes: ["Ice", { name: "Cherry", quantity: 2 }]
  },
  "White Russian": {
    ingredients: [
      { name: "Vodka", amount: 2, unit: "oz" },
      { name: "Espresso Liqueur", amount: 1, unit: "oz" },
      { name: "Heavy Cream", amount: 1, unit: "oz" }
    ],
    glass: "Rocks Glass",
    method: "Stir",
    straining: "Single",
    garnishes: ["Ice"]
  }
};

import React, { useState } from 'react';
const Alert = ({ children, className }) => (
  <div className={`p-4 rounded-lg ${className}`}>
    {children}
  </div>
);

const AlertDescription = ({ children }) => (
  <div className="text-sm">
    {children}
  </div>
);

const VirtualBar = () => {
  // Core state management
  const [score, setScore] = useState(0);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [selectedGlass, setSelectedGlass] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedStraining, setSelectedStraining] = useState(null);
  const [selectedGarnishes, setSelectedGarnishes] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [measurementModal, setMeasurementModal] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState(null);

  // Core functions
  const startNewOrder = (specificDrink = null) => {
    clearBuild();
    if (specificDrink) {
      setCurrentOrder(specificDrink);
    } else {
      const drinks = Object.keys(RECIPES);
      const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
      setCurrentOrder(randomDrink);
    }
    setFeedback(null);
  };

  const clearBuild = () => {
    setSelectedIngredients([]);
    setSelectedGlass(null);
    setSelectedMethod(null);
    setSelectedStraining(null);
    setSelectedGarnishes([]);
    setFeedback(null);
  };

  const addIngredient = (ingredient) => {
    setCurrentIngredient(ingredient);
    setMeasurementModal(true);
  };

  const selectMeasurement = (measurement) => {
    setSelectedIngredients([
      ...selectedIngredients,
      {
        name: currentIngredient.name,
        amount: measurement.amount,
        unit: measurement.unit
      }
    ]);
    setMeasurementModal(false);
    setCurrentIngredient(null);
  };

  const checkRecipe = () => {
    if (!currentOrder) return;
    const recipe = RECIPES[currentOrder];
    let isCorrect = true;
    let feedbackMessage = '';

    // Check ingredients
    if (selectedIngredients.length !== recipe.ingredients.length) {
      isCorrect = false;
      feedbackMessage += 'Incorrect ingredients or measurements. ';
    } else {
      isCorrect = recipe.ingredients.every(recipeIng => {
        return selectedIngredients.some(selectedIng => 
          selectedIng.name === recipeIng.name &&
          selectedIng.amount === recipeIng.amount &&
          selectedIng.unit === recipeIng.unit
        );
      });
      if (!isCorrect) feedbackMessage += 'Incorrect ingredients or measurements. ';
    }

    // Check other components
    if (selectedGlass !== recipe.glass) {
      isCorrect = false;
      feedbackMessage += 'Wrong glass. ';
    }
    if (selectedMethod !== recipe.method) {
      isCorrect = false;
      feedbackMessage += 'Wrong method. ';
    }
    if (selectedStraining !== recipe.straining) {
      isCorrect = false;
      feedbackMessage += 'Wrong straining technique. ';
    }

    // Update score and feedback
    if (isCorrect) {
      setScore(score + 1);
      setFeedback({
        type: 'success',
        message: 'Perfect! The drink was made correctly.'
      });
    } else {
      setFeedback({
        type: 'error',
        message: feedbackMessage.trim(),
        recipe: recipe
      });
    }
  };

  return (
  <div className="container mx-auto p-4 max-w-12x1">
    {/* Header Section */}
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Virtual Bar Training</h1>
      <p className="text-xl mb-4">Score: {score}</p>
      
      {!currentOrder ? (
        <div className="space-x-4">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg"
            onClick={() => startNewOrder()}
          >
            Start Random Order
          </button>
          <div className="inline-block">
            <select
              className="mt-4 p-2 rounded-lg border"
              onChange={(e) => startNewOrder(e.target.value)}
              value=""
            >
              <option value="" disabled>Select specific drink...</option>
              {Object.keys(RECIPES).map(drink => (
                <option key={drink} value={drink}>{drink}</option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Current Order: {currentOrder}</h2>
          </div>

          {/* Current Build Display */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Current Build:</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              {selectedIngredients.map((ingredient, index) => (
                <div key={index} className="mb-2">
                  {ingredient.amount} {ingredient.unit} {ingredient.name}
                </div>
              ))}
              <div className="flex space-x-4 mt-4">
                {selectedIngredients.length > 0 && (
                  <>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                      onClick={clearBuild}
                    >
                      Clear Build
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg"
                      onClick={checkRecipe}
                    >
                      Submit Recipe
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Feedback Alert */}
          {feedback && (
            <Alert className={`mb-4 ${feedback.type === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
              <AlertDescription>
                <div className="text-sm">
                  <div className="mb-2">{feedback.message}</div>
                  {feedback.type === 'error' && feedback.recipe && (
                    <div className="mt-4 p-4 bg-white rounded-lg">
                      <h3 className="font-bold mb-2">Correct Recipe:</h3>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-1">Ingredients:</h4>
                        {feedback.recipe.ingredients.map((ingredient, index) => (
                          <div key={index} className="mb-1">
                            {ingredient.amount} {ingredient.unit} {ingredient.name}
                          </div>
                        ))}
                      </div>
                      <div className="mb-2">
                        <h4 className="font-semibold mb-1">Glass:</h4>
                        <div>{feedback.recipe.glass}</div>
                      </div>
                      <div className="mb-2">
                        <h4 className="font-semibold mb-1">Method:</h4>
                        <div>{feedback.recipe.method}</div>
                      </div>
                      <div className="mb-2">
                        <h4 className="font-semibold mb-1">Straining:</h4>
                        <div>{feedback.recipe.straining}</div>
                      </div>
                      <div className="mb-2">
                        <h4 className="font-semibold mb-1">Garnishes:</h4>
                        <div>
                          {feedback.recipe.garnishes.map(g => 
                            typeof g === 'object' ? `${g.quantity} ${g.name}` : g
                          ).join(", ")}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </AlertDescription>
            </Alert>
          )}
        </>
      )}
    </div>

    {/* Bar Interface */}
<div className="relative w-full bg-gray-900 p-4 rounded-lg grid grid-cols-[2fr,1fr] gap-4">
  {/* Left side content */}
  <div className="space-y-4">
    {/* Glassware Section */}
<div className="bg-zinc-800 rounded-lg p-2 flex items-center justify-center shadow-lg">
  <div className="flex space-x-2 overflow-x-auto">
    {Object.entries(GLASSWARE).map(([glass, info]) => (
      <button
        key={glass}
        className={`flex-shrink-0 p-2 rounded-lg flex flex-col items-center justify-center min-w-[80px] text-white ${
          selectedGlass === glass ? 'bg-blue-500' : 'bg-zinc-700 hover:bg-zinc-600'
        }`}
        onClick={() => setSelectedGlass(glass)}
      >
        <span className="text-2xl">{info.icon}</span>
        <span className="text-xs mt-1">{glass}</span>
      </button>
    ))}
  </div>
</div>

    {/* Main Bar Area */}
    <div className="grid grid-cols-2 gap-4">
      {/* Left Side - Bar Well */}
      <div className="bg-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-bold text-white mb-4">Bar Well</h3>
        <div className="grid grid-cols-5 gap-2">
          {[...INGREDIENTS.spirits, ...INGREDIENTS.liqueurs].map((ingredient, index) => (
            <button
              key={index}
              className="flex flex-col items-center justify-center p-2 bg-zinc-700 rounded-lg hover:bg-zinc-600 text-white"
              onClick={() => addIngredient(ingredient)}
            >
              {ingredient.icon}
              <span className="text-xs mt-1">{ingredient.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Mixers */}
      <div className="bg-zinc-800 rounded-lg p-4">
        <h3 className="text-lg font-bold text-white mb-4">Mixers & Bitters</h3>
        <div className="grid grid-cols-4 gap-2">
          {[...INGREDIENTS.mixers, ...INGREDIENTS.bitters].map((ingredient, index) => (
            <button
              key={index}
              className="flex flex-col items-center justify-center p-2 bg-zinc-700 rounded-lg hover:bg-zinc-600 text-white"
              onClick={() => addIngredient(ingredient)}
            >
              {ingredient.icon}
              <span className="text-xs mt-1">{ingredient.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Right side controls */}
  <div className="space-y-4">
    {/* Methods */}
    <div className="bg-zinc-800 rounded-lg p-4">
      <h3 className="text-lg font-bold text-white mb-4">Methods</h3>
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(METHODS).map(([method, description]) => (
          <button
            key={method}
            className={`p-2 rounded-lg ${
              selectedMethod === method ? 'bg-blue-500' : 'bg-zinc-700 hover:bg-zinc-600'
            } text-white`}
            onClick={() => setSelectedMethod(method)}
            title={description}
          >
            {method}
          </button>
        ))}
      </div>
    </div>

    {/* Straining */}
    <div className="bg-zinc-800 rounded-lg p-4">
      <h3 className="text-lg font-bold text-white mb-4">Straining</h3>
      <div className="grid grid-cols-4 gap-2">
        {Object.entries(STRAINING).map(([strain, description]) => (
          <button
            key={strain}
            className={`p-2 rounded-lg ${
              selectedStraining === strain ? 'bg-blue-500' : 'bg-zinc-700 hover:bg-zinc-600'
            } text-white`}
            onClick={() => setSelectedStraining(strain)}
            title={description}
          >
            {strain}
          </button>
        ))}
      </div>
    </div>

    {/* Garnishes */}
    <div className="bg-zinc-800 rounded-lg p-4">
      <h3 className="text-lg font-bold text-white mb-4">Garnishes</h3>
      <div className="grid grid-cols-3 gap-2">
        {Object.entries(GARNISHES).flatMap(([category, items]) =>
          items.map((garnish) => (
            <button
              key={garnish}
              className={`p-2 rounded-lg text-xs ${
                selectedGarnishes.includes(garnish)
                  ? 'bg-blue-500 text-white'
                  : 'bg-zinc-700 hover:bg-zinc-600 text-white'
              }`}
              onClick={() => {
                if (selectedGarnishes.includes(garnish)) {
                  setSelectedGarnishes(selectedGarnishes.filter(g => g !== garnish));
                } else {
                  setSelectedGarnishes([...selectedGarnishes, garnish]);
                }
              }}
            >
              {garnish}
            </button>
          ))
        )}
      </div>
    </div>
  </div>
</div>

    {/* Measurement Modal */}
    {measurementModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-4 rounded-lg max-w-md w-full">
          <h3 className="text-lg font-bold mb-4">
            Select Measurement for {currentIngredient.name}
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {MEASUREMENTS.map((measurement, index) => (
              <button
                key={index}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => selectMeasurement(measurement)}
              >
                {measurement.amount} {measurement.unit}
              </button>
            ))}
          </div>
          <button
            className="mt-4 p-2 bg-gray-500 text-white rounded-lg w-full"
            onClick={() => setMeasurementModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    )}
  </div>
 );
};

export default VirtualBar;