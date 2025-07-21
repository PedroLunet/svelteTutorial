<script>
	import { fade, slide, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import PoolStore from '../stores/PoolStore.js';
	import PoolDetails from './PoolDetails.svelte';
</script>

<div class="pool-list">
	{#each $PoolStore as pool (pool.id)}
		<div in:fade out:scale|local animate:flip={{ duration: 500 }}>
			<PoolDetails {pool} />
		</div>
	{/each}
</div>

<style>
	.pool-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
</style>
