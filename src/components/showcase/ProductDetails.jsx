import React from "react";

function DetailBody({ data }) {
  const breakdownRows =
    data?.breakdownRows ??
    [{ name: "Nitrate", amount: "0.75 mg/L", badge: "5x limit" }];

  return (
    <>
      <section className="product-panel bg-white rounded-2xl shadow-lg p-3">
        <div className="panel-handle w-11 h-1.5 mx-auto mb-2 rounded-full bg-gray-300 shadow-sm" aria-hidden="true"></div>

        <div className="grid grid-cols-[58px_1fr] gap-3 items-start">
          <div className="w-[58px] h-[92px] rounded-sm bg-center bg-cover border border-[#d9e5ce] shadow-sm" style={{ backgroundImage: `url(${data?.thumb})` }}></div>

          <div className="min-w-0">
            <h1 className="m-0 text-[22px] leading-[1.08] font-extrabold tracking-[-0.9px] max-w-[215px]">{data?.name}</h1>
            <div className="flex items-center gap-2 flex-wrap mt-2 text-sm">
              <span className="text-muted text-[14px] font-medium text-gray-500">{data?.brand}</span>
              <span className="text-[11px] text-red-600 italic font-bold bg-[#f7f2f2] rounded-full px-2 py-0.5">{data?.tagBrand}</span>
            </div>

            <div className="flex justify-between items-center gap-3 mt-3 text-base">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 flex-shrink-0"></span>
                <div className="flex flex-col gap-0">
                  <span className="text-xl font-extrabold leading-none">{data?.score}/100</span>
                  <span className="text-xs text-gray-500">{data?.status}</span>
                </div>
              </div>

              <div className="flex gap-3 text-gray-500 text-lg" aria-hidden="true">
                <span>♡</span>
                <span>↪</span>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-4">
          <h3 className="m-0 text-[20px] leading-[1.1] font-extrabold tracking-[-0.6px]">Breakdown</h3>

          <div className="mt-3 bg-[#fafafa] rounded-lg border border-[#ececec] shadow-sm p-3">
            {breakdownRows.map((row) => (
              <div className="flex justify-between items-start gap-3" key={row.name}>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="font-bold text-[14px] text-gray-800">{row.name}</span>
                  <span className="text-sm text-gray-600">{row.amount}</span>
                </div>
                <span className="text-xs font-bold text-[#d07a6d] bg-[#fceceb] rounded px-2 py-1 whitespace-nowrap">{row.badge}</span>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="mt-4 rounded-lg bg-[#f8f8f8] border border-[#ececec] shadow-sm p-3">
        <header className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8dc06d] to-[#6ea75d]"></div>
          <h2 className="m-0 text-lg">Oliver Says:</h2>
        </header>

        <p className="mt-2 text-sm text-gray-800">"{data?.oliver}"</p>
      </section>
    </>
  );
}

export default function ProductDetails({ currentId, currentData, incomingId, incomingData, isTransitioning }) {
  return (
    <section className={`details-stage ${isTransitioning ? "transitioning" : ""}`}>
      <div
        key={currentId}
        className={`details-layer ${incomingData ? "leaving" : ""}`}
        aria-hidden={Boolean(incomingData)}
      >
        <DetailBody data={currentData} />
      </div>

      {incomingData ? (
        <div key={incomingId} className={`details-layer incoming ${isTransitioning ? "entering" : ""}`}>
          <DetailBody data={incomingData} />
        </div>
      ) : null}
    </section>
  );
}
