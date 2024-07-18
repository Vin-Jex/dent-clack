<!-- @format -->
<center>HACKTOBERFEST 2022 - 2024</center>


# <a name="home"><center> DentClack </center></a>


<!-- ##### **Note:** *The Project your going to be working on is current being developed, it will be live in the next 3days (16th of october 2022)* -->


![Project Image](public/DentClack.png)

> DentClack is a medical web application that makes booking dental appointments easier and quicker from the comfort of your home.

---

### Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Teams and Responsibilities](#teams-and-responsibilities)
4. [How To Get Started](#getting-started)
5. [Branching Strategy](#branching-strategy)
5. [Contribution Rules](#contribution-rules📚)
6. [How To Avoid Conflicts](#avoid-conflicts-syncing-your-fork)
7. [FAQs](#faqs-frequently-asked-questions)
6. [Author Info](#author-info)
6. [Coding Guidelines](#coding-guidelines)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [Contact](#contact)

## Project Overview

**DentClack is a medical web application that aims to help make booking dental appointments quick and easy from the comfort of your home. This is a simple project built under the idea of helping beginners get more familiar with open source. Happy Coding 💙 :) !**

## Tech Stack

- **Framework and Tools**: NextJS, NodeJS
- **Language**: TypeScript, JavaScript
- **Libraries**: SwiperJS, ChartJS, Material Icons
- **Styling**: Tailwind, Next Font, Next Theme
- **Version Control**: Git and GitHub

[Back To The Top](#home)

---

## Teams and Responsibilities

### Team 1: Frontend Development
- Responsible for building the user interface using React components.
- Implementing responsive design with Tailwind CSS.
- Ensuring accessibility and cross-browser compatibility.

### Team 2: Backend Development
- Setting up Node.Js API routes.
- Integrating with external APIs for anime data.
- Managing database connections and data flow.

### Team 3: Quality Assurance and Testing
- Writing and maintaining unit and integration tests.
- Performing code reviews and ensuring code quality.
- Conducting user acceptance testing (UAT) and bug tracking.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Fork the repository
1. Click on the "[Fork](https://www.github.com/vin-jex/dent-clack/fork)" to fork the project or click on the second icon at the top right to fork

2. **Clone the forked project**
     ```bash
     git clone https://www.github.com/<your-github-username>/dent-clack
     ```

3. **Navigate to the project directory**
     ```bash
     cd dent-clack
     ```

4. **Run the project on your browser**
     For VSCode

    ```bash
      code .
    ```
     Other Text Editor on Mac

    ```bash
      open ~
    ```
    On Windows
    ```bash
    start .
    ```

5. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

6 **Running the Development Server**
  ```bash
    npm run dev
    # or
    yarn dev
  ```
 > Open application on [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Branching Strategy
- **Main Branch**: Protected branch. Only the release manager can merge into this branch.
- **Develop Branch**: Integration branch for feature branches.
- **Feature Branches**: Branch off from `develop` for new features or bug fixes. Naming convention: `feature/feature-name`.
- **Hotfix Branches**: Branch off from `main` for urgent fixes. Naming convention: `hotfix/hotfix-name`. 


## Made any changes?

  ### Create a new branch: 
  ```bash
  git switch -C feature/your-feature-name
  ```
  OR
  ```bash
  git checkout -b feature/your-feature-name
  ```
  
  ### Add and Commit changes in the new branch 
   ```bash
  git add <file-name>
  git commit -m <commit-message>
  ```
  ### Push to your forked repository
     ```bash
     git push <remote-name e.g origin> feature/your-feature-name
     ```

5. **Create a new pull request from your forked repository**
<br />
<br />

# Contribution Rules📚:

- Make a branch for every contribution you wish to make
- Open a pull request after you are done but note DO NOT MERGE it will only be done after the collaboratos have carefully reviewed your work
- ⚠️ Do NOT remove other content If not necessary ⚠️
- If you have any special edits please contact a collaborator
- Code styling wont be heavily enforced but please write readable code
- Don't forget to add your name to the contributors list file
- Make your pull requests in an incremental manner so as to avoid merging bad code
- Read the [CONTRIBUTING.md](/CONTRIBUTING.md) file for detailed information
<br>

## Avoid Conflicts {Syncing your fork}

An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.

```terminal
git remote add upstream https://github.com/vin-jex/dent-clack
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


[Back To The Top](#home)

---


## License

DentClack is licensed under the MIT License - Checkout [LICENSE](/LICENSE) for details.


P.S. Star ⭐ and Share this repository, if you had fun!!! 😊 

---

# FAQs (Frequently Asked Questions)

- Who can contribute?
  - Anyone with a github account and who is signed up for
    [hacktoberfest](https://hacktoberfest.digitalocean.com/) :)
- Who are you and why are you doing this?
  - I are a programmer from Nigeria [Vincent](https://www.linkedin.com/in/vinjex/).
   I'm doing this because I love Open Source and Hacktoberfest. I want to make it easier for people to get started with Hacktoberfest and Open Source.
- Why are you not using digitalocean?

  - Because we only know JavaScript and suck at servers :).

- How many pull request (PR) must be made, if I want to get an awesome tshirt from Hacktoberfest 2022?
  - 4
- How do I track my progress to get an awesome shirt from Hacktoberfest 2022?
  - [go to :](https://hacktoberfest.digitalocean.com/profile/) (Check Out Your Own Stats at Right Top)
- What is the duration of Hacktoberfest 2022?
  - It is from 1st october to 31st october 2022...
- What is the event for?
  - For the open source community engagement

  ---
  
## Author Info

- Twitter - [@VinJex](https://x.com/_vinjex)
- LinkedIn - [@Vinjex](https://linkedin.com/in/vinjex)
- GitHub - [@Vin-Jex](https://www.github.com/vin-jex)
- Website - [VinJex](https://www.vinjex.co)

[Back To The Top](#home)

---

##### _I will do my best to merge as much as possible from everyone. However, time is limited and the merge conflicts are horrible 😲._

<br>

## Our Top Contributors

<p align="center"><a href="https://github.com/vin-jex/dent-clack/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=vin-jex/dent-clack" />
</a></p>
