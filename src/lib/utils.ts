
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDirection(language: string) {
  return language === 'ar' ? 'rtl' : 'ltr';
}

export function handleEmptyArray<T>(array: T[] | null | undefined, fallback: T[]): T[] {
  if (!array || array.length === 0) {
    return fallback;
  }
  return array;
}

export function safelyGetItem<T>(array: T[] | null | undefined, index: number, fallback: T): T {
  if (!array || array.length <= index) {
    return fallback;
  }
  return array[index];
}

export function truncateText(text: string, maxLength: number): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}
