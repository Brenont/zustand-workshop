import create from "zustand";

export const useStepper = create((set, get) => ({
  current: 1,
  total: 4,
  next: () => set((state) => ({ current: state.current + 1 })),
  previous: () => set((state) => ({ current: state.current - 1 })),
  isFirst: () => get().current === 1,
  isLast: () => get().current === get().total,
}));
