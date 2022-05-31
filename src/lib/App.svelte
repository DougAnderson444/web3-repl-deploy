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
	let compiled;

	onMount(() => {
		repl.set({
			components
		});
	});

	function handleCompiled(e) {
		({ compiled, components } = e.detail);
	}
</script>

<main>
	{#if components}Components are saved here:
		<IPFSSaver {repl} content={JSON.stringify(components)} />
	{/if}

	{#if compiled}Compiled code is saved here:
		<IPFSSaver {repl} content={compiled} />
	{/if}
	<Repl bind:this={repl} showAst on:compiled={handleCompiled} />
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	main {
		height: 80vh;
		font-family: monospace;
	}
</style>
