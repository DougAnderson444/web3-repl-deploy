<script>
	import '../app.css';
	import '@sveltejs/site-kit/base.css';
	import '@sveltejs/site-kit/code.css';
</script>

<main>
	<slot />

	<footer>
		<p>visit <a href="https://peerpiper.io">PeerPiper.io</a> to learn more about PeerPiper</p>
	</footer>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		max-width: 1824px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 8px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 8px 0;
		}
	}
</style>
