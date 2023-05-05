<script setup lang="ts">
	import { onMount } from 'svelte';
	import { fetchProjects } from '$lib/scripts/leaderboard/LeaderboardClient';
	import InfiniteScroll from '$lib/components/common/InfiniteScroll.svelte';
	import ProjectCard from '$lib/components/leaderboard/ProjectCard.svelte';

	// props
	export let house: string = 'all';

	// define reactive variables
	let projectData: Array<any> = [];
	let responseData: Array<any> = [];
	let offset = 0;
	let searchQuery = '';

	// function to fetch data
	async function fetchData() {
		console.log('Fetching projects offset: ', offset);
		responseData = await fetchProjects(house, '', offset);
		console.log('Response length: ', responseData.length);
		projectData = [...projectData, ...responseData];
	}

	// load first batch onMount
	onMount(() => {
		fetchData();
	});

	// search function
	async function search() {
		offset = 0;
		responseData = await fetchProjects(house, searchQuery, offset);
		projectData = [...responseData];
	}
</script>

<div class="flex m-2">
	<input
		class="input m-auto w-1/2"
		type="search"
		name="search"
		bind:value={searchQuery}
		on:input={search}
		placeholder="Type here to search ..."
	/>
</div>

<ul class="flex flex-row flex-wrap justify-center overflow-y-scroll hide-scrollbar">
	{#each projectData as row (row.$id)}
		<li id={row.$id}>
			<ProjectCard project={row} />
		</li>
	{/each}
	<InfiniteScroll
		hasMore={responseData.length > 0}
		threshold={500}
		on:loadMore={() => {
			offset += responseData.length;
			fetchData();
		}}
	/>
</ul>
