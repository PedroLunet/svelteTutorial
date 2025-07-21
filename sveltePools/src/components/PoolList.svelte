<script>
	export let pools = [];
</script>

<div class="pool-list">
	{#each pools as pool (pool.id)}
		<div>{pool.question}</div>
	{/each}
</div>

<style>
	.pool-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
</style>
