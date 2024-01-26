# Contribution Guidelines

- [Contribution Guidelines](#contribution-guidelines)
  - [👩‍⚖️ Admins](#️-admins)
  - [👩‍💻Active Contributors](#active-contributors)
  - [🌟Getting Started]
  - [🧪 How to Build, Test, and Run]
    - [`npm run start`]
    - [`npm test`]
    - [`npm run build`]
    - [`npm run eject`]
  - [💻 Guidelines for Code Contributions]
  - [🎨 Guidelines for Non-Code Contributions]
  - [📃Code of Conduct]
  - [📩Contact Us]

Thank you for your interest in contributing to the Tech Start UCalgary server repository! We welcome any and all contributions to improve our website and make it a better resource for our community. Before making a contribution, please read and follow these guidelines to ensure that your changes are appropriate and contribute to our goals.

## 👩‍⚖️ Admins

| Name                 | GitHub Profile                                    |
| -------------------- | ------------------------------------------------- |
| Joel Happ            | [Jhappy77](https://github.com/Jhappy77)           |
| Niyousha Raeesinejad | [Niyousha99](https://github.com/Niyousha99)       |
| Ben Schmidt          | [Anidion](https://github.com/Anidion)             |
| Wai Ka Wong          | [Wongsitu](https://github.com/wongsitu/)          |
| Abod Abbas           | [Abodthedude25](https://github.com/abodthedude25) |

## 👩‍💻Active Contributors

| Name          | GitHub Profile                                  |
| ------------- | ----------------------------------------------- |
| Sahiti Akella | [Sahitiakella](https://github.com/Sahitiakella) |
| Isaiah Asaolu | [Isaiah](https://github.com/IsaiahA21)          |
| Brian Nguyen  | [brian-ngyn](https://github.com/brian-ngyn)     |

There are several types of contributions that you can make to this repository:

- **Bug fixes:** If you notice a bug or issue with the website, submit an issue and fix that addresses the problem.
- **Content updates:** If you notice outdated or incorrect information on the website, please submit an update with the correct information. Please refer to our [Content Updates Guide](./content-updates.md) for details on how and when to update different types of content.
- **Design improvements:** If you have design suggestions or improvements to make the website more user-friendly or visually appealing, please submit your ideas and any relevant code changes.
- **New features:** If you have an idea for a new feature or functionality that would be useful to our community, please submit your proposal and any relevant code changes.

<details>
  <summary>🌟Getting Started </summary>

To get started contributing to the Tech Start UCalgary express server, please follow these steps:

1. Clone the repository to your local machine.
2. Make sure you're on our `main` branch: `git checkout main`.
3. Pull our latest changes so that you are up-to-date with the branch: `git pull origin main`.
4. In the root directory of the project, create a new file named `.env`.
5. In the `.env` file, add the following line: `GOOGLE_PHOTOS_URL=`. Do not add any value after the equals sign.
6. Reach out to an Admin to get the actual value for `GOOGLE_PHOTOS_URL`. Once you have the value, add it after the equals sign in the `.env` file.
    Your `.env` file should now look something like this:
    GOOGLE_PHOTOS_URL=https://photos.app.goo.gl/YourUniqueGooglePhotosURL
7. Create and switch to your own branch (which should be a descriptive name of your feature change): `git checkout -b your-name/name-of-feature-change`.
8. Make your code changes.
9. Add all your changed files: `git add --all`. Alternatively, you can add selected files as well.
10. Sign off and commit your changes along with a short and informative description of changes : `git commit -s`.
11. Push your changes to your remote branch: `git push origin name-of-feature-change`.
12. Create new pull request on GitHub. Make sure to set your target branch to `dev`, assign yourself as the assignee, and include a brief description of your changes.
13. Once your PR has been created, go to your issue, click on "Linked pull requests", and select your PR to link to your issue. You can refer to this [past PR](https://github.com/Tech-Start-Server-UCalgary/tsu-website/pull/303) as an example.
14. Add all relevant reviewers to your PR; at minimum this should include the Presidents, VP Communications, VP Development, any relevant active contributors. You will be able to merge your PR once you receive at least 2 approvals from your reviewers.
15. Vercel will automatically host your branch, so everyone can test it. Please ensure you do thorough testing to catch any bugs.
16. An admin will review and deploy your changes to the website by pushing your changes from your branch to the `main` branch.
17. After you have merged your PR to `main`, please delete your remote branch.

</details>


<details>

<summary>🧪 How to Build, Test, and Run</summary>

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode. Remember to run `npm install` first to install all dependencies needed to run the app in development.

Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

</details>

<details>
<summary>npm run build </summary>
</details>

<details>
<summary>npm run eject</summary>

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (`webpack`, `Babel`, `ESLint`, etc.) right into your project so you have full control over them. All the commands except `eject` will still work, but they will point to the copied scripts, so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
</details>

<details>
<summary>💻 Guidelines for Code Contributions </summary>

When making code contributions to the Tech Start UCalgary server, please follow these guidelines:

- Write clear, concise code that is easy to understand and maintain.
- Use descriptive variable and function names.
- Test your code thoroughly before submitting it.
- Follow existing coding standards and conventions.
- Avoid making changes that are not related to your contribution.
</details>

<details>
<summary>🎨 Guidelines for Non-Code Contributions</summary>

If you are making non-code contributions to the Tech Start UCalgary server, such as design or content updates, please follow these guidelines:

- Provide clear and detailed descriptions of your changes.
- Include any relevant images or files.
- Follow existing design and content standards and conventions.
- Avoid making changes that are not related to your contribution.
</details>

<details>
<summary>📃Code of Conduct </summary>

Please note that all contributors are expected to adhere to the [Tech Start UCalgary Code of Conduct](CODE_OF_CONDUCT.md)

</details>

<details>
<summary>📩Contact Us</summary>

If you have any questions or concerns about contributing to the Tech Start UCalgary server repository, please contact us at info@techstartucalgary.com.

</details>

Thank you for your contributions to our community! 👐