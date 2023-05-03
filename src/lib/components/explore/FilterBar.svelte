<script setup lang="ts">
	import WeekFilters from '$lib/components/explore/WeekFilters.svelte';
	import { prevent_default } from 'svelte/internal';
	import MetricFilters from './MetricFilters.svelte';
	import TweetContentFilters from './TweetContentFilters.svelte';

	let formChanged = false;

	function handleFormChange() {
		formChanged = true;
	}

	function submitForm(e) {
		formChanged = false;

		const formData = new FormData(e.target);
		console.log(formData);
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data);
	}
</script>

<div class="h-full p-3">
	<div class="card variant-ringed">
		<form on:submit|preventDefault={submitForm} on:change={handleFormChange}>
			<WeekFilters />
			<TweetContentFilters />
			<MetricFilters />

			<div class="card !bg-transparent p-2">
				<div class="p-2">
					<button type="submit" class="btn variant-filled w-full" disabled={!formChanged}
						>Apply filters</button
					>
				</div>
				<div class="p-2">
					<button type="button" class="btn variant-ghost w-full" disabled={!formChanged}
						>Clear All</button
					>
				</div>
			</div>
		</form>
	</div>
</div>
