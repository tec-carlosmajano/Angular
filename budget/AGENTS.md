You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

## Fullstack Development Guidelines

- Always separate frontend and backend responsibilities clearly.
- Frontend must not contain business logic that belongs to backend.
- Backend must be the source of truth for validation and security.
- Prefer real-world architecture over simplified examples.

## API Communication (Angular)

- Use a dedicated API service layer for all HTTP calls.
- Do NOT call HttpClient directly from components.
- Use interceptors for:
  - JWT token injection
  - Global error handling
- Handle errors gracefully with user-friendly messages.
- Always use typed responses (`Observable<T>`).

## Java / Spring Boot Best Practices

- Follow layered architecture:
  - Controller → Service → Repository
- Controllers must only handle HTTP concerns.
- Services must contain business logic.
- Repositories handle database access.

- Use constructor injection.
- Keep classes small and focused.
- Do not place business logic in controllers.

## DTO and API Design

- Use DTOs for all request and response objects.
- NEVER expose JPA entities directly.
- Validate inputs using Bean Validation annotations.
- Keep API contracts clean and consistent.

## REST API Standards

- Follow REST conventions:
  - GET → retrieve
  - POST → create
  - PUT/PATCH → update
  - DELETE → remove
- Use proper HTTP status codes.
- Use consistent routes (e.g., `/api/auth`, `/api/users`).

## Spring Security + JWT

- Use stateless authentication with JWT.
- Separate:
  - Authentication logic
  - Token generation
  - Security configuration
- Use filters for JWT validation.
- Do not use session-based authentication.
- Protect endpoints using roles.

## Error Handling (Backend)

- Use global exception handling with `@ControllerAdvice`.
- Do not expose internal errors or stack traces.
- Return structured error responses.
- Use appropriate HTTP status codes.

## Database / JPA

- Use proper entity relationships.
- Avoid eager loading unless necessary.
- Prevent N+1 queries.
- Use pagination for large datasets.
- Keep entities simple and clean.

## Portfolio & Interview Focus

- Code must look production-ready.
- Use patterns common in real companies.
- Avoid shortcuts or hacks.
- Keep architecture easy to explain.
- Prioritize readability and structure.

## AI Behavior Instructions

- Prefer real-world implementations over toy examples.
- Generate complete, consistent code across frontend and backend.
- Ensure Angular services match backend APIs.
- Use realistic flows (authentication, CRUD, validation).
- Explain decisions when generating complex code.
