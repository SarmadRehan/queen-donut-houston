"use client";

import { createContext, useCallback, useContext, useRef } from "react";

import { phoneHref, shop } from "@/data/shop";

import { Sprinkles } from "./Sprinkles";

const OrderDialogContext = createContext<(() => void) | null>(null);

/** Renders the single "order ahead coming soon" dialog shared by every order button. */
export function OrderDialogProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = useCallback(() => dialogRef.current?.showModal(), []);
  const close = () => dialogRef.current?.close();

  return (
    <OrderDialogContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="order-dialog-title"
        aria-describedby="order-dialog-description"
        className="m-auto w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-3xl bg-cream p-0 text-ink shadow-2xl backdrop:bg-cocoa-deep/80 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          // Clicks on the backdrop land on the <dialog> itself, not its content.
          if (event.target === event.currentTarget) close();
        }}
      >
        <Sprinkles />
        <div className="p-8 text-center">
          <p className="font-script text-3xl text-berry">Coming soon</p>
          <h2 id="order-dialog-title" className="mt-1 font-display text-3xl text-cocoa">
            Order Ahead
          </h2>
          <p id="order-dialog-description" className="mt-4 leading-relaxed text-muted">
            Online ordering for dozens and kolaches isn&apos;t available just yet. Give us a call and
            we&apos;ll have your box ready when you get here.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={phoneHref(shop.phone)}
              className="rounded-full bg-berry px-6 py-3 font-bold text-cream transition-colors hover:bg-berry-deep"
            >
              Call {shop.phone}
            </a>
            <button
              type="button"
              autoFocus
              onClick={close}
              className="rounded-full border-2 border-cocoa/25 px-6 py-3 font-bold transition-colors hover:border-cocoa"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </OrderDialogContext.Provider>
  );
}

type OrderButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export function OrderButton({ className, children }: OrderButtonProps) {
  const openDialog = useContext(OrderDialogContext);
  if (!openDialog) throw new Error("OrderButton must be rendered inside OrderDialogProvider");

  return (
    <button type="button" aria-haspopup="dialog" className={className} onClick={openDialog}>
      {children}
    </button>
  );
}
