"use client"
import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { BaseColor } from "@/components/wizard/base-color"

const styles = [
  {
    name: "new-york",
    label: "New York",
  },
  {
    name: "default",
    label: "Default",
  },
] as const // Use `as const` to derive literal types

type Style = (typeof styles)[number]

type Config = {
  style: Style["name"]
  theme: BaseColor["name"]
  radius: number
}

const configAtom = atomWithStorage<Config>("config", {
  style: "default",
  theme: "zinc",
  radius: 0.5,
})

export function useConfig() {
  return useAtom(configAtom)
}
