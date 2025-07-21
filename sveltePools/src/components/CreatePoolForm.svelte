<script>
	let fields = { question: '', answerA: '', answerB: '' };

	const handleSubmit = () => {
		console.log('Form submitted:', fields);
		fields = { question: '', answerA: '', answerB: '' };
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="form-field">
		<label for="question">Pool Question:</label>
		<input type="text" id="question" bind:value={fields.question} />
	</div>
	<div class="form-field">
		<label for="answer-a">Pool Answer A:</label>
		<input type="text" id="answer-a" bind:value={fields.answerA} />
	</div>
	<div class="form-field">
		<label for="answer-b">Pool Answer B:</label>
		<input type="text" id="answer-b" bind:value={fields.answerB} />
	</div>
	<button>Create Pool</button>
</form>

<style>
	form {
		width: 400px;
		margin: 0 auto;
		text-align: center;
	}
	.form-field {
		margin: 18px auto;
	}
	input {
		width: 100%;
		border-radius: 6px;
	}
	label {
		margin: 10px auto;
		text-align: left;
		color: orangered;
		font-weight: bold;
	}
	button {
		background-color: orangered;
		color: white;
		border: none;
		padding: 10px 20px;
		border-radius: 6px;
		cursor: pointer;
	}
</style>
