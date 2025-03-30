<template>
	<a
		:href="`/demo/destination/${destination.id}`"
		class="w-full flex-shrink-0 relative flex gap-2 border-b border-black/10 py-4"
	>
		<img
			class="w-[120px] h-[120px] aspect-square object-cover rounded-xl"
			:src="destination.cover"
			alt=""
		/>
		<div class="px-2 flex flex-col gap-2">
			<h1 class="text-sm font-semibold">{{ destination.name }}</h1>
			<div class="flex gap-1">
				<IconStar />
				<IconStar />
				<IconStar />
				<IconStar />
				<IconStar />
			</div>
			<p class="w-full text-xs text-black/60 text-wrap line-clamp-3">
				{{ destination.description }}
			</p>
		</div>
	</a>
</template>

<script lang="ts" setup>
defineProps<{
	destination: Destination;
}>();
</script>

<style></style>
