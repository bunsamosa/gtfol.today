<script>
	import { onMount } from 'svelte';
	import CardSkeleton from '$lib/components/common/CardSkeleton.svelte';
	export let tweetID = '';

	// create tweet using window.twttr.widgets.createTweet
	let loading = true;
	onMount(async () => {
		twttr.widgets
			.createTweet(tweetID, document.getElementById(tweetID), {
				theme: 'dark'
			})
			.then(() => {
				loading = false;
			});
	});
</script>

<div>
	{#if loading}
		<CardSkeleton />
	{/if}
	<div id={tweetID} class="flex justify-center" />
</div>
