<script lang="ts">
  // Example stats - replace with actual data
  const stats = {
    totalTweets: "12,345",
    lastUpdated: new Date().toLocaleDateString(),
    totalShippers: "1,234"
  };
</script>

<div class="max-w-7xl mx-auto px-4 py-12 space-y-16">
  <!-- Title Section -->
  <div class="text-center space-y-2">
    <h1 class="text-5xl font-bold leading-tight">
      Discover top shippers
    </h1>
    <h2 class="text-4xl font-bold text-blue-600">
      @_buildspace
    </h2>
  </div>

  <!-- Search Section -->
  <div class="max-w-2xl mx-auto">
    <div class="flex gap-2">
      <input
        type="text"
        placeholder="Search shippers..."
        class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
      <button
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Search
      </button>
    </div>
  </div>

  <!-- Stats Section -->
  <div class="flex justify-center gap-12">
    <div class="text-center">
      <div class="text-3xl font-bold text-blue-600">{stats.totalTweets}</div>
      <div class="text-gray-600">Total Tweets</div>
    </div>
    <div class="text-center">
      <div class="text-3xl font-bold text-blue-600">{stats.totalShippers}</div>
      <div class="text-gray-600">Active Shippers</div>
    </div>
    <div class="text-center">
      <div class="text-sm font-medium text-gray-600">Last Updated</div>
      <div class="text-gray-800">{stats.lastUpdated}</div>
    </div>
  </div>
</div>
