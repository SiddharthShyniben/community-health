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
        <!-- <li><a href="#javascript-styleguide">Javascript Styleguide</a></li> -->
      </ul>
    </li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
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
- **Check if you're using the latest version of project_title**
	and if you can get the desired behavior by changing project_title's options/settings.
- **Check if there's already a plugin which provides that enhancement.**
- **Perform a search on GitHub and Google** to see if the enhancement has already
  been suggested. If it has, add a comment to the existing issue instead of
	opening a new one.

[discussions]: https://docs.github.com/en/discussions
[new-issue]: https://github.com/{github-username}/{repo-name}/issues/new/choose

[keycastr]: https://github.com/keycastr/keycastr
[licecap]: https://www.cockos.com/licecap/
[silentcast]: https://github.com/colinkeenan/silentcast
