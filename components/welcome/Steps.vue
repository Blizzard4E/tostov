<template>
	<div class="flex gap-1">
		<div
			class="rounded-full duration-500"
			:class="step == 0 ? 'bg-primary' : 'bg-dark'"
			:style="{ height: '10px', width: step == 0 ? '25px' : '10px' }"
		></div>
		<div
			class="rounded-full duration-500"
			:class="step == 1 ? 'bg-primary' : 'bg-dark'"
			:style="{ height: '10px', width: step == 1 ? '25px' : '10px' }"
		></div>
		<div
			class="rounded-full duration-500"
			:class="step == 2 ? 'bg-primary' : 'bg-dark'"
			:style="{ height: '10px', width: step == 2 ? '25px' : '10px' }"
		></div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	step: number;
}>();
</script>

<style></style>
