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
		},
		{
			name: 'Changable',
			type: 'svelte',
			source: code_1
		}
	];

	let repl;
	let compiled;
	let timeoutID;

	onMount(() => {
		repl.set({
			components
		});
	});

	function handleCompiled(e) {
		if (timeoutID) {
			clearTimeout(timeoutID); // cancel any exisitng waiting
		}
		// rate limit sending to IPFS so we don't overload the server with requests

		timeoutID = setTimeout(async () => {
			timeoutID = 0;
			// components is an array
			// compiled is a string...
			({ compiled, components } = e.detail);
		}, 5000);
	}
</script>

<div class="main">
	<div class="contain">
		<div class="top-half">
			{#if compiled && components}
				<IPFSSaver {repl} content={{ compiled, components }} />
			{/if}
		</div>
		<div class="bottom-half">
			<Repl bind:this={repl} on:compiled={handleCompiled} />
		</div>
	</div>
</div>

<style>
	.main {
		height: 100%;
		border: 0px solid rgb(245, 242, 242);
	}
	.top-half {
		min-height: min-content;
	}
	.bottom-half {
		font-family: monospace;
		flex: 1;
		display: flex;
		flex-direction: column;
		min-height: 200px;
		border: 0px solid rgb(235, 235, 235);
	}
	.contain {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		/* height: 96vh; */
		height: 100%;
	}
</style>
