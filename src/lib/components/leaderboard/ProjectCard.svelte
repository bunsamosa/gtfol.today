<script setup lang="ts">
	// sample project data
	export let project = {
		twitter_connected: false,
		twitter_user_id: null,
		twitter_handle: null,
		twitter_user_name: null,
		project_name: 'Musicfy',
		project_description: 'AI tools to streamline the creation of music',
		project_url: null,
		project_short_url: null,
		project_demo_url: 'https://www.loom.com/share/dfc99001bfcb4fcea4ae622980291c3b',
		points: 57711,
		rank: 1,
		house: 'erevald',
		metric_type: 'users',
		last_week_metric: 10242,
		this_week_metric: 67953,
		metric_change: 57711
	};

	// capitalize the first letter of a string
	function capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	// update params for card
	let house: string;
	let houseBadge: string;
	let metricType: string;
	async function updateParams() {
		house = capitalize(project.house);
		if (house === 'Spectreseek') {
			houseBadge = 'variant-ghost-error';
		} else if (house === 'Alterok') {
			houseBadge = 'variant-ghost-secondary';
		} else if (house === 'Gaudmire') {
			houseBadge = 'variant-ghost-warning';
		} else if (house === 'Erevald') {
			houseBadge = 'variant-ghost-success';
		}

		metricType = capitalize(project.metric_type);
	}
</script>

<div class="m-4 card variant-ghost w-80 h-[480px] rounded-lg shadow-lg">
	{#await updateParams()}
		<div class="placeholder" />
	{:then _}
		<header class="card-header">
			<!-- Rank and Badge -->
			<div class=" flex justify-between">
				<span class="text-3xl font-bold">#{project.rank}</span>
				<span class="justify-end">
					<span class="badge {houseBadge} mx-1 rounded-xl">
						{house}
					</span>
					<span class="badge variant-ghost mx-1 rounded-xl">{metricType}</span>
				</span>
			</div>
			<!-- Project title -->
			<div class="flex text-right justify-end">
				<span class="text-3xl font-semibold overflow-hidden text-ellipsis p-1"
					>{project.project_name}</span
				>
			</div>
		</header>
		<!-- Project description -->
		<div class="p-4 text-right font-semibold text-xl h-32 text-ellipsis w-full overflow-hidden">
			{project.project_description}
		</div>
		<!-- Project Metrics -->
		<div class="flex flex-row justify-between mx-4">
			<div class="flex flex-col items-start justify-center">
				<dd class="font-light text-gray-500 dark:text-gray-400">{metricType}</dd>
				<dt class="mb-2 text-3xl md:text-4xl font-semibold">
					{project.this_week_metric.toFixed(0)}
				</dt>
				<dd>
					{#if project.metric_change >= 0}
						<span class="badge variant-ghost-success rounded-xl my-auto">
							+{project.metric_change.toFixed(0)}
						</span>
					{:else}
						<span class="badge variant-ghost-error rounded-xl my-auto">
							{project.metric_change.toFixed(0)}
						</span>
					{/if}
				</dd>
			</div>
			<div class="flex flex-col items-end justify-end">
				<dd class="font-light text-gray-500 dark:text-gray-400">Points</dd>
				<dt class="mb-2 text-3xl md:text-4xl font-semibold">
					{project.points.toFixed(0)}
				</dt>
				<dd>
					{#if project.metric_change >= 0}
						<span class="badge variant-ghost-success rounded-xl my-auto">
							{#if metricType == 'Users'}
								+{project.metric_change.toFixed(0)}
							{:else}
								+{(project.metric_change * 10).toFixed(0)}
							{/if}
						</span>
					{:else}
						<span class="badge variant-ghost-error rounded-xl my-auto">
							{#if metricType == 'Users'}
								{project.metric_change.toFixed(0)}
							{:else}
								{(project.metric_change * 10).toFixed(0)}
							{/if}
						</span>
					{/if}
				</dd>
			</div>
		</div>
	{/await}
</div>
