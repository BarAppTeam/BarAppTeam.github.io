# Contributing to NutriCalc

First off, thank you for considering contributing to NutriCalc! It's people like you that make NutriCalc such a great tool.

## Getting Started

Before you begin:
- Ensure you have a [GitHub account](https://github.com/signup/free).
- Submit a ticket for your issue, assuming one does not already exist.
  - Clearly describe the issue including steps to reproduce when it is a bug.
  - Make sure you fill in the earliest version that you know has the issue.
- Fork the repository on GitHub.

## Making Changes

1. Create a topic branch from where you want to base your work.
   - This is usually the main branch.
   - Only target release branches if you are certain your fix must be on that branch.
   - To quickly create a topic branch: `git checkout -b fix/my_contribution main`.
2. Make commits of logical units.
3. Check for unnecessary whitespace with `git diff --check` before committing.
4. Make sure your commit messages are in the proper format.

(Short description of your changes)

More detailed explanatory text, if necessary. Wrap it to about 72 characters or so. Further paragraphs come after blank lines.

- Bullet points are okay, too
- Typically a hyphen or asterisk is used for the bullet, followed by a single space, with blank lines in between, but conventions vary here

5. Make sure you have added any necessary tests for your changes.
6. Run all the tests to assure nothing else was accidentally broken.

## Submitting Changes

1. Push your changes to a topic branch in your fork of the repository.
2. Submit a pull request to the original repository.
3. Update your GitHub issue to mark that you have submitted code and are ready for it to be reviewed (Status: Ready for Review).
4. Include a link to the pull request in the ticket.

## After Your Pull Request is Merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:
    ```
    git push origin --delete fix/my_contribution
    ```
- Check out the main branch:
    ```
    git checkout main -f
    ```
- Delete the local branch:
    ```
    git branch -D fix/my_contribution
    ```
- Update your main with the latest upstream version:
    ```
    git pull --ff upstream main
    ```

## Additional Resources

- [General GitHub documentation](https://help.github.com)
- [GitHub pull request documentation](https://help.github.com/articles/about-pull-requests/)

Thank you for your contributions to NutriCalc!
