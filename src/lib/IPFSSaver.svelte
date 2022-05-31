<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { linear } from 'svelte/easing';

	export let content;
	export let path;

	let height = '70';
	let flyIn = { delay: 100, duration: 750, x: 0, y: -height, opacity: 0.5, easing: linear };
	let flyOut = { delay: 100, duration: 750, x: 0, y: height, opacity: 0.5, easing: linear };
	let saveResult;
	let saveContent;
	let ipfsNode;

	const cfUrl = (cid) => `https://${cid?.toV1().toString()}.ipfs.cf-ipfs.com/`;
	const dwebUrl = (cid) => `http://${cid?.toV1().toString()}.ipfs.dweb.link/`;

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

		async function save(objectToSave) {
			return await ipfsNode.dag.put(objectToSave, { pin: true });
		}

		async function add(content) {
			return await ipfsNode.add(content, {
				pin: true,
				wrapWithDirectory: true
			});
		}

		saveContent = async () => {
			// console.log('content changed');
			saveResult = add({
				path: path || 'index.html',
				content: content
			});
			await saveResult;
			// prefetch
			// fetch(cfUrl(saveResult.cid));
			// fetch(dwebUrl(saveResult.cid));
			// rootCID = saveResult.cid.toV1().toString();
		};
	});

	$: content && saveContent && saveContent();
</script>

<div class="inner" style:height="{height}px" style="--height: {height}px">
	{#if saveResult}
		{#await saveResult}
			<!-- promise is pending -->
			<p in:fly={flyIn} out:fly={flyOut} style:height="{height}px">Loading IPFS...</p>
		{:then result}
			<!-- promise was fulfilled -->
			<p in:fly={flyIn} out:fly={flyOut} style:height="{height}px">
				✔️ <a href={cfUrl(result.cid)} target="_blank"
					>CloudFlare Gateway {result.cid.toV1().toString()}</a
				><br />
				<!-- <a href="https://dweb.link/api/v0/dag/get?arg={rootCID}"
						target="_blank" >
						{rootCID}</a> -->
				✔️
				<a href={dwebUrl(result.cid)} target="_blank">
					DWeb.Link (Backup) {result.cid.toV1().toString()}
				</a>
				(Public
				<a href="https://ipfs.github.io/public-gateway-checker/" target="_blank">Gateway</a>)
			</p>
		{:catch error}
			<!-- promise was rejected -->
			<p in:fly={flyIn} out:fly={flyOut}>Something went wrong: {error.message}</p>
		{/await}
	{/if}
</div>

<style>
	.inner {
		margin: 1em;
		overflow: hidden;
		max-height: var(--height);
	}
</style>
