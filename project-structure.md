# Project Structure Documentation

## Overview
This document outlines the structure and organization of our Angular application, highlighting key directories and their purposes.

## Directory Structure

```
src/
├── app/                          # Root application directory
│   ├── core/                     # Core module (singleton services, models)
│   │   ├── components/          # Core components
│   │   │   ├── header/         # Header component
│   │   │   ├── main-nav/       # Main navigation component
│   │   │   └── top-nav/        # Top navigation component
│   │   ├── models/             # Data models and interfaces
│   │   │   ├── category.model.ts
│   │   │   ├── footer-link.model.ts
│   │   │   ├── nav.model.ts
│   │   │   ├── product.model.ts
│   │   │   ├── service.model.ts
│   │   │   └── timer.model.ts
│   │   └── services/           # Application-wide services
│   │       ├── cart.service.ts
│   │       └── wishlist.service.ts
│   │
│   ├── features/               # Feature modules
│   │   ├── flash-sale/        # Flash sale feature
│   │   ├── product-gallery/   # Product gallery feature
│   │   └── product-list/      # Product list feature
│   │
│   ├── shared/                # Shared module
│   │   ├── components/        # Reusable components
│   │   │   ├── footer/       # Footer component
│   │   │   ├── product-card/ # Product card component
│   │   │   ├── search-bar/   # Search bar component
│   │   │   ├── services-section/ # Services section component
│   │   │   └── timer/        # Timer component
│   │   └── shared.module.ts   # Shared module configuration
│   │
│   ├── app.component.ts       # Root component
│   ├── app.component.html     # Root component template
│   ├── app.component.css      # Root component styles
│   ├── app.component.spec.ts  # Root component tests
│   ├── app.module.ts          # Root module
│   └── app-routing.module.ts  # Root routing configuration
│
└── assets/                    # Static assets
    └── image/                 # Image assets
        ├── gallery/          # Gallery images
        ├── icons/           # Icon assets
        ├── items/           # Item images
        ├── auth-image.png
        ├── cart.png
        ├── header.png
        ├── heart.png
        ├── search.png
        └── speaker.png
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
