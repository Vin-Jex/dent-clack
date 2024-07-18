# Contribution Rules 📑

- Do read the `readme.md` file.

- Identify and create an issue that you've discovered.

- Add a screenshot of the issue if applicable.

- Do NOT work on anything unless you are assigned; if you make a pull request without being assigned to that issue, it will be closed without being merged.

- ⚠️ Do NOT remove other content if not necessary. ⚠️

- Do NOT create a pull request until the issue created is accepted ✔ and you're assigned to that issue.

- Try to keep pull requests small to minimize merge conflicts.

- Do NOT work on more than one issue at a time, so you don't make a huge pull request and others can have opportunities to work on another issue while you work on something else.

- Add the Issue you worked on in your Pull Request.

- Do NOT work on the main branch; create your own branch by following the instructions [here](https://github.com/vin-jex/dent-clack/blob/main/CONTRIBUTING.md#getting-started).

- Fill out issue and pull request (PR) templates properly. If you don't know how, check out previous issues to see how they are filled or just ask. :)

- Do NOT break the code, please. :)

- Happy Coding!!!

## Getting Started 🤩🤟

1. Create Issues 💥

   To discuss changes, you are welcome to [open an issue](https://github.com/vin-jex/dent-clack/issues/new/choose) about what you feel should be changed or fixed. New ideas are always appreciated and welcomed.

2. **Fork the Repo**: Just click on the "[Fork](https://github.com/vin-jex/dent-clack/fork)" button to fork the project or click on the second icon at the top right to fork.

3. **Clone the Forked Project**

   ```bash
   git clone https://github.com/<your-github-username>/dent-clack
   ```

4. **Navigate to the Project Directory**

   ```bash
   cd dent-clack
   ```

5. **Run the Project on Your Browser**

## Made Any Changes?

### Create a New Branch:

```bash
git switch -C feature/your-feature-name
```

OR

```bash
git checkout -b feature/your-feature-name
```

### Add and Commit Changes in the New Branch:

```bash
git add <file-name>
git commit -m <commit-message>
```

### Push to Your Forked Repository:

```bash
git push <remote-name e.g origin> feature/your-feature-name
```

6. **Create a New Pull Request from Your Forked Repository**

## Prerequisite Skills to Contribute 👩🏽‍💻

- Node.js (version 14 or higher)
- npm or yarn
- Next.js
- TypeScript
- JavaScript
- Chart.js
- Tailwind CSS

---

## How to Contribute 💥

- Take a look at the existing [Issues](https://github.com/vin-jex/dent-clack/issues) or [create a new issue](https://github.com/vin-jex/dent-clack/issues/new/choose)!
- [Fork the Repo](https://github.com/vin-jex/dent-clack/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a [Pull Request](https://github.com/vin-jex/dent-clack/compare) (PR), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

---

## Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand the standards of behavior we expect from all contributors.

## Reporting Bugs

If you find a bug, please report it by opening an issue on GitHub. Include as much detail as possible to help us understand and address the issue. Be sure to include:
- Steps to reproduce the bug.
- Your environment (browser, operating system, etc.).
- Any relevant screenshots or logs.

## Suggesting Features

We welcome feature suggestions! If you have an idea, please open an issue on GitHub and describe:
- The problem your feature would solve.
- How you envision the feature working.
- Any additional context or details.

## Submitting Changes

Before submitting a pull request, please ensure that:
1. Your code follows our [Style Guidelines](#style-guidelines).
2. You have written tests for your changes, if applicable.
3. All tests pass and the code lints without errors.
4. Your commit messages follow our [Commit Messages](#commit-messages) guidelines.

## Style Guidelines

- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with some exceptions for TypeScript.
- Use meaningful variable and function names.
- Write clear and concise comments where necessary.
- Ensure code readability and maintainability.

### Linting and Formatting

We use ESLint for linting and Prettier for code formatting. Ensure your code passes both before committing:

```bash
npm run lint
npm run format
# or
yarn lint
yarn format
```

## Commit Messages

Please write descriptive commit messages that clearly explain the purpose of your changes. Follow these guidelines:
- Use the present tense ("Add feature" not "Added feature").
- Be concise but descriptive.
- Reference any relevant issues or pull requests.

### Example Commit Messages

- `Fix: Fix typo in README`
- `Feat: Add user authentication feature`
- `Refactor: Refactor header component for better readability`
- `Style: Style header component for satisfying feeling`
- `Perf: Update dependencies to latest versions`

## Avoid Conflicts 🏓 {Syncing your fork}

An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PRs may be merged while you're working on your branch/fork.

```terminal
git remote add upstream https://github.com/vin-jex/dent-clack
```

Verify if the new remote has been added by running the command:

```terminal
git remote -v
```

To pull any new changes from your parent repo simply run:

```terminal
git merge upstream/main
```

This will give you any eventual conflicts and allow you to easily solve them in your repo. It's a good idea to use it frequently in between your own commits to make sure that your repo is up to date with its parent.

For more information on syncing forks, [read this article from GitHub](https://help.github.com/articles/syncing-a-fork/).

🏆 After this, the maintainers will review the PR and merge it if it helps move the Code-Magic project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase.

---

> ### Note: Breaking any of the rules will lead to PR rejection.