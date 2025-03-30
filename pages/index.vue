<template>
	<div class="w-full max-w-[1300px] mx-auto p-6 relative h-screen">
		<nav>
			<div class="flex items-center gap-4">
				<div
					class="bg-primary rounded-xl w-[60px] aspect-square grid place-items-center"
				>
					<img
						class="w-full scale-150"
						src="https://res.cloudinary.com/duzvevuup/image/upload/v1743331950/TosTov/White_TosTov_u8avay.png"
						alt=""
					/>
				</div>
				<h1 class="text-4xl font-bold">
					Tos<span class="text-primary">Tov</span>
				</h1>
			</div>
		</nav>
		<div
			class="grid md:grid-cols-2 gap-12 md:absolute md:bottom-24 md:left-6"
		>
			<div class="flex flex-col gap-6 mt-16 md:mt-[200px]">
				<WelcomeVectorTraveling />
				<p class="text-lg md:max-w-[700px] w-full">
					Tos<span class="text-primary">Tov</span> is an
					<span class="text-primary">all-in-one</span> travel guide
					app for Cambodia that makes trip planning and exploring
					<span class="text-primary">easier</span> with
					<span class="text-primary">intuitive tools and more.</span>
				</p>
				<p
					class="p-6 rounded-xl bg-primary text-white md:max-w-[500px] w-full"
				>
					With TosTov, you can create your ideal trip and enjoy
					authentic local experiences!
				</p>
			</div>
			<div class="flex flex-col items-center justify-end gap-6">
				<button @click="navigateTo('/demo')">
					<img
						class="w-[300px]"
						src="https://res.cloudinary.com/duzvevuup/image/upload/v1743333429/TosTov/TosTv_1_ekrbxj.png"
						alt=""
					/>
				</button>
				<h1 class="font-bold text-4xl">
					<span class="text-primary">TosTov</span> Demo
				</h1>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { WelcomeVectorTraveling } from "#components";
</script>

<style></style>
