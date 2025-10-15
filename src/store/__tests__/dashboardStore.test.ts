import { renderHook, act } from '@testing-library/react';
import { useDashboardStore } from '../dashboardStore';

describe('Dashboard Store', () => {
  beforeEach(() => {
    // Reset store state before each test
    const { result } = renderHook(() => useDashboardStore());
    act(() => {
      result.current.setTheme('light');
      result.current.setCurrentView('dashboard');
    });
  });

  describe('Theme Management', () => {
    it('should initialize with light theme', () => {
      const { result } = renderHook(() => useDashboardStore());
      expect(result.current.theme).toBe('light');
    });

    it('should toggle theme from light to dark', () => {
      const { result } = renderHook(() => useDashboardStore());
      
      act(() => {
        result.current.setTheme('dark');
      });

      expect(result.current.theme).toBe('dark');
    });

    it('should toggle theme from dark to light', () => {
      const { result } = renderHook(() => useDashboardStore());
      
      act(() => {
        result.current.setTheme('dark');
      });
      
      act(() => {
        result.current.setTheme('light');
      });

      expect(result.current.theme).toBe('light');
    });
  });

  describe('Sidebar Management', () => {
    it('should initialize with sidebars open', () => {
      const { result } = renderHook(() => useDashboardStore());
      expect(result.current.sidebarOpen).toBe(true);
      expect(result.current.rightSidebarOpen).toBe(true);
    });

    it('should toggle left sidebar', () => {
      const { result } = renderHook(() => useDashboardStore());
      
      act(() => {
        result.current.toggleSidebar();
      });

      expect(result.current.sidebarOpen).toBe(false);

      act(() => {
        result.current.toggleSidebar();
      });

      expect(result.current.sidebarOpen).toBe(true);
    });

    it('should toggle right sidebar', () => {
      const { result } = renderHook(() => useDashboardStore());
      
      act(() => {
        result.current.toggleRightSidebar();
      });

      expect(result.current.rightSidebarOpen).toBe(false);

      act(() => {
        result.current.toggleRightSidebar();
      });

      expect(result.current.rightSidebarOpen).toBe(true);
    });
  });

  describe('View Management', () => {
    it('should initialize with dashboard view', () => {
      const { result } = renderHook(() => useDashboardStore());
      expect(result.current.currentView).toBe('dashboard');
    });

    it('should switch to orders view', () => {
      const { result } = renderHook(() => useDashboardStore());
      
      act(() => {
        result.current.setCurrentView('orders');
      });

      expect(result.current.currentView).toBe('orders');
    });
  });

  describe('Data Refresh', () => {
    it('should refresh data', async () => {
      const { result } = renderHook(() => useDashboardStore());
      
      await act(async () => {
        await result.current.refreshData();
      });

      expect(result.current.kpiData).toBeDefined();
      expect(result.current.ordersData).toBeDefined();
      expect(result.current.chartData).toBeDefined();
    });
  });

  describe('Initial Data', () => {
    it('should have KPI data', () => {
      const { result } = renderHook(() => useDashboardStore());
      expect(result.current.kpiData).toHaveProperty('customers');
      expect(result.current.kpiData).toHaveProperty('orders');
      expect(result.current.kpiData).toHaveProperty('revenue');
      expect(result.current.kpiData).toHaveProperty('growth');
    });

    it('should have orders data', () => {
      const { result } = renderHook(() => useDashboardStore());
      expect(Array.isArray(result.current.ordersData)).toBe(true);
      expect(result.current.ordersData.length).toBeGreaterThan(0);
    });

    it('should have notifications', () => {
      const { result } = renderHook(() => useDashboardStore());
      expect(Array.isArray(result.current.notifications)).toBe(true);
    });

    it('should have activities', () => {
      const { result } = renderHook(() => useDashboardStore());
      expect(Array.isArray(result.current.activities)).toBe(true);
    });

    it('should have contacts', () => {
      const { result } = renderHook(() => useDashboardStore());
      expect(Array.isArray(result.current.contacts)).toBe(true);
    });
  });
});

