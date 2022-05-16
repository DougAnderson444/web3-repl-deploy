<script>
	import Repl from '@sveltejs/repl';
	import { onMount } from 'svelte';
	import IPFSSaver from './IPFSSaver.svelte';
	import { code_0, code_1, code_2, code_3, code_4 } from './_source';

	// set default, but allow prop to be set too
	export let components = [
		{
			name: 'App',
			type: 'svx',
			source: code_0
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
