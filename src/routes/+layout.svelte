<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
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
				<img src="/gtfol-logo.png" class="max-h-10" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
