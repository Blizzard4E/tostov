<template>
	<div class="w-full h-full">
		<TransitionFade
			mode="out-in"
			:duration="{ enter: 500, leave: 500 }"
			easing="ease-in-out"
		>
			<div v-if="step < 3" class="grid place-items-center">
				<div class="mt-24">
					<TransitionFade
						mode="out-in"
						:duration="{ enter: 500, leave: 500 }"
						easing="ease-in-out"
					>
						<div v-if="step == 0"><WelcomeVectorTraveling /></div>
						<div v-if="step == 1">
							<WelcomeVectorRelax />
						</div>
						<div v-if="step == 2">
							<WelcomeVectorClothes />
						</div>
					</TransitionFade>
				</div>
				<TransitionFade
					mode="out-in"
					:duration="{ enter: 500, leave: 500 }"
					easing="ease-in-out"
				>
					<div v-if="step == 0">
						<div class="w-[350px] text-center">
							<h1
								class="mt-8 text-3xl font-medium leading-[36px]"
							>
								<span>Life is short and the world is </span>
								<span class="relative"
									><span class="text-primary">wide</span>
									<div
										class="absolute bottom-0 right-0 translate-y-2"
									>
										<svg
											width="64"
											height="11"
											viewBox="0 0 64 11"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M0.529678 10.2984C7.32245 2.3819 37.8687 -7.61689 63.4487 9.6849C49.2966 4.25432 20.3643 0.363782 0.529678 10.2984Z"
												fill="#1BBC9B"
											/>
										</svg>
									</div>
								</span>
							</h1>
							<p class="mt-4 text-foreground">
								At Tos<span class="text-primary">Tov</span>,
								formulate your strategy to travel wonderful
								journeys
							</p>
						</div>
					</div>
					<div v-if="step == 1">
						<div class="w-[350px] text-center">
							<h1
								class="mt-8 text-3xl font-medium leading-[36px]"
							>
								<span>It’s a big world out there go </span>
								<span class="relative"
									><span class="text-primary">explore</span>
									<div
										class="absolute bottom-0 right-0 translate-y-2"
									>
										<svg
											width="103"
											height="11"
											viewBox="0 0 103 11"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M0.572646 10.3516C11.5667 2.41367 61.0805 -7.54854 102.62 9.91686C79.6502 4.41722 32.7135 0.422833 0.572646 10.3516Z"
												fill="#1BBC9B"
											/>
										</svg>
									</div>
								</span>
							</h1>
							<p class="mt-4 text-foreground">
								To get the best of your adventure you just need
								to leave and go where you like. we are waiting
								for you
							</p>
						</div>
					</div>
					<div v-if="step == 2">
						<div class="w-[350px] text-center">
							<h1
								class="mt-8 text-3xl font-medium leading-[36px]"
							>
								<span
									>People don’t take trips, trips take
								</span>
								<span class="relative"
									><span class="text-primary">people</span>
									<div
										class="absolute bottom-0 right-0 translate-y-2"
									>
										<svg
											width="90"
											height="11"
											viewBox="0 0 90 11"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M0.842178 10.2929C10.4052 2.39338 53.4585 -7.5422 89.5617 9.79898C69.5956 4.34443 28.7914 0.401063 0.842178 10.2929Z"
												fill="#1BBC9B"
											/>
										</svg>
									</div>
								</span>
							</h1>
							<p class="mt-4 text-foreground">
								Discover unfamiliar places, return as someone
								entirely new. Every journey leaves its mark."
							</p>
						</div>
					</div>
				</TransitionFade>
				<div class="grid place-items-center absolute bottom-40">
					<WelcomeArrowButton @click="handleStep" />
				</div>
				<div class="grid place-items-center absolute bottom-20">
					<WelcomeSteps :step="step" />
				</div>
			</div>
			<div v-else class="w-full h-full bg-white">
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
							<WelcomeButton link="/demo/home"
								>Let's Travel</WelcomeButton
							>
						</div>
					</div>
				</div>
			</div>
		</TransitionFade>
	</div>
</template>

<script lang="ts" setup>
import { TransitionFade } from "@morev/vue-transitions";
const step = ref(0);

const handleStep = () => {
	step.value++;
};
</script>
