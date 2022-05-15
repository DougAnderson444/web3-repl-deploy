<script>
	import Repl from '@sveltejs/repl';
	import { onMount } from 'svelte';
	import IPFSSaver from './IPFSSaver.svelte';

	// set default, but allow prop to be set too
	export let components = [
		{
			name: 'App',
			type: 'svx',
			source:
				`<scr` +
				`ipt>
	let name = 'world';
</scr` +
				`ipt>

<h1>Hello {name}!</h1>

<style>
	h1 {
		color: red;
	}
<\/style>
`
		}
	];

	let repl;
	let code;

	onMount(() => {
		repl.set({
			components
		});
	});

	function handleBundled(e) {
		code = e.detail;
	}
</script>

<main>
	{#if code}
		<IPFSSaver content={code} />
	{/if}
	<Repl bind:this={repl} showAst on:bundle={handleBundled} />
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
	main {
		height: 90vh;
		font-family: monospace;
	}
</style>
