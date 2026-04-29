const avatars = ['/person1.webp', '/person2.webp', '/person3.webp', '/person4.webp']

function SocialProof() {
  return (
    <div className="flex items-center justify-center gap-3 text-sm text-[#5b6652]">
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <img
            key={avatar}
            src={avatar}
            alt={`Community member ${index + 1}`}
            className="relative h-9 w-9 rounded-full border-2 border-[#d7ddd7] object-cover transition-transform duration-200 hover:z-10 hover:scale-110"
            loading="lazy"
          />
        ))}
      </div>
      <div className="relative z-9 -ml-5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#d7ddd7] bg-[#E9ECEA] text-xs font-medium leading-none text-[#8f9690] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          3k+
      </div>
      <p className="font-medium">Trusted by thousands of healthy families</p>
    </div>
  )
}

export default SocialProof
