<script setup lang="ts">
	import { onMount } from 'svelte';
	import { fetchProjects } from '$lib/scripts/leaderboard/LeaderboardClient';
	import InfiniteScroll from '$lib/components/common/InfiniteScroll.svelte';

	import ProjectCard from '$lib/components/leaderboard/ProjectCard.svelte';

	// define reactive variables
	let projectData: Array<any> = [];
	let responseData: Array<any> = [];
	let offset = 0;

	// function to fetch data
	async function fetchData() {
		console.log('Fetching projects offset: ', offset);
		responseData = await fetchProjects(offset);
		console.log('Response length: ', responseData.length);
	}

	// update projects list whenever new data is fetched
	$: projectData = [...projectData, ...responseData];

	// load first batch onMount
	onMount(() => {
		fetchData();
	});
</script>

<ul class="flex flex-row flex-wrap justify-center overflow-y-scroll hide-scrollbar">
	{#if projectData.length === 0}
		<div class="placeholder" />
	{:else}
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
	{/if}
</ul>
