## Rolling dice

A dice roller application that can roll anywhere from 1-99 six-sided dice.

## My idea

I used uncontrolled form inputs with native browser validation, which keeps React state minimal.

Rolling is performed on form submission and the result is stored in UI state.

Each roll generates a new array of random values (1–6).

Dynamic output is announced to assistive technologies using appropriate ARIA semantics.
