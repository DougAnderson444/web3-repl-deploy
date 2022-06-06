<script>
	import { onMount } from 'svelte';
	import { UnixFS } from 'ipfs-unixfs';
	import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string';
	import IPFSSaveStatus from './IPFSSaveStatus.svelte';

	export let content = {};
	export let path = 'index.html';

	export let height = '50';

	let compiled, components;
	let saveContent;
	let ipfsNode;

	onMount(async () => {
		// In Svelte, a hot module refresh can cause lockfile problems
		// so we assign the ipfs node to globalThis to avoid lock file issues
		if (!globalThis.ipfsNode) {
			// no ipfs saved to globalThis, so load it up
			console.log('No ipfs global');

			const IPFSmodule = await import('../modules/ipfs-core/ipfs-core.js');
			const IPFS = IPFSmodule.default;
			ipfsNode = await IPFS.create();
			globalThis.ipfsNode = ipfsNode;
		} else {
			console.log('Wait for ipfs global');
			ipfsNode = globalThis.ipfsNode;
		}
		console.log('ipfs global loaded', { ipfsNode });

		async function save(stringToSave) {
			// if you want dag.put() === ipfs.add(), it needs to be dag-pb
			const file = new UnixFS({
				type: 'file',
				data: uint8ArrayFromString(stringToSave) // new Uint8Array(0) //
			});

			const pbNode = {
				Data: file.marshal(),
				Links: []
			};

			return await ipfsNode.dag.put(pbNode, {
				storeCodec: 'dag-pb',
				pin: true
			});
		}

		async function add(content) {
			return await ipfsNode.add(content, {
				pin: true,
				wrapWithDirectory: true
			});
		}

		saveContent = async () => {
			compiled = save(content.compiled); // string // await add({ path, content: content.compiled });
			components = save(JSON.stringify(content.components)); // array // await add({ path, content: content.components }); //
		};

		return () => {
			console.log('the ipfs node is being stopped');
			ipfsNode.stop();
			globalThis.ipfsNode = null;
		};
	});

	$: content && saveContent && saveContent();
</script>

<div class="inner" style:height="{height * 2}px">
	{#if !ipfsNode}
		Loading IPFS, please wait...
	{/if}
	{#if compiled}
		<IPFSSaveStatus saveResult={compiled} {height} description={'Compiled Mini-App'} />
	{/if}
	{#if components}<IPFSSaveStatus
			saveResult={components}
			{height}
			description={'Editable Components'}
		/>
	{/if}
</div>

<style>
	.inner {
		overflow: hidden;
		max-height: var(--height);
	}
</style>
