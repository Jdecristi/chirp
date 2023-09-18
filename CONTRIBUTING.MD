# Contributing to Chirp

- Before jumping into a PR be sure to search [existing PRs](https://github.com/calcom/cal.com/pulls) or [issues](https://github.com/calcom/cal.com/issues) for an open or closed item that relates to your submission.

## Developing

The development branch is `main`. This is the branch that all pull
requests should be made against. The changes on the `main`
branch are tagged into a release monthly.

To develop locally:

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your
   own GitHub account and then
   [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Create a new branch:

   ```sh
   git checkout -b MY_BRANCH_NAME
   ```

3. Install pnpm:

   ```sh
   npm install -g pnpm
   ```

4. Install the dependencies with:

   ```sh
   pnpm install
   ```

5. Set up your `.env` file:

   - Duplicate `.env.example` to `.env`.

   ```sh
   cp .env.example .env
   ```

6. Start developing and watch for code changes:

   ```sh
   pnpm dev
   ```

## Building

You can build the project with:

```bash
pnpm build
```

Please be sure that you can make a full production build before pushing code.

## Linting

To check the formatting of your code:

```sh
pnpm lint
```

If you get errors, be sure to fix them before committing.

## Making a Pull Request

- Be sure to [check the "Allow edits from maintainers" option](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork) while creating your PR.
- If your PR refers to or fixes an issue, be sure to add `refs #XXX` or `fixes #XXX` to the PR description. Replacing `XXX` with the respective issue number. See more about [Linking a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).
- Be sure to fill the PR Template accordingly.
