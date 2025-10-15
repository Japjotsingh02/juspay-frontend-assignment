# 🧪 Testing Documentation

This document provides comprehensive information about testing in the eCommerce Dashboard application.

## Table of Contents
- [Overview](#overview)
- [Testing Stack](#testing-stack)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Writing Tests](#writing-tests)
- [Coverage](#coverage)

## Overview

The application uses Jest and React Testing Library to ensure code quality and reliability. Our testing strategy focuses on:

- **Unit Tests**: Testing individual components and functions
- **Integration Tests**: Testing component interactions
- **Store Tests**: Testing Zustand state management
- **User Interaction Tests**: Testing user flows and behaviors

## Testing Stack

### Core Libraries
- **Jest**: JavaScript testing framework
- **React Testing Library**: React component testing utilities
- **ts-jest**: TypeScript support for Jest
- **@testing-library/jest-dom**: Custom Jest matchers for DOM

### Configuration Files
- `jest.config.ts`: Jest configuration
- `jest.setup.ts`: Global test setup
- `src/__mocks__/`: Mock files for assets

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Run Specific Test File
```bash
npm test -- Header.test.tsx
```

### Run Tests Matching Pattern
```bash
npm test -- --testNamePattern="theme"
```

## Test Structure

### Directory Structure
```
src/
├── __mocks__/
│   └── svgMock.js                    # SVG import mock
├── components/
│   └── __tests__/
│       ├── Header.test.tsx           # Header component tests
│       ├── Sidebar.test.tsx          # Sidebar component tests
│       ├── RightSidebar.test.tsx     # Right sidebar tests
│       └── KPICards.test.tsx         # KPI cards tests
└── store/
    └── __tests__/
        └── dashboardStore.test.ts    # Zustand store tests
```

## Writing Tests

### Component Test Template

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import YourComponent from '../YourComponent';
import { useDashboardStore } from '../../store/dashboardStore';

// Mock the store
jest.mock('../../store/dashboardStore');

const mockUseDashboardStore = useDashboardStore as jest.MockedFunction<typeof useDashboardStore>;

describe('YourComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseDashboardStore.mockReturnValue({
      // Mock store values
      theme: 'light',
      setTheme: jest.fn(),
      // ... other store values
    });
  });

  it('should render component', () => {
    render(
      <BrowserRouter>
        <YourComponent />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('should handle user interaction', () => {
    const mockFn = jest.fn();
    render(
      <BrowserRouter>
        <YourComponent onClick={mockFn} />
      </BrowserRouter>
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
```

### Store Test Template

```typescript
import { renderHook, act } from '@testing-library/react';
import { useYourStore } from '../yourStore';

describe('Your Store', () => {
  it('should update state', () => {
    const { result } = renderHook(() => useYourStore());
    
    act(() => {
      result.current.updateValue('new value');
    });

    expect(result.current.value).toBe('new value');
  });
});
```

## Test Categories

### 1. Store Tests (`dashboardStore.test.ts`)
Tests for Zustand state management:
- ✅ Theme toggling
- ✅ Sidebar state management
- ✅ View switching
- ✅ Data refresh
- ✅ Initial state

### 2. Header Component Tests (`Header.test.tsx`)
- ✅ Component rendering
- ✅ Search functionality
- ✅ Theme toggle button
- ✅ Sidebar toggle buttons
- ✅ Refresh data button
- ✅ Theme-based icon rendering

### 3. Sidebar Tests (`Sidebar.test.tsx`)
- ✅ Menu rendering
- ✅ Navigation items
- ✅ Theme-aware menu items
- ✅ Animation classes

### 4. Right Sidebar Tests (`RightSidebar.test.tsx`)
- ✅ Notifications display
- ✅ Activities display
- ✅ Contacts display
- ✅ Animation classes

### 5. KPI Cards Tests (`KPICards.test.tsx`)
- ✅ Card rendering
- ✅ Value display
- ✅ Change percentages
- ✅ Click interactions
- ✅ Trend indicators

## Best Practices

### 1. Test Behavior, Not Implementation
```typescript
// ✅ Good - tests user behavior
it('should toggle theme when button is clicked', () => {
  const { result } = renderHook(() => useDashboardStore());
  act(() => {
    result.current.setTheme('dark');
  });
  expect(result.current.theme).toBe('dark');
});

// ❌ Bad - tests implementation details
it('should call setState with dark', () => {
  // Don't test internal implementation
});
```

### 2. Use Semantic Queries
```typescript
// ✅ Good - accessible queries
screen.getByRole('button', { name: /toggle theme/i });
screen.getByLabelText('Search');

// ❌ Bad - brittle queries
screen.getByClassName('theme-button');
```

### 3. Clean Up After Tests
```typescript
beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  cleanup(); // React Testing Library does this automatically
});
```

### 4. Mock External Dependencies
```typescript
// Mock SVG imports
jest.mock('../../assets/icon.svg?react', () => ({
  __esModule: true,
  default: () => <svg />,
}));

// Mock Zustand store
jest.mock('../../store/dashboardStore');
```

## Common Testing Patterns

### Testing User Interactions
```typescript
it('should update search input', () => {
  render(<SearchComponent />);
  const input = screen.getByPlaceholderText('Search');
  
  fireEvent.change(input, { target: { value: 'test' } });
  
  expect(input).toHaveValue('test');
});
```

### Testing Async Operations
```typescript
it('should load data', async () => {
  const { result } = renderHook(() => useDashboardStore());
  
  await act(async () => {
    await result.current.refreshData();
  });

  expect(result.current.kpiData).toBeDefined();
});
```

### Testing Conditional Rendering
```typescript
it('should show dark mode icon in dark theme', () => {
  mockUseDashboardStore.mockReturnValue({
    ...defaultMockValues,
    theme: 'dark',
  });
  
  render(<Header />);
  
  expect(screen.getByLabelText('Toggle theme')).toBeInTheDocument();
});
```

## Coverage Goals

Target coverage metrics:
- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

### View Coverage Report
```bash
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory:
- `coverage/lcov-report/index.html` - HTML coverage report
- `coverage/coverage-final.json` - JSON coverage data

## Debugging Tests

### Run Tests in Debug Mode
```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

### Use Jest's Debug Output
```typescript
import { debug } from '@testing-library/react';

it('should render', () => {
  const { container } = render(<Component />);
  debug(container); // Prints DOM structure
});
```

### Console Log in Tests
```typescript
it('should log state', () => {
  const { result } = renderHook(() => useStore());
  console.log(result.current); // Debug store state
});
```

## Continuous Integration

### Running Tests in CI
```yaml
# .github/workflows/test.yml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm test -- --coverage
```

## Troubleshooting

### Common Issues

1. **SVG Import Errors**
   - Solution: Check `jest.config.ts` moduleNameMapper
   - Ensure `src/__mocks__/svgMock.js` exists

2. **Store Mock Not Working**
   - Solution: Clear mocks in `beforeEach`
   - Ensure mock path is correct

3. **Async Test Failures**
   - Solution: Use `act()` for state updates
   - Use `await` for async operations

4. **React Router Errors**
   - Solution: Wrap components in `<BrowserRouter>`

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

---

**Happy Testing! 🧪**

