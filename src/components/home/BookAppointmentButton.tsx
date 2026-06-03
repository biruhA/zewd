"use client";

export default function BookAppointmentButton() {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("open-consultation-modal"));
        }
      }}
      className="mt-10 bg-white text-[#121921] font-label tracking-[0.25em] text-xs uppercase px-12 py-4 rounded-none hover:bg-slate-100 active:bg-slate-200 transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95 font-semibold cursor-pointer"
    >
      BOOK APPOINTMENT
    </button>
  );
}
