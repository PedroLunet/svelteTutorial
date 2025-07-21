<script>
	import Button from '../shared/Button.svelte';
	let fields = { question: '', answerA: '', answerB: '' };
	let errors = { question: '', answerA: '', answerB: '' };
	let isValid = false;

	const handleSubmit = () => {
		isValid = true;
		if (fields.question.trim().length < 5) {
			isValid = false;
			errors.question = 'Question must be at least 5 characters long';
		} else {
			errors.question = '';
		}

		if (fields.answerA.trim().length < 1) {
			isValid = false;
			errors.answerA = 'Answer A cannot be empty';
		} else {
			errors.answerA = '';
		}
		if (fields.answerB.trim().length < 1) {
			isValid = false;
			errors.answerB = 'Answer B cannot be empty';
		} else {
			errors.answerB = '';
		}

		if (isValid) {
			console.log('Form submitted:', fields);
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="form-field">
		<label for="question">Pool Question:</label>
		<input type="text" id="question" bind:value={fields.question} />
		<div class="error">{errors.question}</div>
	</div>
	<div class="form-field">
		<label for="answer-a">Pool Answer A:</label>
		<input type="text" id="answer-a" bind:value={fields.answerA} />
		<div class="error">{errors.answerA}</div>
	</div>
	<div class="form-field">
		<label for="answer-b">Pool Answer B:</label>
		<input type="text" id="answer-b" bind:value={fields.answerB} />
		<div class="error">{errors.answerB}</div>
	</div>
	<Button flat type="secondary">Create Pool</Button>
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
	.error {
		color: red;
		font-weight: bold;
		font-size: 0.8em;
		margin-top: 4px;
	}
</style>
