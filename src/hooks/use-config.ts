"use client";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { BaseColor } from "@/components/wizard/base-color";

type Style = {
  name: "new-york" | "default";
  label: string;
};

type Config = {
  style: Style["name"];
  theme: BaseColor["name"];
  radius: number;
};

const configAtom = atomWithStorage<Config>("config", {
  style: "default",
  theme: "zinc",
  radius: 0.5,
});

export function useConfig() {
  return useAtom(configAtom);
}
