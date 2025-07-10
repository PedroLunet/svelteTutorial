<script>
	let people = [
		{ name: 'yoshi', beltColor: 'black', age: 21, id: 1 },
		{ name: 'Mario', beltColor: 'red', age: 22, id: 2 },
		{ name: 'Luigi', beltColor: 'green', age: 23, id: 3 },
	];
	const handleDelete = (id) => {
		people = people.filter((person) => person.id !== id);
	};

	let num = 25;
</script>

{#if num > 20}
	<p>Greater than 20.</p>
{:else if num > 5}
	<p>Greater than 5 but less than or equal to 20.</p>
{:else if num > 0}
	<p>Greater than 0 but less than or equal to 5.</p>
{:else}
	<p>Less than or equal to 0.</p>
{/if}

<main>
	{#each people as person (person.id)}
		<div>
			<h4>{person.name}</h4>
			{#if person.beltColor === 'black'}
				<p style="color: black;">{person.beltColor} belt</p>
			{:else if person.beltColor === 'red'}
				<p style="color: red;">{person.beltColor} belt</p>
			{:else}
				<p style="color: green;">{person.beltColor} belt</p>
			{/if}
			<p>{person.age} years old, {person.beltColor} belt.</p>
			<button on:click={() => handleDelete(person.id)}>Delete</button>
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
