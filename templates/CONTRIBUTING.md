# Contributing to {display-name}

<!--
Hey there!
==========

Thanks for checking this out. If you find this helpful, please leave a star!
If you have any suggestions, feel free to open a pull request or an issue.

To make life easier, do a quick search-and-replace for:
{display-name}: The project's display name (ex. Angular)
{repo-name}: The name of the repo the project (ex. angular)
{github-username}: The username under which the repo is (ex. angular)
{email}: The email address where to reach you.
Keep a lookout for text in curly braces.
-->

<!--
Core concepts
=============

1. Be descriptive.
2. Make it easy for people to get relevant information
3. Show how to develop locally
-->

<!--
This file is not as annotated as usual; You can fix this with a PR. I think
this file is pretty self explanatory though.
-->

**✨👍First off, thanks for taking the time to contribute to {display-name}!👍✨**

These are a set of guidelines on how to contribute to {display-name}.
**They are mostly guidelines, not rules.** Use your best judgement, and feel free
to propose changes to this guide.

Before you contribute, **make sure to read the [Code of Conduct](./CODE_OF_CONDUCT).**

<details open="open">
  <summary>
    <h2 style="display: inline-block">Table of Contents</h2>
  </summary>
  <ol>
    <li><a href="#code-of-conduct">Code of Conduct</a></li>
    <li>
      <a href="#i-dont-want-to-read-this-whole-thing-i-just-have-a-question">
        I don't want to read this whole thing, I just have a question!!!
      </a>
    </li>
    <li>
      <a href="#how-can-i-contribute">How can I contribute?</a>
      <ul>
        <li><a href="#reporting-bugs">Reporting bugs</a></li>
        <li><a href="#suggesting-enhancements">Suggesting Enhancements</a></li>
        <li><a href="#your-first-code-contribution">Your First Code Contribution</a></li>
        <li><a href="#pull-requests">Pull requests</a></li>
      </ul>
    </li>
    <li>
      <a href="#styleguides">Styleguides</a>
      <ul>
        <li><a href="#commit-messages">Commit messages</a></li>
      </ul>
    </li>
  </ol>
</details>

<!--
Code of Conduct – first thing to show.
-->
## Code of Conduct

This project and everyone participating in it is governed by the
[{project-name} Code of Conduct][code-of-conduct]. By participating,
you are expected to uphold this code. Please report unacceptable behavior to <{email}>.

<!--
There are times when people have doubts about how things work and why they work
that way
-->
## I don't want to read this whole thing, I just have a question!!!

<!--
Add ways to ask questions here. There are many ways
(like a chat, email, dedicated message board, etc.), but one example is given here.
-->
To ask questions, open a [discussion][discussion].
Use the help category to ask questions. Make sure to search for existing
discussions before you do so.

<!--
If your project is really complex, add a "What should I know?" section here.
-->

<!--
How can I contribute?
=====================

1. By reporting a bug
2. By submitting an enhancement
3. By helping with the code
-->
## How can I contribute?

<!--
Tell them how they can report bugs
-->
### Reporting bugs

> **If the bug is a security vulnerability, do not open an issue for it!**
> **Send an email to <{email}>, and you will recieve instructions from there**
>
> Also, check out [The security guidelines](./SECURITY.md)

This section guides you through submitting a bug report for {display-name}.
Following these guidelines helps maintainers and the community understand
your report, reproduce the behavior, and find related reports.

Before writing a bug report, please check [this list](#before-submitting-a-bug-report)
as you might find out that you don't need to create one. When you are creating
a bug report, please [include as much information as possible](#how-do-i-submit-a-good-bug-report).
Fill out [the required template][new-issue], the information it asks
for helps us resolve issues faster.

#### Before Submitting A Bug Report

- First of all, **test with the latest update release** to see if the issue persists.
  Frequently, a bug report submitted for an older release is first suggested to
  test with the available latest update release or even an available latest beta release.
  <!--
  If you have a debugging guide, link to it here.
  -->
- **Make sure that all your own code is logical and proper**. Use your instincts.
  Maybe a proofread by someone else may help.
- **Perform a search on GitHub and Google** to see if this has happened before.
  If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues][issues]. Create an issue on the repository
and provide the following information by filling in the [template][new-issue].

**Explain the problem and include additional details to help maintainers reproduce the problem:**
- **Use a clear and descriptive title** for the issue to identify the problem. Title it `"[Bug]: Title here"`.
- **Describe the exact steps which reproduce the problem** in as many details as possible.
  For example, start by explaining how you loaded the project, which CDN you used,
  etc. When listing steps, don't just say what you did, but explain how you did it.
  For example, if you moved the cursor to the end of a line, explain if you used
  the mouse, or a keyboard shortcut, and if so which one?
- **Provide specific examples** to demonstrate the steps. Include links to files
  or GitHub projects, or copy/paste-able snippets, which you use in those examples.
  If you're providing snippets in the issue, use Markdown code blocks.
- **Describe the behavior** you observed after following the steps and point out
  **what exactly is the problem** with that behavior.
- **Explain which behavior you expected** to see instead and why.
- **Include screenshots and animated GIFs** which show you following the described
  steps and clearly demonstrate the problem. If you use the keyboard while following
  the steps, record the GIF with a keybinding visualizer like [Keycastr][keycastr].
  You can use [this tool][licecap] to record GIFs on macOS and Windows, and
  [this tool][silentcast] on Linux.
- If the problem wasn't triggered by a specific action,
  **describe what you were doing before the problem happened** and share more
  information using the guidelines below.

**Provide more context by answering these questions:**
- **Did the problem start happening recently** (e.g. after updating to a new
  version of {display-name}) or was this always a problem?
  - If the problem started happening recently, **can you reproduce the problem
    in an older version** of {display-name}? What's the most recent version
    in which the problem doesn't happen?
- **Can you reliably reproduce the issue?** If not, provide details about
  how often the problem happens** and under which conditions it normally happens.

Include details about your configuration and environment:

- **Which version** of {display-name} are you using?
  <!-- If your package is an npm package, add this line: -->
  <!-- You can get the exact version of {display-name} by looking at the package.json -->
- What's the **name and version of the OS** you're using?

## Suggesting enhancements

This section guides you through submitting an enhancement suggestion for {project-name},
including completely new features and minor improvements to existing functionality.
Following these guidelines helps maintainers and the community understand your
suggestion and find related suggestions.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion)
as you might find out that you don't need to create one. When you are creating
an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion).
Fill in [the template][new-issue], including the steps that you imagine
you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

