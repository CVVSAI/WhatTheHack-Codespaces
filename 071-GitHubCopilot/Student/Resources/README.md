# Whack-a-Mole Game - GitHub Copilot Hackathon

A fully functional Whack-a-Mole game built with React, demonstrating the power of GitHub Copilot for rapid application development.

## 🎮 Game Features

- **Dynamic Grid Sizes**: Choose between 3x3, 4x4, or 5x5 grids
- **Real-time Score Tracking**: Track your hits with live score updates
- **30-Second Timer**: Race against the clock
- **Random Mole Spawning**: Moles appear randomly at intervals
- **Responsive Design**: Works on different screen sizes
- **Visual Feedback**: Animated mole whacking with visual effects
- **Game Over Screen**: Shows final score with replay option

## 📁 Project Structure

```
Resources/
├── vanilla-version/          # Original HTML/CSS/JS implementation
│   ├── index.html
│   ├── style.css
│   └── script.js
└── whack-a-mole-react/      # React implementation
    ├── src/
    │   ├── components/
    │   │   ├── GameBoard.jsx
    │   │   ├── Hole.jsx
    │   │   ├── GameInfo.jsx
    │   │   ├── Controls.jsx
    │   │   └── GameOver.jsx
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🚀 Running the Game

### React Version (Main)
```bash
cd whack-a-mole-react
npm install
npm run dev
```
Access at: `http://localhost:5173`

### Vanilla Version
```bash
cd vanilla-version
python3 -m http.server 8000
```
Access at: `http://localhost:8000`

---

## 📝 Challenge 1: Building with GitHub Copilot

### Success Criteria Completion ✅

#### 1. Functional Whack-a-Mole Game
The game fully meets all requirements:
- ✅ Game board where moles appear
- ✅ Random mole display at set intervals
- ✅ Click to whack functionality
- ✅ Working score counter
- ✅ Timer countdown

#### 2. How GitHub Copilot Assisted

1. **Initial Project Setup**
   - Asked: "I need to build a Whack-a-Mole game. Which language is best to implement it?"
   - Copilot recommended HTML/CSS/JavaScript for rapid prototyping
   - Generated complete file structure with all three files instantly

2. **Component Generation**
   - When converting to React, Copilot created 5 separate components automatically
   - Generated proper React hooks (useState, useEffect, useCallback)
   - Implemented proper state management patterns

3. **CSS Styling**
   - Created gradient backgrounds and animations
   - Generated responsive design breakpoints
   - Styled grid layouts with flexbox and CSS Grid

4. **Logic Implementation**
   - Timer countdown logic with proper cleanup
   - Random mole spawning algorithm
   - Click detection and score tracking
   - Game state management

#### 3. Three Different Interaction Styles

**Style 1: Direct Question/Answer**
```
Q: "How to run it in my codespace?"
A: Copilot automatically started a Python HTTP server and opened the browser
```
This style was great for quick, straightforward tasks.

**Style 2: Feature Request**
```
Q: "Lets implement a feature where we can allow user to increase the grid size"
A: Copilot generated dynamic grid sizing with state management and UI controls
```
This style allowed me to describe what I wanted and let Copilot figure out the implementation.

**Style 3: Iterative Refinement**
```
Q: "Make the grid size a dropdown"
Follow-up: "Move the dropdown to top beside score and timer"
Follow-up: "Decrease the size of holes so it fits without scrolling"
```
This conversational style helped me refine the UI through multiple iterations.

#### 4. Strategies Used to Leverage Copilot

**Strategy 1: Context-Aware Requests**
- Mentioned "hackathon" in initial request → Copilot prioritized speed and simplicity
- Specified "React" when ready to scale → Copilot switched tech stacks seamlessly

**Strategy 2: Let Copilot Choose Best Practices**
- Didn't specify exact React patterns → Copilot used modern hooks and functional components

**Strategy 3: Progressive Enhancement**
- Started with vanilla version (working quickly)
- Moved to React (better maintainability)
- Added features incrementally (grid size selector)

----------------------------------------------------------------------------------------------------

## 📝 Challenge 2: Prompt Engineering Mastery

### Success Criteria Completion ✅

#### Core Technique 1: Start General, Then Get Specific

**Before (General):**
```
"I need a game"
```
Too vague - Copilot wouldn't know what to build.

**After (Specific):**
```
"I am in a hackathon, and I need to build a Whack-a-Mole game.
These are the instructions:
- Create a game board where moles will appear
- Implement logic to randomly display moles
- Allow players to whack moles by selecting them
- Display current score
- Implement a timer"
```

**Result:** Copilot generated a complete, working game in seconds with all requirements met.

