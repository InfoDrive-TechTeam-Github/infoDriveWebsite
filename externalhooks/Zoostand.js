import { create } from "zustand";

export const useHeadStore = create((set) => ({
  description: "",
  title: "",
  handleHeadStore: (description, title) =>
    set((state) => ({ description, title })),
}));
