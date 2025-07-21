<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import PoolList from './components/PoolList.svelte';
	import CreatePoolForm from './components/CreatePoolForm.svelte';
	import Tabs from './shared/Tabs.svelte';

	//tabs
	let items = ['Current Pools', 'Add New Pool'];
	let activeItem = 'Current Pools';
	const tabChange = (e) => {
		activeItem = e.detail;
	};

	const handlePoolCreated = (e) => {
		const newPool = e.detail;
		pools = [newPool, ...pools];
		activeItem = 'Current Pools';
	};

	let pools = [
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
	];

	const handleVote = (e) => {
		const { option, id } = e.detail;

		let copiedPools = [...pools];
		let upvotedPool = copiedPools.find((p) => p.id == id);

		if (option === 'a') {
			upvotedPool.votesA += 1;
		} else if (option === 'b') {
			upvotedPool.votesB += 1;
		}
		pools = copiedPools;
	};
</script>

<Header />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === 'Current Pools'}
		<PoolList {pools} on:vote={handleVote} />
	{:else if activeItem === 'Add New Pool'}
		<CreatePoolForm on:poolCreated={handlePoolCreated} />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
