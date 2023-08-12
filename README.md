# tinystate - Tiny React State Management Library

**tinystate** is a super small state management solution for React applications.
It provides a simple and efficient way to manage and share state across your
components without the complexity of larger state management libraries. With
just a few lines of code, you can integrate **tinystate** into your React
project and start managing your application's state effortlessly.

## Installation

You can install **tinystate** using npm or yarn:

```bash
npm install tinystate-react
# or
yarn add tinystate-react
```

## Usage

### Creating a Store

To create a store, use the `createStore` function from the **tinystate**
library. You'll need to provide an initial state for your store:

```javascript
import { createStore } from "tinystate-react";

const countStore = createStore({ initialState: 0 });
```

### Using the Store

After creating a store, you can create a custom hook to access and manage the
state within your React components:

```javascript
import { createUseStore } from "tinystate-react";

export const useCountStore = createUseStore(countStore);
```

Now, you can use the `useCountStore` hook in your components to access and
update the state:

```javascript
import { useCountStore } from "./path-to-your-store";

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

#### `createStore(options: CreateStoreOptions)`

Creates a store instance with the provided initial state.

- `options` (object):
  - `initialState` (any): The initial state for the store.

Returns a store object with the following methods:

- `subscribe(fn: Listener): () => void`: Subscribes a listener function to state
  changes and returns an unsubscribe function.
- `getSnapshot(): T`: Returns the current snapshot of the state.
- `setState(newState: T): void`: Updates the state and notifies subscribers of
  the change.

#### `createUseStore(store: Store)`

Creates a custom hook that encapsulates the store's subscription and state
management.

- `store` (Store): The store instance created using `createStore`.

Returns a function that, when called, returns a tuple containing:

- A getter function for the current state snapshot.
- A setter function to update the state.

## License

This project is licensed under the [MIT License](LICENSE).
