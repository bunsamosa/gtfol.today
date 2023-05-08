<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import AppNavbar from '$lib/components/common/AppNavbar.svelte';
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
		<AppNavbar/>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
