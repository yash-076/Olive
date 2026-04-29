
function HeroActions() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
      {/* Download for iOS with Apple icon */}
      <a
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-[#2e461d] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_28px_rgba(46,70,29,0.26)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2e461d]/85"
      >
        {/* Apple SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 mr-1">
          <path d="M16.365 10.28c-.02-2.14 1.75-3.16 1.83-3.21-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.07 8.56.71 1.03 1.56 2.18 2.67 2.14 1.08-.04 1.49-.69 2.8-.69 1.31 0 1.68.69 2.81.67 1.16-.02 1.89-1.05 2.59-2.08.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.29-3.45zm-2.15-6.3c.6-.73 1-1.75.89-2.77-.86.03-1.89.57-2.5 1.3-.55.65-1.03 1.7-.85 2.7.99.08 1.97-.5 2.46-1.23z" />
        </svg>
        <span>Download for iOS</span>
      </a>

      {/* Join the Olive Community button */}
      <a
        href="#community"
        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#2e461d] border border-[#2e461d] shadow transition-all duration-200 hover:bg-[#f5faf6] hover:text-[#1f2f16]"
      >
        Join the Olive Community
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 ml-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3" />
        </svg>
      </a>
    </div>
  );
}

export default HeroActions
