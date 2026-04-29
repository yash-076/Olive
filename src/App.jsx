import BackgroundLayer from './components/layout/BackgroundLayer'
import HeroSection from './components/hero/HeroSection'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div
      className="min-h-svh px-10 pt-10 sm:px-8 sm:pt-8"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div
        className="relative isolate min-h-[calc(100svh-1rem)] w-full overflow-hidden rounded-t-[28px] border border-[#e3e7e4] sm:min-h-[calc(100svh-1.5rem)]"
        style={{ backgroundColor: '#f5faf6' }}
      >
        <BackgroundLayer />
        <div className="relative z-10">
          <Navbar />
          <main
            className="min-h-[calc(100svh-1rem)]"
            aria-label="Olive landing page canvas"
          >
            <HeroSection />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App

