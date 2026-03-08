# Code input

A four-digit verification code input where each digit occupies its own field.

## My idea

The inputs are defined declaratively as an array, keeping the structure easy to adjust.

Focus management is handled with refs: the cursor moves forward automatically when a digit is entered, and backward when a field is cleared with backspace.

## How to run

```sh
npm run dev -w apps/code-input
```
