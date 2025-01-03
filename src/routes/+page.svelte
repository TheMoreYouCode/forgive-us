<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	function getRandomReaction() {
		const newReaction = reactions[Math.floor(Math.random() * reactions.length)];
		if (newReaction === currentReaction) return getRandomReaction();
		return newReaction;
	}

	function getRandomRemark() {
		const index = Math.floor(Math.random() * data.remarks.length);
		const remark = data.remarks[index];

		data.remarks = data.remarks.filter((r) => r.id !== remark.id);

		return remark;
	}

	let reactions = [
		'Na toll!',
		'Oh nein!',
		'Kruzifix!',
		'Dann bleib ich wohl zuhause',
		'Da haben wir den Salat!',
		'Ich geh wieder ins Bett.',
		'Als ob!',
		'Wär ja zu schön gewesen!',
		'Gar kein Bock mehr!',
		'Traurig, traurig!',
		'Na super!',
		'Das ist ja blöd!',
		'Nicht schon wieder!',
		'So ein Mist!',
		'Das darf doch nicht wahr sein!',
		'Was für ein Pech!'
	];

	let currentReaction: string;
	let currentRemark: (typeof data.remarks)[0];

	onMount(() => {
		currentReaction = getRandomReaction();
		currentRemark = getRandomRemark();
	});

	function newRemark() {
		if (data.remarks.length === 0) {
			currentRemark = { type: 'warning', text: 'Keine weitern Ausreden vorhanden.' };
			return;
		}

		currentRemark = getRandomRemark();
		currentReaction = getRandomReaction();
	}
</script>

<div class="hero">
	<div class="hero-content flex flex-col text-center">
		<h1 class=" text-5xl font-bold">🚂 SORRY 🛤️</h1>
		{#if currentRemark !== undefined}
			<div class="flex flex-col gap-4">
				<div class="card bg-neutral text-neutral-content shadow-xl md:max-w-xl">
					<div class="card-body"><p>{@html currentRemark.text}</p></div>
				</div>
			</div>
			<button class="btn btn-primary" onclick={() => newRemark()}>{currentReaction}</button>
		{:else}
			<span class="loading loading-dots loading-lg"></span>
		{/if}
	</div>
</div>
