<script lang="ts">
	import { yearState } from '$lib/state.svelte';

	const yearMarkers = [yearState.min];
	const markerInterval = 200;
	while (yearMarkers[yearMarkers.length - 1] + markerInterval < yearState.max) {
		yearMarkers.push(yearMarkers[yearMarkers.length - 1] + markerInterval);
	}
</script>

Start year:
<input type="number" bind:value={yearState.start} min={yearState.min} max={yearState.max} />
End year:
<input type="number" bind:value={yearState.end} min={yearState.min} max={yearState.max} />

<input
	type="range"
	bind:value={yearState.start}
	min={yearState.min}
	max={yearState.max}
	list="markers"
/>
<datalist id="markers">
	{#each yearMarkers as marker}
		<option value={marker}></option>
	{/each}
</datalist>
