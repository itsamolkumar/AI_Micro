/**
 * MicroFoodie - Culinary & Budget Intelligence Engine
 * Client-Side State Management & AI Simulator
 */

// 1. Recipe & Ingredient Database
const RECIPE_DB = [
  // --- BREAKFASTS ---
  {
    id: "b_oatmeal",
    name: "Classic Peanut Butter & Banana Oatmeal",
    meal: "breakfast",
    prepTime: 8,
    difficulty: "Easy",
    schedule: "busy",
    tags: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
    ingredients: [
      { name: "Rolled Oats", quantity: "1/2 cup", price: 0.40, category: "Pantry" },
      { name: "Banana", quantity: "1 medium", price: 0.30, category: "Produce" },
      { name: "Peanut Butter", quantity: "2 tbsp", price: 0.50, category: "Pantry", substitute: { name: "Sunflower Seed Butter", price: 0.90, type: "allergen", desc: "Nut-free alternative" } },
      { name: "Almond Milk", quantity: "1 cup", price: 0.60, category: "Dairy & Subs", substitute: { name: "Water", price: 0.00, type: "budget", desc: "Save $0.60 using water" } }
    ],
    steps: [
      "Combine Oats and Almond Milk in a bowl and microwave for 2 minutes.",
      "Slice the Banana and place on top.",
      "Drizzle Peanut Butter and stir before eating."
    ]
  },
  {
    id: "b_scramble",
    name: "Microwave Egg Scramble with Toast",
    meal: "breakfast",
    prepTime: 5,
    difficulty: "Easy",
    schedule: "busy",
    tags: ["vegetarian"],
    ingredients: [
      { name: "Eggs", quantity: "2 large", price: 0.80, category: "Protein", substitute: { name: "Silken Tofu", price: 1.20, type: "vegan", desc: "Vegan scramble alternative" } },
      { name: "Cheddar Cheese", quantity: "1/4 cup", price: 0.70, category: "Dairy & Subs", substitute: { name: "Nutritional Yeast", price: 0.50, type: "dairy-free", desc: "Dairy-free cheese flavor" } },
      { name: "Whole Wheat Bread", quantity: "2 slices", price: 0.50, category: "Pantry", substitute: { name: "Gluten-Free Bread", price: 1.10, type: "gluten-free", desc: "Gluten-free toast" } }
    ],
    steps: [
      "Whisk Eggs in a mug, microwave for 45s, stir, and microwave for another 30s.",
      "Fold Cheddar Cheese into hot eggs.",
      "Toast Whole Wheat Bread and serve on the side."
    ]
  },
  {
    id: "b_ketoshake",
    name: "Keto Bulletproof Coffee & Bacon Strips",
    meal: "breakfast",
    prepTime: 7,
    difficulty: "Easy",
    schedule: "busy",
    tags: ["keto", "gluten-free", "dairy-free"],
    ingredients: [
      { name: "Bacon", quantity: "3 strips", price: 2.20, category: "Protein", substitute: { name: "Turkey Bacon", price: 1.80, type: "budget", desc: "Lower fat, saves $0.40" } },
      { name: "Coffee Beans", quantity: "2 tbsp", price: 0.60, category: "Pantry" },
      { name: "MCT Oil", quantity: "1 tbsp", price: 0.80, category: "Pantry", substitute: { name: "Coconut Oil", price: 0.40, type: "budget", desc: "Saves $0.40" } }
    ],
    steps: [
      "Pan-fry or microwave Bacon until crispy.",
      "Brew Coffee and blend with MCT Oil until frothy.",
      "Serve warm keto coffee alongside bacon."
    ]
  },
  {
    id: "b_pancakes",
    name: "Fluffy Blueberry Pancakes",
    meal: "breakfast",
    prepTime: 20,
    difficulty: "Medium",
    schedule: "standard",
    tags: ["vegetarian"],
    ingredients: [
      { name: "Pancake Mix", quantity: "1 cup", price: 0.80, category: "Pantry", substitute: { name: "Gluten-Free Flour Mix", price: 1.50, type: "gluten-free", desc: "Gluten-free alternative" } },
      { name: "Milk", quantity: "3/4 cup", price: 0.50, category: "Dairy & Subs", substitute: { name: "Oat Milk", price: 0.80, type: "dairy-free", desc: "Dairy-free swap" } },
      { name: "Egg", quantity: "1 large", price: 0.40, category: "Protein" },
      { name: "Fresh Blueberries", quantity: "1/2 cup", price: 2.20, category: "Produce", substitute: { name: "Frozen Blueberries", price: 1.00, type: "budget", desc: "Saves $1.20 using frozen" } }
    ],
    steps: [
      "Whisk Pancake Mix, Milk, and Egg in a bowl until combined.",
      "Heat a skillet over medium heat and grease lightly.",
      "Pour batter, press Fresh Blueberries into surface, and flip when bubbles form.",
      "Serve with syrup."
    ]
  },
  {
    id: "b_tofuscr",
    name: "Loaded Avocado & Tofu Scramble",
    meal: "breakfast",
    prepTime: 18,
    difficulty: "Medium",
    schedule: "standard",
    tags: ["vegetarian", "vegan", "dairy-free", "gluten-free"],
    ingredients: [
      { name: "Firm Tofu", quantity: "1/2 block", price: 1.25, category: "Protein" },
      { name: "Avocado", quantity: "1/2 fruit", price: 1.20, category: "Produce", substitute: { name: "Hummus", price: 0.60, type: "budget", desc: "Lower cost healthy fat" } },
      { name: "Spinach", quantity: "1 cup", price: 0.80, category: "Produce" },
      { name: "Turmeric & Spices", quantity: "1 tsp", price: 0.20, category: "Pantry" }
    ],
    steps: [
      "Crumble Firm Tofu into a pan with warm oil.",
      "Add Turmeric & Spices, cooking for 5 minutes.",
      "Toss in Spinach and cook until wilted.",
      "Serve warm, topped with sliced Avocado."
    ]
  },
  {
    id: "b_shakshuka",
    name: "Baked Eggs Shakshuka with Feta",
    meal: "breakfast",
    prepTime: 35,
    difficulty: "Medium",
    schedule: "relaxed",
    tags: ["vegetarian", "gluten-free"],
    ingredients: [
      { name: "Eggs", quantity: "3 large", price: 1.20, category: "Protein" },
      { name: "Canned Tomatoes", quantity: "1 can", price: 1.50, category: "Pantry" },
      { name: "Bell Pepper", quantity: "1 medium", price: 1.00, category: "Produce" },
      { name: "Feta Cheese", quantity: "1/4 cup", price: 1.80, category: "Dairy & Subs", substitute: { name: "Olive Tapenade", price: 1.20, type: "dairy-free", desc: "Salty dairy-free topper" } },
      { name: "Olive Oil & Spices", quantity: "2 tbsp", price: 0.50, category: "Pantry" }
    ],
    steps: [
      "Sauté diced Bell Pepper in Olive Oil & Spices until soft.",
      "Pour in Canned Tomatoes and simmer for 10 minutes until thick.",
      "Make small wells, crack Eggs directly into sauce, cover and cook for 6-8 mins.",
      "Top with crumbled Feta Cheese and serve."
    ]
  },

  // --- LUNCHES ---
  {
    id: "l_wrap",
    name: "Turkey & Cheddar Tortilla Wrap",
    meal: "lunch",
    prepTime: 10,
    difficulty: "Easy",
    schedule: "busy",
    tags: [],
    ingredients: [
      { name: "Deli Turkey", quantity: "4 slices", price: 2.50, category: "Protein", substitute: { name: "Canned Chickpeas (Mashed)", price: 0.80, type: "vegetarian", desc: "Vegetarian/Vegan swap" } },
      { name: "Cheddar Cheese", quantity: "2 slices", price: 0.80, category: "Dairy & Subs", substitute: { name: "Hummus", price: 0.50, type: "dairy-free", desc: "Dairy-free/Vegan spreads" } },
      { name: "Flour Tortilla", quantity: "1 large", price: 0.40, category: "Pantry", substitute: { name: "Gluten-Free Wrap", price: 0.90, type: "gluten-free", desc: "Gluten-free tortilla" } },
      { name: "Lettuce & Tomato", quantity: "1/2 cup", price: 0.60, category: "Produce" }
    ],
    steps: [
      "Lay out Flour Tortilla on a clean surface.",
      "Layer Deli Turkey, Cheddar Cheese, Lettuce & Tomato.",
      "Roll tightly, slice in half, and enjoy."
    ]
  },
  {
    id: "l_chickpea",
    name: "Mediterranean Chickpea Salad Wrap",
    meal: "lunch",
    prepTime: 10,
    difficulty: "Easy",
    schedule: "busy",
    tags: ["vegetarian", "vegan", "dairy-free"],
    ingredients: [
      { name: "Canned Chickpeas", quantity: "1/2 can", price: 0.60, category: "Protein" },
      { name: "Cucumber & Tomato", quantity: "1/2 cup", price: 0.80, category: "Produce" },
      { name: "Tahini dressing", quantity: "2 tbsp", price: 0.60, category: "Pantry" },
      { name: "Flour Tortilla", quantity: "1 large", price: 0.40, category: "Pantry", substitute: { name: "Gluten-Free Wrap", price: 0.90, type: "gluten-free", desc: "Gluten-free option" } }
    ],
    steps: [
      "Rinse Chickpeas and lightly mash in a bowl.",
      "Mix in diced Cucumber & Tomato and Tahini dressing.",
      "Spoon into Flour Tortilla, roll up, and serve."
    ]
  },
  {
    id: "l_tunasalad",
    name: "Tuna Salad Lettuce Wraps",
    meal: "lunch",
    prepTime: 8,
    difficulty: "Easy",
    schedule: "busy",
    tags: ["keto", "gluten-free", "dairy-free"],
    ingredients: [
      { name: "Canned Tuna", quantity: "1 can", price: 1.50, category: "Protein" },
      { name: "Mayonnaise", quantity: "2 tbsp", price: 0.30, category: "Pantry" },
      { name: "Celery", quantity: "1 stalk", price: 0.25, category: "Produce" },
      { name: "Romaine Lettuce Heads", quantity: "3 leaves", price: 0.75, category: "Produce" }
    ],
    steps: [
      "Drain Canned Tuna and flake into a bowl.",
      "Mix in Mayonnaise and finely chopped Celery.",
      "Spoon tuna salad into Romaine Lettuce Heads and serve."
    ]
  },
  {
    id: "l_quinoabowl",
    name: "Chicken & Avocado Quinoa Salad",
    meal: "lunch",
    prepTime: 25,
    difficulty: "Medium",
    schedule: "standard",
    tags: ["gluten-free", "dairy-free"],
    ingredients: [
      { name: "Grilled Chicken Breast", quantity: "4 oz", price: 3.50, category: "Protein", substitute: { name: "Canned Black Beans", price: 0.70, type: "vegetarian", desc: "Plant-based protein, saves $2.80" } },
      { name: "Quinoa", quantity: "1/2 cup dry", price: 0.80, category: "Pantry" },
      { name: "Avocado", quantity: "1/2 fruit", price: 1.20, category: "Produce" },
      { name: "Cherry Tomatoes", quantity: "1/2 cup", price: 1.10, category: "Produce" }
    ],
    steps: [
      "Rinse and boil Quinoa according to package instructions.",
      "Dice Grilled Chicken Breast and warm up.",
      "Combine cooked quinoa, chicken, Cherry Tomatoes, and top with diced Avocado."
    ]
  },
  {
    id: "l_sweetpotato",
    name: "Roasted Sweet Potato & Black Bean Bowl",
    meal: "lunch",
    prepTime: 28,
    difficulty: "Medium",
    schedule: "standard",
    tags: ["vegetarian", "vegan", "dairy-free", "gluten-free"],
    ingredients: [
      { name: "Sweet Potato", quantity: "1 large", price: 0.90, category: "Produce" },
      { name: "Canned Black Beans", quantity: "1 can", price: 0.80, category: "Protein" },
      { name: "Corn Kernels", quantity: "1/2 cup", price: 0.40, category: "Pantry" },
      { name: "Cilantro Lime Dressing", quantity: "2 tbsp", price: 0.60, category: "Pantry" }
    ],
    steps: [
      "Cube Sweet Potato, toss in oil, and roast at 400°F (200°C) for 20 minutes.",
      "Warm Black Beans and Corn in a small saucepan.",
      "Assemble components in a bowl and drizzle with Cilantro Lime Dressing."
    ]
  },
  {
    id: "l_tomatosoup",
    name: "Slow-Simmered Tomato Basil Soup & Grilled Cheese",
    meal: "lunch",
    prepTime: 45,
    difficulty: "Medium",
    schedule: "relaxed",
    tags: ["vegetarian"],
    ingredients: [
      { name: "Canned Tomato Purée", quantity: "1 large can", price: 2.00, category: "Pantry" },
      { name: "Heavy Cream", quantity: "1/4 cup", price: 0.90, category: "Dairy & Subs", substitute: { name: "Coconut Milk", price: 0.70, type: "dairy-free", desc: "Dairy-free soup creamy base" } },
      { name: "Cheddar Cheese", quantity: "3 slices", price: 1.20, category: "Dairy & Subs" },
      { name: "Sourdough Bread", quantity: "2 slices", price: 0.90, category: "Pantry", substitute: { name: "Gluten-Free Bread", price: 1.50, type: "gluten-free", desc: "Gluten-free sandwich" } },
      { name: "Butter", quantity: "1 tbsp", price: 0.30, category: "Dairy & Subs" }
    ],
    steps: [
      "Simmer Tomato Purée with spices and fresh herbs on low heat for 30 minutes.",
      "Stir in Heavy Cream and keep warm.",
      "Butter Sourdough Bread, insert Cheddar Cheese, and grill on a skillet until golden brown.",
      "Serve soup warm with the hot sandwich."
    ]
  },

  // --- DINNERS ---
  {
    id: "d_pasta",
    name: "Garlic Butter Shrimp Pasta",
    meal: "dinner",
    prepTime: 15,
    difficulty: "Medium",
    schedule: "busy",
    tags: [],
    ingredients: [
      { name: "Shrimp", quantity: "6 oz", price: 5.50, category: "Protein", substitute: { name: "Chicken Breast", price: 2.80, type: "budget", desc: "Swap for chicken, saves $2.70" } },
      { name: "Spaghetti Pasta", quantity: "4 oz", price: 0.50, category: "Pantry", substitute: { name: "Gluten-Free Penne", price: 1.20, type: "gluten-free", desc: "Gluten-free pasta" } },
      { name: "Garlic & Butter", quantity: "2 tbsp", price: 0.60, category: "Dairy & Subs", substitute: { name: "Olive Oil & Garlic", price: 0.40, type: "dairy-free", desc: "Dairy-free alternative" } },
      { name: "Lemon", quantity: "1/2 fruit", price: 0.40, category: "Produce" }
    ],
    steps: [
      "Boil Spaghetti Pasta in salted water for 9-11 mins.",
      "Sauté Shrimp and minced Garlic in melted Butter for 3-4 mins.",
      "Toss cooked pasta, garlic butter, and a squeeze of Lemon juice together. Serve."
    ]
  },
  {
    id: "d_curry",
    name: "Coconut Chickpea & Spinach Curry",
    meal: "dinner",
    prepTime: 15,
    difficulty: "Easy",
    schedule: "busy",
    tags: ["vegetarian", "vegan", "dairy-free", "gluten-free"],
    ingredients: [
      { name: "Canned Chickpeas", quantity: "1 can", price: 0.90, category: "Protein" },
      { name: "Coconut Milk", quantity: "1 cup", price: 1.20, category: "Dairy & Subs" },
      { name: "Spinach", quantity: "2 cups", price: 1.00, category: "Produce" },
      { name: "Curry Paste & Rice", quantity: "1 cup cooked", price: 0.80, category: "Pantry" }
    ],
    steps: [
      "Heat Curry Paste in a pan, add Coconut Milk and drained Chickpeas.",
      "Simmer for 8 minutes.",
      "Stir in Spinach until wilted and serve over warm Rice."
    ]
  },
  {
    id: "d_keto_broccoli",
    name: "Cheesy Chicken & Broccoli Skillet",
    meal: "dinner",
    prepTime: 15,
    difficulty: "Easy",
    schedule: "busy",
    tags: ["keto", "gluten-free"],
    ingredients: [
      { name: "Chicken Breast Cubes", quantity: "6 oz", price: 3.20, category: "Protein" },
      { name: "Broccoli Florets", quantity: "1.5 cups", price: 1.20, category: "Produce" },
      { name: "Cream Cheese", quantity: "2 tbsp", price: 0.60, category: "Dairy & Subs", substitute: { name: "Coconut Cream", price: 0.90, type: "dairy-free", desc: "Creamy dairy-free base" } },
      { name: "Cheddar Shreds", quantity: "1/4 cup", price: 0.80, category: "Dairy & Subs", substitute: { name: "Nutritional Yeast", price: 0.50, type: "dairy-free", desc: "Cheesy dairy-free sprinkle" } }
    ],
    steps: [
      "Sauté Chicken Breast Cubes in oil until golden and cooked through.",
      "Add Broccoli Florets and 2 tbsp water, steam covered for 3 minutes.",
      "Stir in Cream Cheese and Cheddar Shreds until melted and thick. Serve hot."
    ]
  },
  {
    id: "d_salmon",
    name: "Pan-Seared Salmon with Roasted Asparagus",
    meal: "dinner",
    prepTime: 30,
    difficulty: "Medium",
    schedule: "standard",
    tags: ["gluten-free", "dairy-free", "keto"],
    ingredients: [
      { name: "Fresh Salmon Fillet", quantity: "6 oz", price: 9.50, category: "Protein", substitute: { name: "Canned Salmon Cakes", price: 3.50, type: "budget", desc: "Canned salmon cakes, saves $6.00" } },
      { name: "Asparagus", quantity: "1 bunch", price: 2.50, category: "Produce", substitute: { name: "Frozen Green Beans", price: 1.00, type: "budget", desc: "Saves $1.50 using green beans" } },
      { name: "Olive Oil & Herbs", quantity: "2 tbsp", price: 0.60, category: "Pantry" }
    ],
    steps: [
      "Toss Asparagus in Olive Oil & Herbs and roast at 400°F (200°C) for 15 minutes.",
      "Season Fresh Salmon Fillet and sear in a hot skillet for 4-5 mins skin side down, then flip for 3 mins.",
      "Serve seared salmon alongside roasted asparagus."
    ]
  },
  {
    id: "d_risotto",
    name: "Creamy Wild Mushroom Risotto",
    meal: "dinner",
    prepTime: 30,
    difficulty: "Hard",
    schedule: "standard",
    tags: ["vegetarian", "gluten-free"],
    ingredients: [
      { name: "Arborio Rice", quantity: "1/2 cup", price: 0.80, category: "Pantry" },
      { name: "Mixed Wild Mushrooms", quantity: "1 cup", price: 3.50, category: "Produce", substitute: { name: "Button Mushrooms", price: 1.50, type: "budget", desc: "Saves $2.00 using plain mushrooms" } },
      { name: "Vegetable Broth", quantity: "2 cups", price: 1.20, category: "Pantry" },
      { name: "Parmesan Cheese", quantity: "1/4 cup", price: 1.50, category: "Dairy & Subs", substitute: { name: "Nutritional Yeast", price: 0.50, type: "vegan", desc: "Vegan parmesan alternative" } }
    ],
    steps: [
      "Sauté Mixed Wild Mushrooms in oil until golden; set aside.",
      "Toast Arborio Rice in the same pan, then add warm Vegetable Broth one ladle at a time, stirring constantly.",
      "Once rice is tender and creamy (approx 20 mins), fold in mushrooms and Parmesan Cheese. Serve."
    ]
  },
  {
    id: "d_shortribs",
    name: "Red Wine Braised Short Ribs & Mash",
    meal: "dinner",
    prepTime: 60,
    difficulty: "Hard",
    schedule: "relaxed",
    tags: ["gluten-free"],
    ingredients: [
      { name: "Beef Short Ribs", quantity: "8 oz", price: 12.00, category: "Protein", substitute: { name: "Chuck Roast", price: 5.50, type: "budget", desc: "Braised chuck roast steak, saves $6.50" } },
      { name: "Potatoes", quantity: "2 medium", price: 0.80, category: "Produce", substitute: { name: "Mashed Cauliflower", price: 1.50, type: "keto", desc: "Low-carb mashed cauliflower" } },
      { name: "Red Wine & Broth", quantity: "1/2 cup", price: 1.50, category: "Pantry" },
      { name: "Butter & Cream", quantity: "3 tbsp", price: 0.80, category: "Dairy & Subs", substitute: { name: "Olive Oil & Garlic", price: 0.40, type: "dairy-free", desc: "Dairy-free mash" } }
    ],
    steps: [
      "Sear Beef Short Ribs in a deep pot until dark brown on all sides.",
      "Pour in Red Wine & Broth, cover tightly, and simmer on low-medium heat for 45 minutes until tender.",
      "Boil Potatoes, mash with Butter & Cream.",
      "Plate short ribs with rich reduction sauce over mashed potatoes."
    ]
  },
  {
    id: "d_eggplant",
    name: "Baked Eggplant Parmesan",
    meal: "dinner",
    prepTime: 55,
    difficulty: "Medium",
    schedule: "relaxed",
    tags: ["vegetarian"],
    ingredients: [
      { name: "Eggplant", quantity: "1 large", price: 1.50, category: "Produce" },
      { name: "Marinara Sauce", quantity: "1 cup", price: 1.20, category: "Pantry" },
      { name: "Mozzarella Cheese", quantity: "1/2 cup", price: 2.00, category: "Dairy & Subs", substitute: { name: "Vegan Mozzarella", price: 2.50, type: "dairy-free", desc: "Dairy-free cheese option" } },
      { name: "Breadcrumbs", quantity: "1/2 cup", price: 0.50, category: "Pantry", substitute: { name: "Gluten-Free Breadcrumbs", price: 1.20, type: "gluten-free", desc: "Gluten-free breadcrumbs" } }
    ],
    steps: [
      "Slice Eggplant into rounds, salt, and let sweat for 15 minutes.",
      "Dredge in Breadcrumbs and bake at 400°F (200°C) for 20 minutes until crisp.",
      "Layer baked eggplant, Marinara Sauce, and Mozzarella Cheese in a baking dish.",
      "Bake for another 15 minutes until bubbly and golden."
    ]
  }
];

