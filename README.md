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

## Changelog from the standard [Svelte REPL](https://github.com/DougAnderson444/svelte-sites):

[Fork Changelog](https://github.com/DougAnderson444/svelte-sites/tree/master/packages/repl)

- added mdsvex
- added .svx extension for MDSVex files
- added ayu-dark css theme
- build the workers as es modules (vite default is iife)
- tweaked the file extension types
- emit 'compiled' event from src/lib/index.svelte with compiled/bundled code for consumption by another component
- also emit components from <Repl on:compiled={(e)=> ({compiled, components} = e.detail)} />
- added github format markdown (gfm) for .svx and css file for codemirror

## Dev Notes

Using the Svelte REPL as a component is a bit tricky, since it has a dependency on [svelte-sites workspace](https://github.com/sveltejs/sites/blob/828d5284dc7ae651ebe496b15adcca8876efe69d/packages/repl/package.json#L27). So I forked, clone, and locally edited to work around this issue and bundled it into this package.

To reproduce this yourself, you should clone [this fork](https://github.com/DougAnderson444/svelte-sites/tree/master/packages/repl), `npm run package`, then `npm run build` locally too.

### Build Svelte-sites/Repl

To edit the Repl code, clone then open ([`svelte-sites`](https://github.com/DougAnderson444/svelte-sites)) locally, edit, then run:

```cli
// svelte-sites/packages/repl/
npm run package
```
