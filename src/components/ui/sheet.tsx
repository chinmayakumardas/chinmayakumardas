"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-[55] bg-black/30 transition-opacity duration-500 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  )
}

type SheetSide = "top" | "right" | "bottom" | "left"

const sideClasses: Record<SheetSide, string> = {
  // "top" reveals downward (clip-path) so it feels like the header itself drops open
  top: "inset-x-0 top-0 max-h-[100dvh] [clip-path:inset(0_0_0_0)] transition-[clip-path] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:[clip-path:inset(0_0_100%_0)] data-ending-style:[clip-path:inset(0_0_100%_0)] data-ending-style:duration-[400ms]",
  bottom:
    "inset-x-0 bottom-0 max-h-[100dvh] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:translate-y-full data-ending-style:translate-y-full",
  left: "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:-translate-x-full data-ending-style:-translate-x-full",
  right:
    "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:translate-x-full data-ending-style:translate-x-full",
}

function SheetContent({
  className,
  children,
  side = "right",
  overlayProps,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: SheetSide
  overlayProps?: SheetPrimitive.Backdrop.Props
}) {
  return (
    <SheetPortal>
      <SheetOverlay {...overlayProps} />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "group/sheet fixed z-[60] flex flex-col bg-popover text-popover-foreground outline-none motion-reduce:transition-none",
          sideClasses[side],
          className
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-heading text-base font-medium text-foreground", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
