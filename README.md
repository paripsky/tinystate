# tinystate - Tiny React State Management Library

**tinystate** is a super small state management solution for React applications.
It provides a simple and efficient way to manage and share state across your
components without the complexity of larger state management libraries. With
just a few lines of code, you can integrate **tinystate** into your React
project and start managing your application's state effortlessly.

## Bundle Size

[Check out on bundlephobia](https://bundlephobia.com/package/tinystate-react)

## Installation

You can install **tinystate** using npm or yarn:

```bash
npm install tinystate-react
# or
yarn add tinystate-react
# or
pnpm install tinystate-react
```

## Usage
Create your useStore hook: 

```javascript
import { createUseStore } from "tinystate-react";

export const useCountStore = createUseStore(0);
```

Now, you can use the `useCountStore` hook in your components to access and
update the state:

```javascript
import { useCountStore } from "./useCountStore";

function Counter() {
  const [count, setCount] = useCountStore();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

### API Reference

#### `createUseStore(initialState: T)`

Creates a custom hook that encapsulates the store's subscription and state
management.

- `initialState` (T): The initial state of the store.

Returns a hook that, when called, returns a tuple containing (Similar to useState):

- The current state.
- A setter function to update the state.

## License

This project is licensed under the [MIT License](LICENSE).
