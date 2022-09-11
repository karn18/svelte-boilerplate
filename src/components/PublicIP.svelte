<script lang="ts">
  import { onMount } from 'svelte';

  import { get } from '../lib/requestor'

  let publicId:string | undefined |null = null;
  onMount(async () => {
    const response = await get('https://api.ipify.org/?format=json', {
      responseKind: 'json'
    })
    
    if (response.ok) {
      publicId = response.data.ip
    }
  })
</script>
<div id="public-ip">
  <h2 class="text-xl font-bold text-blue-400">Your public IP Adddress</h2>
  {#if publicId}
    <span>{publicId}</span>
  {:else}
    <span>Loading...</span>
  {/if}
</div>
