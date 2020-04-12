# The bundling architecture

## What we will cover

- How over time bundling time increases
- How over time frontend unit test execution time grows
- How to think about code structure to make testing fast
- What we can do when our tests are already slow

## Notes

Any successful frontend project will at some point grow bigger.

Over time you will notice that your bundling time increases.
This happens for a number of reasons:

- You have more code.
- You have code that needs compiling.
- You have static files that are parsed in to your Javascript.

The same is true for your frontend unit tests.
The tests slow down for the same reasons as above with a few additions:

- You have added animations to your components.
- You have code that uses other types of delays that the test needs to wait for.

In this video I will show you how modular thinking can help with these issues.
