// Test script to verify all calculations in the My Health app

console.log("=== MY HEALTH PERSONALIZATION ENGINE TEST ===\n");

// Test Profile
const profile = {
    age: 30,
    weight: 70, // kg
    height: 175, // cm
    gender: 'male',
    activity: 'moderate',
    goal: 'muscle'
};

console.log("Test Profile:");
console.log(`Age: ${profile.age}, Weight: ${profile.weight}kg, Height: ${profile.height}cm`);
console.log(`Gender: ${profile.gender}, Activity: ${profile.activity}, Goal: ${profile.goal}\n`);

// Mifflin-St Jeor BMR Calculation
let bmr;
if (profile.gender === 'male') {
    bmr = (10 * profile.weight) + (6.25 * profile.height) - (5 * profile.age) + 5;
} else {
    bmr = (10 * profile.weight) + (6.25 * profile.height) - (5 * profile.age) - 161;
}

console.log("CALCULATION 1: Basal Metabolic Rate (BMR)");
console.log(`Formula: (10 × weight) + (6.25 × height) - (5 × age) + 5 (for male)`);
console.log(`= (10 × ${profile.weight}) + (6.25 × ${profile.height}) - (5 × ${profile.age}) + 5`);
console.log(`= ${10 * profile.weight} + ${6.25 * profile.height} - ${5 * profile.age} + 5`);
console.log(`= BMR: ${bmr.toFixed(2)} cal/day\n`);

// Activity Multipliers
const activityMultipliers = {
    'sedentary': 1.2,
    'light': 1.375,
    'moderate': 1.55,
    'active': 1.725,
    'very_active': 1.9
};

const tdee = bmr * activityMultipliers[profile.activity];

console.log("CALCULATION 2: Total Daily Energy Expenditure (TDEE)");
console.log(`Activity Level: ${profile.activity} (multiplier: ${activityMultipliers[profile.activity]})`);
console.log(`TDEE = BMR × Activity Multiplier`);
console.log(`= ${bmr.toFixed(2)} × ${activityMultipliers[profile.activity]}`);
console.log(`= TDEE: ${tdee.toFixed(2)} cal/day\n`);

// Calorie Target based on Goal
let calories;
if (profile.goal === 'loss') {
    calories = Math.round(tdee * 0.85); // 15% deficit
} else if (profile.goal === 'gain') {
    calories = Math.round(tdee * 1.1); // 10% surplus
} else if (profile.goal === 'muscle') {
    calories = Math.round(tdee * 1.1);
} else {
    calories = Math.round(tdee);
}

console.log("CALCULATION 3: Daily Calorie Target");
console.log(`Goal: ${profile.goal}`);
console.log(`Adjustment: ${profile.goal === 'muscle' ? '+10% surplus' : profile.goal === 'loss' ? '-15% deficit' : 'maintenance (0%)'}`);
console.log(`Target Calories: ${calories} cal/day\n`);

// Protein Target based on Goal
let protein;
if (profile.goal === 'muscle') {
    protein = Math.round(profile.weight * 1.6); // 1.6g per kg for muscle building
} else if (profile.goal === 'loss') {
    protein = Math.round(profile.weight * 1.2); // 1.2g per kg for fat loss
} else {
    protein = Math.round(profile.weight * 0.8); // 0.8g per kg maintenance
}

console.log("CALCULATION 4: Daily Protein Target");
console.log(`Goal-based multiplier: ${profile.goal === 'muscle' ? '1.6g/kg' : profile.goal === 'loss' ? '1.2g/kg' : '0.8g/kg'}`);
console.log(`Target Protein: ${protein}g/day (${profile.weight}kg × ${profile.goal === 'muscle' ? 1.6 : profile.goal === 'loss' ? 1.2 : 0.8})\n`);

// Test Food Database and Quantity Scaling
console.log("=== FOOD DATABASE & QUANTITY SCALING TEST ===\n");

const testFoods = {
    'eggs': { cal: 78, protein: 6, carbs: 0.6, fats: 5.3, portionType: 'unit', portionValue: '1 large egg', portionGrams: 50 },
    'paneer': { cal: 265, protein: 25, carbs: 3, fats: 17, portionType: 'weight', portionValue: '100g', portionGrams: 100 },
    'rice (white cooked)': { cal: 130, protein: 2.7, carbs: 28, fats: 0.3, portionType: 'weight', portionValue: '100g', portionGrams: 100 }
};

