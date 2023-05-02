<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell
	class="max-w-7xl m-auto"
	regionPage="relative"
	slotPageHeader="lg:sticky lg:top-0 lg:z-10"
>
	<svelte:fragment slot="pageHeader">
		<!-- App Bar -->
		<AppBar background="" class="lg:fixed">
			<svelte:fragment slot="lead">
				<img src="/images/gtfol-logo.png" class="max-h-10" alt="GTFOL" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
