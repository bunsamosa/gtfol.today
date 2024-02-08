<script setup lang="ts">
	import { onMount } from 'svelte';
	import { fetchTweets } from '$lib/scripts/home/TweetClient';
	import CardSkeleton from '$lib/components/common/CardSkeleton.svelte';
	import InfiniteScroll from '$lib/components/common/InfiniteScroll.svelte';
	import Tweet from '$lib/components/home/Tweet.svelte';
	export let listType = 'hour';

	// define reactive variables
	let tweetData: Array<any> = [];
	let responseData: Array<any> = [];
	let offset = 0;
	let scrollElement: HTMLElement;

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
	<ul class="h-screen overflow-y-scroll hide-scrollbar" bind:this={scrollElement}>
		{#if tweetData.length === 0}
			<div class="text-center font-semibold text-xl">
				There were no tweets in the time frame
			</div>
		{:else}
			{#each tweetData as row (row.tweet_id)}
				<li id={row.tweet_id}>
					<Tweet tweetID={row.tweet_id} />
				</li>
			{/each}
			<InfiniteScroll
				hasMore={responseData.length > 0}
				threshold={500}
				elementScroll={scrollElement}
				on:loadMore={() => {
					offset += responseData.length;
					fetchData();
				}}
			/>
		{/if}
	</ul>
</div>
