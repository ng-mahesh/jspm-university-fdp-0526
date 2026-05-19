### Assignment 1: Scaffolding & Component Structure
**Tasks:**
1. Create a new React application using Vite: `npm create vite@latest task-manager -- --template react-ts`
2. Run `npm install` and `npm run dev`.
3. Clean up the default boilerplate code.
4. Create a `components` folder.
5. Build three static components: `Header.tsx`, `Footer.tsx`, and `TaskList.tsx`.
6. Import and render them inside `App.tsx`.

### Assignment 2: Props, State, and Interactivity
**Tasks:**
1. In `App.tsx`, create an array of task objects (e.g., `{ id: 1, title: 'Learn React', completed: false }`) and store it in `useState`.
2. Pass the tasks array down to the `TaskList` component via `props`.
3. Inside `TaskList`, use `.map()` to render a list of tasks.
4. **Challenge:** Add a "Mark Complete" button next to each task. When clicked, it should call a function passed down from `App.tsx` that updates the state and changes the task's visual appearance.