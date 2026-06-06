# MicroFoodie - Culinary & Budget Intelligence Agent

MicroFoodie is a sleek, high-fidelity web application that acts as an advanced culinary and budget intelligence assistant. It dynamically converts your daily schedule, dietary preferences, and budget constraints into a highly optimized, interactive cooking roadmap, complete with real-time cost forecasting.

🔗 **Live Demo:** [https://ai-micro-three.vercel.app/](https://ai-micro-three.vercel.app/)

---

## Key Features

### 📅 Tailored Meal Planning
- Generates tailored Breakfast, Lunch, and Dinner plans based on your time constraints.
- Select a profile like **Busy Workday**, **Standard**, or **Relaxed Day Off** to automatically adjust prep complexity.
- Refine preparation speeds further by ticking granular **Busy Timeblocks** (e.g. Busy Morning forces breakfast prep to under 10 minutes).
- Interactive step-by-step checklists let you track cooking progress on the fly.

### 🛒 Smart Grocery Checklist & Pantry Toggle
- Displays a clean, categorized checklist of ingredients (Produce, Protein, Pantry, Dairy & Alternatives) with quantities and estimated costs.
- **Pantry Mode**: Check off ingredients you already have at home to exclude them from the total estimated cost, helping you balance your budget.

### 🔄 Dynamic Substitution Engine
- Provides alternative options for key ingredients based on dietary restrictions (e.g., dairy-free, gluten-free) or lower-cost alternatives.
- Swapping an ingredient dynamically updates the cooking steps, the grocery list, and the budget feasibility breakdown instantly.

### 📊 Budget Feasibility Analysis
- Performs real-time financial math comparing your ingredient costs against your stated daily budget limit.
- Displays a glowing status badge indicating **FEASIBLE** (Emerald) or **OVER BUDGET** (Rose).
- A linear progress gauge tracks how close you are to the limit.
- Suggests **Recommended Money-Saving Adjustments** (e.g., swapping fresh meat for lower-cost cuts or frozen options) which can be applied with a single click.

---

## Tech Stack
- **Core Structure**: Semantic HTML5
- **Styling**: Modern Vanilla CSS3 featuring custom CSS variables, a responsive layout, interactive glassmorphic cards, customized sliders, and print layout optimization.
- **Logic**: Pure ES6 Vanilla Javascript (zero external package dependencies).

---

## Local Development

Since MicroFoodie is built entirely with client-side vanilla technologies, you can run it locally with any simple HTTP server.

### Using Python
```bash
# Run inside the project directory
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your web browser.

### Using Node (npx)
```bash
# Run inside the project directory
npx http-server -p 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your web browser.
