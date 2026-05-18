### Assignment 1: Environment & Git Setup
**Tasks:**
1. Install **Node.js** (LTS version) and **VS Code**.
2. Create a folder named `fdp-fullstack-day1` and open it in VS Code.
3. Open the terminal and run `git init`.
4. Create a `.gitignore` file and add `node_modules/` and `*.js` (we only want to track our `.ts` files).

### Assignment 2: TypeScript Practice
**Tasks:**
1. Initialize a Node project: Run `npm init -y`.
2. Install TypeScript locally: Run `npm install typescript --save-dev`.
3. Initialize TypeScript config: Run `npx tsc --init`.
4. Create a file named `library.ts`.
5. **Coding Task:** 
   - Define an interface `Book` with: `title` (string), `author` (string), `yearPublished` (number), and `isAvailable` (boolean - optional).
   - Create an array containing at least 3 `Book` objects.
   - Write an arrow function `getRecentBooks` that accepts the array of books and returns only books published after the year 2000.
6. Compile and Run: Run `npx tsc library.ts` to generate `library.js`, then run `node library.js` to see the output.

### Assignment 3: Pushing to GitHub
**Tasks:**
1. Now that your TypeScript code is working, stage your changes: `git add .`
2. Commit your code: `git commit -m "Completed TypeScript library assignment"`
3. Go to GitHub.com, create a new public repository named `fdp-day1-assignment`.
4. Follow the GitHub instructions to add the remote origin and push your code to the `main` branch.
5. Verify your code is visible on GitHub.