// 2. Active Application State
let APP_STATE = {
  statedBudget: 25.00,
  scheduleType: "busy", // 'busy', 'standard', 'relaxed'
  busyTimeblocks: {
    morning: false,
    afternoon: false,
    evening: false
  },
  diets: [], // Array of checked diets (e.g. ['vegetarian', 'gluten-free'])
  exclusions: [], // Array of strings (e.g. ['peanut', 'cilantro'])
  
  // Generated Plan State
  currentMeals: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  appliedSubstitutions: {}, // Key: original ingredient name, Value: replacement ingredient object
  checkedGroceries: new Set(), // Set of ingredient names checked off (already in pantry)
  checkedSteps: new Set() // Set of recipe steps checked off
};

// 3. Document Element Selectors
const docElements = {
  form: document.getElementById("intelligence-form"),
  budgetInput: document.getElementById("budget-input"),
  budgetSlider: document.getElementById("budget-slider"),
  budgetValLabel: document.getElementById("budget-val"),
  allergyInput: document.getElementById("allergy-input"),
  
  // Dynamic Outputs
  emptyState: document.getElementById("empty-state"),
  dashboardContent: document.getElementById("dashboard-content"),
  scheduleBadge: document.getElementById("schedule-badge"),
  totalCostVal: document.getElementById("total-cost-val"),
  allowedBudgetVal: document.getElementById("allowed-budget-val"),
  feasibilityBadge: document.getElementById("feasibility-status-badge"),
  gaugeBarFill: document.getElementById("gauge-bar-fill"),
  gaugeMessage: document.getElementById("gauge-message"),
  tipsContainer: document.getElementById("tips-container"),
  tipsSection: document.getElementById("budget-saving-tips"),
  
  substitutionsContainer: document.getElementById("substitutions-container"),
  mealPlanContainer: document.getElementById("meal-plan-container"),
  groceryContainer: document.getElementById("grocery-container"),
  
  // Controls
  printBtn: document.getElementById("print-btn"),
  resetBtn: document.getElementById("reset-btn")
};

