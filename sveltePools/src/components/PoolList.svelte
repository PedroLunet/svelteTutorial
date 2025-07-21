<script>
	import { onDestroy } from 'svelte';
	import PoolStore from '../stores/PoolStore.js';
	import PoolDetails from './PoolDetails.svelte';
</script>

<div class="pool-list">
	{#each $PoolStore as pool (pool.id)}
		<div><PoolDetails {pool} /></div>
	{/each}
</div>

<style>
	.pool-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
</style>
