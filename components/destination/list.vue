<template>
	<div class="flex gap-4 flex-nowrap overflow-auto hide-scrollbar">
		<DestinationItem
			v-for="destination in destinations"
			:destination="destination"
			:key="destination.id"
		/>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	destinations: Destination[];
}>();
</script>

<style></style>
