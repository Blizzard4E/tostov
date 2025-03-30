<template>
	<div>
		<div
			class="p-6 h-[484px] flex flex-col gap-4"
			:style="{
				background:
					'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://res.cloudinary.com/duzvevuup/image/upload/v1743330409/TosTov/home-background_wjgwib.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}"
		>
			<nav class="flex justify-between mt-4">
				<Button variant="circle" size="icon"><IconMenu /></Button>
				<Button variant="circle" size="icon"
					><IconNotification
				/></Button>
			</nav>
			<h1 class="text-4xl font-bold text-white drop-shadow-lg">
				Explore Cambodia today
			</h1>
			<div class="flex gap-2">
				<img
					src="/images/tostov-logo.png"
					class="w-6 h-6 flex-shrink-0 drop-shadow-lg"
					alt=""
				/>
				<p class="text-white drop-shadow-lg">
					<span class="font-bold drop-shadow-lg"
						>Tos<span class="text-primary drop-shadow-lg"
							>Tov</span
						></span
					>
					- take your travel to The next level
				</p>
			</div>
			<button
				class="flex w-full rounded-xl border border-black/10 bg-white px-3 py-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
				@click="navigateTo('/demo/destination/search')"
			>
				Search destination
			</button>
			<div class="grid grid-cols-3 gap-4">
				<div
					class="bg-white rounded-xl w-full flex items-center gap-3 text-xs py-3 px-4 active:scale-110 transition-all"
				>
					<IconHotel />
					<h2>Hotel</h2>
				</div>
				<div
					class="bg-white rounded-xl w-full flex items-center gap-3 text-xs py-3 px-4 active:scale-110 transition-all"
				>
					<IconActivity />
					<h2>Activity</h2>
				</div>
				<div
					class="bg-white rounded-xl w-full flex items-center gap-3 text-xs py-3 px-4 active:scale-110 transition-all"
				>
					<IconCafe />
					<h2>Cafe</h2>
				</div>
			</div>
		</div>
		<div class="py-6 pl-6 flex flex-col gap-4">
			<h1 class="font-semibold text-lg">Popular Places in Cambodia</h1>
			<DestinationList :destinations="placeholderDestinations" />
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style></style>
