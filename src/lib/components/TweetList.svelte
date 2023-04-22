<script setup lang="ts">
	import { fetchTweets } from '$lib/AppwriteClient';
	import CardSkeleton from './CardSkeleton.svelte';

	import Tweet from '$lib/components/Tweet.svelte';
	export let listType = 'hour';
</script>

<div class="max-h-full">
	{#await fetchTweets(listType)}
		<CardSkeleton />
	{:then data}
		{#each data as row}
			<Tweet tweetID={row.$id} />
		{/each}
	{/await}
</div>
