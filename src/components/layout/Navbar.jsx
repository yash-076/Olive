import { useEffect, useState } from 'react'

const navItems = ['Solutions', 'Features', 'Pricing', 'Blog', 'Restaurants', 'Food']

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="px-2 sm:px-4 sm:pt-2 xl:px-6">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="shrink-0">
            <img
              src="/Olive-Logo.png"
              alt="Olive"
              className="h-12 w-auto sm:h-14 xl:h-20"
            />
          </a>

          <nav className="hidden items-center gap-6 text-lg font-medium text-[#4b5942] xl:flex xl:gap-12">
            {navItems.map((item) => (
              <a
                key={item}
                href="/"
                className="transition-colors duration-200 hover:text-[#203016]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="/"
              className="whitespace-nowrap text-lg font-medium text-[#314a20] transition-colors duration-200 hover:text-[#203016]"
            >
              Sign in
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#31471f] px-5 py-3 text-lg font-semibold text-white shadow-[0_10px_24px_rgba(49,71,31,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#31471f]/85"
            >
              <span>Get Olive</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d7ddd7] bg-[#f5faf6] text-[#31471f] transition-colors duration-200 hover:bg-[#edf3ea] xl:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 xl:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Close menu backdrop"
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          id="mobile-nav-drawer"
          className={`absolute right-0 top-0 flex h-full w-[min(84vw,340px)] flex-col bg-[#f5faf6] shadow-[-20px_0_50px_rgba(30,44,20,0.12)] transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#d7ddd7] px-5 py-4">
            <img src="/Olive-Logo.png" alt="Olive" className="h-10 w-auto" />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7ddd7] bg-white text-[#31471f]"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-4 py-5 text-lg font-medium text-[#203016]">
            {navItems.map((item) => (
              <a
                key={item}
                href="/"
                className="rounded-2xl px-4 py-3 transition-colors duration-200 hover:bg-[#edf3ea]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="mt-auto space-y-3 px-4 pb-5">
              <a
                href="/"
                className="block rounded-2xl border border-[#d7ddd7] bg-white px-4 py-3 text-center text-lg font-medium text-[#314a20]"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </a>
              <a
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#31471f] px-5 py-3 text-lg font-semibold text-white shadow-[0_10px_24px_rgba(49,71,31,0.24)] transition-colors duration-200 hover:bg-[#31471f]/85"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Get Olive</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </nav>
        </aside>
      </div>
    </>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </svg>
  )
}

export default Navbar
