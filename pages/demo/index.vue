<template>
	<div
		class="w-full h-screen relative"
		:style="{
			background: 'linear-gradient(to bottom, #d9ffc9 0%, #F3FFEF 100%)',
		}"
	>
		<div>
			<div
				class="grid place-items-center absolute top-40 left-0 z-10 w-full"
			>
				<h1 class="text-4xl font-extrabold">Welcome to</h1>
				<div class="flex gap-2 mt-6 items-center">
					<img
						src="/images/tostov-logo.png"
						class="w-12 aspect-square"
						alt=""
					/>
					<h1>
						<span class="text-4xl">Tos</span>
						<span class="text-primary text-4xl">Tov</span>
					</h1>
				</div>
			</div>
			<div
				class="grid place-items-center absolute bottom-60 left-0 z-10 w-full"
			>
				<WelcomeButton link="/demo/welcome">Let's Go</WelcomeButton>
			</div>
			<div class="absolute bottom-0 z-0"><WelcomeBackgroundArt /></div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style></style>
