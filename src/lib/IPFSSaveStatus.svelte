<script>
	import { fly } from 'svelte/transition';
	import { linear } from 'svelte/easing';

	export let saveResult;
	export let description = '';
	export let height = '70';
	let flyIn = { delay: 100, duration: 750, x: 0, y: -height, opacity: 0.5, easing: linear };
	let flyOut = { delay: 100, duration: 750, x: 0, y: height, opacity: 0.5, easing: linear };

	const cfUrl = (cid) => `https://${cid?.toV1().toString()}.ipfs.cf-ipfs.com/`;
	const dwebUrl = (cid) => `http://${cid?.toV1().toString()}.ipfs.dweb.link/`;
	const dwebDag = (cid) => `https://dweb.link/api/v0/dag/get?arg=${cid?.toV1().toString()}`;
</script>

{#await saveResult}
	<!-- promise is pending -->
	<p in:fly={flyIn} out:fly={flyOut}>Loading IPFS...</p>
{:then result}
	<!-- promise was fulfilled -->
	<p in:fly={flyIn} out:fly={flyOut}>
		✔️ Deployed {description} on <a href={dwebUrl(result)} target="_blank">DWeb</a> &
		<a href={dwebDag(result)} target="_blank">DAGWeb </a>
		(<a href="https://ipfs.github.io/public-gateway-checker/" target="_blank">Gateway?</a>)
	</p>
{:catch error}
	<!-- promise was rejected -->
	<p in:fly={flyIn} out:fly={flyOut}>Something went wrong: {error.message}</p>
{/await}
