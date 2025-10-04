import type { ClassValue } from "clsx";
import clsx from "clsx";

import { twMerge } from "../twMerge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
