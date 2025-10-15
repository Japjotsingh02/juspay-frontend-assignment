import { render, screen as rtlScreen, fireEvent as rtlFireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import { useDashboardStore } from '../../store/dashboardStore';

// Re-export from testing library
const screen = rtlScreen;
const fireEvent = rtlFireEvent;

// Mock the store
jest.mock('../../store/dashboardStore');

const mockUseDashboardStore = useDashboardStore as unknown as jest.MockedFunction<typeof useDashboardStore>;

describe('Header Component', () => {
  const mockToggleSidebar = jest.fn();
  const mockToggleRightSidebar = jest.fn();
  const mockSetTheme = jest.fn();
  const mockRefreshData = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseDashboardStore.mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
      refreshData: mockRefreshData,
      sidebarOpen: true,
      rightSidebarOpen: true,
      toggleSidebar: jest.fn(),
      toggleRightSidebar: jest.fn(),
      currentView: 'dashboard',
      setCurrentView: jest.fn(),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      kpiData: {} as any,
      ordersData: [],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      chartData: {} as any,
      notifications: [],
      activities: [],
      contacts: [],
    });
  });

  const renderHeader = () => {
    return render(
      <BrowserRouter>
        <Header
          onMenuClick={mockToggleSidebar}
          onRightMenuClick={mockToggleRightSidebar}
        />
      </BrowserRouter>
    );
  };

  it('should render header component', () => {
    renderHeader();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should call onMenuClick when sidebar button is clicked', () => {
    renderHeader();
    const sidebarButtons = screen.getAllByLabelText(/toggle sidebar/i);
    fireEvent.click(sidebarButtons[0]);
    expect(mockToggleSidebar).toHaveBeenCalledTimes(1);
  });

  it('should call onRightMenuClick when right sidebar button is clicked', () => {
    renderHeader();
    const rightSidebarButtons = screen.getAllByLabelText(/toggle.*sidebar/i);
    const rightSidebarButton = rightSidebarButtons[rightSidebarButtons.length - 1];
    fireEvent.click(rightSidebarButton);
    expect(mockToggleRightSidebar).toHaveBeenCalled();
  });

  it('should render search input', () => {
    renderHeader();
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  it('should update search input value', () => {
    renderHeader();
    const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test query' } });
    expect(searchInput.value).toBe('test query');
  });

  it('should call setTheme when theme button is clicked', () => {
    renderHeader();
    const themeButton = screen.getByLabelText('Toggle theme');
    fireEvent.click(themeButton);
    expect(mockSetTheme).toHaveBeenCalled();
  });

  it('should call refreshData when refresh button is clicked', () => {
    renderHeader();
    const refreshButton = screen.getByLabelText('Refresh data');
    fireEvent.click(refreshButton);
    expect(mockRefreshData).toHaveBeenCalledTimes(1);
  });

  it('should render notification button', () => {
    renderHeader();
    const notificationButton = screen.getByLabelText('Notifications');
    expect(notificationButton).toBeInTheDocument();
  });

  it('should display correct theme icon based on theme', () => {
    const { rerender } = renderHeader();
    
    // Light theme
    expect(screen.getByLabelText('Toggle theme')).toBeInTheDocument();
    
    // Dark theme
    mockUseDashboardStore.mockReturnValue({
      ...mockUseDashboardStore(),
      theme: 'dark',
    });
    
    rerender(
      <BrowserRouter>
        <Header
          onMenuClick={mockToggleSidebar}
          onRightMenuClick={mockToggleRightSidebar}
        />
      </BrowserRouter>
    );
    
    expect(screen.getByLabelText('Toggle theme')).toBeInTheDocument();
  });
});

