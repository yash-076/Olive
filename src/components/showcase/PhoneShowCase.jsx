import React, { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel.jsx";
import ProductDetails from "./ProductDetails.jsx";
import "./PhoneShowCase.css";

export default function PhoneShowCase({ productData, carouselItems }) {
  const [slots, setSlots] = useState(carouselItems);
  const [isMoving, setIsMoving] = useState(false);
  const transitionTimerRef = useRef(null);

  const [displayedId, setDisplayedId] = useState(slots[2].id);
  const [incomingId, setIncomingId] = useState(null);
  const [isPanelTransitioning, setIsPanelTransitioning] = useState(false);
  const displayedData = productData[displayedId];
  const incomingData = incomingId ? productData[incomingId] : null;

  const MOVE_MS = 1100; // carousel movement duration (ms)
  const PAUSE_MS = 1100; // pause between moves (ms)
  const TRANS_MS = 1500; // details panel animation duration (ms)
  const ROTATE_DELAY = 300; // delay before carousel rotates (ms)

  useEffect(() => {
    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = null;
    }

    // Trigger panel animation when carousel rotation happens (synced with carousel movement)
    if (isMoving) {
      // The new center item will be at slots[3] after the rotation (which happens at ROTATE_DELAY)
      const nextId = slots[3]?.id;
      if (nextId && nextId !== displayedId) {
        // Delay the panel animation to match when the carousel actually rotates
        transitionTimerRef.current = setTimeout(() => {
          setIncomingId(nextId);
          setIsPanelTransitioning(true);

          const innerTimer = setTimeout(() => {
          setDisplayedId(nextId);
          setIncomingId(null);
          setIsPanelTransitioning(false);
            transitionTimerRef.current = null;
          }, TRANS_MS);

          transitionTimerRef.current = innerTimer;
        }, ROTATE_DELAY);
      }
      return undefined;
    }

    return undefined;
  }, [isMoving, displayedId]);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;
    let startTimer;
    let moveTimer;
    let pauseTimer;

    const runStep = () => {
      if (isCancelled) return;

      setIsMoving(true);

      const rotateDelay = 300;
      const rotateTimer = setTimeout(() => {
        setSlots((prev) => {
          const wrappedItem = prev[0];
          return [...prev.slice(1), wrappedItem];
        });

        moveTimer = setTimeout(() => {
          if (isCancelled) return;
          setIsMoving(false);
          pauseTimer = setTimeout(runStep, PAUSE_MS);
        }, MOVE_MS);
      }, rotateDelay);

      return () => clearTimeout(rotateTimer);
    };

    startTimer = setTimeout(runStep, 700);

    return () => {
      isCancelled = true;
      clearTimeout(startTimer);
      clearTimeout(moveTimer);
      clearTimeout(pauseTimer);
    };
  }, []);

  return (
    <main className="phone-showcase-root w-full max-w-[860px] relative grid place-items-center px-3 py-4">
      <div className="w-[376px] rounded-[50px] bg-[var(--phone)] border-[15px] border-[var(--frame)] shadow-[0_16px_42px_rgba(47,57,53,0.12)] overflow-visible">
        <section className="p-3 rounded-[50px] min-h-[734px]" style={{ background: 'linear-gradient(180deg, #fbfbfb 0%, #f6f7f5 54%, #f3f4f2 100%)' }}>
          <div className="flex justify-center mt-[2px]">
            <div className="w-[126px] h-[32px] rounded-[17px] bg-black relative">
              <div className="w-[23px] h-[23px] rounded-full absolute right-[7px] top-[4px]" style={{ background: 'radial-gradient(circle at 35% 35%, #1d1d1d, #050505 65%)', border: '2px solid #242424' }}></div>
            </div>
          </div>

          <Carousel slots={slots} isMoving={isMoving} />

          <ProductDetails
            currentId={displayedId}
            currentData={displayedData}
            incomingId={incomingId}
            incomingData={incomingData}
            isTransitioning={isPanelTransitioning}
          />
        </section>
      </div>
    </main>
  );
}
