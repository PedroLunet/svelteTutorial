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
		activeItem = 'Current Pools';
	};
</script>

<Header />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === 'Current Pools'}
		<PoolList />
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
