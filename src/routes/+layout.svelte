<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
{@render children()}
