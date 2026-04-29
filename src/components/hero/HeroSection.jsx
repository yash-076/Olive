import HeroActions from './HeroActions.jsx'
import SocialProof from './SocialProof.jsx'
import PhoneShowcase from '../showcase/PhoneShowcase.jsx'

function HeroSection() {
  return (
    <section className="px-4 pb-10 pt-8 sm:px-8 sm:pt-12 lg:px-10 lg:pt-12">
      <div className="mx-auto max-w-[980px] text-center">
        <SocialProof />

        <h1 className="mx-auto mt-12 max-w-[840px] text-balance text-7xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#1f2f16] sm:text-6xl lg:mt-14 lg:text-[5rem]">
          The Safest Way to Shop for Groceries
        </h1>

        <p className="mx-auto mt-8 max-w-[700px] text-lg leading-relaxed text-[#5b6652]">
          Use the Olive Food Scanner App to Instantly Eliminate Harmful
          <br />
          Ingredients from Your Family&apos;s Diet and Get Expert-Backed Food
          <br />
          Insights
        </p>

        <HeroActions />

        <PhoneShowcase />
      </div>
    </section>
  )
}

export default HeroSection
