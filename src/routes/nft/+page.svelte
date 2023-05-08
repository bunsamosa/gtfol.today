t<script setup lang="ts">
  import CardSkeleton from '$lib/components/common/CardSkeleton.svelte';
  import cards from './nftList.json';
</script>

<div class="main h-screen overflow-y-scroll hide-scrollbar">
  <h1 class="text-center pt-10">top shippers of week 1</h1>
  <div class="card-container py-10 flex flex-wrap justify-center gap-8">
    {#each cards as card, i}
    <div class="card border-2 border-gray-300 rounded-lg p-4 w-80 h-96 flex flex-col justify-center items-center cursor-pointer hover:shadow-lg" key={i}>
      <img class="w-full h-3/5 object-cover mb-4" src={card.image} alt={card.title} />
      <h3 class="text-lg">{card.title}</h3>
      <a class="mt-auto text-gray-400 hover:text-blue-400" href={card.description} target="_blank" rel="noopener noreferrer">View</a>
    </div>
    {:else}
    <CardSkeleton />
    {/each}
  </div>
</div>
