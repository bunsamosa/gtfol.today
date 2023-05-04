<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell
	class="max-w-7xl m-auto"
	regionPage="relative"
	slotPageHeader="lg:sticky lg:top-0 lg:z-10"
	slotPageContent="overflow-hidden hide-scrollbar"
>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="">
			<svelte:fragment slot="lead">
				<a href="/"><img src="/images/gtfol-logo.png" class="max-h-10" alt="GTFOL" /></a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>
