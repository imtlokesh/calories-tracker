# My Health - Quick Start Guide

## What You Have

A fully functional, personalized calorie and protein tracker that automatically calculates your daily nutrition targets based on your body metrics and fitness goal.

**File:** `my-health-personalized.html`

---

## How to Use

### Step 1: First Launch
Open `my-health-personalized.html` in any web browser. The app will automatically ask you to set up your profile.

### Step 2: Profile Setup
Fill in these details:
- **Age**: Your current age
- **Weight**: In kilograms (kg)
- **Height**: In centimeters (cm)
- **Gender**: Male or Female
- **Activity Level**: 
  - Sedentary (little/no exercise)
  - Light (exercise 1-3 days/week)
  - Moderate (exercise 3-5 days/week)
  - Active (exercise 6-7 days/week)
- **Fitness Goal**:
  - Lose Weight (15% calorie deficit)
  - Maintain (no adjustment)
  - Gain Weight (10% surplus)
  - Build Muscle (10% surplus)

Click **"Save Profile"** - your personalized targets are calculated instantly.

---

## Key Features

### 📊 Your Daily Targets
The app shows you exactly how many calories and protein you need daily based on:
- Your BMR (Basal Metabolic Rate) 
- Your activity level
- Your fitness goal

Example: A 30-year-old male, 70kg, 175cm, moderate activity building muscle needs **2,811 calories** and **112g protein** per day.

### 🍎 Add Foods
1. Tap one of the meal buttons (☀️ Breakfast, 🍽️ Lunch, 🌙 Dinner, 🥜 Snacks)
2. Search for a food by typing its name
3. Enter how much you ate (in grams or units)
4. The app automatically scales all calories and macros to your portion size

### ✅ Track Progress
- **Progress bars** show how close you are to your daily targets
- **Remaining amounts** tell you how many calories/protein you have left
- **Meal totals** show calories per meal

### 💾 Data Persistence
- Your profile is saved automatically
- Daily food logs reset at midnight (new day = fresh tracking)
- All data is stored in your browser (no internet needed)

---

## Important Facts About Your Calculations

### BMR (Basal Metabolic Rate)
Calories your body burns at rest. Calculated using the proven Mifflin-St Jeor formula.

### TDEE (Total Daily Energy Expenditure)
Your BMR × Activity Level. This is how many calories you burn in a typical day.

### Daily Calorie Target
Based on your goal:
- **Weight Loss**: TDEE × 0.85 (15% deficit to lose ~0.5kg/week)
- **Maintenance**: TDEE × 1.0
- **Gain/Muscle**: TDEE × 1.1 (10% surplus for quality gains)

### Protein Target
Varies by goal to support your specific fitness objective:
- **Muscle Building**: 1.6g per kg body weight
- **Weight Loss**: 1.2g per kg (preserves muscle while losing fat)
- **Maintenance**: 0.8g per kg (minimum healthy intake)

---

## Food Database

The app includes 50+ vegetarian foods with verified nutrition data from USDA:

**Proteins:** Eggs, Milk, Yogurt, Cheese, Paneer, Tofu, Tempeh, Lentils, Chickpeas, Beans

**Grains:** Rice, Wheat Bread, Pasta, Oats, Sweet Potato

**Vegetables:** Spinach, Broccoli, Carrots, Tomato

**Fruits:** Banana, Apple, Orange, Avocado

**Nuts & Seeds:** Almonds, Peanut Butter

**All foods include clear portion sizes** to eliminate confusion about unit/weight/volume.

---

## Example: A Complete Day

**Profile**: 30M, 70kg, 175cm, Moderate Activity, Building Muscle
**Targets**: 2,811 cal/day, 112g protein/day

**Breakfast:**
- 2 large eggs (100g) = 156 cal, 12g protein
- 2 slices wheat bread (100g) = 530 cal, 18g protein
- *Breakfast Total: 686 cal, 30g protein*

**Lunch:**
- 200g paneer = 530 cal, 50g protein
- 250g rice = 325 cal, 6.8g protein
- *Lunch Total: 855 cal, 56.8g protein*

**Dinner:**
- 120g lentils (cooked) = 139 cal, 11g protein
- *Dinner Total: 139 cal, 11g protein*

**Snacks:**
- 25g almonds = 145 cal, 5.25g protein
- *Snacks Total: 145 cal, 5.25g protein*

**Daily Totals:**
- **Calories**: 1,825 / 2,811 (remaining: 986 cal - 65% complete)
- **Protein**: 103.05 / 112g (remaining: 8.95g - 92% complete)

---

## Pro Tips

1. **Be precise with portions** - The accuracy of your tracking depends on honest portion sizes
2. **Update your profile if you change weight** - Your targets adjust automatically
3. **Log consistently** - Tracking shows patterns over time (even though daily logs reset)
4. **Don't obsess over perfection** - Hit your targets approximately most days; 80/20 compliance is excellent
5. **Protein is important** - It helps with recovery, muscle retention, and satiety while dieting
6. **Check remaining calories before meals** - This guides your portion decisions

---

## Browser Compatibility

Works on any modern browser that supports:
- HTML5
- CSS Grid & Flexbox
- JavaScript (ES6)
- localStorage

Tested on: Chrome, Firefox, Safari, Edge

---

## Contact / Issues

All calculations are based on scientific evidence and verified against industry standards. The app works entirely in your browser with no external dependencies.

Happy tracking! 💪

---

*Built with precision nutrition in mind | Last Updated: May 18, 2026*
