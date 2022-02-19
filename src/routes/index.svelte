<script>
	let submitStatus

	const submitForm = async (data) => {
		submitStatus = 'submitting'
		const formData = new FormData(data.currentTarget)

		const res = await fetch('/api/contact', {
			method: 'POST',
			body: formData
		})

		const { message } = await res.json()
		submitStatus = message
	}
</script>

<div class="container">
	{#if submitStatus === 'submitting'}
		<p>Submitting...</p>
	{:else if submitStatus === 'failed'}
		<p>Form submission failed</p>
	{:else if submitStatus === 'success'}
		<p>Form submission successful</p>
	{:else}
		<form on:submit|preventDefault="{submitForm}">
			<div>
				<label for="name">
					Name
					<input type="text" name="name" />
				</label>
			</div>
			<div>
				<label for="email">
					Email
					<input type="email" name="email" />
				</label>
			</div>
			<div>
				<input type="submit" />
			</div>
		</form>
	{/if}
</div>

<style>
	.container {
		border: 1px solid black;
		width: 500px;
		height: 500px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	div {
		margin-bottom: 0.5em;
	}
</style>