// 4. Initialization & Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  syncBudgetInputs(25);
});

function setupEventListeners() {
  // Sync budget number field and slider
  docElements.budgetInput.addEventListener("input", (e) => {
    let val = parseFloat(e.target.value) || 5;
    if (val < 5) val = 5;
    if (val > 200) val = 200;
    syncBudgetInputs(val);
  });
  
  docElements.budgetSlider.addEventListener("input", (e) => {
    syncBudgetInputs(parseInt(e.target.value));
  });

  // Handle Form Submission
  docElements.form.addEventListener("submit", (e) => {
    e.preventDefault();
    generatePlanFromInputs();
  });

  // Handle Print Action
  docElements.printBtn.addEventListener("click", () => {
    window.print();
  });

  // Handle Reset Action
  docElements.resetBtn.addEventListener("click", () => {
    resetToWelcome();
  });
}

function syncBudgetInputs(val) {
  docElements.budgetInput.value = val;
  docElements.budgetSlider.value = val;
  docElements.budgetValLabel.innerText = `$${val}`;
  APP_STATE.statedBudget = val;
  
  // Live recalculate if dashboard is open
  if (!docElements.dashboardContent.classList.contains("hidden")) {
    calculateAndRenderBudget();
  }
}

// Global hook to load hints
window.loadPreset = function(budget, schedule, diets) {
  syncBudgetInputs(budget);
  
  // Set schedule radio
  const radios = document.getElementsByName("schedule");
  radios.forEach(r => {
    r.checked = r.value === schedule;
  });
  
  // Reset checkboxes
  document.getElementById("busy-morning").checked = false;
  document.getElementById("busy-afternoon").checked = false;
  document.getElementById("busy-evening").checked = false;
  
  // Set diet checkboxes
  const dietChecks = document.getElementsByName("diet");
  dietChecks.forEach(cb => {
    cb.checked = diets.includes(cb.value);
  });
  
  docElements.allergyInput.value = "";
  
  // Generate
  generatePlanFromInputs();
};

