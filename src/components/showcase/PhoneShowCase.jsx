import { useEffect, useMemo, useState } from 'react'

const products = [
	{
		id: 1,
		image: '/product1.webp',
		title: 'Cacao-nectar Bar, Oregon Peppermint',
		brand: "Honey Mama's",
		score: 85,
		verdict: 'Excellent',
		note:
			"This treat scored well mainly because it uses wholesome ingredients like raw local honey and organic coconut, but it still has processed sugars from the honey, which can be a concern when looking to avoid processed foods for your family. It's a nice option for an occasional treat, but just keep in mind the sugar content when considering it for your kids!",
	},
	{
		id: 2,
		image: '/product2.webp',
		title: 'Larabar Chocolate Chip Cookie Dough Fruit & Nut',
		brand: 'Larabar',
		score: 92,
		verdict: 'Excellent',
		note:
			"This product includes ingredients like cashews and dates and scores well because it avoids harmful additives, seed oils, and overly processed sugars. It is not fully raw, but it is still a strong occasional option that aligns with cleaner family food goals.",
	},
	{
		id: 3,
		image: '/product3.webp',
		title: 'Crunchiest Chips, Sea Salt and Vinegar',
		brand: 'Good Crisp',
		score: 78,
		verdict: 'Good',
		note:
			'These chips are cleaner than many alternatives and avoid several high-risk additives. There is still processing involved, so this is better as a once-in-a-while snack rather than an everyday pantry staple.',
	},
]

const sideCards = [
	'/product3.webp',
	'/product1.webp',
	'/product2.webp',
	'/product3.webp',
	'/product1.webp',
]

function PhoneShowcase() {
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		const timer = window.setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % products.length)
		}, 3600)

		return () => window.clearInterval(timer)
	}, [])

	const activeProduct = products[activeIndex]

	const topPreview = useMemo(() => {
		const prev = products[(activeIndex - 1 + products.length) % products.length]
		const next = products[(activeIndex + 1) % products.length]
		return [prev.image, activeProduct.image, next.image]
	}, [activeIndex, activeProduct.image])

	return (
		<section className="relative mt-14 pb-6">
			<div className="pointer-events-none absolute inset-x-0 top-10 mx-auto flex w-full max-w-[1120px] items-center justify-between px-1 opacity-45">
				{sideCards.map((card, index) => (
					<div
						key={`${card}-${index}`}
						className="h-28 w-24 rounded-[22px] border border-white/35 bg-white/50 p-1 shadow-[0_12px_30px_rgba(98,112,93,0.18)] backdrop-blur-sm sm:h-32 sm:w-28"
					>
						<img
							src={card}
							alt=""
							className="h-full w-full rounded-[18px] object-cover"
							loading="lazy"
						/>
					</div>
				))}
			</div>

			<div className="relative z-10 mx-auto w-full max-w-[430px] rounded-[54px] border-[12px] border-[#c8cecb] bg-white p-4 shadow-[0_28px_60px_rgba(31,46,24,0.16)] sm:p-5">
				<div className="relative overflow-hidden rounded-[40px] bg-white px-3 pb-5 pt-4 sm:px-4">
					<div className="mx-auto h-9 w-[126px] rounded-full bg-black">
						<span className="absolute right-[calc(50%-56px)] top-[18px] h-5 w-5 rounded-full border border-white/10 bg-[#13161a] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.05)]" />
					</div>

					<div className="mt-5 grid grid-cols-[1fr_1.15fr_1fr] gap-2 sm:gap-3">
						{topPreview.map((image, index) => (
							<div
								key={`${image}-${index}`}
								className={`h-24 overflow-hidden rounded-[22px] border border-[#e7ebe7] sm:h-28 ${
									index === 1 ? 'scale-[1.03]' : 'opacity-60'
								}`}
							>
								<img
									src={image}
									alt="Product scan preview"
									className="h-full w-full object-cover transition-all duration-500"
									loading="lazy"
								/>
							</div>
						))}
					</div>

					<div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[#c6cbc8]" />

					<article className="mt-3 rounded-[22px] bg-[#fbfbfb] p-3 shadow-[0_8px_24px_rgba(31,46,24,0.08)] sm:p-4">
						<div className="flex gap-3 sm:gap-4">
							<img
								src={activeProduct.image}
								alt={activeProduct.title}
								className="h-16 w-16 rounded-xl border border-[#e9ece9] object-cover sm:h-20 sm:w-20"
							/>

							<div className="min-w-0 flex-1">
								<h3
									className="text-left text-[1.52rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[#1b2118]"
									style={{
										display: '-webkit-box',
										WebkitLineClamp: 2,
										WebkitBoxOrient: 'vertical',
										overflow: 'hidden',
										fontSize: 'clamp(1.1rem, 2.35vw, 1.95rem)',
									}}
								>
									{activeProduct.title}
								</h3>

								<div className="mt-1 flex items-center gap-2">
									<p className="text-sm text-[#66705f] sm:text-base">{activeProduct.brand}</p>
									<span className="rounded-full bg-[#e9ece8] px-2 py-1 text-[11px] font-semibold text-[#60706a]">
										Verified
									</span>
								</div>
							</div>
						</div>

						<div className="mt-3 flex items-center justify-between">
							<div>
								<p className="flex items-center gap-2 text-[1.85rem] font-semibold leading-none text-[#141a12] sm:text-[2rem]">
									<span className="h-3.5 w-3.5 rounded-full bg-[#35ba5f]" />
									{activeProduct.score}/100
								</p>
								<p className="mt-0.5 text-sm text-[#6c7567] sm:text-base">{activeProduct.verdict}</p>
							</div>

							<div className="flex items-center gap-3 text-[#8b938a]">
								<button className="rounded-full p-1 transition-colors hover:text-[#3e5040]" aria-label="Favorite">
									<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
										<path d="M12.1 20.4c-.1 0-.3 0-.4-.1-5.2-3.4-8.6-6.4-8.6-10.2C3.1 7.5 5.2 5.6 8 5.6c1.6 0 3 .7 4 2 1-1.3 2.5-2 4-2 2.8 0 4.9 1.9 4.9 4.5 0 3.8-3.4 6.8-8.6 10.2-.1.1-.2.1-.2.1z" />
									</svg>
								</button>
								<button className="rounded-full p-1 transition-colors hover:text-[#3e5040]" aria-label="Share">
									<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
										<path d="M14 5l6 6-6 6" />
										<path d="M20 11H9a5 5 0 0 0-5 5v3" />
									</svg>
								</button>
							</div>
						</div>
					</article>

					<aside className="mt-4 rounded-2xl border border-[#e6e8e4] bg-[#f7f8f7] p-4 text-left shadow-[0_10px_22px_rgba(47,61,41,0.08)]">
						<p className="text-lg font-semibold text-[#2a3823]">🥑 Olive Says:</p>
						<p className="mt-2 text-[15px] leading-7 text-[#3f4c3a]">&quot;{activeProduct.note}&quot;</p>
					</aside>

					<h4 className="mt-5 text-left text-2xl font-semibold tracking-[-0.02em] text-[#20291b]">Breakdown</h4>
				</div>
			</div>
		</section>
	)
}

export default PhoneShowcase
