<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container mx-auto px-4 py-8">
	<h1
		class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
	>
		DB Remarks
	</h1>

	<div class="flex flex-col gap-4">
		{#each data.remarks as remark}
			<a
				href="#"
				class="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
			>
				<p class="font-normal text-gray-700 dark:text-gray-400">{@html remark.text}</p>
			</a>
		{/each}
	</div>
</div>
