<script>
	import App from '@douganderson444/web3-repl-deploy';

	let components = [
		{
			name: 'App',
			type: 'svx',
			source:
				`<scr` +
				`ipt>
	
		import { editable } from 'https://cdn.jsdelivr.net/gh/douganderson444/svelte-editable-action@latest/src/lib/editable.js'
		
		export let name = 'world';
</scr` +
				`ipt>

<h1 use:editable>Hello {name}!</h1>

<style>
	h1 {
		color: red;
	}
<\/style>
`
		}
	];
</script>

<main>
	<App {components} />
</main>
