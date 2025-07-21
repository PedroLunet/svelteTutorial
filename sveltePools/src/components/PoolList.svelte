<script>
	import PoolStore from '../stores/PoolStore.js';
	import PoolDetails from './PoolDetails.svelte';
	export let pools = [];

	PoolStore.subscribe((data) => {
		pools = data;
	});
</script>

<div class="pool-list">
	{#each pools as pool (pool.id)}
		<div><PoolDetails {pool} on:vote /></div>
	{/each}
</div>

<style>
	.pool-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
</style>
