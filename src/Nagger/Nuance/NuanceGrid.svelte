<script>
  import NuanceItem from './NuanceItem.svelte';
  export let nuances;
</script>

<style></style>

<section id="nuance-list">
  {#each nuances as item}
    <NuanceItem {item}>
    </NuanceItem>
  {/each}
</section>
