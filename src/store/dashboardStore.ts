import { create } from "zustand";
import type { DashboardState } from "../types/dashboard.type";
import {
  mockActivities,
  mockNotifications,
  kpiMockData,
  mockOrders,
  mockContacts,
  mockChartData,
} from "../constants/dashboard.d";

export const useDashboardStore = create<DashboardState>((set) => ({
  kpiData: kpiMockData,
  ordersData: mockOrders,
  chartData: mockChartData,
  notifications: mockNotifications,
  activities: mockActivities,
  contacts: mockContacts,
  sidebarOpen: true,
  rightSidebarOpen: true,
  theme: "light",
  currentView: "dashboard",

  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleRightSidebar: () =>
    set((state) => ({ rightSidebarOpen: !state.rightSidebarOpen })),
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('dark', newTheme === 'light')
      localStorage.setItem('theme', newTheme)
      return { theme: newTheme }
    })
  },
  setTheme:  (theme) => {
    set(() => {
      document.documentElement.classList.toggle('dark', theme === 'dark')
      localStorage.setItem('theme', theme)
      return { theme: theme }
    })
  },
  setCurrentView: (view) => set({ currentView: view }),
  refreshData: async () => {
    // to simulate like API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      kpiData: kpiMockData,
      ordersData: mockOrders,
      contacts: mockContacts,
      chartData: mockChartData,
      notifications: mockNotifications,
      activities: mockActivities,
    });
  },
}));
