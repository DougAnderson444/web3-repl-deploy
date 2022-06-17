<script>
	import '../app.css';
</script>

<main>
	<slot />

	<footer>
		<p>visit <a href="https://peerpiper.io">PeerPiper.io</a> to learn more about PeerPiper</p>
	</footer>
</main>

<style>
	:root {
		--back: #ffffff;
		--back-light: #f6fafd;
		--back-api: #e5eef5;
		--prime: #ff3e00;
		--second: #676778;
		--flash: #40b3ff;
		--highlight: #ffff82;
		--heading: #222;
		--text: #444;
		--second-text: #7b7766;
		--sidebar-text: rgba(255, 255, 255, 0.9);
		--border-w: 0.3rem; /* border-width  */
		--border-r: 0.4rem; /* border-radius */
	}
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
