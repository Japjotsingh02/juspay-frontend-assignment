import { create } from 'zustand';
import type { DashboardState } from '../types/dashboard.type';
import { mockActivities, mockNotifications, kpiMockData, mockOrders, mockContacts, mockChartData } from '../constants/dashboard.d';

export const useDashboardStore = create<DashboardState>((set) => ({
  // Initial state
  kpiData: kpiMockData,
  ordersData: mockOrders,
  chartData: mockChartData,
  notifications: mockNotifications,
  activities: mockActivities,
  contacts: mockContacts,
  sidebarOpen: true,
  theme: 'light',
  currentView: 'dashboard',

  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  
  setTheme: (theme) => set({ theme }),
  
  setCurrentView: (view) => set({ currentView: view }),
  
  refreshData: async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    set({
      kpiData: kpiMockData,
      ordersData: mockOrders,
      contacts: mockContacts,
      chartData: mockChartData,
      notifications: mockNotifications,
      activities: mockActivities,
    });
  }
}));
