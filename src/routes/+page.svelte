<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script setup lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import TweetList from '$lib/components/TweetList.svelte';
	// import { _twitterWidgetsLoader } from '$lib/TwitterWidget';
	// 	_twitterWidgetsLoader.load();
	let tabSet: number = 0;
</script>

<!-- Content for large screen only -->
<div class="hidden lg:block">
	<div class="flex h-screen">
		<div class="w-3/5 h-full flex justify-center items-center">
			<div class="text-7xl font-bold">
				discover
				<br /> top shippers
				<br />@_buildspace
			</div>
		</div>
		<div class="w-2/5 flex flex-col justify-start overflow-y-scroll hide-scrollbar">
			<TabGroup regionList="sticky top-0 variant-glass-surface">
				<Tab bind:group={tabSet} name="tab1" value={0}>Latest</Tab>
				<Tab bind:group={tabSet} name="tab2" value={1}>This Week</Tab>
				<Tab bind:group={tabSet} name="tab3" value={2}>Season 3</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						<TweetList listType="week" />
					{:else if tabSet === 1}
						<TweetList listType="week" />
					{:else if tabSet === 2}
						<TweetList listType="season3" />
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>
<!-- Content for mobile only -->
<div class="block lg:hidden">
	<div class="flex flex-col">
		<div class="justify-center items-center m-auto">
			<div class="text-2xl font-bold">top shippers @_buildspace</div>
		</div>
		<div class="flex flex-col justify-start pt-3 overflow-y-scroll hide-scrollbar">
			<TweetList listType="week" />
		</div>
	</div>
</div>
