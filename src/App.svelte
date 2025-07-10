<script>
	let name = '@significa';
	let beltColor = 'red';
	const handleClick = () => {
		beltColor = beltColor === 'red' ? 'blue' : 'red';
	};

	const handleInput = (e) => {
		beltColor = e.target.value;
	};
</script>

<main>
	<h1>Hello {name}!</h1>
	<p style="color:{beltColor}">{beltColor} belt!</p>
	<button on:click={handleClick}> update belt color</button>
	<!-- <input on:input={handleInput} type=text value={beltColor} /> -->
	<input bind:value={beltColor} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