function resetToWelcome() {
  docElements.dashboardContent.classList.add("hidden");
  docElements.emptyState.classList.remove("hidden");
  // Clean state
  APP_STATE.appliedSubstitutions = {};
  APP_STATE.checkedGroceries.clear();
  APP_STATE.checkedSteps.clear();
}

// 5. Intelligent Generator Logic
function generatePlanFromInputs() {
  // Read form values
  const scheduleRadio = document.querySelector('input[name="schedule"]:checked');
  APP_STATE.scheduleType = scheduleRadio ? scheduleRadio.value : "busy";
  
  APP_STATE.busyTimeblocks.morning = document.getElementById("busy-morning").checked;
  APP_STATE.busyTimeblocks.afternoon = document.getElementById("busy-afternoon").checked;
  APP_STATE.busyTimeblocks.evening = document.getElementById("busy-evening").checked;
  
  const dietChecks = document.querySelectorAll('input[name="diet"]:checked');
  APP_STATE.diets = Array.from(dietChecks).map(cb => cb.value);
  
  const allergyStr = docElements.allergyInput.value.trim().toLowerCase();
  APP_STATE.exclusions = allergyStr ? allergyStr.split(",").map(s => s.trim()).filter(s => s.length > 0) : [];
  
  // Reset outputs
  APP_STATE.appliedSubstitutions = {};
  APP_STATE.checkedGroceries.clear();
  APP_STATE.checkedSteps.clear();
  
  // Match meals
  const matchedBreakfast = selectRecipe("breakfast");
  const matchedLunch = selectRecipe("lunch");
  const matchedDinner = selectRecipe("dinner");
  
  if (!matchedBreakfast || !matchedLunch || !matchedDinner) {
    alert("Could not find recipes matching all selected dietary exclusions and preferences. Try removing some filters.");
    return;
  }
  
  APP_STATE.currentMeals.breakfast = JSON.parse(JSON.stringify(matchedBreakfast));
  APP_STATE.currentMeals.lunch = JSON.parse(JSON.stringify(matchedLunch));
  APP_STATE.currentMeals.dinner = JSON.parse(JSON.stringify(matchedDinner));
  
  // Render Dashboard
  docElements.emptyState.classList.add("hidden");
  docElements.dashboardContent.classList.remove("hidden");
  
  // Update header metadata
  let scheduleText = "Standard Plan";
  if (APP_STATE.scheduleType === "busy") scheduleText = "Busy Schedule Plan";
  if (APP_STATE.scheduleType === "relaxed") scheduleText = "Relaxed Day Plan";
  docElements.scheduleBadge.innerText = scheduleText;
  
  renderMealPlan();
  renderGroceryList();
  renderSubstitutions();
  calculateAndRenderBudget();
}

