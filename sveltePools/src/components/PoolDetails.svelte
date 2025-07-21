<script>
	import { createEventDispatcher } from 'svelte';
	import Card from '../shared/Card.svelte';
	export let pool;

	const dispatch = createEventDispatcher();

	const handleVote = (option, id) => {
		dispatch('vote', { option, id });
	};

	//Reactive values
	$: totalVotes = pool.votesA + pool.votesB;
</script>

<Card>
	<div class="Poll">
		<h3>{pool.question}</h3>
		<p>Total Votes: {totalVotes}</p>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="answer" on:click={() => handleVote('a', pool.id)}>
			<div
				class="percent percent-a"
				style="width: {totalVotes
					? (pool.votesA / totalVotes) * 100 + '%'
					: '0%'}"
			></div>
			<span> {pool.answerA} ({pool.votesA})</span>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="answer" on:click={() => handleVote('b', pool.id)}>
			<div
				class="percent percent-b"
				style="width: {totalVotes
					? (pool.votesB / totalVotes) * 100 + '%'
					: '0%'}"
			></div>
			<span> {pool.answerB} ({pool.votesB})</span>
		</div>
	</div>
</Card>

<style>
	h3 {
		margin: 0 auto;
		color: #555;
	}

	p {
		margin-top: 6px;
		cursor: pointer;
		margin: 10px auto;
		position: relative;
	}
	.answer {
		background: #fafafa;
		cursor: pointer;
		margin: 10px auto;
		position: relative;
	}
	.answer:hover {
		opacity: 0.6;
	}

	span {
		padding: 10px 20px;
		display: inline-block;
	}
</style>
