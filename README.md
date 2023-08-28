# Block30 Stranger's Things

**Please read the API docs:** https://strangers-things.herokuapp.com/api/#POST-/posts/POST_ID/messages

## Requirements

Make sure you have met all of the following requirements:

### Project Management Requirements

- [ ] GitHub Project board set up.
- [ ] Detailed planning tickets with task descriptions for each one.
- [ ] Demonstration that each team member made contributions to the planning of tickets.
- [ ] Each student in the pair must have at least one commit towards the final result, in separate branches.
- [ ] GitHub repository containing all relevant code for the project.
- [ ] Updated GitHub repository with new commits.

### Functionality Requirements

#### Routes via React Router

- [x] `/posts`
- [ ] `/profile` (with messages)
- [x] `/login` and `/register` (alternatively displayed in the profile)

#### Unauthenticated Users

**Should be able to:**

- [x] See a list of all posts.
- [x] Sign up for an account with username and password.
- [x] Sign in with correct username/password combination.

**Should not be able to:**

- [x] Create a new post.
- [x] Delete any post.
- [ ] Send a message to the author of any post.

#### Authenticated Users

**Should be able to:**

- [x] Create a new post.
- [x] Delete a post for which they are the author.
- [ ] Send a message to the author of any post for which they are not the author.
- [ ] See all messages for any post for which they are the author.
- [ ] See all messages they've received in a special view.

**Should not be able to:**

- [x] Delete posts for which they are not the author.
- [ ] Send a message to themselves.

#### All Users

- [ ] Filter posts with a simple text matcher (no fetch call needed here).

### Implementation Requirements

#### Javascript Basics

- [x] Correct use of `let` and `const` for variable declaration.
- [x] Usage of loop structures: `map`, `forEach`, `for`, or `while` loops.
- [x] Control structures like `if`, `else`, `else if`, and ternaries.
- [x] Function declaration and invocation.
- [x] Usage of basic data types.
- [x] Usage of complex data types like arrays and objects.

#### AJAX Basics

- [x] Usage of HTTP methods: GET, POST, PATCH, DELETE.
- [x] Handling asynchronous coding for requests.
- [x] Usage of try/catch blocks within async functions.
- [x] Updating the DOM with results of data requests.

#### Front-End Basics

- [ ] Well-developed React components.
- [ ] Proper usage of props to share data & functions between components.
- [ ] Proper usage of event listeners on React components.
- [ ] Proper usage of state and effects.
- [ ] Well-implemented routes (React Router).

#### CSS Basics

- [ ] Proper use of Flex/Grid for creating layouts.
- [ ] Proper use of cascading and specificity to prevent bleed into unrelated elements.
- [ ] Good User Experience (UX) through a clean interface.

#### Code

- [ ] Cleanly written code.
- [ ] No unused functions or variables.
- [ ] Expressive variable, function, and CSS class names.
- [ ] Organized into a coherent flow.

### Stretch Goals

As time allows, complete the following stretch goals:

- [ ] Authenticated users can edit a post for which they are the author.
- [ ] Utilize Google Fonts to add custom fonts to the project.
- [ ] Add icons using icon fonts (e.g., Material Icons or Font Awesome).

## Installation and Usage

Provide instructions on how to install and run your project.

```bash
# Clone the repository
git clone [https://github.com/your-username/your-repo.git](https://github.com/elhamsameem/block30-strangers-things.git)

# Change directory
cd your-repo

# Install dependencies
npm install
npm install react-router-dom

# Run the application
npm run dev
```

## Contributors

- [Elham Sameem](https://github.com/elhamsameem)
- [Kwame](https://github.com/Kwameagyeman)
- [Khoi Phan](https://github.com/phanhkn)
- [Dawit](https://github.com/yepdawit)

