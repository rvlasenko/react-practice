import Dice1 from "./assets/dice-1.svg"
import Dice2 from "./assets/dice-2.svg"
import Dice3 from "./assets/dice-3.svg"
import Dice4 from "./assets/dice-4.svg"
import Dice5 from "./assets/dice-5.svg"
import Dice6 from "./assets/dice-6.svg"

const MAP: { [k: number]: string } = {
  1: Dice1,
  2: Dice2,
  3: Dice3,
  4: Dice4,
  5: Dice5,
  6: Dice6,
}

export default function Dice({ value }: { value: number }) {
  const dice = MAP[value]

  if (!dice) return null

  return <img src={dice} alt={`Die showing ${value}`} className="w-16 h-16" />
}