/**
 * Filter and select optimal recipe for meal type based on dietary restrictions, schedule complexity, and exclusions
 */
function selectRecipe(mealType) {
  // Get all recipes for this meal
  let list = RECIPE_DB.filter(r => r.meal === mealType);
  
  // 1. Filter by dietary constraints (recipe must support ALL checked diets)
  if (APP_STATE.diets.length > 0) {
    list = list.filter(r => {
      return APP_STATE.diets.every(diet => r.tags.includes(diet));
    });
  }
  
  // 2. Filter by ingredients exclusions (allergies)
  if (APP_STATE.exclusions.length > 0) {
    list = list.filter(r => {
      // Check ingredients names and steps
      const contentStr = (r.name + " " + r.ingredients.map(i => i.name).join(" ")).toLowerCase();
      return !APP_STATE.exclusions.some(exc => contentStr.includes(exc));
    });
  }
  
  // 3. Filter by Schedule & Complexity
  // Base time limits based on general schedule
  let maxTime = 60;
  if (APP_STATE.scheduleType === "busy") maxTime = 15;
  if (APP_STATE.scheduleType === "standard") maxTime = 30;
  
  // Adjust base time limit with granular slots
  if (mealType === "breakfast" && APP_STATE.busyTimeblocks.morning) maxTime = Math.min(maxTime, 10);
  if (mealType === "lunch" && APP_STATE.busyTimeblocks.afternoon) maxTime = Math.min(maxTime, 12);
  if (mealType === "dinner" && APP_STATE.busyTimeblocks.evening) maxTime = Math.min(maxTime, 15);
  
  let filteredByTime = list.filter(r => r.prepTime <= maxTime);
  
  // If time filter is too aggressive and yields 0 recipes, pick the absolute fastest available
  if (filteredByTime.length === 0) {
    list.sort((a, b) => a.prepTime - b.prepTime);
    return list[0]; // Return fastest recipe that satisfied dietary requirements
  }
  
  // Return first match or random match from filtered list
  return filteredByTime[0];
}

