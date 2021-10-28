import create from "zustand";

const useRegisterStepper = create((set, state) => ({
  total: 4,
  current: 1,
  setStep: (step) => set(() => ({ current: step })),
  next: () => set((state) => ({ current: state.current + 1 })),
  previous: () => set((state) => ({ current: state.current - 1 })),
  isLast: () => (state().current === state().total ? true : false),
  isFirst: () => (state().current === 1 ? true : false),
}));

export { useRegisterStepper };
