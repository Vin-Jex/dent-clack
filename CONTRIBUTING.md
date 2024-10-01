
---

# Contribution Rules 📑

This project thrives on contributions from the community! To keep things smooth, collaborative, and productive, please make sure to follow these rules carefully. Any violation of the rules could result in your pull request (PR) being closed or not merged. Here's how to contribute effectively to the **DentClack** project:

## Before You Start Contributing

1. **Read the Documentation**: Be sure to read the `README.md` file carefully. This file contains crucial information about the project, its goals, and guidelines that will help you understand how to contribute.
   
2. **Identify & Report Issues**: Before diving into any coding task, make sure the problem is known. If you identify an issue, please [create a new issue](https://github.com/vin-jex/dent-clack/issues/new/choose) detailing the problem.

3. **Attach Screenshots**: If the issue you're reporting can be visually represented (e.g., UI bugs), include screenshots or screen recordings to better illustrate the problem.

4. **Get Assigned**: **Do NOT start working on an issue unless you've been assigned to it**. Issues without an assignee are open for grabs, but to avoid conflicts, you need to be assigned to the issue. If you submit a pull request without being assigned, it will be **closed without being merged**.

5. **Don’t Remove Code Unless Necessary**: Be careful not to remove or change other parts of the codebase unless absolutely necessary for fixing the issue at hand. **⚠️ Avoid making unrelated changes! ⚠️**

6. **Issue Acceptance**: Before you create a PR, ensure that the issue you are working on has been reviewed and accepted by the maintainers. 

7. **Small, Focused PRs**: Try to keep your pull requests small and focused on a single issue to make it easier for reviewers to evaluate the code and to minimize merge conflicts.

8. **Work on One Issue at a Time**: Only work on one issue at a time to avoid making large, unmanageable pull requests. This also gives others the opportunity to work on different issues simultaneously.

9. **Reference Issues in PR**: In your PR description, always reference the issue number you're addressing (e.g., `Fixes #123`) so the maintainers can easily track your progress.

10. **Branching Strategy**: Never work directly on the main branch! Always create a separate branch for the feature or bug fix you are working on. Detailed instructions on how to create a new branch are available in the section [Getting Started](https://github.com/vin-jex/dent-clack/blob/main/CONTRIBUTING.md#getting-started).

11. **Fill Out Templates**: Follow the issue and pull request templates when submitting. Properly fill out all the required fields. If you're unsure how, check out existing issues or pull requests, or feel free to ask for help.

12. **Quality Code**: Please ensure that your code does not break the existing codebase. All tests should pass, and the code should be well-structured, commented, and maintainable.

13. **Happy Coding**: Enjoy the contribution process and feel free to ask for help or guidance from the maintainers and the community!

---

## Getting Started 🤩🤟

To ensure a smooth start, follow the steps below to create, work on, and contribute to the DentClack project.

### 1. Create Issues 💥

You are encouraged to [open an issue](https://github.com/vin-jex/dent-clack/issues/new/choose) to discuss any bugs, suggestions, or changes you feel should be made. New ideas and feedback are highly valued and appreciated!

### 2. Fork the Repository 🪜

Click on the **"[Fork](https://github.com/vin-jex/dent-clack/fork)"** button located at the top of the repository to fork the project and create a copy of the repository in your GitHub account.

### 3. Clone the Forked Project 💻

After forking the repository, clone the project to your local development environment using the following command:

```bash
git clone https://github.com/<your-github-username>/dent-clack
```

Replace `<your-github-username>` with your actual GitHub username.

### 4. Navigate to the Project Directory 📂

```bash
cd dent-clack
```

### 5. Install Dependencies 🛠

To install the project's required dependencies, use one of the following commands based on your preferred package manager:

```bash
npm install
```

OR

```bash
yarn install
```

### 6. Run the Project Locally 🚀

Start the development server and run the project in your local browser:

```bash
npm run dev
```

OR

```bash
yarn dev
```

You can now view the project at `http://localhost:3000`.

---

## Made Any Changes? 🔄

### Create a New Branch 🌿

Before making any changes, switch to a new branch:

```bash
git switch -C feature/your-feature-name
```

OR

```bash
git checkout -b feature/your-feature-name
```

Always give your branch a descriptive name (e.g., `feature/add-user-authentication`).

### Add and Commit Changes ✅

After making changes, stage the files, and commit your work using meaningful commit messages:

```bash
git add <file-name>
git commit -m "Meaningful commit message"
```

### Push to Your Forked Repository 🛫

```bash
git push origin feature/your-feature-name
```

### Create a New Pull Request 🔄

Once your changes are pushed to your fork, [create a new pull request](https://github.com/vin-jex/dent-clack/compare) from your forked repository to the original DentClack repository. Make sure to fill out the PR template and reference the issue you're fixing (e.g., `Fixes #123`).

---

## Prerequisite Skills to Contribute 👩🏽‍💻

Make sure you're familiar with the following technologies before contributing to ensure you can contribute effectively:

- **Node.js** (version 14 or higher)
- **npm** or **yarn**
- **Next.js**
- **TypeScript**
- **JavaScript**
- **Chart.js**
- **Tailwind CSS**

---

## How to Contribute 💥

1. **Explore Existing Issues**: Take a look at the current [Issues](https://github.com/vin-jex/dent-clack/issues) to see what needs work. If you find something new, feel free to [create an issue](https://github.com/vin-jex/dent-clack/issues/new/choose) to bring attention to it.

2. **Fork and Clone**: Fork the repository and clone it to your local machine to start working on it. See the section above for detailed instructions.

3. **Create a Branch**: Always create a new branch for your work to keep your changes isolated from the main branch. This prevents conflicts and keeps the project organized.

4. **Create a PR**: Submit a pull request once your changes are complete. The community will review your PR and provide feedback.

5. **Provide Screenshots**: For any front-end related changes, provide screenshots or screen recordings so the maintainers can quickly understand the effects of your changes.

---

## Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). This outlines the standards of behavior expected from everyone working on this project.

---

## Reporting Bugs 🐛

If you find a bug, open an issue on GitHub. Include as much detail as possible to help us address it quickly:

- Steps to reproduce the bug.
- Your environment (browser, operating system, etc.).
- Screenshots, if applicable.
- Any logs or error messages.

---

## Suggesting Features 🚀

Do you have a cool feature idea? Feel free to suggest it! Open an issue on GitHub and include:

- The problem your feature will solve.
- How you envision the feature working.
- Any additional details or examples.

---

## Submitting Changes ✅

Before submitting a PR, make sure your code follows these guidelines:

1. Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
2. Ensure your code is well-documented, readable, and maintainable.
3. Write unit tests for your changes, if applicable.
4. All tests should pass before submitting.
5. Run the linter and formatter.

---

## Style Guidelines 🎨

- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- Use meaningful variable and function names.
- Write comments for complex code or logic.
- Keep code organized and easy to read.

---

## Commit Messages 📝

Write clear and descriptive commit messages that follow these guidelines:

- Use the present tense (e.g., "Fix bug" not "Fixed bug").
- Reference the issue you're working on (e.g., `Fixes #123`).
- Be concise but informative.

### Example Commit Messages:

- `Fix: Resolve login bug for non-admin users`
- `Feat: Add new appointment scheduling feature`
- `Refactor: Improve performance of data fetching logic`
- `Style: Update header layout for better UX`

---

## Avoiding Conflicts 🏓 {Syncing Your Fork}

To avoid conflicts when your PR is merged, always ensure your fork is up-to-date with the upstream repository:

1. Add the upstream remote:

```bash
git remote add upstream https://github.com/vin-jex/dent-clack
```

2. Fetch the latest changes:

```bash


git fetch upstream
```

3. Merge those changes into your branch:

```bash
git merge upstream/main
```

For more detailed instructions on syncing your fork, refer to [GitHub’s guide on syncing forks](https://help.github.com/articles/syncing-a-fork/).

---

After following these steps, the maintainers will review your PR. If your contribution adds value to the project, it will be merged. Otherwise, you will receive constructive feedback on how to improve your submission.

---

> **Note**: Breaking any of these rules or contributing low-quality work will lead to your PR being rejected. Please follow these guidelines to ensure a smooth and positive contribution experience.

Happy coding! ✨