// 6. Rendering & Interactivity Handlers

/**
 * Render Breakfast, Lunch, Dinner details
 */
function renderMealPlan() {
  const container = docElements.mealPlanContainer;
  container.innerHTML = "";
  
  const periods = ["breakfast", "lunch", "dinner"];
  
  periods.forEach(p => {
    const meal = APP_STATE.currentMeals[p];
    if (!meal) return;
    
    // Create DOM structures
    const card = document.createElement("div");
    card.className = "meal-item-card";
    
    // Header
    const cardHeader = document.createElement("div");
    cardHeader.className = "meal-card-header";
    
    const titleWrap = document.createElement("div");
    titleWrap.className = "meal-tag-title";
    
    const periodBadge = document.createElement("span");
    periodBadge.className = `meal-period-badge meal-period-${p}`;
    periodBadge.innerText = p;
    
    const titleText = document.createElement("h4");
    titleText.className = "meal-title-text";
    titleText.innerText = meal.name;
    
    titleWrap.appendChild(periodBadge);
    titleWrap.appendChild(titleText);
    
    const metaWrap = document.createElement("div");
    metaWrap.className = "meal-meta";
    
    const timePill = document.createElement("div");
    timePill.className = "meal-meta-pill";
    timePill.innerHTML = `
      <svg class="meal-meta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      <span>${meal.prepTime} min</span>
    `;
    
    const diffPill = document.createElement("div");
    diffPill.className = "meal-meta-pill";
    diffPill.innerHTML = `
      <svg class="meal-meta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20L12 4z"/></svg>
      <span>${meal.difficulty}</span>
    `;
    
    metaWrap.appendChild(timePill);
    metaWrap.appendChild(diffPill);
    
    cardHeader.appendChild(titleWrap);
    cardHeader.appendChild(metaWrap);
    
    // Directions (Checklist)
    const directions = document.createElement("div");
    directions.className = "meal-directions";
    
    const dirTitle = document.createElement("div");
    dirTitle.className = "directions-title";
    dirTitle.innerText = "Preparation Steps";
    
    const dirList = document.createElement("div");
    dirList.className = "directions-list";
    
    meal.steps.forEach((step, idx) => {
      const stepId = `${meal.id}_step_${idx}`;
      
      // Perform text substitution replacement if active
      let processedStep = step;
      meal.ingredients.forEach(ing => {
        const replacement = APP_STATE.appliedSubstitutions[ing.name];
        if (replacement) {
          // Replace ingredient name in step instructions
          const regex = new RegExp(ing.name, "gi");
          processedStep = processedStep.replace(regex, replacement.name);
        }
      });
      
      const label = document.createElement("label");
      label.className = "step-item";
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "step-checkbox";
      checkbox.checked = APP_STATE.checkedSteps.has(stepId);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          APP_STATE.checkedSteps.add(stepId);
        } else {
          APP_STATE.checkedSteps.delete(stepId);
        }
      });
      
      const textSpan = document.createElement("span");
      textSpan.className = "step-text";
      textSpan.innerText = `${idx + 1}. ${processedStep}`;
      
      label.appendChild(checkbox);
      label.appendChild(textSpan);
      dirList.appendChild(label);
    });
    
    directions.appendChild(dirTitle);
    directions.appendChild(dirList);
    
    card.appendChild(cardHeader);
    card.appendChild(directions);
    container.appendChild(card);
  });
}

