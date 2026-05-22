# Calculation Transparency Guide

## The Math Behind Food Quantities

All foods are calculated using a **linear scaling** system. This means calories and protein scale proportionally with quantity.

---

## Example: Milk (240ml = 149 calories)

### Baseline (From Database)
```
1 serving (240ml) = 149 calories
Per ml: 149 ÷ 240 = 0.62 cal/ml
```

### When You Enter 120ml
**What happens:**
```
User input: 120ml
Calculation: 120ml ÷ 240ml = 0.5 multiplier
Result: 149 cal × 0.5 = 74.5 ≈ 75 cal ✓
```

This is **correct** because 120ml is exactly **half of 240ml**, so it has **half the calories**.

### When You Enter 480ml (2 servings)
**What happens:**
```
User input: 480ml
Calculation: 480ml ÷ 240ml = 2.0 multiplier
Result: 149 cal × 2.0 = 298 cal ✓
```

---

## How It Works for ALL Foods

### Unit-Based Foods (Roti, Eggs, Dosa, etc.)
**Example: Roti (71 cal per roti)**
```
Database: 1 roti (30g) = 71 cal

When you enter: 2 rotis
Calculation: 2 × 1 = 2.0 multiplier
Result: 71 × 2 = 142 cal ✓

When you enter: 3 rotis
Calculation: 3 × 1 = 3.0 multiplier
Result: 71 × 3 = 213 cal ✓
```

### Weight-Based Foods (Dal, Rice, Paneer, etc.)
**Example: Dal (116 cal per 100g)**
```
Database: 100g cooked dal = 116 cal

When you enter: 150g
Calculation: 150g ÷ 100g = 1.5 multiplier
Result: 116 × 1.5 = 174 cal ✓

When you enter: 200g
Calculation: 200g ÷ 100g = 2.0 multiplier
Result: 116 × 2 = 232 cal ✓

When you enter: 50g
Calculation: 50g ÷ 100g = 0.5 multiplier
Result: 116 × 0.5 = 58 cal ✓
```

### Volume-Based Foods (Milk, Oil, etc.)
**Example: Milk (149 cal per 240ml)**
```
Database: 240ml = 149 cal

When you enter: 120ml
Calculation: 120ml ÷ 240ml = 0.5 multiplier
Result: 149 × 0.5 = 74.5 ≈ 75 cal ✓

When you enter: 480ml
Calculation: 480ml ÷ 240ml = 2.0 multiplier
Result: 149 × 2.0 = 298 cal ✓

When you enter: 360ml
Calculation: 360ml ÷ 240ml = 1.5 multiplier
Result: 149 × 1.5 = 223.5 ≈ 224 cal ✓
```

---

## The Formula for ALL Foods

```
Multiplier = User Input ÷ Base Portion
Actual Calories = Base Calories × Multiplier
Actual Protein = Base Protein × Multiplier
```

**Example with Dal:**
- Base: 100g = 116 cal, 9.2g protein
- You enter: 150g
- Multiplier: 150 ÷ 100 = 1.5
- Actual cal: 116 × 1.5 = 174 cal
- Actual protein: 9.2 × 1.5 = 13.8g protein ✓

---

## Verifying the Math: Milk Example

**Your concern:** 240ml = 149 cal, but 120ml = 75 cal (seems wrong?)

**Verification:**
```
240ml is the BASE portion
120ml is HALF of the base

So: 120ml should have HALF the calories
149 ÷ 2 = 74.5 ≈ 75 cal ✓

Math check:
- Per ml: 149 ÷ 240 = 0.6208 cal/ml
- 120ml: 120 × 0.6208 = 74.5 cal ✓
```

**This is mathematically correct!**

---

## Common Quantity Examples

### Dal (116 cal per 100g cooked)
| Input | Calculation | Result |
|-------|-------------|--------|
| 50g | 50 ÷ 100 × 116 | 58 cal |
| 100g | 100 ÷ 100 × 116 | 116 cal |
| 150g | 150 ÷ 100 × 116 | **174 cal** |
| 200g | 200 ÷ 100 × 116 | 232 cal |

### Milk (149 cal per 240ml)
| Input | Calculation | Result |
|-------|-------------|--------|
| 120ml | 120 ÷ 240 × 149 | **75 cal** |
| 240ml | 240 ÷ 240 × 149 | 149 cal |
| 360ml | 360 ÷ 240 × 149 | 224 cal |
| 480ml | 480 ÷ 240 × 149 | 298 cal |

### Roti (71 cal per roti)
| Input | Calculation | Result |
|-------|-------------|--------|
| 1 roti | 1 × 71 | 71 cal |
| 2 rotis | 2 × 71 | 142 cal |
| 3 rotis | 3 × 71 | 213 cal |

---

## Why This Matters

The system uses **linear scaling** because:
- ✅ It's mathematically accurate
- ✅ It's proportional (double the food = double the calories)
- ✅ It works for any quantity
- ✅ It's transparent and verifiable

**Example verification:**
```
If 240ml milk = 149 cal
Then 120ml MUST equal 74.5 cal (half)
This is correct, not a mismatch!
```

---

## In the App Display

When you add food, you'll see:
```
Milk
120 (1 cup (240ml))
        
[75 cal]  [4g protein]
```

The display shows:
- Food name: **Milk**
- Quantity you entered: **120** ml
- Base portion: **1 cup (240ml)**
- Calculated result: **75 cal, 4g protein** ✓

---

## TL;DR

**All calculations are proportional and linear:**
```
Your Quantity ÷ Base Quantity = Multiplier
Multiplier × Base Calories = Your Calories
```

**120ml milk = 75 cal is CORRECT** because 120ml is half of 240ml, so it has half the calories (149 ÷ 2 = 74.5 ≈ 75).

---

*All calculations verified and mathematically sound!*
