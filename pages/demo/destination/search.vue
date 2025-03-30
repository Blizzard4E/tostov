<template>
	<div class="p-6 flex flex-col">
		<nav class="flex my-4 gap-4 items-center">
			<Button
				variant="circle"
				size="icon"
				@click="navigateTo('/demo/home')"
				class="flex-shrink-0"
				><IconChevronBack
			/></Button>
			<div class="w-full">
				<Input
					v-model="searchQuery"
					placeholder="Where do you plan to go?"
					@input="filterDestinations"
				/>
			</div>
		</nav>
		<h1 class="text font-semibold">Place name "{{ searchQuery }}"</h1>
		<div class="grid">
			<DestinationGridItem
				v-for="destination in filteredDestinations"
				:key="destination.id"
				:destination="destination"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
const searchQuery = ref("");
const filteredDestinations = ref<Destination[]>([]);
// Initialize filteredDestinations with all destinations
onMounted(() => {
	filteredDestinations.value = [...placeholderDestinations];
});

// Filter destinations based on search query
const filterDestinations = () => {
	if (!searchQuery.value) {
		filteredDestinations.value = [...placeholderDestinations];
		return;
	}

	const query = searchQuery.value.toLowerCase();
	filteredDestinations.value = placeholderDestinations.filter(
		(destination) =>
			destination.name.toLowerCase().includes(query) ||
			destination.description.toLowerCase().includes(query) ||
			destination.address.toLowerCase().includes(query)
	);
};

// Watch for changes in the search query
watch(searchQuery, () => {
	filterDestinations();
});
</script>

<style></style>
