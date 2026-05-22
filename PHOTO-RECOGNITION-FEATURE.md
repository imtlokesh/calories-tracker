# Photo Recognition Feature - User Guide

## Overview

The app now includes a **photo capture feature** where you can:
1. 📷 Take a photo of your food
2. 🔍 Search the database to identify it
3. ⚖️ Enter quantity
4. ✅ Automatically calculate calories and protein

---

## How to Use

### Step 1: Open Camera
**In the app:**
- Tap the **📷 camera button** (bottom right bar)
- The camera modal opens

**Choose one of:**
- **📷 Open Camera** - Use device camera to photograph food
- **📂 Upload Photo** - Select an existing photo from your device
- **Cancel** - Close without taking photo

---

### Step 2: Capture Your Food Photo

#### Option A: Using Camera
1. Tap **"📷 Open Camera"**
2. Point camera at your food
3. Tap **"📸 Capture"** button to take photo
4. If you like it, tap **"✓ Continue"**
5. If you want to retake, tap **"📷 Retake"**

#### Option B: Upload Existing Photo
1. Tap **"📂 Upload Photo"**
2. Select a photo from your device gallery
3. Tap **"✓ Continue"** to proceed

---

### Step 3: Identify the Food

**The app displays:**
- Your food photo
- A search box saying "Search for the food you photographed"

**What you do:**
1. Look at the photo
2. Type the food name in the search box
3. The app shows matching foods from the database
4. Tap the food that matches your photo

**Example:**
```
You took a photo of dal
Search: "dal"
Results: 
  ✓ dal (red lentils cooked)
  ✓ arhar dal (pigeon pea)
  ✓ moong dal (mung bean) cooked

Click the one you photographed
```

---

### Step 4: Enter Quantity

After selecting the food, you'll see:
```
Dialog: "How many grams?" (or "How many X?" for unit foods)

For dal: Enter 150 (meaning 150g)
For roti: Enter 2 (meaning 2 rotis)
For milk: Enter 240 (meaning 240ml)
```

Tap **"Add"** and the food is added with calculated calories and protein.

---

## Complete Workflow Example

### Scenario: You took a photo of paneer sabzi (paneer dish)

**Step-by-step:**

1. **Take Photo**
   - Tap 📷 camera button
   - Tap "📷 Open Camera"
   - Take photo of paneer dish
   - Tap "✓ Continue"

2. **Search for Food**
   - Photo displays on screen
   - Search box appears
   - Type "paneer"
   - Results show: paneer, paneer sabzi variations
   - Tap "paneer" to select

3. **Enter Amount**
   - Dialog: "Quantity in grams?"
   - You ate ~100g
   - Type: 100
   - Tap "Add"

4. **Result**
   - Food added to a meal
   - Shows: **100g paneer = 265 cal, 25g protein** ✓

---

## Photo Feature Details

### What Works
✅ Open device camera (phones & tablets)
✅ Capture clear photos of food
✅ Upload existing photos
✅ Manual food identification from database
✅ Quantity input for accurate calculations
✅ Works on phones and tablets with cameras

### Current Limitations
⚠️ **Manual identification required** - You must search and select the food from the database
- The app doesn't automatically recognize food from photos (requires AI/ML)
- But having the photo helps YOU identify what it is
- All 60+ Indian foods are in the database for easy searching

### Why Manual Identification?
- **No internet required** - Works offline
- **No API costs** - All calculations local
- **No privacy concerns** - Photos aren't sent anywhere
- **100% accuracy** - You confirm the exact food
- **Works with custom meals** - Even foods not in database

---

## Tips for Best Results

### Taking Good Food Photos
1. **Good lighting** - Take in natural light
2. **Clear view** - Show the food clearly
3. **Reasonable angle** - Top-down or 45° angle works best
4. **Portion visible** - Make sure you can see the full portion

### Identifying Foods
1. **Be specific** - "dal (red lentils)" not just "dal"
2. **Check portion size** - Confirm the portion in the database matches what you ate
3. **Adjust quantity** - If you ate more/less, adjust the grams or count

### Examples of Good Searches
```
❌ "food"          ✅ "dal"
❌ "Indian"        ✅ "roti"
❌ "meal"          ✅ "paneer curry"
❌ "plate"         ✅ "basmati rice"
```

---

## Food Database Search Tips

The database includes 60+ foods organized as:

| Category | Foods | How to Search |
|----------|-------|--------------|
| **Breads** | Roti, Chapati, Paratha, Puri, Naan, Dosa, Idli | Type "roti" or bread name |
| **Grains** | Rice, Bajra, Ragi | Type "rice" or grain name |
| **Dal** | Red lentils, Moong, Chana, Rajma, etc. | Type "dal" or legume name |
| **Vegetables** | Bhindi, Karela, Lauki, Brinjal, etc. | Type vegetable name |
| **Dairy** | Paneer, Milk, Curd, Ghee | Type dairy name |
| **Fruits** | Mango, Guava, Banana, etc. | Type fruit name |

---

## Troubleshooting

### Camera Won't Open
- **Problem**: "Cannot access camera" error
- **Solution**: 
  - Check browser permissions for camera access
  - Try "Upload Photo" instead
  - Use a different browser

### Can't Find My Food
- **Problem**: Searching but food not in database
- **Solution**:
  - Try searching by main ingredient (e.g., "paneer" instead of "paneer tikka")
  - Use the base food item from the database
  - Manually adjust calories if needed

### Photo Looks Blurry
- **Problem**: Captured photo is unclear
- **Solution**:
  - Tap "📷 Retake" to try again
  - Ensure good lighting
  - Keep phone steady while capturing

---

## Example Meals Tracked via Photo

### Breakfast
1. Photograph dosa and sambar
2. Search: "dosa" → Select
3. Enter: 1 (dosa)
4. Search: "sambar" → (if in database)
5. Result: Breakfast logged with calories & protein

### Lunch
1. Photograph rice, dal, vegetables
2. Search for each: rice → dal → bhindi
3. Enter quantities: 150g rice, 150g dal, 200g bhindi
4. Result: Complete lunch tracked

### Dinner
1. Photograph roti, paneer, salad
2. Search: roti → paneer → cucumber
3. Enter: 2 rotis, 100g paneer, 100g cucumber
4. Result: Dinner complete with all nutrition info

---

## Data Privacy

✅ **Your photos stay on your phone**
- Photos are NOT sent to any server
- NO cloud storage
- NO external processing
- Everything happens locally in your browser

---

## Supported Formats

**Photos:**
- JPG/JPEG
- PNG
- WebP
- Most image formats from your phone camera

**Device Support:**
- iPhones with camera
- Android phones
- Tablets with cameras
- Computers with webcams

---

## Advantages Over Automatic Recognition

| Feature | Manual ID | Auto Recognition |
|---------|-----------|------------------|
| **Accuracy** | 100% (you confirm) | ~85-90% (AI can be wrong) |
| **Privacy** | Complete ✓ | Data sent to servers ✗ |
| **Cost** | Free | Requires API ✗ |
| **Offline** | Works offline ✓ | Requires internet ✗ |
| **Customizable** | You choose exact food ✓ | Limited options ✗ |

---

## Future Enhancements

Possible additions (not yet implemented):
- 🤖 Automatic food recognition via AI
- 📊 Portion size estimation from photos
- 🎯 Quick presets for common meals
- 📈 Meal history with photos

---

**The photo feature makes tracking easier by helping you remember exactly what you ate!** 📷

*Updated: May 18, 2026*
