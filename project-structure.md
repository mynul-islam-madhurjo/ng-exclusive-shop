# Project Structure Documentation

## Overview
This document outlines the structure and organization of our Angular application, highlighting key directories and their purposes.

## Directory Structure

```
src/
├── app/                          # Root application directory
│   ├── core/                     # Core module (singleton services, models)
│   │   ├── models/              # Data models and interfaces
│   │   │   ├── product.model.ts # Product interface/model
│   │   │   └── timer.model.ts   # Timer interface/model
│   │   └── services/            # Application-wide services
│   │       ├── cart.service.ts  # Shopping cart service
│   │       └── wishlist.service.ts # Wishlist management service
│   │
│   ├── shared/                  # Shared module (common components, directives)
│   │   ├── components/          # Reusable components
│   │   │   ├── product-card/    # Product card component
│   │   │   │   ├── product-card.component.ts
│   │   │   │   └── product-card.component.css
│   │   │   └── timer/          # Timer component
│   │   │       ├── timer.component.ts
│   │   │       └── timer.component.css
│   │   └── shared.module.ts     # Shared module configuration
│   │
│   ├── features/               # Feature modules
│   │   └── flash-sale/        # Flash sale feature module
│   │       ├── flash-sale.component.ts
│   │       ├── flash-sale.component.css
│   │       └── flash-sale.module.ts
│   │
│   ├── app.module.ts          # Root module
│   ├── app.component.ts       # Root component
│   └── app-routing.module.ts  # Root routing configuration
```

## Directory Purposes

### Core Module (`/core`)
- Contains singleton services and data models
- Should be imported only in the root AppModule
- Includes essential application-wide services and interfaces

### Shared Module (`/shared`)
- Houses reusable components, directives, and pipes
- Can be imported by any feature module
- Contains components used across multiple features

### Features Module (`/features`)
- Contains distinct feature areas of the application
- Each feature is lazily loaded
- Includes components specific to each feature

## Best Practices
1. Keep core services singleton by using `providedIn: 'root'`
2. Lazy load feature modules for better performance
3. Share common components through the shared module
4. Follow Angular's style guide for naming conventions
5. Keep components focused and maintainable

## Module Guidelines
- **Core Module**: Import once in AppModule
- **Shared Module**: Import in feature modules as needed
- **Feature Modules**: Lazy load through routing

## Notes
- All components should follow the Angular component pattern with separate files for template, styling, and logic
- Services should be injectable and follow the singleton pattern where appropriate
- Models should use TypeScript interfaces or classes for type safety
