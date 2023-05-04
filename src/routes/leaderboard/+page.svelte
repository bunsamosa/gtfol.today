<script setup lang="ts">
	import ProjectsList from '$lib/components/leaderboard/ProjectsList.svelte';
	import ScoreCard from '$lib/components/leaderboard/ScoreCard.svelte';
</script>

<div class="h-full flex flex-col">
	<div class="w-full hidden lg:block">
		<ScoreCard />
	</div>
	<ProjectsList />
</div>
