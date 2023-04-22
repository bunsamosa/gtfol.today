<script>
	import LazyLoad from '@dimfeld/svelte-lazyload';
	export let tweetID = '';
</script>

<svelte:head>
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<LazyLoad>
	<div class="flex justify-center">
		<blockquote class="twitter-tweet" data-theme="dark">
			<a class="twitter-tweet" href={`https://twitter.com/x/status/${tweetID}`}>Loading Tweet...</a>
		</blockquote>
	</div>
</LazyLoad>
