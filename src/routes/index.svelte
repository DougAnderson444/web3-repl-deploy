<script>
	import App from '@douganderson444/web3-repl-deploy';
	import { code_0, code_1 } from '$lib/_source';

	import { onMount } from 'svelte';

	let components;
	let mounted;

	onMount(() => {
		mounted = true;
		// get draft cache, if any
		const cache = localStorage.getItem('cache');

		if (cache) {
			// if cache, load it
			components = JSON.parse(cache);
		} else {
			// otherwise, set default
			components = [
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
		}
	});

	// cache local drafts
	$: if (mounted && components && localStorage) {
		localStorage?.setItem('cache', JSON.stringify(components));
	}
</script>

{#if components}
	<App bind:components />
{/if}
