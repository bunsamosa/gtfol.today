<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import FilterBar from '$lib/components/explore/FilterBar.svelte';
</script>

<!-- App Shell -->
<AppShell
	class="max-w-7xl m-auto"
	regionPage="relative"
	slotPageHeader="lg:sticky lg:top-0 lg:z-10"
	slotSidebarLeft="hidden lg:block w-1/4"
>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="">
			<svelte:fragment slot="lead">
				<img src="/images/gtfol-logo.png" class="max-h-10" alt="GTFOL" />
			</svelte:fragment>
			<svelte:fragment slot="trail">asas</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Filter Bar -->
		<FilterBar />
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>
