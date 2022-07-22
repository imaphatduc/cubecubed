# Contribute to Cubecubed

If you find any of these section below hard to understand, feel free to start a conversation to Discussion GitHub section and I'll explain it for you.

Many thanks to everyone who was and is contributing to Cubecubed. 🥳🎉

### New Features

New features are the major priority of Cubecubed. If you have any ideas that Cubecubed has not applied, you can open an issue (with `Feature Request` template) or open a Pull Request. Make sure your code follows the rules in `Naming Conventions` section below.

### Documentation

Please don't open an issue to report anything relating to markdown files in this repository, but if possible, you can open a Pull Request with `Documentation` or `Markdown` template.

### Typos in Code

You can open an issue with `code typo` label for code typos.

## Contributing Code through Pull Requests

If you don't know where to start, these articles will help you.

-   [x] [How the animation engine of Cubecubed works?](https://dev.to/imaphatduc/how-the-animation-engine-of-cubecubed-works-4m06)

-   [x] [Cubecubed 💖 d3.js](https://dev.to/imaphatduc/cubecubed-d3js-64f)

The first sections will walk you through the basics, and the final one will list the rules to contribute to each specific parts of Cubecubed.

### Steps

1. Install NodeJS on your machine.

2. Fork this repo to your GitHub account, then clone it to your local machine.

3. Run `npm install` to install all necessary dependencies.

4. Make some changes in the code.

#### But wait, here are some important notes

-   Please read [`STRUCTURE.md`](STRUCTURE.md) carefully before making any changes in the code.

> Separate Tree View into sections based on class name.

> The two (\*\*)s indicates the `g_cubiconWrapper` and `def_cubiconBase` respectively.

> Mark each HTML element as (\*---) for every d3 selection included in a class.

You can see the file for clearer understanding.

-   If you create (a) new `Cubicon()` type(s): Before making a pull request, add the result HTML structure (after running your code) to the Tree View section in [`STRUCTURE.md`](STRUCTURE.md), then include the new `STRUCTURE.md` to your pull request.

##### Naming Conventions

-   Please avoid abbreviations for all names related to classes (class names, properties, parameters for constructor, etc.).

-   For naming rule of d3 selections, check out `d3 Selection Prefixes` part below.

###### d3 Selection Prefixes

Element that represents an `<svg>` tag:

> svg\_

Element that represents a `<g>` tag:

> g\_

Element that represents the SVG tag of a cubicon: (e.g. `<path/>`, `<circle/>`)

> def\_

#### Okay, we've read through the rules, let's continue our work!

5. Run `npm run dev` to open a live server.

6. See some nice math animations.

7. Time for npm package testing!

### Testing

8. Run `npm run build` in your terminal to bundle all our TypeScript files.

9. Run `npm link` to link the local repository to store it globally on your machine.

10. Make a new directory somewhere outside the local repo directory. Run `npm link cubecubed` to pull the global codes to the new directory.

11. Run `npx cubecubed` to initialize a scene (make sure you say 'yes' for all of the prompt options).

12. Run `npm run dev` again to test the npm package.

13. If everything worked fine, then you can say "boo-hoo" to the bugs (pun intended).

### Push the code to your fork

If you're not familiar with Git, watch this [quick](https://www.youtube.com/watch?v=hwP7WQkmECE) or [in-depth](https://www.youtube.com/watch?v=SWYqp7iY_Tc) video for some basic Git commands.

## Open a Pull Request

-   Choose your target template.

-   You're good to go!

And that's it. You are one of the contributors of Cubecubed!
