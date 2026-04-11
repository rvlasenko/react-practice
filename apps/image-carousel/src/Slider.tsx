import { useEffect, useState } from "react"

const SLIDER_INTERVAL = 3000

const images = [
  { url: "https://placecats.com/neo/700/400", alt: "Neo" },
  { url: "https://placecats.com/millie/700/400", alt: "Millie" },
  { url: "https://placecats.com/millie_neo/700/400", alt: "Millie and Neo" },
  { url: "https://placecats.com/neo_banana/700/400", alt: "Neo with banana" },
  { url: "https://placecats.com/neo_2/700/400", alt: "Another Neo" },
]

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= images.length - 1) return 0
      return prev + 1
    })
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return images.length - 1
      return prev - 1
    })
  }

  const handleSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const id = setInterval(handleNext, SLIDER_INTERVAL)
    return () => clearInterval(id)
  }, [currentIndex])

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-lg">
        <div className="aspect-[7/4] w-full">
          {images.map((image, index) => (
            <img
              key={image.url}
              src={image.url}
              alt={image.alt}
              hidden={index !== currentIndex}
              className="h-full w-full object-cover"
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={handlePrev}
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
        >
          ‹
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={handleNext}
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image.url}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleSlide(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === currentIndex
                ? "bg-neutral-800 scale-110"
                : "bg-neutral-300 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
