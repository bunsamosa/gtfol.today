<script setup lang="ts">
	import { onMount } from 'svelte';
	import { fetchTweets } from '$lib/AppwriteClient';
	import CardSkeleton from '$lib/components/CardSkeleton.svelte';
	import InfiniteScroll from '$lib/components/InfiniteScroll.svelte';
	import Tweet from '$lib/components/Tweet.svelte';
	export let listType = 'hour';

	// define reactive variables
	let tweetData: Array<any> = [];
	let responseData: Array<any> = [];
	let offset = 0;

	// function to fetch data
	async function fetchData() {
		console.log('Fetching data for list type: ', listType, ' and offset: ', offset);
		responseData = await fetchTweets(listType, offset);
		console.log('Response length: ', responseData.length);
	}

	// update tweet list whenever new data is fetched
	$: tweetData = [...tweetData, ...responseData];

	// load first batch onMount
	onMount(() => {
		fetchData();
	});
</script>

<div>
	<ul class="h-screen overflow-y-scroll hide-scrollbar">
		{#if tweetData.length === 0}
			<CardSkeleton />
		{:else}
			{#each tweetData as row}
				<li id={row.$id}>
					<Tweet tweetID={row.$id} />
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
</div>
