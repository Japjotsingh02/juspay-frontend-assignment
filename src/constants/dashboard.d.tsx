import type {
  Activity,
  ChartData,
  Contact,
  KPIData,
  MenuItem,
  NotificationType,
} from "../types/dashboard.type";
// Light theme icons
import DefaultIconLight from "../assets/light/default-icon.svg?react";
import EcommereIconLight from "../assets/light/ecommerce-icon.svg?react";
import ProjectsIconLight from "../assets/light/ecommerce-icon.svg?react";
import OnlineCoursesIconLight from "../assets/light/online-courses-icon.svg?react";
import AccountIconLight from "../assets/light/account-icon.svg?react";
import UserProfileIconLight from "../assets/light/user-profile-icon.svg?react";
import CorporateIconLight from "../assets/light/corporate-icon.svg?react";
import BlogIconLight from "../assets/light/blog-icon.svg?react";
import SocialIconLight from "../assets/light/social-icon.svg?react";

// Dark theme icons
import DefaultIconDark from "../assets/dark/default-icon.svg?react";
import EcommereIconDark from "../assets/dark/ecommerce-icon.svg?react";
import ProjectsIconDark from "../assets/dark/ecommerce-icon.svg?react";
import OnlineCoursesIconDark from "../assets/dark/online-courses-icon.svg?react";
import AccountIconDark from "../assets/dark/account-icon.svg?react";
import UserProfileIconDark from "../assets/dark/user-profile-icon.svg?react";
import CorporateIconDark from "../assets/dark/corporate-icon.svg?react";
import BlogIconDark from "../assets/dark/blog-icon.svg?react";
import SocialIconDark from "../assets/dark/social-icon.svg?react";

// Other icons without theme variants
import Contact1Icon from "../assets/contact1-image.svg?react";
import Contact2Icon from "../assets/contact2-image.svg?react";
import Contact3Icon from "../assets/contact3-image.svg?react";
import Contact4Icon from "../assets/contact4-image.svg?react";
import Contact5Icon from "../assets/contact5-image.svg?react";
import Contact6Icon from "../assets/contact6-image.svg?react";
import User1Icon from "../assets/user1-image.svg?react";
import User2Icon from "../assets/user2-image.svg?react";
import User3Icon from "../assets/user3-image.svg?react";
import User4Icon from "../assets/user4-image.svg?react";
import User5Icon from "../assets/user5-image.svg?react";

export const getMenuItems = (theme: "light" | "dark"): MenuItem[] => {
  const DefaultIcon = theme === "light" ? DefaultIconLight : DefaultIconDark;
  const EcommereIcon = theme === "light" ? EcommereIconLight : EcommereIconDark;
  const ProjectsIcon = theme === "light" ? ProjectsIconLight : ProjectsIconDark;
  const OnlineCoursesIcon = theme === "light" ? OnlineCoursesIconLight : OnlineCoursesIconDark;
  const UserProfileIcon = theme === "light" ? UserProfileIconLight : UserProfileIconDark;
  const AccountIcon = theme === "light" ? AccountIconLight : AccountIconDark;
  const CorporateIcon = theme === "light" ? CorporateIconLight : CorporateIconDark;
  const BlogIcon = theme === "light" ? BlogIconLight : BlogIconDark;
  const SocialIcon = theme === "light" ? SocialIconLight : SocialIconDark;

  return [
    {
      id: "favorites",
      label: "Favorites",
      children: [
        {
          id: "overview",
          label: "Overview",
          // path: "/favorites/overview",
        },
        {
          id: "projects",
          label: "Projects",
          // path: "/favorites/projects",
        },
      ],
    },
    {
      id: "dashboards",
      label: "Dashboards",
      children: [
        {
          id: "default",
          label: "Default",
          icon: <DefaultIcon className="w-4 h-4" />,
          path: "/dashboards/default",
        },
        {
          id: "ecommerce",
          label: "eCommerce",
          icon: <EcommereIcon className="w-4 h-4" />,
          // path: "/dashboards/ecommerce",
          children: [
            {
              id: "sub-menu-1-ecommerce",
              label: "Sub Menu",
            },
          ],
        },
        {
          id: "projects-dash",
          label: "Projects",
          icon: <ProjectsIcon className="w-4 h-4" />,
          // path: "/dashboards/projects",
          children: [
            {
              id: "sub-menu-1-projects",
              label: "Sub Menu",
            },
          ],
        },
        {
          id: "courses",
          label: "Online Courses",
          icon: <OnlineCoursesIcon className="w-4 h-4" />,
          // path: "/dashboards/courses",
          children: [
            {
              id: "sub-menu-1-courses",
              label: "Sub Menu",
            },
          ],
        },
      ],
    },
    {
      id: "pages",
      label: "Pages",
      children: [
        {
          id: "user-profile",
          label: "User Profile",
          icon: <UserProfileIcon className="w-4 h-4" />,
          children: [
            {
              id: "profile-overview",
              label: "Overview",
              // path: "/pages/user-profile/overview",
            },
            {
              id: "profile-projects",
              label: "Projects",
              // path: "/pages/user-profile/projects",
            },
            {
              id: "campaigns",
              label: "Campaigns",
              // path: "/pages/user-profile/campaigns",
            },
            {
              id: "documents",
              label: "Documents",
              // path: "/pages/user-profile/documents",
            },
            {
              id: "followers",
              label: "Followers",
              // path: "/pages/followers",
            },
          ],
        },
        {
          id: "account",
          label: "Account",
          icon: <AccountIcon className="w-4 h-4" />,
          children: [
            {
              id: "sub-menu-1-account",
              label: "Sub Menu",
            },
          ],
        },
        {
          id: "corporate",
          label: "Corporate",
          icon: <CorporateIcon className="w-4 h-4" />,
          children: [
            {
              id: "sub-menu-1-corporate",
              label: "Sub Menu",
            },
          ],
        },
        {
          id: "blog",
          label: "Blog",
          icon: <BlogIcon className="w-4 h-4" />,
          children: [
            {
              id: "sub-menu-1-blog",
              label: "Sub Menu",
            },
          ],
        },
        {
          id: "social",
          label: "Social",
          icon: <SocialIcon className="w-4 h-4" />,
          children: [
            {
              id: "sub-menu-1-social",
              label: "Sub Menu",
            },
          ],
        },
      ],
    },
  ];
};

