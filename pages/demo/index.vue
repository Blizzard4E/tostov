<template>
	<div
		class="w-full h-full"
		:style="{
			background: 'linear-gradient(to bottom, #d9ffc9 0%, #F3FFEF 100%)',
		}"
	>
		<div>
			<div class="pt-40 grid place-items-center relative z-10">
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
				<div class="mt-36">
					<WelcomeButton link="/demo/welcome">Let's Go</WelcomeButton>
				</div>
			</div>
			<div class="absolute bottom-0 z-0"><WelcomeBackgroundArt /></div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style></style>
