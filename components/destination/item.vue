<template>
	<div class="w-[200px] flex-shrink-0 relative">
		<div class="absolute top-2 right-2 z-10">
			<Button variant="circle" size="icon" class="h-8 w-8"
				><IconHeart
			/></Button>
		</div>
		<a class="w-full" :href="`/demo/destination/${destination.id}`">
			<img
				class="w-full aspect-square object-cover rounded-tr-xl rounded-tl-xl"
				:src="destination.cover"
				alt=""
			/>
		</a>
		<a
			:href="`/demo/destination/${destination.id}`"
			class="p-2 border border-black/10 rounded-br-xl rounded-bl-xl flex flex-col gap-1"
		>
			<h1 class="text-sm font-semibold">{{ destination.name }}</h1>
			<div class="flex gap-1">
				<IconStar />
				<IconStar />
				<IconStar />
				<IconStar />
				<IconStar />
			</div>
			<p class="w-full truncate text-xs text-black/60">
				{{ destination.description }}
			</p>
		</a>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	destination: Destination;
}>();
</script>

<style></style>
