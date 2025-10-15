# 📊 eCommerce Dashboard - Juspay Frontend Assignment

A modern, responsive, and feature-rich eCommerce dashboard built with React, TypeScript, and Tailwind CSS. This dashboard provides comprehensive data visualization, real-time metrics, and an intuitive user interface.

![Dashboard Preview](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.14-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🎨 UI/UX Features
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between light and dark themes with smooth transitions
- **Smooth Animations**: Beautiful slide-in animations for sidebars and components
- **Custom Scrollbars**: Styled scrollbars that adapt to the current theme
- **Interactive Charts**: Dynamic charts powered by ECharts with hover effects
- **Collapsible Sidebars**: Toggle left and right sidebars for focused viewing

### 📈 Dashboard Components
- **KPI Cards**: Display key metrics (Customers, Orders, Revenue, Growth)
  - Clickable cards with hover effects
  - Positive/negative trend indicators
  - Real-time data updates

- **Interactive Charts**:
  - **Revenue Chart**: Line chart with current/previous week comparison
  - **Projections vs Actuals**: Bar chart for financial forecasting
  - **Total Sales**: Donut chart with category breakdown
  - **Revenue by Location**: World map with scatter plot markers

- **Orders Table**:
  - Sortable columns
  - Filterable by status
  - Searchable by user/project
  - Pagination support
  - Row selection

- **Activity Feed**: Real-time notifications and activities
- **Contacts**: Quick access to team members

### 🛠️ Technical Features
- **State Management**: Zustand for efficient global state management
- **Type Safety**: Full TypeScript implementation
- **Routing**: React Router for navigation
- **Testing**: Comprehensive test suite with Jest and React Testing Library
- **Code Quality**: ESLint and Prettier configuration
- **Performance**: Optimized chart rendering with lazy loading

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/juspay-frontend-assignment.git
   cd juspay-frontend-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Generate Coverage Report
```bash
npm run test:coverage
```

### Test Coverage
The project includes comprehensive tests for:
- ✅ Store (Zustand state management)
- ✅ Components (Header, KPICards, etc.)
- ✅ Theme toggling
- ✅ Sidebar interactions
- ✅ User interactions

## 📁 Project Structure

```
juspay-frontend-assignment/
├── public/
│   └── maps/
│       └── world.json           # World map GeoJSON
├── src/
│   ├── assets/                  # SVG icons and images
│   │   ├── dark/               # Dark theme icons
│   │   └── light/              # Light theme icons
│   ├── components/
│   │   ├── Breadcrumb/         # Navigation breadcrumb
│   │   ├── Charts/             # Chart components (ECharts)
│   │   ├── DashboardContent/   # Main dashboard layout
│   │   ├── Header/             # Top navigation bar
│   │   ├── RightSidebar/       # Notifications & activities
│   │   ├── Sidebar/            # Left navigation menu
│   │   └── Tables/             # Data tables
│   ├── constants/              # Mock data and constants
│   ├── pages/                  # Page components
│   ├── store/                  # Zustand store
│   ├── types/                  # TypeScript type definitions
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # Global styles
│   └── main.tsx               # App entry point
├── jest.config.ts              # Jest configuration
├── jest.setup.ts               # Jest setup file
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── package.json               # Dependencies and scripts
```

## 🎯 Key Components

### Dashboard Store (`src/store/dashboardStore.ts`)
Manages global state using Zustand:
- Theme (light/dark)
- Sidebar visibility
- Current view
- Dashboard data (KPIs, orders, charts)

### Header Component
- Search functionality
- Theme toggle
- Refresh data button
- Sidebar toggles
- Breadcrumb navigation

### Charts
All charts are built with ECharts and support:
- Responsive resizing
- Theme-aware colors
- Smooth animations
- Interactive tooltips

### Tables
- **OrdersTable**: Full-featured data table with:
  - Search
  - Filtering
  - Sorting
  - Pagination
  - Row selection

## 🎨 Theming

The application supports both light and dark themes:

### Light Theme
- Clean, professional appearance
- Light backgrounds (#FFFFFF, #F7F9FB)
- Dark text for optimal readability

### Dark Theme
- Modern dark interface
- Dark backgrounds (#1C1C1C)
- Light text with reduced opacity for hierarchy

### Theme Toggle
Click the theme icon in the header to switch between themes. The preference is saved to localStorage.

## 🔧 Configuration

### Tailwind CSS v4
The project uses Tailwind CSS v4 with custom theme configuration in `src/index.css`:

```css
@theme {
  --color-app: #1c1c1c;
  --color-background-app: #ffffff;
  --color-background-card: #F7F9FB;
  /* ... more custom properties */
}
```

### ECharts Configuration
Charts are configured with:
- SVG renderer for better quality
- Lazy updates for performance
- Responsive sizing

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **2XL**: > 1536px

### Adaptive Layouts
- Sidebars collapse on smaller screens
- Charts stack vertically on mobile
- Tables scroll horizontally when needed

## 🌟 Best Practices

### Code Quality
- ✅ TypeScript for type safety
- ✅ ESLint for code linting
- ✅ Prettier for code formatting
- ✅ Component-based architecture
- ✅ Custom hooks for reusability

### Performance
- ✅ Lazy loading for routes
- ✅ Optimized chart rendering
- ✅ Efficient state management
- ✅ Minimal re-renders

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation support
- ✅ Screen reader friendly

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ECharts](https://echarts.apache.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Lucide React](https://lucide.dev/)

## 📞 Support

If you have any questions or need help, please open an issue or contact me directly.

---

**Built with ❤️ using React and TypeScript**
