<h1 align="center">Databayt Open Source</h1>

<div align="center">

[![Join the chat on Databayt Community On Discord](https://discord.gg/rCyJzUQf)
[![Build Status](https://github.com/RasaHQ/rasa/workflows/Continuous%20Integration/badge.svg)](https://github.com/RasaHQ/rasa/actions)
![Documentation Build](https://img.shields.io/netlify/d2e447e4-5a5e-4dc7-be5d-7c04ae7ff706?label=Documentation%20Build)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B8141%2Fgit%40github.com%3ARasaHQ%2Frasa.git.svg?type=shield)](https://app.fossa.com/projects/custom%2B8141%2Fgit%40github.com%3ARasaHQ%2Frasa.git?ref=badge_shield)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/orgs/RasaHQ/projects/23)

</div>

<hr />

💡 **We're soon gonna migrating issues to Jira** 💡

Starting January 2024, issues for Databayt Open Source are located in
[this Jira board](https://github.com/abdout/databayt). You can browse issues without being logged in;
if you want to create issues, you'll need to create a Jira account.

<hr />

<img align="right" height="255" src="https://www.rasa.com/assets/img/sara/sara-open-source-2.0.png" alt="An image of Sara, the Databayt mascot bird, holding a flag that reads Open Source with one wing, and a wrench in the other" title="Databayt Open Source">
Databayt is paradigm shift in the realm of business automation. As an open-source, publicly traded entity, Databayt's mission is to empower businesses to streamline their operations by providing an innovative platform that facilitates the automation of diverse processes.

Built upon the vision of creating reusable components and tools, Databayt aims to deliver unparalleled flexibility and efficiency. By leveraging compact, independent building blocks, users can assemble sophisticated applications tailored to their unique needs. As these applications evolve over time, they morph into comprehensive, reusable blocks capable of servicing similar clients with minimal customization.

Our approach is dynamic and forward-thinking. With each iteration, Databayt targets specific milestones, offering its services as Software as a Service (SaaS). Furthermore, our aspiration extends beyond mere service provision; we envision Databayt as a central hub for businesses seeking automation solutions. Through fostering a collaborative community, we aim to establish Databayt as the go-to destination for businesses looking to enhance productivity and competitiveness through automation.


---
## Where to get help

There is extensive documentation in the [Databayt Docs](https://eco.databayt.org/docs).
Make sure to select the correct version so you are looking at
the docs for the version you installed.

Please use [Databayt Community Forum](https://discord.gg/rCyJzUQf) for quick answers to
questions.

### README Contents:
- [How to contribute](#how-to-contribute)
- [Development Internals](#development-internals)
- [Releases](#releases)
- [License](#license)

### How to contribute
We are very happy to receive and merge your contributions into this repository!

To contribute via pull request, follow these steps:

1. Read and follow the project's contribution guidelines: Before making any contributions, make sure to read and understand the project's contribution guidelines. These guidelines typically outline how contributions should be made, what coding standards to follow, how to submit pull requests, and any other relevant information. 
 
2. Follow coding standards: Adhere to the project's coding standards and style guidelines when writing code. Consistent code formatting makes it easier for maintainers to review and merge your contributions. 
 
3. Submit clear and concise pull requests: When submitting a pull request, provide a clear description of the changes you are making and why they are necessary. Make sure your code is well-documented and tested. 
 
4. Be respectful and professional: When interacting with project maintainers and other contributors, be respectful and professional in your communications. Constructive feedback and collaboration are key to a successful open source community. 
 
5. Be patient and responsive: Understand that maintainers may have limited time to review and merge contributions. Be patient and responsive to feedback or requests for changes to your code. 
 
6. Contribute regularly: Regular contributions help build trust within the open source community and demonstrate your commitment to the project. Even small contributions, such as fixing typos or improving documentation, can be valuable.

7. Create an issue describing the bug/improvement you want to work on or pick up an
   existing issue in [Jira](https://discord.gg/rCyJzUQf)

8.Follow our Pull Request guidelines: write code, test, documentation, changelog and follow our [Code Style](#code-style)

9. Create a pull request describing your changes

For more detailed instructions on how to contribute code, check out these [code contributor guidelines](CONTRIBUTING.md).

You can find more information about how to contribute to Databayt (in lots of
different ways!) [on our website.](https://discord.gg/rCyJzUQf).

Your pull request will be reviewed by a maintainer, who will get
back to you about any necessary changes or questions.


### Building from source


<hr />
### Install packages

```shell
npm i
```

### Setup .env file


```js
MONOGDB_URI=
DIRECT_URL=
AUTH_SECRET=
RESEND_API_KEY=
NEXT_PUBLIC_APP_URL=
DOMAIN=
```

### Setup Prisma
```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```
### Code Style

To ensure a standardized code style we use the formatter [black](https://github.com/ambv/black).
To ensure our type annotations are correct we use the type checker [pytype](https://github.com/google/pytype).
If your code is not formatted properly or doesn't type check, GitHub will fail to build.

#### Formatting

If you want to automatically format your code on every commit, you can use [pre-commit](https://pre-commit.com/).
Just install it via `pip install pre-commit` and execute `pre-commit install` in the root folder.
This will add a hook to the repository, which reformats files on every commit.



## Releases
Databayt has implemented robust policies governing version naming, as well as release pace for major, minor, and patch releases.

The values for a given version number (MAJOR.MINOR.PATCH) are incremented as follows:
- MAJOR version for incompatible API changes or other breaking changes.
- MINOR version for functionality added in a backward compatible manner.
- PATCH version for backward compatible bug fixes.

The following table describes the version types and their expected *release cadence*:

| Version Type |                                                                  Description                                                                  |  Target Cadence |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| Major        | For significant changes, or when any backward-incompatible changes are introduced to the API or data model.                                   | Every 1 - 2 yrs |
| Minor        | For when new backward-compatible functionality is introduced, a minor feature is introduced, or when a set of smaller features is rolled out. | +/- Quarterly   |
| Patch        | For backward-compatible bug fixes that fix incorrect behavior.                                                                                | As needed       |

While this table represents our target release frequency, we reserve the right to modify it based on changing market conditions and technical requirements.

### Maintenance Policy
Our End of Life policy defines how long a given release is considered supported, as well as how long a release is
considered to be still in active development or maintenance.

The maintenance duration and end of life for every release are shown on our website as part of the [Product Release and Maintenance Policy](https://eco.databayt.org/docs).

### Cutting a Major / Minor release
#### A week before release day

1. **Make sure the [milestone](https://github.com/RasaHQ/rasa/milestones) already exists and is scheduled for the
correct date.**
2. **Take a look at the issues & PRs that are in the milestone**: does it look about right for the release highlights
we are planning to ship? Does it look like anything is missing? Don't worry about being aware of every PR that should
be in, but it's useful to take a moment to evaluate what's assigned to the milestone.
3. **Post a message on the engineering Slack channel**, letting the team know you'll be the one cutting the upcoming
release, as well as:
    1. Providing the link to the appropriate milestone
    2. Reminding everyone to go over their issues and PRs and please assign them to the milestone
    3. Reminding everyone of the scheduled date for the release

#### A day before release day

1. **Go over the milestone and evaluate the status of any PR merging that's happening. Follow up with people on their
bugs and fixes.** If the release introduces new bugs or regressions that can't be fixed in time, we should discuss on
Slack about this and take a decision on how to move forward. If the issue is not ready to be merged in time, we remove the issue / PR from the milestone and notify the PR owner and the product manager on Slack about it. The PR / issue owners are responsible for
communicating any issues which might be release relevant. Postponing the release should be considered as an edge case scenario.

#### Release day! 🚀

1. **At the start of the day, post a small message on slack announcing release day!** Communicate you'll be handling
the release, and the time you're aiming to start releasing (again, no later than 4pm, as issues may arise and
cause delays). This message should be posted early in the morning and before moving forward with any of the steps of the release,
   in order to give enough time to people to check their PRs and issues. That way they can plan any remaining work. A template of the slack message can be found [here](https://eco.databayt.org/docs).
   The release time should be communicated transparently so that others can plan potentially necessary steps accordingly. If there are bigger changes this should be communicated.
2. Make sure the milestone is empty (everything has been either merged or moved to the next milestone)
3. Once everything in the milestone is taken care of, post a small message on Slack communicating you are about to
start the release process (in case anything is missing).
4. **You may now do the release by following the instructions outlined in the
[Databayt Open Source README](#steps-to-release-a-new-version) !**

#### After a Major release

After a Major release has been completed, please follow [these instructions to complete the documentation update](./docs/README.md#manual-steps-after-a-new-version).

### Steps to release a new version
Releasing a new version is quite simple, as the packages are build and distributed by GitHub Actions.

*Release steps*:
1. Make sure all dependencies are up to date (**especially Databayt SDK**)
    - For Databayt SDK, except in the case of a patch release, that means first creating a [new Databayt SDK release](https://github.com/RasaHQ/rasa-sdk#steps-to-release-a-new-version) (make sure the version numbers between the new Databayt and Databayt SDK releases match)
    - Once the tag with the new Databayt SDK release is pushed and the package appears on [pypi](https://pypi.org/project/rasa-sdk/), the dependency in the rasa repository can be resolved (see below).
2. If this is a minor / major release: Make sure all fixes from currently supported minor versions have been merged from their respective release branches (e.g. 3.3.x) back into main.
3. In case of a minor release, create a new branch that corresponds to the new release, e.g.
   ```bash
    git checkout -b 1.2.x
    git push origin 1.2.x
    ```
4. Switch to the branch you want to cut the release from (`main` in case of a major, the `<major>.<minor>.x` branch for minors and patches)
    - Update the `rasa-sdk` entry in `pyproject.toml` with the new release version and run `poetry update`. This creates a new `poetry.lock` file with all dependencies resolved.
    - Commit the changes with `git commit -am "bump rasa-sdk dependency"` but do not push them. They will be automatically picked up by the following step.
5. If this is a major release, update the list of actively maintained versions [in the README](#actively-maintained-versions) and in [the docs](./docs/docs/actively-maintained-versions.mdx).
6. Run `make release`
7. Create a PR against the release branch (e.g. `1.2.x`)
8. Once your PR is merged, tag a new release (this SHOULD always happen on the release branch), e.g. using
    ```bash
    git checkout 1.2.x
    git pull origin 1.2.x
    git tag 1.2.0 -m "next release"
    git push origin 1.2.0 --tags
    ```
    GitHub will build this tag and publish the build artifacts.
9. After all the steps are completed and if everything goes well then we should see a message automatically posted in the company's Slack (`product` channel) like this [one](https://rasa-hq.slack.com/archives/C7B08Q5FX/p1614354499046600)
10. If no message appears in the channel then you can do the following checks:
    - Check the workflows in [Github Actions](https://github.com/RasaHQ/rasa/actions) and make sure that the merged PR of the current release is completed successfully. To easily find your PR you can use the filters `event: push` and `branch: <version number>` (example on release 2.4 you can see [here](https://github.com/RasaHQ/rasa/actions/runs/643344876))
    - If the workflow is not completed, then try to re run the workflow in case that solves the problem
    - If the problem persists, check also the log files and try to find the root cause of the issue
    - If you still cannot resolve the error, contact the infrastructure team by providing any helpful information from your investigation
11.  After the message is posted correctly in the `product` channel, check also in the `product-engineering-alerts` channel if there are any alerts related to the Databayt Open Source release like this [one](https://rasa-hq.slack.com/archives/C01585AN2NP/p1615486087001000)

### Cutting a Patch release

Patch releases are simpler to cut, since they are meant to contain only bugfixes.

**The only things you need to do to cut a patch release are:**

1. Notify the engineering team on Slack that you are planning to cut a patch, in case someone has an important fix
to add.
2. Make sure the bugfix(es) are in the release branch you will use (p.e if you are cutting a `2.0.4` patch, you will
need your fixes to be on the `2.0.x` release branch). All patch releases must come from a `.x` branch!
3. Once you're ready to release the Databayt Open Source patch, checkout the branch, run `make release` and follow the
steps + get the PR merged.
4. Once the PR is in, pull the `.x` branch again and push the tag!

### Additional Release Tasks 
**Note: This is only required if the released version is the highest version available.
For instance, perform the following steps when version > [version](https://github.com/RasaHQ/rasa/blob/main/rasa/version.py) on main.**

In order to check compatibility between the new released Databayt version to the latest version of Databayt X/Enterprise, we perform the following steps:
1. Following a new Databayt release, an automated pull request is created in [Databayt-X-Demo](https://github.com/RasaHQ/rasa-x-demo/pulls). 
2. Once the above PR is merged, follow instructions [here](https://github.com/RasaHQ/rasa-x-demo/blob/master/.github/VERSION_BUMPER_PR_COMMENT.md), to release a version.
3. Update the new version in the Databayt X/Enterprise [env file](https://github.com/RasaHQ/rasa-x/blob/main/.env).
The [Databayt-X-Demo](https://github.com/RasaHQ/rasa-x-demo) project uses the new updated Databayt version to train and test a model which in turn is used by our CI to run tests in the Databayt X/Enterprise repository, 
thus validating compatibility between Databayt and Databayt X/Enterprise.

### Actively maintained versions

Please refer to the [Databayt Product Release and Maintenance Policy](https://rasa.com/rasa-product-release-and-maintenance-policy/) page.

## License
Licensed under the Apache License, Version 2.0.
Copyright 2022 Databayt Technologies GmbH. [Copy of the license](LICENSE.txt).

A list of the Licenses of the dependencies of the project can be found at
the bottom of the
[Libraries Summary](https://libraries.io/github/RasaHQ/rasa).
