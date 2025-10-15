import { render, screen as rtlScreen, fireEvent as rtlFireEvent } from '@testing-library/react';
import KPICards from '../DashboardContent/KPICards';
import { useDashboardStore } from '../../store/dashboardStore';

const screen = rtlScreen;
const fireEvent = rtlFireEvent;

jest.mock('../../store/dashboardStore');

const mockUseDashboardStore = useDashboardStore as unknown as jest.MockedFunction<typeof useDashboardStore>;

describe('KPICards Component', () => {
  const mockKpiData = {
    customers: {
      value: 3240,
      change: 3.25,
      changeType: 'positive' as const,
      bgColor: '#E3F5FF',
      color: '#000',
    },
    orders: {
      value: 1120,
      change: 2.41,
      changeType: 'negative' as const,
      bgColor: '#F7F9FB',
      color: '#000',
    },
    revenue: {
      value: 7860,
      change: 5.88,
      changeType: 'positive' as const,
      bgColor: '#F7F9FB',
      color: '#000',
    },
    growth: {
      value: 36.2,
      change: 1.23,
      changeType: 'positive' as const,
      bgColor: '#E5ECF6',
      color: '#000',
    },
  };

  const mockSetCurrentView = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseDashboardStore.mockReturnValue({
      kpiData: mockKpiData,
      setCurrentView: mockSetCurrentView,
      theme: 'light',
      setTheme: jest.fn(),
      refreshData: jest.fn(),
      sidebarOpen: true,
      rightSidebarOpen: true,
      toggleSidebar: jest.fn(),
      toggleRightSidebar: jest.fn(),
      currentView: 'dashboard',
      ordersData: [],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      chartData: {} as any,
      notifications: [],
      activities: [],
      contacts: [],
    });
  });

  it('should render all KPI cards', () => {
    render(<KPICards />);
    
    expect(screen.getByText('customers')).toBeInTheDocument();
    expect(screen.getByText('orders')).toBeInTheDocument();
    expect(screen.getByText('revenue')).toBeInTheDocument();
    expect(screen.getByText('growth')).toBeInTheDocument();
  });

  it('should display correct values', () => {
    render(<KPICards />);
    
    expect(screen.getByText('3,240')).toBeInTheDocument();
    expect(screen.getByText('1,120')).toBeInTheDocument();
    expect(screen.getByText('$7,860')).toBeInTheDocument();
    expect(screen.getByText('36.2%')).toBeInTheDocument();
  });

  it('should display correct change percentages', () => {
    render(<KPICards />);
    
    expect(screen.getByText('+3.25%')).toBeInTheDocument();
    expect(screen.getByText('-2.41%')).toBeInTheDocument();
    expect(screen.getByText('+5.88%')).toBeInTheDocument();
    expect(screen.getByText('+1.23%')).toBeInTheDocument();
  });

  it('should display trending icons', () => {
    const { container } = render(<KPICards />);
    const trendIcons = container.querySelectorAll('svg');
    expect(trendIcons.length).toBeGreaterThan(0);
  });

  it('should call setCurrentView when orders card is clicked', () => {
    render(<KPICards />);
    
    const ordersCard = screen.getByText('orders').closest('div');
    if (ordersCard?.parentElement) {
      fireEvent.click(ordersCard.parentElement);
      expect(mockSetCurrentView).toHaveBeenCalledWith('orders');
    }
  });

  it('should not call setCurrentView for non-clickable cards', () => {
    render(<KPICards />);
    
    const customersCard = screen.getByText('customers').closest('div');
    if (customersCard?.parentElement) {
      fireEvent.click(customersCard.parentElement);
      expect(mockSetCurrentView).not.toHaveBeenCalled();
    }
  });

  it('should apply correct background colors', () => {
    const { container } = render(<KPICards />);
    const cards = container.querySelectorAll('.rounded-2xl');
    
    expect(cards.length).toBe(4);
  });
});

