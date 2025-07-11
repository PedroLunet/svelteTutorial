<script>
	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();

	let name;
	let beltColor;
	let age;

	let skills = [];

	const handleSubmit = () => {
		const person = {
			name,
			beltColor,
			age,
			skills,
			id: Math.random(),
		};

		dispatch('addPerson', person);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" placeholder="name" bind:value={name} />
	<input type="number" placeholder="age" bind:value={age} />
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label> Skills </label>
	<input type="checkbox" bind:group={skills} value="fighting" /> fighting<br />
	<input type="checkbox" bind:group={skills} value="sneaking" /> sneaking<br />
	<input type="checkbox" bind:group={skills} value="running" /> running<br />
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label> Belt Color </label>
	<select bind:value={beltColor}>
		<option value="black">Black</option>
		<option value="red">Red</option>
		<option value="green">Green</option>
	</select>

	<button type="submit">Add Person</button>
</form>

<style>
</style>
