<script setup lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import TweetList from '$lib/components/home/TweetList.svelte';
	import TweetStats from '$lib/components/home/TweetStats.svelte';
	import Lazy from 'svelte-lazy';
	import Fa from 'svelte-fa';
	import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

	let tabSet: number = 0;
</script>

<!-- Content for large screen only -->
<div class="hidden lg:block">
	<div class="flex h-screen px-5">
		<div class="w-3/5 h-full flex flex-col justify-center items-center">
			<div>
				<span class="text-7xl font-bold">
					discover
					<br /> top shippers
					<br />@_buildspace
				</span>
				<div class="mt-10 flex">
					<button
						type="button"
						class="btn btn-lg variant-filled rounded-full"
					>
						<span class="inline-flex text-xl font-bold items-center align-baseline">
							Explore<Fa class="px-1" icon={faAngleRight} />
						</span>
					</button>
				</div>
			</div>
			<Lazy keep=true>
				<div class="lg:block hidden">
					<TweetStats />
				</div>
			</Lazy>
		</div>
		<div class="w-2/5 flex flex-col justify-start h-screen overflow-hidden">
			<TabGroup regionList="sticky top-0 variant-glass-surface">
				<Tab bind:group={tabSet} name="tab1" value={0}>Last Hour</Tab>
				<Tab bind:group={tabSet} name="tab2" value={1}>24 Hours</Tab>
				<Tab bind:group={tabSet} name="tab2" value={2}>7 days</Tab>
				<Tab bind:group={tabSet} name="tab3" value={3}>Season 5</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					<Lazy>
						{#if tabSet === 0}
							<TweetList listType="hour" />
						{:else if tabSet === 1}
							<TweetList listType="day" />
						{:else if tabSet === 2}
							<TweetList listType="week" />
						{:else if tabSet === 3}
							<TweetList listType="season" />
						{/if}
					</Lazy>
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>

<!-- Content for mobile screen only -->
<div class="block lg:hidden">
	<div class="flex flex-col h-screen">
		<div class="flex flex-col justify-start h-full overflow-hidden">
			<TabGroup regionList="sticky top-0 variant-glass-surface">
				<Tab bind:group={tabSet} name="tab1" value={0}>Last Hour</Tab>
				<Tab bind:group={tabSet} name="tab2" value={1}>24 Hours</Tab>
				<Tab bind:group={tabSet} name="tab2" value={2}>7 days</Tab>
				<Tab bind:group={tabSet} name="tab3" value={3}>Season 5</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					<Lazy class="px-2">
						{#if tabSet === 0}
							<TweetList listType="hour" />
						{:else if tabSet === 1}
							<TweetList listType="day" />
						{:else if tabSet === 2}
							<TweetList listType="week" />
						{:else if tabSet === 3}
							<TweetList listType="season" />
						{/if}
					</Lazy>
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>
