import { create } from "zustand";
import { persist } from "zustand/middleware";

// export type dashboardContent ="dashboardPage" | "FindPro";

export type tabFeatures = 
  | "Simple-Bookmarking" 
  | "Speedy-Searching" 
  | "Easy-Sharing";

 




type TabFeatureProps = {
  openTab: tabFeatures;
  setOpenTab: (value: tabFeatures) => void;
  toggle: ()=> void;
  isOpen: boolean;
};

export const useTabFeatureStore = create<TabFeatureProps>()(
  persist( (set) => ({
    isOpen: false,
  openTab: "Simple-Bookmarking", // Default state
   toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpenTab: (value) => set({ openTab: value }),
}),{ name: "tab-features-content-storage" }
)
);