/**
 * Render Categorized Grocery List
 */
function renderGroceryList() {
  const container = docElements.groceryContainer;
  container.innerHTML = "";
  
  // Aggregate ingredients
  const categories = {};
  
  const meals = ["breakfast", "lunch", "dinner"];
  meals.forEach(p => {
    const meal = APP_STATE.currentMeals[p];
    if (!meal) return;
    
    meal.ingredients.forEach(ing => {
      // Determine final ingredient detail depending on active swaps
      let displayIng = ing;
      const swap = APP_STATE.appliedSubstitutions[ing.name];
      if (swap) {
        displayIng = {
          name: swap.name,
          quantity: ing.quantity, // Keep same quantity scale
          price: swap.price,
          category: ing.category // Keep in same grocery slot category
        };
      }
      
      const cat = displayIng.category;
      if (!categories[cat]) {
        categories[cat] = [];
      }
      
      // Prevent duplicates in list (accumulate quantities/prices or list distinct)
      const existing = categories[cat].find(i => i.name === displayIng.name);
      if (existing) {
        existing.price += displayIng.price; // Accumulate price
      } else {
        categories[cat].push({
          name: displayIng.name,
          quantity: displayIng.quantity,
          price: displayIng.price,
          originalName: ing.name // Keep original name reference for checking/tracking
        });
      }
    });
  });
  
  // Render Categories
  Object.keys(categories).forEach(cat => {
    const block = document.createElement("div");
    block.className = "grocery-cat-block";
    
    const catTitle = document.createElement("h4");
    catTitle.className = "grocery-cat-title";
    catTitle.innerText = cat;
    
    const itemsList = document.createElement("div");
    itemsList.className = "grocery-items-list";
    
    categories[cat].forEach(item => {
      const isChecked = APP_STATE.checkedGroceries.has(item.name);
      
      const row = document.createElement("div");
      row.className = "grocery-item";
      
      const checkLabel = document.createElement("label");
      checkLabel.className = "grocery-item-check";
      
      const check = document.createElement("input");
      check.type = "checkbox";
      check.className = "grocery-checkbox";
      check.checked = isChecked;
      
      check.addEventListener("change", () => {
        if (check.checked) {
          APP_STATE.checkedGroceries.add(item.name);
        } else {
          APP_STATE.checkedGroceries.delete(item.name);
        }
        calculateAndRenderBudget(); // live recalculate budget subtraction
      });
      
      const nameSpan = document.createElement("span");
      nameSpan.className = "grocery-name";
      nameSpan.innerText = item.name;
      
      checkLabel.appendChild(check);
      checkLabel.appendChild(nameSpan);
      
      const priceWrap = document.createElement("div");
      priceWrap.className = "grocery-price-wrap";
      
      const qtySpan = document.createElement("span");
      qtySpan.className = "grocery-qty";
      qtySpan.innerText = `(${item.quantity})`;
      
      const priceSpan = document.createElement("span");
      priceSpan.className = "grocery-price";
      priceSpan.innerText = `$${item.price.toFixed(2)}`;
      
      priceWrap.appendChild(qtySpan);
      priceWrap.appendChild(priceSpan);
      
      row.appendChild(checkLabel);
      row.appendChild(priceWrap);
      itemsList.appendChild(row);
    });
    
    block.appendChild(catTitle);
    block.appendChild(itemsList);
    container.appendChild(block);
  });
}

/**
 * Render Smart Substitutions Engine
 */
