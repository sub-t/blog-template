import create from 'zustand';

type State = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useStore = create<State>((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open })),
}));
