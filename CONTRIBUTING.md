# Contribute to Cubecubed

If you find any of these section below hard to understand, feel free to start a conversation to Discussion GitHub section and I'll explain it for you.

Many thanks to everyone who was and is contributing to Cubecubed. 🥳🎉

### New Features

New features are the major priority of Cubecubed. If you have any ideas that Cubecubed has not applied, you can open an issue (with `Feature Request` template) or open a Pull Request. Make sure your code follows the rules in `Naming Conventions` section below.

### Documentation

Documentation is stale, at least for now. Please don't open an issue to report anything relating to markdown files in this repository, but if possible, you can open a Pull Request with `Documentation` or `Markdown` template.

### Typos in Code

You can open an issue with `code typo` label for code typos.

## Contributing Code through Pull Requests

### Steps

1. Install NodeJS on your machine.

2. Make a fork (aka copy) of Cubecubed to your GitHub account, then clone it to your computer.

3. Run `npm install` to install all necessary dependencies.

4. Make some changes in the code.

#### But wait, here are some important notes

-   Please read [`STRUCTURE.md`](STRUCTURE.md) carefully before making any changes in the code.

-   If you create (a) new `Cubicon()` type(s): Before making a pull request, add the result HTML structure (after running your code) to both Tree View and Plain HTML View in [`STRUCTURE.md`](STRUCTURE.md), then include the new [`STRUCTURE.md`](STRUCTURE.md) to your pull request.

##### Naming Conventions

-   Please avoid abbreviations for all names related to classes (class names, properties, parameters for constructor).

-   For naming rule of d3 selections, check out `d3 Selection Prefixes` part below.

###### d3 Selection Prefixes

> svg\_

Element that represents an `<svg>` tag.

> g\_

Element that represents a `<g>` tag.

> def\_

Element that represents the SVG tag of a cubicon. (e.g. `<path/>`, `<circle/>`)

#### Okay, we've read through the rules, let's continue our work!

5. Run `npm run dev` to open a live server.

6. See some nice math animations.

7. Time for npm package testing!

### Testing

8. Run `npm run build` in your terminal to bundle all our TypeScript files.

9. Run `npm link` to link the local repository to store it globally on your machine.

10. Make a new directory somewhere outside the local repo directory. Run `npm link cubecubed` to pull the global codes to the new directory.

11. Run `npx cubecubed` to initialize a scene (make sure you say 'yes' for all of the options).

12. Run `npm run dev` again to test the npm package.

13. If everything worked fine, then you can say "boo-hoo" to the bugs (pun intended).

### Push the code to your fork

If you're not familiar with Git, watch this [quick](https://www.youtube.com/watch?v=hwP7WQkmECE) or [in-depth](https://www.youtube.com/watch?v=SWYqp7iY_Tc) video for some basic Git commands.

## Open a Pull Request

-   Choose your target template...

-   ...and you're good to go!

And that's it. You are one of the contributors of Cubecubed!