function renderSubstitutions() {
  const container = docElements.substitutionsContainer;
  container.innerHTML = "";
  
  const meals = ["breakfast", "lunch", "dinner"];
  let count = 0;
  
  meals.forEach(p => {
    const meal = APP_STATE.currentMeals[p];
    if (!meal) return;
    
    meal.ingredients.forEach(ing => {
      if (ing.substitute) {
        count++;
        const sub = ing.substitute;
        const isApplied = APP_STATE.appliedSubstitutions[ing.name] !== undefined;
        
        const card = document.createElement("div");
        card.className = "sub-item-card";
        
        const labelWrap = document.createElement("div");
        labelWrap.className = "sub-label-wrap";
        
        const nameBlock = document.createElement("div");
        nameBlock.innerHTML = `
          <span class="${isApplied ? 'sub-original' : 'sub-name'}">${ing.name}</span>
          <span class="sub-arrow">➔</span>
          <span class="sub-replacement">${sub.name}</span>
        `;
        
        const descSpan = document.createElement("span");
        descSpan.className = "sub-desc";
        descSpan.innerText = sub.desc;
        
        labelWrap.appendChild(nameBlock);
        labelWrap.appendChild(descSpan);
        
        const actions = document.createElement("div");
        actions.className = "sub-actions";
        
        const typeBadge = document.createElement("span");
        typeBadge.className = `sub-badge-type ${sub.price < ing.price ? 'cost-save' : ''}`;
        typeBadge.innerText = sub.price < ing.price ? "saves cash" : sub.type;
        
        const swapBtn = document.createElement("button");
        swapBtn.className = `sub-swap-btn ${isApplied ? 'applied' : ''}`;
        swapBtn.disabled = isApplied;
        swapBtn.innerText = isApplied ? "Applied" : "Swap";
        
        swapBtn.addEventListener("click", () => {
          applySubstitution(ing.name, sub);
        });
        
        actions.appendChild(typeBadge);
        actions.appendChild(swapBtn);
        
        card.appendChild(labelWrap);
        card.appendChild(actions);
        container.appendChild(card);
      }
    });
  });
  
  if (count === 0) {
    container.innerHTML = `<div class="sub-desc" style="text-align:center; padding:1rem;">No substitutions needed for these recipes.</div>`;
  }
}

/**
 * Apply a substitution swap, updating the states and re-rendering everything
 */
function applySubstitution(originalName, replacementObj) {
  APP_STATE.appliedSubstitutions[originalName] = replacementObj;
  
  // Re-run renders
  renderMealPlan();
  renderGroceryList();
  renderSubstitutions();
  calculateAndRenderBudget();
}

/**
 * Recalculates estimated costs, manages checked exclusions, and handles OVER BUDGET warnings
 */
function calculateAndRenderBudget() {
  // Aggregate cost
  let totalCost = 0;
  
  const meals = ["breakfast", "lunch", "dinner"];
  meals.forEach(p => {
    const meal = APP_STATE.currentMeals[p];
    if (!meal) return;
    
    meal.ingredients.forEach(ing => {
      // Check if substitution is applied
      let finalPrice = ing.price;
      let finalName = ing.name;
      
      const swap = APP_STATE.appliedSubstitutions[ing.name];
      if (swap) {
        finalPrice = swap.price;
        finalName = swap.name;
      }
      
      // ONLY ADD COST if ingredient is NOT checked off as "already in pantry"
      if (!APP_STATE.checkedGroceries.has(finalName)) {
        totalCost += finalPrice;
      }
    });
  });
  
  // Render stats
  docElements.totalCostVal.innerText = `$${totalCost.toFixed(2)}`;
  docElements.allowedBudgetVal.innerText = `$${APP_STATE.statedBudget.toFixed(2)}`;
  
  // Gauge Bar fill percentage
  const pct = Math.min(100, (totalCost / APP_STATE.statedBudget) * 100);
  docElements.gaugeBarFill.style.width = `${pct}%`;
  
  // Feasibility status check
  const isFeasible = totalCost <= APP_STATE.statedBudget;
  
  if (isFeasible) {
    docElements.feasibilityBadge.className = "status-badge status-feasible";
    docElements.feasibilityBadge.innerText = "FEASIBLE";
    docElements.gaugeBarFill.style.background = "linear-gradient(90deg, var(--color-feasible), var(--accent-primary))";
    docElements.gaugeMessage.innerText = "Excellent! Your daily cooking plan fits safely under budget.";
    docElements.tipsSection.classList.add("hidden");
  } else {
    docElements.feasibilityBadge.className = "status-badge status-overbudget";
    docElements.feasibilityBadge.innerText = "OVER BUDGET";
    docElements.gaugeBarFill.style.background = "linear-gradient(90deg, var(--color-overbudget), #f43f5e)";
    docElements.gaugeMessage.innerText = `Warning: Plan exceeds budget constraint by $${(totalCost - APP_STATE.statedBudget).toFixed(2)}.`;
    
    // Find and compile money saving adjustments
    compileBudgetSavingTips();
  }
}

/**
 * Identify substitutions that reduce the plan's cost and present them as direct options
 */
function compileBudgetSavingTips() {
  const container = docElements.tipsContainer;
  container.innerHTML = "";
  
  let tipsCount = 0;
  
  const meals = ["breakfast", "lunch", "dinner"];
  meals.forEach(p => {
    const meal = APP_STATE.currentMeals[p];
    if (!meal) return;
    
    meal.ingredients.forEach(ing => {
      // Check if substitution exists, is cheaper, and is NOT yet applied
      if (ing.substitute && ing.substitute.price < ing.price) {
        const isApplied = APP_STATE.appliedSubstitutions[ing.name] !== undefined;
        if (!isApplied) {
          tipsCount++;
          
          const saving = ing.price - ing.substitute.price;
          
          const tipCard = document.createElement("div");
          tipCard.className = "saving-tip-item";
          
          const text = document.createElement("span");
          text.className = "tip-text";
          text.innerText = `Swap ${ing.name} for ${ing.substitute.name}`;
          
          const diff = document.createElement("span");
          diff.className = "tip-diff";
          diff.innerText = `-$${saving.toFixed(2)}`;
          
          const applyBtn = document.createElement("button");
          applyBtn.className = "tip-btn";
          applyBtn.innerText = "Apply Swap";
          applyBtn.addEventListener("click", () => {
            applySubstitution(ing.name, ing.substitute);
          });
          
          tipCard.appendChild(text);
          tipCard.appendChild(diff);
          tipCard.appendChild(applyBtn);
          container.appendChild(tipCard);
        }
      }
    });
  });
  
  if (tipsCount > 0) {
    docElements.tipsSection.classList.remove("hidden");
  } else {
    docElements.tipsSection.classList.add("hidden");
  }
}
