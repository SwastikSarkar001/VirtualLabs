"use server"
import { revalidatePath } from "next/cache"

// In a real application, this would interact with a database
// For this example, we'll use a simple in-memory store to track favorites
const favoriteStore: Record<string, boolean> = {}

export async function toggleFavorite(
  courseId: string,
  currentState: boolean,
): Promise<{ success: boolean; isFavorite: boolean }> {
  try {
    // In a real app, you would update a database here
    // For this example, we'll just toggle the state in memory
    favoriteStore[courseId] = !currentState

    // Revalidate the path to refresh the UI
    revalidatePath("/learn/[id]")

    return {
      success: true,
      isFavorite: favoriteStore[courseId],
    }
  } catch (error) {
    console.error("Error toggling favorite:", error)
    return {
      success: false,
      isFavorite: currentState,
    }
  }
}

export async function getFavoriteStatus(courseId: string, defaultValue: boolean): Promise<boolean> {
  // In a real app, you would fetch this from a database
  // For this example, we'll use our in-memory store or fall back to the default
  return favoriteStore[courseId] !== undefined ? favoriteStore[courseId] : defaultValue
}

