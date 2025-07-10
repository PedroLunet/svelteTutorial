<script>
	let people = [
		{ name: 'yoshi', beltColor: 'black', age: 21, id: 1 },
		{ name: 'Mario', beltColor: 'red', age: 22, id: 2 },
		{ name: 'Luigi', beltColor: 'green', age: 23, id: 3 },
	];
</script>

<main>
	{#each people as person (person.id)}
		<div>
			<h4>{person.name}</h4>
			<p>{person.age} years old, {person.beltColor} belt.</p>
		</div>
	{:else}
		<p>No people to show.</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
