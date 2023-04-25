<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script setup lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import TweetList from '$lib/components/TweetList.svelte';
	import TweetStats from '$lib/components/TweetStats.svelte';
	import LazyLoad from '@dimfeld/svelte-lazyload';
	// import { _twitterWidgetsLoader } from '$lib/TwitterWidget';
	// 	_twitterWidgetsLoader.load();
	let tabSet: number = 0;
</script>

<!-- Content for large screen only -->
<div class="hidden lg:block">
	<div class="flex h-screen">
		<div class="w-3/5 h-full flex flex-col justify-center items-center">
			<div class="text-7xl font-bold">
				discover
				<br /> top shippers
				<br />@_buildspace
			</div>
			<LazyLoad>
				<div class="lg:block hidden">
					<TweetStats />
				</div>
			</LazyLoad>
		</div>
		<div class="w-2/5 flex flex-col justify-start h-screen overflow-hidden">
			<TabGroup regionList="sticky top-0 variant-glass-surface">
				<Tab bind:group={tabSet} name="tab1" value={0}>Last Hour</Tab>
				<Tab bind:group={tabSet} name="tab2" value={1}>24 Hours</Tab>
				<Tab bind:group={tabSet} name="tab2" value={2}>7 days</Tab>
				<Tab bind:group={tabSet} name="tab3" value={3}>Season 3</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					<LazyLoad>
						{#if tabSet === 0}
							<TweetList listType="hour" />
						{:else if tabSet === 1}
							<TweetList listType="day" />
						{:else if tabSet === 2}
							<TweetList listType="week" />
						{:else if tabSet === 3}
							<TweetList listType="season3" />
						{/if}
					</LazyLoad>
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>
<!-- Content for mobile only -->

<div class="block lg:hidden">
	<div class="flex flex-col overflow-hidden hide-scrollbar">
		<div class="justify-center items-center m-auto">
			<div class="text-2xl font-bold">top shippers in 24 hours</div>
		</div>
		<LazyLoad>
			<div class="flex flex-col justify-start pt-3 overflow-hidden hide-scrollbar" id="mobile">
				<TweetList listType="day" />
			</div>
		</LazyLoad>
	</div>
</div>
