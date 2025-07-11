<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let items = [];
	export let activeItem = '';
</script>

<div class="tabs">
	<ul>
		{#each items as item}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li on:click={() => dispatch('tabChange', item)}>
				<div class:active={item === activeItem}>{item}</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.tabs {
		margin-bottom: 40px;
	}
	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	li {
		margin: 0 16px;
		font-size: 18px;
		color: #555;
		cursor: pointer;
	}

	.active {
		color: orangered;
		border-bottom: 2px solid orangered;
		padding-bottom: 8px;
	}
</style>
