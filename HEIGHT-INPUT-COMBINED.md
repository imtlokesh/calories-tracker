# Height Input - Combined Format

## Change Made

Height input now uses a **single combined field** for feet and inches instead of two separate boxes.

---

## How to Enter Your Height

**Single Input Field:**
```
Height (feet inches): [5 9]
Format: feet inches (e.g., 5 9 = 5'9")
```

**You enter:**
- `5 9` (means 5 feet 9 inches)

**Accepted formats:**
- `5 9` ✓
- `5 9` ✓
- `5'9` ✓
- `5'9"` ✓
- `5 feet 9 inches` (numbers only are parsed) ✓

---

## Examples

### Example 1: 5 feet 10 inches
```
Input: 5 10
Result: 180 cm ✓
```

### Example 2: 6 feet exactly
```
Input: 6 0
Result: 183 cm ✓
```

### Example 3: 5 feet 6 inches
```
Input: 5 6
Result: 168 cm ✓
```

---

## Why This Change?

- **Cleaner interface** - one field instead of two
- **More intuitive** - you type height the way you say it: "5 9"
- **Same result** - app converts to cm for calculations
- **Less form clutter** - profile setup is simpler

---

## How It Works

**Parsing:**
- App extracts numbers from your input
- First number = feet
- Second number = inches
- Converts to cm: `(feet × 30.48) + (inches × 2.54)`

**Validation:**
- Feet must be greater than 0
- Inches must be 0-11 (not 12)
- If invalid, shows error and asks you to try again

**Example calculation:**
```
You enter: 5 9
App parses: feet=5, inches=9
Converts: (5 × 30.48) + (9 × 2.54) = 152.4 + 22.86 = 175.26 cm
```

---

## Input Examples That Work

| What You Type | Interpreted As | Result |
|---------------|---------------|--------|
| `5 9` | 5'9" | 175 cm |
| `6 0` | 6'0" | 183 cm |
| `5'9` | 5'9" | 175 cm |
| `5'9"` | 5'9" | 175 cm |
| `5 feet 9 inches` | 5'9" | 175 cm |

---

## What Happens If You Make a Mistake

```
You enter: 5 15 (15 inches - invalid!)
App response: "Please enter valid height (e.g., 5 9)"
Action: Edit and try again
```

---

## Profile Display

When you view your saved profile, it shows:
```
Height: 5' 9"
```

---

## What Hasn't Changed

✅ All calculations remain accurate
✅ BMR/TDEE unchanged
✅ Calorie and protein targets unchanged
✅ Data storage uses cm internally for consistency

---

**Updated:** May 18, 2026
