<script setup lang="ts">
	import { onMount } from 'svelte';
	import { fetchHousePoints } from '$lib/scripts/leaderboard/LeaderboardClient';
	import Spinner from '$lib/components/common/Spinner.svelte';

	let spectreseekPoints = 0;
	let alterokPoints = 0;
	let gaudmirePoints = 0;
	let erevaldPoints = 0;
	let loading = true;

	async function fetchPoints() {
		const housePoints = await fetchHousePoints();

		housePoints.forEach((element) => {
			if (element.house === 'spectreseek') {
				spectreseekPoints = element.points;
			} else if (element.house === 'alterok') {
				alterokPoints = element.points;
			} else if (element.house === 'gaudmire') {
				gaudmirePoints = element.points;
			} else if (element.house === 'erevald') {
				erevaldPoints = element.points;
			}
		});
		loading = false;
	}

	onMount(() => {
		fetchPoints();
	});
</script>

<div class="flex flex-row justify-center">
	<div
		class="relative w-64 h-32 bg-cover bg-center rounded-lg shadow-md m-2"
		style="background-image: url('/images/spectreseek.png')"
	>
		<div class="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-lg" />
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="text-center">
				{#if loading}
					<Spinner />
				{:else}
					<h2 class="text-3xl font-extrabold sm:text-4xl">{spectreseekPoints}</h2>
				{/if}
			</div>
		</div>
	</div>

	<div
		class="relative w-64 bg-cover bg-center rounded-lg shadow-md m-2"
		style="background-image: url('/images/alterok.png')"
	>
		<div class="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-lg" />
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="text-center">
				{#if loading}
					<Spinner />
				{:else}
					<h2 class="text-3xl font-extrabold sm:text-4xl">{alterokPoints}</h2>
				{/if}
			</div>
		</div>
	</div>

	<div
		class="relative w-64 bg-cover bg-center rounded-lg shadow-md m-2"
		style="background-image: url('/images/gaudmire.png')"
	>
		<div class="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-lg" />
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="text-center">
				{#if loading}
					<Spinner />
				{:else}
					<h2 class="text-3xl font-extrabold sm:text-4xl">{gaudmirePoints}</h2>
				{/if}
			</div>
		</div>
	</div>

	<div
		class="relative w-64 bg-cover bg-center rounded-lg shadow-md m-2"
		style="background-image: url('/images/erevald.png')"
	>
		<div class="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-lg" />
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="text-center">
				{#if loading}
					<Spinner />
				{:else}
					<h2 class="text-3xl font-extrabold sm:text-4xl">{erevaldPoints}</h2>
				{/if}
			</div>
		</div>
	</div>
</div>
