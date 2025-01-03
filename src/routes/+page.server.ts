import type { PageServerLoad } from './$types';
import { createClient, type Warning } from 'hafas-client';
import { profile as dbProfile } from 'hafas-client/p/db/index.js';

// Adapt this to your project! createClient() won't work with this string.
const userAgent = 'forgive-us';

// create a client with the Deutsche Bahn profile
const client = createClient(dbProfile, userAgent);

async function fetchRemarks() {
	console.log('fetching remarks', now);
	return (
		await client.remarks?.({
			from: now,
			to: now,
			language: 'de'
		})
	)?.remarks as Warning[];
}

let now = new Date();
let remarks = await fetchRemarks();

export const load: PageServerLoad = async () => {
	// fetch new remarks if the last fetch was more than 1 minute ago
	const newNow = new Date();
	if (newNow.getTime() - now.getTime() > 60 * 1000) {
		now = newNow;
		remarks = await fetchRemarks();
	}

	return { remarks };
};
