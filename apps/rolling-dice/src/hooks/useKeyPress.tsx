import { useEffect } from "react"

export function useKeyPress(callback: () => void, keycodes: string[]): void {
  const handler = ({ code }: KeyboardEvent) => {
    if (keycodes.includes(code)) {
      callback()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handler)

    return () => window.removeEventListener("keydown", handler)
  }, [])
}
