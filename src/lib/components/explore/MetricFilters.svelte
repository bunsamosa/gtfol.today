<div class="card !bg-transparent p-5">
	<header class="font-semibold text-lg text-center p-2 pt-0">Metric Filters</header>
	<div class="flex flex-col">
		<div class="p-2">
			<select class="select" name="metric">
				<option value="" disabled selected>Choose a metric</option>
				<option value="likes">Likes</option>
				<option value="replies">Replies</option>
				<option value="retweets">Retweets</option>
			</select>
		</div>
		<div class="p-2">
			<select class="select" name="comparator">
				<option value="" disabled selected>Pick a comparison</option>
				<option value="greaterThan">Greater than</option>
				<option value="lessThan">Less than</option>
				<option value="equalTo">Equal to</option>
			</select>
		</div>
		<div class="p-2">
			<input type="number" class="input" placeholder="Enter a number" name="value" />
		</div>
	</div>
</div>
