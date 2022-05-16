<script>
	import App from '@douganderson444/web3-repl-deploy';
	import { code_0 } from '$lib/_source';

	let components = [
		{
			name: 'App',
			type: 'svx',
			source: code_0
		}
	];
</script>

<main>
	<App {components} />
</main>
