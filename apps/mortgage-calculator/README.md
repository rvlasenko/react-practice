# Mortgage calculator

A simple calculator that accepts three inputs and calculates monthly mortgage payment with accessibility and semantic HTML.

## Inputs

- Principal — total loan amount
- Interest rate — annual rate as a percentage
- Loan term — duration in years

## My idea

I used uncontrolled form inputs with native browser validation, which keeps React state minimal.

Calculation is performed on form submission and the result is stored in UI state.

Dynamic output is announced to assistive technologies using appropriate ARIA semantics.

## How to run

```sh
npm run dev -w apps/mortgage-calculator
```
