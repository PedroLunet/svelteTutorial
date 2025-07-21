import { writable } from 'svelte/store';

const PoolStore = writable([
	{
		question: 'Is Svelte the best framework?',
		answerA: 'Yes',
		answerB: 'No',
		votesA: 10,
		votesB: 5,
		id: 1,
	},
	{
		question: 'Should I learn Svelte?',
		answerA: 'Absolutely',
		answerB: 'Maybe',
		votesA: 8,
		votesB: 3,
		id: 2,
	},
]);

export default PoolStore;
