<template>
	<div>
		<div
			class="h-[364px] w-full rounded-br-3xl rounded-bl-3xl p-6 relative"
			:style="{
				background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${destination.cover})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}"
		>
			<nav class="flex justify-between mt-4">
				<Button
					variant="circle"
					size="icon"
					@click="navigateTo('/demo/home')"
					><IconChevronBack
				/></Button>
				<div class="flex gap-1">
					<Button variant="circle" size="icon"><IconShare /></Button
					><Button variant="circle" size="icon"><IconHeart /></Button>
				</div>
			</nav>
			<h1
				class="text-2xl font-bold absolute bottom-4 drop-shadow-lg text-white"
			>
				{{ destination.name }}
			</h1>
		</div>
		<div class="p-6 text-xs flex flex-col gap-6">
			<p>{{ destination.description }}</p>
			<div class="w-full h-[2px] rounded-full bg-black/10"></div>
			<div class="flex flex-col gap-2">
				<div class="font-semibold text-xs flex gap-2">
					<span>Rating:</span>
					<div class="flex gap-2 items-center">
						<div class="flex gap-1">
							<IconStar />
							<IconStar />
							<IconStar />
							<IconStar />
							<IconStar />
						</div>
						<span class="text-xs">(100)</span>
					</div>
				</div>
				<p class="font-semibold text-xs">
					Address:
					<span class="font-normal">{{ destination.address }}</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const destination = placeholderDestinations[Number(route.params.id)];
</script>

<style></style>
