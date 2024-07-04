import { useStore } from "@nanostores/react"
import { lastUpdated } from "src/store"


export const LastUpdate = () => {
  const $lastUpdate = useStore(lastUpdated).split(',')[0];
  return (
    <span className="font-bold text-neutral-600">{$lastUpdate}</span>
  )
}