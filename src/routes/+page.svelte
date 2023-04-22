<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script setup lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import Tweet from '$lib/components/Tweet.svelte';
	let tabSet: number = 0;
	export let data;
	const { tweets } = data;
</script>

<svelte:head>
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

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
				<Tab bind:group={tabSet} name="tab2" value={1}>(label)</Tab>
				<Tab bind:group={tabSet} name="tab3" value={2}>(label)</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						{#each tweets as row}
							<Tweet tweetID={row.$id} />
						{/each}
					{:else if tabSet === 1}
						(tab panel 2 contents)
					{:else if tabSet === 2}
						(tab panel 3 contents)
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
			<div class="text-4xl font-bold">
				discover
				<br /> top shippers
				<br />@_buildspace
			</div>
		</div>
		<div class="flex flex-col justify-start overflow-y-scroll hide-scrollbar">
			<TabGroup justify="justify-center" regionList="sticky top-0">
				<Tab bind:group={tabSet} name="tab1" value={0}>Latest</Tab>
				<Tab bind:group={tabSet} name="tab2" value={1}>(label)</Tab>
				<Tab bind:group={tabSet} name="tab3" value={2}>(label)</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						{#each tweets as row}
							<Tweet tweetID={row.$id} />
						{/each}
					{:else if tabSet === 1}
						(tab panel 2 contents)
					{:else if tabSet === 2}
						(tab panel 3 contents)
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>
