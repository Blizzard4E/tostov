<template>
	<a
		:href="link"
		class="hover:brightness-90 bg-white text-primary text-2xl font-medium grid place-items-center border border-primary w-[300px] h-[60px] rounded-xl relative"
	>
		<slot />
		<div class="absolute right-0 top-[50%] translate-y-[-50%] mr-6">
			<WelcomeChevron />
		</div>
	</a>
</template>

<script lang="ts" setup>
defineProps<{
	link?: string;
}>();
</script>

<style></style>
