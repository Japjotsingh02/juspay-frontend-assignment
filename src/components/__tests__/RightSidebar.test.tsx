import { render, screen as rtlScreen } from '@testing-library/react';
import RightSidebar from '../RightSidebar/RightSidebar';
import { useDashboardStore } from '../../store/dashboardStore';

const screen = rtlScreen;

jest.mock('../../store/dashboardStore');

const mockUseDashboardStore = useDashboardStore as unknown as jest.MockedFunction<typeof useDashboardStore>;

describe('RightSidebar Component', () => {
  const mockNotifications = [
    {
      id: '1',
      type: 'bug',
      title: 'You have a bug that needs to be fixed.',
      time: 'Just now',
    },
    {
      id: '2',
      type: 'user',
      title: 'New user registered',
      time: '30 minutes ago',
    },
  ];

  const mockActivities = [
    {
      id: '1',
      icon: () => null,
      title: 'Activity 1',
      time: 'Just now',
    },
  ];

  const mockContacts = [
    {
      id: '1',
      name: 'John Doe',
      icon: () => null,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseDashboardStore.mockReturnValue({
      notifications: mockNotifications,
      activities: mockActivities,
      contacts: mockContacts,
      theme: 'light',
      setTheme: jest.fn(),
      refreshData: jest.fn(),
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
    });
  });

  it('should render right sidebar component', () => {
    const { container } = render(<RightSidebar />);
    const sidebar = container.querySelector('aside');
    expect(sidebar).toBeInTheDocument();
  });

  it('should render Notifications section', () => {
    render(<RightSidebar />);
    expect(screen.getByText('Notifications')).toBeInTheDocument();
  });

  it('should render Activities section', () => {
    render(<RightSidebar />);
    expect(screen.getByText('Activities')).toBeInTheDocument();
  });

  it('should render Contacts section', () => {
    render(<RightSidebar />);
    expect(screen.getByText('Contacts')).toBeInTheDocument();
  });

  it('should display notifications', () => {
    render(<RightSidebar />);
    expect(screen.getByText('You have a bug that needs to be fixed.')).toBeInTheDocument();
    expect(screen.getByText('New user registered')).toBeInTheDocument();
  });

  it('should display notification times', () => {
    render(<RightSidebar />);
    expect(screen.getByText('Just now')).toBeInTheDocument();
    expect(screen.getByText('30 minutes ago')).toBeInTheDocument();
  });

  it('should display activities', () => {
    render(<RightSidebar />);
    expect(screen.getByText('Activity 1')).toBeInTheDocument();
  });

  it('should display contacts', () => {
    render(<RightSidebar />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('should have slide-in animation class', () => {
    const { container } = render(<RightSidebar />);
    const sidebar = container.querySelector('aside');
    expect(sidebar?.className).toContain('animate-slideInRight');
  });

  it('should render correct number of notifications', () => {
    render(<RightSidebar />);
    const notifications = mockNotifications.map(n => screen.getByText(n.title));
    expect(notifications).toHaveLength(2);
  });
});

