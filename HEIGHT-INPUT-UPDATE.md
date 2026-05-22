# Height Input Update - Feet & Inches

## Change Made

Height input now uses **feet and inches** instead of centimeters for easier data entry.

---

## How to Enter Your Height

### In the Settings Modal

**Instead of:** "Height (cm): 175"

**You now see:**
- **Height - Feet:** [5] 
- **Height - Inches:** [9]

With a live conversion display showing the centimeter equivalent:
- **Height (cm): 175** (read-only, shows your feet/inches converted to cm)

---

## Examples

### Example 1: 5 feet 10 inches (180cm)
```
Feet: 5
Inches: 10
Result: 180 cm ✓
```

### Example 2: 6 feet 0 inches (183cm)
```
Feet: 6
Inches: 0
Result: 183 cm ✓
```

### Example 3: 5 feet 6 inches (168cm)
```
Feet: 5
Inches: 6
Result: 168 cm ✓
```

---

## Why This Change?

- **Easier to use** for people familiar with feet/inches
- **Less confusion** than trying to remember height in cm
- **Live conversion** shows the cm equivalent automatically
- **Same calculations** — everything still works perfectly behind the scenes

---

## How It Works Internally

The app converts your feet and inches to centimeters for the BMR calculation:

```
Total Height (cm) = (Feet × 30.48) + (Inches × 2.54)
```

Then uses this for the Mifflin-St Jeor BMR formula.

**Example:**
- You enter: 5 feet 9 inches
- App calculates: (5 × 30.48) + (9 × 2.54) = 152.4 + 22.86 = **175.26 cm**
- BMR calculation uses: 175 cm

---

## Profile Display

When you view your profile, height is shown as feet and inches:
```
Height: 5' 9"
```

Instead of:
```
Height: 175 cm
```

---

## Input Validation

- **Feet:** 3 to 8 feet (reasonable human height range)
- **Inches:** 0 to 11 inches (never 12, that rolls into feet)
- Both accept whole numbers and decimals

---

## What Hasn't Changed

✅ All BMR/TDEE calculations remain identical and accurate
✅ Calorie and protein targets unchanged
✅ All nutrition math works the same way
✅ Data storage still uses cm internally (for consistency)

---

**Updated:** May 18, 2026