**Progressive Specificity Example:**
1. General: "Build a Whack-a-Mole game" → Got basic structure
2. More Specific: "Make it in React" → Converted to React with components
3. Very Specific: "Move the dropdown to top beside score and timer" → Exact UI positioning

#### Core Technique 2: Break Complex Tasks Into Simpler Tasks

**Complex Task:** "Add dynamic grid sizing to the game"

**Broken Down:**
1. ✅ "Add a feature where users can increase grid size" → State management added
2. ✅ "Make the grid size a dropdown" → UI changed to select element
3. ✅ "Move dropdown to top beside score and timer" → Layout restructured
4. ✅ "Change CSS so it displays in single line" → Styling refined
5. ✅ "Decrease hole sizes to fit without scrolling" → Dimensions optimized

**Result:** Each small step was executed perfectly, building up to a complex feature.

#### Core Technique 3: Give Examples

**Request Without Examples:**
```
"I want a grid selector"
```
Copilot might create checkboxes, radio buttons, or text input.

**Request With Examples:**
```
"Lets move all these folders into another file"
(referring to vanilla-version folder structure)
```
Showing existing structure helped Copilot understand the organization pattern.

**Another Example - Referencing Existing Code:**
```
"The grid selector should match the style of Score and Timer containers"
```
By referencing existing elements, Copilot maintained consistent styling.

#### Additional Technique: Constraint-Based Prompting

**Technique 4: Specify Constraints and Limitations**

**Example 1 - Technical Constraint:**
```
"Lets do it in React right now, and lets move all these folders into another file"
```
Constraint: Must use React, must organize existing files.
Result: Clean separation of vanilla and React versions.

**Example 2 - Size Constraint:**
```
"Decrease the size of holes so it can fit in page without scrolling"
```
Constraint: Must fit viewport without scrolling.
Result: Reduced padding, margins, font sizes, and gaps systematically.

### Before & After Comparisons

#### Before Prompt Engineering:
- Generic requests like "make it better"
- Single large requests for complex features
- No context about constraints or goals

#### After Prompt Engineering:
- Specific requirements with clear success criteria
- Decomposed tasks into manageable pieces
- Provided examples and constraints
- Iterative refinement with context

### New Feature Integration: Dynamic Grid Size Selector

**Feature Description:**
Users can now select between 3x3, 4x4, or 5x5 grid sizes before starting the game, making it more challenging with larger boards.

**Implementation Journey:**

1. **Initial Feature Request (General → Specific)**
   - Started: "Let's add grid sizing"
   - Refined: "Allow users to increase grid size with buttons"
   - Result: Added state management and button UI

2. **UI Iteration (Breaking Down)**
   - Step 1: Button group selector → Created, but took too much space
   - Step 2: Convert to dropdown → More compact
   - Step 3: Move to top bar → Better UX
   - Step 4: Single line layout → Cleaner design

3. **Technical Implementation**
   - Dynamic `gridSize` state (3, 4, or 5)
   - Calculated `numHoles = gridSize * gridSize`
   - Dynamic CSS grid columns: `gridTemplateColumns: repeat(${gridSize}, 1fr)`
   - Aspect ratio for holes to maintain circular shape
   - Disabled during gameplay to prevent cheating

4. **Optimization (Constraints)**
   - Constraint: Must fit on screen without scrolling
   - Solution: Reduced padding, gaps, font sizes systematically
   - Result: Works perfectly on all grid sizes

## 🎯 Key Learnings

### What Worked Well:
1. **Specific Requirements**: Providing exact game requirements led to better initial output
2. **Iterative Development**: Small, incremental changes were easier to manage
3. **Contextual Requests**: Referencing existing code helped maintain consistency
4. **Technology Guidance**: Letting Copilot suggest the best tech stack saved time

### Prompt Engineering Insights:
1. **Specificity Matters**: The more detail you provide, the better the output
2. **Examples Are Powerful**: Showing what you want beats explaining it
3. **Break It Down**: Complex features need simple steps
4. **Constraints Guide Better**: Limitations help focus Copilot's suggestions
5. **Iteration Is Normal**: First suggestion might need refinement

### Best Practices Discovered:
- Start with working code, then enhance
- Use domain-specific language (e.g., "grid", "holes", "moles")
- Reference existing code for consistency
- Provide success criteria upfront
- Don't be afraid to iterate on solutions

## 🏆 Conclusion

This hackathon demonstrated how GitHub Copilot can accelerate development when combined with effective prompt engineering. By starting general and getting specific, breaking down complex tasks, providing examples, and setting clear constraints, I built a fully functional game with multiple features in a fraction of the time traditional development would take.

The key is not just using Copilot, but using it strategically through thoughtful prompting and iterative refinement.
