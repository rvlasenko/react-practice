# React practice

Personal React practice repository, primarily for learning and revision.

This repository contains small to medium-sized exercises focused on accessibility (a11y), state management, effects, UI behavior, etc.

Each exercise lives in its own `apps` folder and may use a headless UI approach, with the focus on logic rather than styling.

## Apps

| App | Description |
|-----|-------------|
| [rolling-dice](./apps/rolling-dice) | Roll 1–99 six-sided dice using uncontrolled form inputs |
| [countdown-timer](./apps/countdown-timer) | Hours/minutes/seconds countdown timer with start, pause, and reset |
| [multi-step-form](./apps/multi-step-form) | Three-step signup form collecting name, email, and password |
| [mortgage-calculator](./apps/mortgage-calculator) | Monthly mortgage payment calculator with accessible result announcement |
| [code-input](./apps/code-input) | Four-digit verification code input with automatic focus management |

## How to start

```sh
npm run dev -w apps/rolling-dice
npm run dev -w apps/countdown-timer
npm run dev -w apps/multi-step-form
npm run dev -w apps/mortgage-calculator
npm run dev -w apps/code-input
```

## Creating a new app

1. Copy the template folder:
   ```sh
   cp -r apps/_template apps/my-new-app
   ```
2. Update the `name` field in `apps/my-new-app/package.json` to `"my-new-app"`
3. Start the dev server:
   ```sh
   npm run dev -w apps/my-new-app
   ```

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
