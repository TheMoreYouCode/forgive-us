import type { PageServerLoad } from './$types';
import { createClient, type Warning } from 'hafas-client';
import { profile as dbProfile } from 'hafas-client/p/db/index.js';

// Adapt this to your project! createClient() won't work with this string.
const userAgent = 'forgive-us';

// create a client with the Deutsche Bahn profile
const client = createClient(dbProfile, userAgent);

const now = new Date();

export const load: PageServerLoad = async () => {
	return {
		remarks: (
			await client.remarks?.({
				from: now,
				to: now,
				language: 'de'
			})
		)?.remarks as Warning[]
	};
};
