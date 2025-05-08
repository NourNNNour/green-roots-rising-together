
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

export function formatDate(date: string | Date): string {
  if (!date) return '';
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return String(date);
  }
}

export function calculateReadingTime(text: string): number {
  if (!text) return 0;
  
  // Average reading speed: 200 words per minute
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
