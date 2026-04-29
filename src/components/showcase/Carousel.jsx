import React from "react";

export default function Carousel({ slots, isMoving, moveMs = 1100 }) {
  // Base visual positions for slots 0..5 (x in px, scale, opacity, zIndex)
  const SLOT_GAP = 138; // tuned to match original spacing
  const base = [
    { x: -SLOT_GAP * 2, s: 1, o: 0.16, z: 1 },
    { x: -SLOT_GAP, s: 1, o: 0.52, z: 2 },
    { x: 0, s: 1.5, o: 1, z: 5 },
    { x: SLOT_GAP, s: 1, o: 0.52, z: 2 },
    { x: SLOT_GAP * 2, s: 1, o: 0.34, z: 1 },
    { x: SLOT_GAP * 3, s: 1, o: 0.16, z: 0 }
  ];

  return (
    <section className="carousel-strip" aria-hidden="true">
      {slots.map((item, slotIndex) => {
        const pos = base[slotIndex] || base[5];

        // When moving, push slot-5 just one item-width further right
        // so it appears to come from the right at the same spacing as others.
        const ITEM_GAP = SLOT_GAP; // match the x-step between visible slots
        const extra = isMoving && slotIndex === 5 ? ITEM_GAP : 0;

        const transform = `translateX(${pos.x + extra}px) scale(${pos.s})`;
        const hiddenBuffer = slotIndex === 5; // keep DOM buffer but hide visually

        // Migrate static layout/styling into Tailwind utility classes
        // keep dynamic transform/opacity/zIndex inline
        const className = `absolute top-0 left-1/2 -ml-[41px] w-[90px] h-[90px] bg-center bg-cover rounded-lg shadow-md slot-${slotIndex}`;
        const style = {
          backgroundImage: `url(${item.image})`,
          transform,
          opacity: hiddenBuffer ? 0 : pos.o,
          zIndex: pos.z,
          visibility: hiddenBuffer ? "hidden" : "visible",
          pointerEvents: hiddenBuffer ? "none" : undefined,
          transition: `transform ${moveMs}ms cubic-bezier(0.32,0.05,0.2,1), opacity ${Math.round(
            moveMs * 0.8
          )}ms ease-out`
        };

        return <article key={item.id} className={className} style={style}></article>;
      })}
    </section>
  );
}
