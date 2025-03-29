<template>
	<div class="w-full h-full bg-white">
		<div>
			<div class="pt-20 grid place-items-center relative z-10">
				<h1 class="text-4xl font-extrabold">Welcome to</h1>
				<div class="flex gap-2 mt-6 items-center pb-20">
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
				<WelcomeVectorTraveling />
				<div class="mt-28">
					<WelcomeButton link="/demo/welcome"
						>Let's Travel</WelcomeButton
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style></style>
