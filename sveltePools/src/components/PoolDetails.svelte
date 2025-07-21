<script>
	export let pool;

	//Reactive values
	$: totalVotes = pool.votesA + pool.votesB;
</script>

<div class="Poll">
	<h3>{pool.question}</h3>
	<p>Total Votes: {totalVotes}</p>
	<div class="answer">
		<div class="percent percent-a"></div>
		<span> {pool.answerA} ({pool.votesA})</span>
	</div>
	<div class="answer">
		<div class="percent percent-b"></div>
		<span> {pool.answerB} ({pool.votesB})</span>
	</div>
</div>

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
