# Supersized Svelte REPL

The svelte [REPL](https://svelte.dev/repl) is really cool, and the [MDSVEX](https://mdsvex.com/playground) repl is really cool, and saving mini apps to web3 is really cool, but there is nowhere online where you can do all this stuff in one place -- until now!

Let's make it easier to make and deploy web3 components, mini-apps, and sites to IPFS and Arweave.

- [x] Regular Svelte [REPL](https://svelte.dev/repl)
- [x] [MDSVEX](https://mdsvex.com/playground)

Save/Ship/Deploy to:

- [x] [IPFS](https://ipfs.io/)
- [ ] [Arweave](https://www.arweave.org/)

Enjoy!

TODO:

- [ ] Load from templates / community

## Changelog from the standard Svelte REPL:

- added mdsvex
- added .svx extension for MDSVex files
- added ayu-dark css theme
- build the workers as es modules (vite default is iife)
- tweaked the file types

## Dev Notes

Using the Svelte REPL as a component is a bit tricky, since it has a dependency on svelte-sites workspace. So I forked, clone, and locally edited to work around this issue and bundled it into this package.
