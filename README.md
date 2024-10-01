
---

<!-- @format -->
<center>HACKTOBERFEST 2022 - 2024</center>

# <a id="home" name="home"><center> DentClack </center></a>

![Project Image](public/DentClack.png)

> **DentClack** is a medical web application that makes booking dental appointments easier and quicker from the comfort of your home.

---

### ⭐ Before You Start: Like and Star the Project!

If you find the **DentClack** project interesting or helpful, please consider liking and starring the repository before contributing. This small action helps us gain visibility and motivates the community to keep growing!

Simply click the **Star** button at the top right corner of the [DentClack GitHub repo](https://github.com/vin-jex/dent-clack) ⭐!

---

### Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Teams and Responsibilities](#teams-and-responsibilities)
4. [How To Get Started](#getting-started)
5. [Branching Strategy](#branching-strategy)
6. [Contribution Rules](#contribution-rules📚)
7. [How To Avoid Conflicts](#avoid-conflicts-syncing-your-fork)
8. [FAQs](#faqs-frequently-asked-questions)
9. [Author Info](#author-info)
10. [Coding Guidelines](#coding-guidelines)
11. [Deployment](#deployment)
12. [Contributing](#contributing)
13. [Contact](#contact)
14. [Project Structure and Detailed Methodology](#project-structure-and-methodology)

---

## Project Overview

**DentClack** is a medical web application designed to simplify the process of booking dental appointments. It provides a seamless user experience, allowing patients to book dental services online, without needing to call a clinic or physically visit.

This project is a great opportunity for beginners to contribute to open-source and is open for contributions as part of **Hacktoberfest 2022-2024**.

### Goals:

- Easy-to-use interface for booking dental appointments.
- Responsive design that works on all devices.
- Secure authentication and appointment management.
- Beginner-friendly for Hacktoberfest contributions.

Happy Coding 💙 :) !

---

## Tech Stack

**Framework and Tools**:
- **Next.js**: React-based framework for server-side rendering and static website generation.
- **Node.js**: Backend runtime environment for handling server logic.

**Languages**:
- **TypeScript**
- **JavaScript**

**Libraries**:
- **Swiper.js**: For interactive carousels and sliders.
- **Chart.js**: For graphical representations of data.
- **Material Icons**: For adding icons to the application.

**Styling**:
- **Tailwind CSS**: Utility-first CSS framework for fast UI development.
- **Next Font**: For custom font management.
- **Next Theme**: For managing theming and dark mode.

**Version Control**:
- **Git and GitHub**: For tracking changes and collaborating.

**DevOps**:
- **Docker**: Containerizing the application for ease of deployment.
- **GitHub Actions**: For continuous integration and deployment.
- **AWS**: Hosting the production environment.

[Back To The Top](#home)

---

## Teams and Responsibilities

The project is divided into multiple teams to ensure smooth progress. You can join any of these based on your interest and expertise:

### Team 1: Frontend Development
- Build the user interface using **React** and **Next.js** components.
- Implement responsive design using **Tailwind CSS**.
- Ensure accessibility and cross-browser compatibility.
- Manage state using the **Context API** or **Redux**.

### Team 2: Backend Development
- Develop API routes using **Node.js** and **Express**.
- Integrate external APIs and handle business logic.
- Manage database connections with **MongoDB** and **Mongoose**.
- Secure the app using **OAuth** and **JWT** for authentication.

### Team 3: DevOps and Deployment
- Containerize the application using **Docker**.
- Set up continuous integration and deployment pipelines using **GitHub Actions**.
- Manage cloud environments and production deployment on **AWS** (EC2, S3, etc.).

### Team 4: Quality Assurance and Testing
- Write and maintain tests using **Jest** and **Cypress**.
- Perform code reviews and ensure code quality.
- Conduct user acceptance testing (UAT) and bug tracking.

[Back To The Top](#home)

---

## Getting Started

### Prerequisites
To get started with **DentClack**, make sure you have the following installed on your system:
- **Node.js** (version 14 or higher)
- **npm** or **yarn** (for managing packages)
- **Docker** (for running the application in containers - Although not required for now.)
- **AWS account** (optional, for testing deployment)

### Fork the Repository
1. Fork the [DentClack repo](https://github.com/vin-jex/dent-clack/fork) to your GitHub account.

2. **Clone the forked project**:
    ```bash
    git clone https://github.com/<your-github-username>/dent-clack
    ```

3. **Navigate to the project directory**:
    ```bash
    cd dent-clack
    ```

4. **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

5. **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

> Open the application in your browser at `http://localhost:3000` to see the result.

[Back To The Top](#home)

---

## Branching Strategy

We follow a structured branching strategy to ensure smooth integration and collaboration:

- **Main Branch**: Protected branch. Only the release manager can merge changes into this branch.
- **Develop Branch**: Integration branch where feature branches are merged after passing all tests.
- **Feature Branches**: For new features, branch off from `develop` with a naming convention like `feature/feature-name`.
- **Hotfix Branches**: For critical fixes that need to go directly into `main`. Branch off from `main` and use a naming convention like `hotfix/hotfix-name`.

[Back To The Top](#home)

---

## Contribution Rules 📚

### **Before You Start Contributing:**
1. **Like and Star the Project**: As mentioned earlier, please star the [GitHub repo](https://github.com/vin-jex/dent-clack) if you haven’t already!
2. **Read the Documentation**: Familiarize yourself with the [README](https://github.com/vin-jex/dent-clack/blob/main/README.md) and [Contributing Guide](https://github.com/vin-jex/dent-clack/blob/main/CONTRIBUTING.md) to understand the project structure and contribution process.
3. **Get Assigned**: Make sure to comment on an issue before working on it and wait to be assigned.

### **Rules for Contributions:**
- **Create a branch**: Work on your feature or bug fix in a new branch (follow the naming convention described above).
- **Pull latest changes**: Ensure your branch is updated with the latest changes from the `develop` branch.
- **Follow coding guidelines**: Ensure your code adheres to the [Coding Guidelines](#coding-guidelines).
- **Submit a Pull Request (PR)**: Once your work is complete, submit a PR referencing the issue number.
- **Review process**: Wait for your PR to be reviewed. PRs must pass all tests and be approved by a collaborator before they can be merged.

---

## How To Avoid Conflicts {Syncing your fork}

To avoid merge conflicts, sync your fork with the upstream repository regularly:

1. **Add upstream remote**:
    ```bash
    git remote add upstream https://github.com/vin-jex/dent-clack
    ```

2. **Verify**:
    ```bash
    git remote -v
    ```

3. **Fetch and merge upstream changes**:
    ```bash
    git fetch upstream
    git merge upstream/main
    ```

For more details on syncing forks, refer to [GitHub’s guide](https://help.github.com/articles/syncing-a-fork/).

[Back To The Top](#home)

---

## Project Structure and Detailed Methodology

For an in-depth look at the project structure, including the architecture of the frontend, backend, testing strategies, and DevOps processes, please refer to the [Project Structure and Methodology Document](docs/PROJECT_STRUCTURE.md).

This document covers:
- **Frontend architecture**: React components, state management, routing, and theming.
- **Backend architecture**: API design, database models, and security protocols.
- **DevOps setup**: Continuous integration, Docker setup, and cloud deployment.
- **Testing methodologies**: Unit testing, integration testing, and end-to-end testing.

[Back To The Top](#home)

---

## License

This project is licensed under the **MIT License**. For more information, see the [LICENSE](https://github.com/vin-jex/dent-clack/blob/main/LICENSE.md) file.

---

## FAQs (Frequently Asked Questions)

- **Who can contribute?**
  - Anyone with a GitHub account who is signed up for [Hacktoberfest](https://hacktoberfest.digitalocean.com/).
  
- **How many pull requests (PRs) must I make to get the Hacktoberfest shirt?**
  - You need to make

 four (4) accepted PRs during the Hacktoberfest event.

 - **Why aren't we using AWS?**
   - We are utilizing Cloudinary for media storage and Vercel for deployment due to their streamlined integration with our tech stack.

---

## Author Info

- Twitter: [@VinJex](https://x.com/_vinjex)
- LinkedIn: [@VinJex](https://linkedin.com/in/vinjex)
- GitHub: [@Vin-Jex](https://www.github.com/vin-jex)

[Back To The Top](#home)

---

### Top Contributors

<p align="center">
    <a href="https://github.com/vin-jex/dent-clack/graphs/contributors">
      <img src="https://contributors-img.web.app/image?repo=vin-jex/dent-clack" />
    </a>
</p>

---
