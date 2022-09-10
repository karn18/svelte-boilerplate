<script lang="ts">
  import Welcome from "../components/Welcome.svelte";
</script>
<section class="container mx-auto">
  <Welcome />

  <h2 class="text-xl font-bold text-blue-400">Features</h2>
  <ol class="list-decimal">
    <li>Tyescript</li>
    <li>CSS: TailwindCSS</li>
    <li>
      <h3>Testing</h3>
      <ul class="list-disc">
        <li>Components: testing-library</li>
        <li>E2E: playwright</li>
      </ul>
    </li>
    <li>Lint</li>
  </ol>
</section>
