# Source Code Organization

This document outlines the organized folder structure for the Shopify Support Pro project.

## Directory Structure

### `/app` - Next.js App Router

- **Routes**: All application routes including pages and API endpoints
- **Layout**: Global layout and styling files
- **API**: Backend API routes

### `/assets` - Static Assets

- **`/images`**: Organized by category
  - `/clients` - Client logos and brand images
  - `/team` - Team member photos
  - `/portfolio` - Portfolio and project images
  - `/general` - General business and marketing images

### `/components` - Reusable React Components

- **`/ui`**: shadcn/ui components (buttons, cards, forms, etc.)
- **`/layout`**: Layout components (header, footer, navigation)
- **`/common`**: Reusable common components (cards, counters, etc.)
- **`/forms`**: Form-related components (modals, inputs, etc.)

### `/data` - Static Data

- **`services.tsx`**: Service definitions and descriptions
- **`stats.ts`**: Statistics and metrics data

### `/hooks` - Custom React Hooks

- **`contactHandler.ts`**: Contact form handling logic

### `/lib` - Utilities and Configuration

- **`utils.ts`**: General utility functions
- **`firebase.ts`**: Firebase configuration
- **`constants.ts`**: App-wide constants
- **`loadGoogleMapsScript.ts`**: Google Maps integration

### `/types` - TypeScript Definitions

- Place for custom TypeScript type definitions

## Import Guidelines

### Using Index Files

Components are organized with index files for cleaner imports:

```typescript
// Good - using index files
import { NavHeaderMenus, FooterMenus } from "@/components/layout";
import { GetStarted, ServiceCard } from "@/components/common";

// Avoid - direct file imports
import { NavHeaderMenus } from "@/components/layout/NavHeaderMenus";
```

### Path Aliases

Use the `@/` alias for imports from the src directory:

```typescript
import { Button } from "@/components/ui/button";
import { API_ENDPOINTS } from "@/lib/constants";
```

## Benefits of This Organization

1. **Separation of Concerns**: Components, data, and utilities are clearly separated
2. **Scalability**: Easy to add new components in appropriate categories
3. **Maintainability**: Logical grouping makes code easier to find and maintain
4. **Asset Management**: Images are organized by purpose for better management
5. **Clean Imports**: Index files reduce import statement complexity
6. **Type Safety**: Dedicated types directory for better TypeScript organization

## Migration Notes

When moving files, remember to:

1. Update all import statements in files that reference moved components
2. Update any hardcoded paths in the code
3. Test that all functionality still works after reorganization
4. Update any build scripts or configuration that reference old paths
