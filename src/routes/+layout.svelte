<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	let { children } = $props();
    const logoPath = "/images/gtfol-logo-dark.png";

	// Get additional classes for the navigation buttons
	function getAdditionalClasses(pathname: string) {
		return $page.url.pathname === pathname ? 'font-bold' : '';
	}
</script>

<nav class="w-full bg-white shadow-md p-2">
  <div class="max-w-7xl mx-auto flex items-center justify-between">
    <!-- Logo -->
    <div class="flex-shrink-0">
      <img src={logoPath} alt="Logo" class="h-8 w-auto"/>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex gap-6">
      <a
        href="/"
        class="px-4 py-2 rounded-md hover:bg-gray-100 hover:font-bold hover:text-blue-600 {getAdditionalClasses('/')}"
      >
        Home
      </a>
      <a
        href="/feed"
        class="px-4 py-2 rounded-md hover:bg-gray-100 hover:font-bold hover:text-blue-600 {getAdditionalClasses('/feed')}"
      >
        Feed
      </a>
    </div>

    <!-- Empty div for flex spacing -->
    <div class="flex-shrink-0 w-8"></div>
  </div>
</nav>

{@render children()}