<!-- URL to Github Release or npm package? -->
- **Check if you're using the latest version of {display-name}**
	and if you can get the desired behavior by changing {display-name}'s options/settings.
- **Check if there's already a plugin which provides that enhancement.**
- **Perform a search on GitHub and Google** to see if the enhancement has already
  been suggested. If it has, add a comment to the existing issue instead of
  opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues][issues]. Create an issue on that repository and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/paste-able snippets which you use in those examples, as [Markdown code blocks][md-code-block].
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of {display-name} which the suggestion is related to. If you use the keyboard while following the steps, record the GIF with a keybinding visualizer like [Keycastr][keycastr] **(There is also a quick hack for doing this in macos – Simply turn on Sticky keys)**. You can use [this tool][licecap] to record GIFs on macOS and Windows, and [this tool][silentcast] on Linux.
- **Explain why this enhancement would be useful** to most {display-name} users.
  <!-- and isn't something that can or should be implemented as a community package. -->
- **List some other projects** where this enhancement exists.
- **Specify which version** of {display-name} you are using, as there is the
  probability that this enhancement has already been implemented in a future version
  <!-- You can get the exact version of {display-name} by looking at the package.json -->

### Your first code contribution

Want to help, but not sure what to do? You can go through the [issues][issues],
or go to the [contributing page][contributing]

<!--
List out the names of labels which are suitable, ie. `help-wanted`, etc.
Here's an example:
-->

Or, you can look through these issues:
- [Help wanted](https://github.com/search?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted+user%3Agithub-username+sort%3Acomments-desc&type=issues)

The issue lists are sorted by total number of comments. While not perfect,
number of comments is a reasonable proxy for impact a given change will have.
### Local Development

If you see a bug in {display-name}, or just want to experiment with it, you can
get a local copy of the code and start playing with it.

To get a local copy, follow these steps:

1.  **Forking the [repo]**.

    You can follow the [GitHub help instructions to do so](https://help.github.com/articles/fork-a-repo/)
2.  **Cloning and setting up**

    Once you have a fork, you can clone it:
    ```console
    you@computer$ git clone https://github.com/your-username/{repo-name{.git
    ```

    Next, you can navigate to your clone:
    ```console
    you@computer$ cd where-you-cloned-{repo-name}
    ```

    <!--
    Fill in installation instructions here.
    Here's an example:
    -->
    And you can install dependencies by running `npm install`. Now, you are
    ready to start hacking with {display-name}

#### Running

<!--
Show how to run your program locally. Here's an example:
-->

You can start a dev server by running `npm run start`.
This will start a lightweight, hot reloading server. All changes
will be reflected automatically.

#### Building

<!--
Include this if there is a certain build step.

-->
To build the code, run `npm run build`. This will run {build-tool}.

#### Testing

Tests are located in the `/tests` folder. After writing your code, you can run tests
by running `npm run test`.

We use {test-framework} to write tests.

### Pull requests

If you have made any changes to the code and you want to add the changes to
{display-name}, you can open a PR.

You can follow the [GitHub pull request tutorial](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
If you don't know how to open a Pull Request or what a Pull Request is.

Before you open a Pull Request:
- Follow the [styleguides](#styleguides)
- Write tests
- Follow the instructions in the pull requests template
<!-- - After you open the Pull request, make sure all status checks are passing -->

## Styleguides

### Git commit messages

- Use the present tense ("Add thing" not "Added thing")
- Use the imperative mood ("Do this" not "Does this")
- Limit the first line to 72
<!-- - When only changing documentation, include [ci skip] in the commit title -->
- Consider starting your commit messages with an applicable [gitmoji](gitmoji.dev):

<!--
If you any styleguides, add it/link to it here
You can also say which linter, if any, is used to lint code.

You might want to add styleguides for
- programming languages,
- tests,
- documentation,
- etc.
-->

[discussions]: https://docs.github.com/en/discussions
[new-issue]: https://github.com/{github-username}/{repo-name}/issues/new/choose
[issues]: https://github.com/{github-username}/{repo-name}/issues
[contributing]: https://github.com/{github-username}/{repo-name}/contribute
[repo]: https://github.com/{github-username}/{repo-name}

[keycastr]: https://github.com/keycastr/keycastr
[licecap]: https://www.cockos.com/licecap/
[silentcast]: https://github.com/colinkeenan/silentcast
