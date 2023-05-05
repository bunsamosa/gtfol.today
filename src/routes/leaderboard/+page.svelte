<script setup lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import ProjectsList from '$lib/components/leaderboard/ProjectsList.svelte';
	import ScoreCard from '$lib/components/leaderboard/ScoreCard.svelte';
	import ProjectCard from '$lib/components/leaderboard/ProjectCard.svelte';

	let house: string = 'all';
</script>

<div class="h-full flex flex-col">
	<div class="w-full hidden lg:block">
		<ScoreCard />
	</div>
	<div class="w-full hidden lg:block">
		<TabGroup justify="justify-center" regionList="font-semibold">
			<Tab bind:group={house} name="all" value="all">All</Tab>
			<Tab bind:group={house} name="spectreseek" value="spectreseek">Spectreseek</Tab>
			<Tab bind:group={house} name="alterok" value="alterok">Alterok</Tab>
			<Tab bind:group={house} name="gaudmire" value="gaudmire">Gaudmire</Tab>
			<Tab bind:group={house} name="erevald" value="erevald">Erevald</Tab>
		</TabGroup>
	</div>
	{#if house === 'all'}
		<ProjectsList />
	{:else if house === 'spectreseek'}
		<ProjectsList {house} />
	{:else if house === 'alterok'}
		<ProjectsList {house} />
	{:else if house === 'gaudmire'}
		<ProjectsList {house} />
	{:else if house === 'erevald'}
		<ProjectsList {house} />
	{/if}
</div>