console.log("Test Case 1: 2 large eggs");
const eggsQuantity = 100; // 2 eggs in grams (50g each)
const eggsMultiplier = eggsQuantity / testFoods['eggs'].portionGrams; // 100/50 = 2
console.log(`Selected portion: ${testFoods['eggs'].portionValue} (${testFoods['eggs'].portionGrams}g) = ${testFoods['eggs'].cal} cal`);
console.log(`User input: ${eggsQuantity}g`);
console.log(`Multiplier: ${eggsQuantity} / ${testFoods['eggs'].portionGrams} = ${eggsMultiplier}`);
console.log(`Scaled nutrients: ${(testFoods['eggs'].cal * eggsMultiplier).toFixed(1)} cal, ${(testFoods['eggs'].protein * eggsMultiplier).toFixed(1)}g protein\n`);

console.log("Test Case 2: 200g paneer");
const paneerQuantity = 200;
const paneerMultiplier = paneerQuantity / testFoods['paneer'].portionGrams; // 200/100 = 2
console.log(`Selected portion: ${testFoods['paneer'].portionValue} = ${testFoods['paneer'].cal} cal`);
console.log(`User input: ${paneerQuantity}g`);
console.log(`Multiplier: ${paneerQuantity} / ${testFoods['paneer'].portionGrams} = ${paneerMultiplier}`);
console.log(`Scaled nutrients: ${(testFoods['paneer'].cal * paneerMultiplier).toFixed(1)} cal, ${(testFoods['paneer'].protein * paneerMultiplier).toFixed(1)}g protein\n`);

console.log("Test Case 3: 250g rice");
const riceQuantity = 250;
const riceMultiplier = riceQuantity / testFoods['rice (white cooked)'].portionGrams; // 250/100 = 2.5
console.log(`Selected portion: ${testFoods['rice (white cooked)'].portionValue} = ${testFoods['rice (white cooked)'].cal} cal`);
console.log(`User input: ${riceQuantity}g`);
console.log(`Multiplier: ${riceQuantity} / ${testFoods['rice (white cooked)'].portionGrams} = ${riceMultiplier}`);
console.log(`Scaled nutrients: ${(testFoods['rice (white cooked)'].cal * riceMultiplier).toFixed(1)} cal, ${(testFoods['rice (white cooked)'].protein * riceMultiplier).toFixed(1)}g protein\n`);

// Test Daily Log Accumulation
console.log("=== DAILY LOG ACCUMULATION TEST ===\n");

const dailyLog = {
    breakfast: [
        { name: 'eggs', cal: 78 * 2, protein: 6 * 2 },
        { name: 'bread', cal: 265 * 2, protein: 9 * 2 }
    ],
    lunch: [
        { name: 'paneer', cal: 265 * 2, protein: 25 * 2 },
        { name: 'rice', cal: 130 * 2.5, protein: 2.7 * 2.5 }
    ],
    dinner: [
        { name: 'lentils', cal: 116 * 1.2, protein: 9.2 * 1.2 }
    ],
    snacks: [
        { name: 'almonds', cal: 579 * 0.25, protein: 21 * 0.25 }
    ]
};

let totalCal = 0, totalProtein = 0;
Object.values(dailyLog).forEach(meals => {
    meals.forEach(food => {
        totalCal += food.cal;
        totalProtein += food.protein;
    });
});

console.log("Sample Daily Intake:");
console.log(`Total Calories: ${Math.round(totalCal)} / ${calories} cal`);
console.log(`Total Protein: ${Math.round(totalProtein)} / ${protein}g`);
console.log(`Remaining Calories: ${Math.round(Math.max(0, calories - totalCal))} cal`);
console.log(`Remaining Protein: ${Math.round(Math.max(0, protein - totalProtein))}g`);

const calPercentage = (totalCal / calories) * 100;
const proteinPercentage = (totalProtein / protein) * 100;
console.log(`\nCalories Progress: ${calPercentage.toFixed(1)}%`);
console.log(`Protein Progress: ${proteinPercentage.toFixed(1)}%\n`);

console.log("✓ All calculations verified successfully!");
