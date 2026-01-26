import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  userId: string | null;
  stars: number;
  completedLessons: string[];
  setUser: (id: string) => void;
  addStars: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
  reset: () => void;
}

const initialState = {
  userId: null,
  stars: 0,
  completedLessons: [],
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,

      setUser: (id) => set({ userId: id }),

      addStars: (amount) =>
        set((state) => ({
          stars: state.stars + amount,
        })),

      completeLesson: (lessonId) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
        })),

      reset: () => set(initialState),
    }),
    { name: 'hola-user-storage' }
  )
);