export const statusColor: Record<string, string> = {
  "In Progress": "text-[#8A8CD9]",
  Complete: "text-[#4AA785]",
  Pending: "text-[#59A8D4]",
  Approved: "text-[#FFC555]",
  Rejected: "text-app-40",
};

export const kpiMockData: KPIData = {
  customers: {
    value: 3240,
    change: 3.25,
    changeType: "positive" as const,
    bgColor: "#E3F5FF",
  },
  orders: {
    value: 1120,
    change: 2.41,
    changeType: "negative" as const,
    bgColor: "#F7F9FB",
  },
  revenue: {
    value: 7860,
    change: 5.88,
    changeType: "positive" as const,
    bgColor: "#F7F9FB",
  },
  growth: {
    value: 36.2,
    change: 1.23,
    changeType: "positive" as const,
    bgColor: "#E5ECF6",
  },
};

export const mockOrders = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: Contact1Icon },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: Contact2Icon },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: Contact3Icon },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: Contact4Icon },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: Contact5Icon },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9806",
    user: { name: "Andi Lane", avatar: Contact5Icon },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9807",
    user: { name: "Koray Okumos", avatar: Contact6Icon },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9808",
    user: { name: "Natali Craig", avatar: Contact1Icon },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9809",
    user: { name: "Kate Morrison", avatar: Contact2Icon },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9810",
    user: { name: "Drew Cano", avatar: Contact3Icon },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9811",
    user: { name: "Orlando Diggs", avatar: Contact4Icon },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9812",
    user: { name: "Andi Lane", avatar: Contact5Icon },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9813",
    user: { name: "Andi Lane", avatar: Contact5Icon },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9814",
    user: { name: "Koray Okumos", avatar: Contact6Icon },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

export const mockChartData: ChartData = {
  totalSales: [
    { name: "Direct", value: 300.56, color: "#1c1c1c" },
    { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
    { name: "Sponsored", value: 154.02, color: "#95A4FC" },
    { name: "E-mail", value: 48.96, color: "#B1E3FF" },
  ],
  revenue: {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    previousWeek: [7, 16, 12, 10, 14, 22],
    currentWeek: [12, 8, 10, 15, 20, 19],
  },
  projections: {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    projections: [22, 27, 23, 29, 19, 25],
    actuals: [17, 21, 16, 23, 12, 19],
  },
  locations: [
    { name: "New York", value: 72, coords: [-74.006, 40.7128] },
    { name: "San Francisco", value: 39, coords: [-122.4194, 37.7749] },
    { name: "Sydney", value: 25, coords: [151.2093, -33.8688] },
    { name: "Singapore", value: 61, coords: [103.8198, 1.3521] },
  ],

};

export const mockNotifications: NotificationType[] = [
  {
    id: "1",
    type: "bug",
    title: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
  {
    id: "2",
    type: "user",
    title: "New user registered",
    time: "30 minutes ago",
  },
  {
    id: "3",
    type: "bug",
    title: "You have a bug that needs to be fixed",
    time: "12 hours ago",
  },
  {
    id: "4",
    type: "subscription",
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

export const mockActivities: Activity[] = [
  {
    id: "1",
    icon: User1Icon,
    title: "You have a bug that needs to be fixed",
    time: "Just now",
  },
  {
    id: "2",
    icon: User2Icon,
    title: "Released a new version",
    time: "59 minutes ago",
  },
  {
    id: "3",
    icon: User3Icon,
    title: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    id: "4",
    icon: User4Icon,
    title: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    id: "5",
    icon: User5Icon,
    title: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

export const mockContacts: Contact[] = [
  {
    id: "1",
    name: "Natali Craig",
    icon: Contact1Icon,
  },
  {
    id: "2",
    name: "Kate Morrison",
    icon: Contact2Icon,
  },
  {
    id: "3",
    name: "Drew Cano",
    icon: Contact3Icon,
  },
  {
    id: "4",
    name: "Orlando Diggs",
    icon: Contact4Icon,
  },
  {
    id: "5",
    name: "Andi Lane",
    icon: Contact5Icon,
  },
  {
    id: "6",
    name: "Koray Okumos",
    icon: Contact6Icon,
  },
];
