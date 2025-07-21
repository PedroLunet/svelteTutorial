<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import CreatePoolForm from './components/CreatePoolForm.svelte';
	import Tabs from './shared/Tabs.svelte';

	//tabs
	let items = ['Current Pools', 'Add New Pool'];
	let activeItem = 'Current Pools';
	const tabChange = (e) => {
		activeItem = e.detail;
	};
</script>

<Header />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === 'Current Pools'}
		<!-- Current Pools content goes here -->
		<p>Displaying current pools...</p>
	{:else if activeItem === 'Add New Pool'}
		<!-- Add New Pool content goes here -->
		<CreatePoolForm />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
