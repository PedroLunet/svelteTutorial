<script>
	export let showModal = false;
	export let isPromo = false;
	export let message = 'This is a modal message';
</script>

{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="backdrop" class:promo={isPromo} on:click>
		<div class="modal">
			<p>{message}</p>
		</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.55);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal {
		background-color: white;
		padding: 2rem;
		border-radius: 14px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.promo {
		background-color: crimson;
		color: orangered;
	}
</style>
