# Contribution Rules 📑 :

- Do read the `readme.md` file

- Identify and create an issue that you've discovered

- Add a screenshot of the issue if applicable

- Do NOT work on anything unless you are assigned, if you make a pull request without being assigned to that issue, it will be closed without being merged

- ⚠️ Do NOT remove other content If not necessary ⚠️

- Do NOT create a pull request until the issue created is accepted ✔ and you're assigned to that issue

- Try to keep pull requests small to minimize merge conflicts

- Do NOT work on more than one issue at a time, this is so that you don't make a huge pull request and others can have opportunities to work on another issue while you work on something else

- Add the Issue you worked on in your Pull Request 

- Do NOT work on the main branch, create your own branch by following the instructions [here](https://github.com/pythoniclaver/Dent-Clack/blob/main/CONTRIBUTING.md#getting-started)


- Fill out issue and pull request(PR) templates properly, if you don't know how, checkout previous issues to know how they are filled or just ask :)

- Do NOT break the code please :)

- Happy Coding!!!



## Getting Started 🤩🤟

1. Create Issues 💥 

In order to discuss changes, you are welcome to [open an issue](https://github.com/pythoniclaver/Dent-Clack/issues/new/choose) about what you feel should be changed or fixed. New ideas are always appreciated and Welcomed.

1. **Fork a repo**: Just click on the "[Fork](https://github.com/pythoniclaver/Dent-Clack/fork)" to fork the project or click on the second icon at the top right to fork

2. **Clone the folked project**

```bash
git clone https://github.com/<your-github-username>/Dent-Clack
```

3. **Navigate to the project directory**

```bash
cd Dent-Clack
```

4. **Run the project on your browser**

## Made any changes?

- Make a new branch: 
  ```bash
  git switch -C <new-branch-name>
  ```
  
- Add and Commit changes in the new branch 
   ```bash
  git add <file-name>
  git commit -m <commit-message>
  ```
- Push to your folked repository
```bash
git push <remote-name e.g origin> <branch-name>
```

5. **Create a new pull request from your forked repository**

## Prerequisite Skills to Contribute 👩🏽‍💻 
- HTML
- CSS
- JavaScript

---

## How to Contribute 💥

- Take a look at the existing [Issues](https://github.com/pythoniclaver/Dent-Clack/issues) or [create a new issue](https://github.com/pythoniclaver/Dent-Clack/issues/new/choose)!
- [Fork the Repo](https://github.compythoniclaver/Dent-Clack/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a [Pull Request](https://github.com/pythoniclaver/Dent-Clack/compare) (PR), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

---

## Avoid Conflicts 🏓  {Syncing your fork}

An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.

```terminal
git remote add upstream https://github.com/pythoniclaver/Dent-Clack
```

Verify if new remote has been added by running the command:

```terminal
git remote -v
```

To pull any new changes from your parent repo simply run

```terminal
git merge upstream/main
```

This will give you any eventual conflicts and allow you to easily solve them in your repo. It's a good idea to use it frequently in between your own commits to make sure that your repo is up to date with its parent.

For more information on syncing forks [read this article from Github](https://help.github.com/articles/syncing-a-fork/).

🏆 After this, the maintainers will review the PR and will merge it if it helps move the Code-Magic project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase.

---

> ### Note: Breaking any of the rules will lead to PR rejection