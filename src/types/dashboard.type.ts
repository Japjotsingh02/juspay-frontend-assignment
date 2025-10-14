export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  isActive?: boolean;
  path?: string;
}

export interface OrdersData {
  id: string;
  user: { name: string; avatar: React.FC<React.SVGProps<SVGSVGElement>>; };
  project: string;
  address: string;
  date: string;
  status: string;
}

export interface KPIData {
  customers: {
    value: number;
    change: number;
    changeType: "positive" | "negative";
    bgColor: string;
  };
  orders: {
    value: number;
    change: number;
    changeType: "positive" | "negative";
    bgColor: string;
  };
  revenue: {
    value: number;
    change: number;
    changeType: "positive" | "negative";
    bgColor: string;
  };
  growth: {
    value: number;
    change: number;
    changeType: "positive" | "negative";
    bgColor: string;
  };
}

export interface Location {
  name: string;
  value: number;
}

export interface Revenue {
  months: string[];
  previousWeek: number[];
  currentWeek: number[];
};

export interface TotalSalesItem { 
  name: string; 
  value: number;
  color: string;
}

export interface Projections {
  months: string[];
  projections: number[];
  actuals: number[];
};

export interface ChartData {
  totalSales: TotalSalesItem[];
  revenue: Revenue;
  projections: Projections;
  locations: Array<Location>;
}

export interface NotificationType {
  id: string;
  type: "bug" | "user" | "subscription";
  title: string;
  time: string;
}

export interface Activity {
  id: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  time: string;
}

export interface Contact {
  id: string;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface DashboardState {
  kpiData: KPIData;
  ordersData: OrdersData[];
  chartData: ChartData;
  notifications: NotificationType[];
  activities: Activity[];
  contacts: Contact[];

  sidebarOpen: boolean;
  theme: "light" | "dark";
  currentView: "dashboard" | "orders";

  toggleSidebar: () => void;
  setTheme: (theme: "light" | "dark") => void;
  refreshData: () => Promise<void>;
  setCurrentView: (view: "dashboard" | "orders") => void;
}
