<script setup lang="ts">
	// check if the week has to enabled based on today's date
	function weekDisabled(week: number) {
		// start date of the season
		let weekDate = new Date(2023, 3, 8);
		let dayDifference = week * 7;

		// add the number of days to the start date
		weekDate.setDate(weekDate.getDate() + dayDifference);
		let today = new Date();

		return today < weekDate;
	}
</script>

<div class="card !bg-transparent p-5">
	<header class="font-semibold text-lg text-center p-2 pt-0">Filter by week</header>
	<div class="space-y-2">
		<label class="flex items-center space-x-2">
			<input
				class="checkbox"
				type="checkbox"
				name="week1"
				value={true}
				disabled={weekDisabled(1)}
			/>
			<p>Week 1</p>
		</label>
		<label class="flex items-center space-x-2">
			<input
				class="checkbox"
				type="checkbox"
				name="week2"
				value={true}
				disabled={weekDisabled(2)}
			/>
			<p>Week 2</p>
		</label>
		<label class="flex items-center space-x-2">
			<input
				class="checkbox"
				type="checkbox"
				name="week3"
				value={true}
				disabled={weekDisabled(3)}
			/>
			<p>Week 3</p>
		</label>
		<label class="flex items-center space-x-2">
			<input
				class="checkbox"
				type="checkbox"
				name="week4"
				value={true}
				disabled={weekDisabled(4)}
			/>
			<p>Week 4</p>
		</label>
		<label class="flex items-center space-x-2 {weekDisabled(5) ? 'hidden' : 'block'}">
			<input
				class="checkbox"
				type="checkbox"
				name="week5"
				value={true}
				disabled={weekDisabled(5)}
			/>
			<p>Week 5</p>
		</label>
		<label class="flex items-center space-x-2 {weekDisabled(6) ? 'hidden' : 'block'}">
			<input
				class="checkbox"
				type="checkbox"
				name="week6"
				value={true}
				disabled={weekDisabled(6)}
			/>
			<p>Week 6</p>
		</label>
	</div>
</div>
