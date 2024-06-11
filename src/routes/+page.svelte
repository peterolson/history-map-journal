<script lang="ts">
	import TimeRange from '$lib/TimeRange.svelte';
	import { yearState } from '$lib/state.svelte';
</script>

<TimeRange />

<p>Start year: {yearState.start}</p>
<p>End year: {yearState.end}</p>
