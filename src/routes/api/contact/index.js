export const post = async ({ request }) => {
	const body = await request.formData()

	const name = body.get('name')
	const email = body.get('email')

	const res = await fetch(
		`https://docs.google.com/forms/d/e/1FAIpQLSeee8QbhEKxtowYrZp3SmJ9IvCc61ctMp3xnCzd6Tn_cDlY3Q/formResponse?usp=pp_url&entry.1688861287=${name}&entry.411765553=${email}&submit=Submit`
	)

	if (res.status === 200) {
		return {
			status: 200,
			body: {
				message: 'success'
			}
		}
	} else {
		return {
			status: 404,
			body: {
				message: 'failed'
			}
		}
	}
}
