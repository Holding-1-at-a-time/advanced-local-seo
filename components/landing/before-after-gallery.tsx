"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BeforeAfterItem {
  before: string
  after: string
  title: string
  description?: string
}

interface BeforeAfterGalleryProps {
  items: BeforeAfterItem[]
  className?: string
}

export function BeforeAfterGallery({ items, className }: BeforeAfterGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const nextItem = () => setCurrentIndex((prev) => (prev + 1) % items.length)
  const prevItem = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)

  const currentItem = items[currentIndex]

  return (
    <section className={`border-y border-border bg-card py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">See the Transformation</h2>
          <p className="text-muted-foreground">Drag the slider to compare before and after</p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Comparison Slider */}
          <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl bg-secondary">
            {/* After Image (bottom layer) */}
            <Image
              src={currentItem.after || "/placeholder.svg"}
              alt={`After ${currentItem.title}`}
              fill
              className="object-cover"
            />

            {/* Before Image (top layer with clip) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={currentItem.before || "/placeholder.svg"}
                alt={`Before ${currentItem.title}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute bottom-0 top-0 w-1 cursor-ew-resize bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                <ChevronLeft className="h-4 w-4 text-gray-600" />
                <ChevronRight className="h-4 w-4 text-gray-600" />
              </div>
            </div>

            {/* Slider Input (invisible but interactive) */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
              aria-label="Before/After comparison slider"
            />

            {/* Labels */}
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-sm text-white">
              Before
            </div>
            <div className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground">
              After
            </div>
          </div>

          {/* Info & Navigation */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground">{currentItem.title}</h3>
              {currentItem.description && <p className="text-sm text-muted-foreground">{currentItem.description}</p>}
            </div>
            {items.length > 1 && (
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={prevItem} className="bg-transparent">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  {currentIndex + 1} / {items.length}
                </span>
                <Button variant="outline" size="icon" onClick={nextItem} className="bg-transparent">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
