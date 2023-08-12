import { useSyncExternalStore } from 'react';

export type Listener = () => void;

export type CreateStoreOptions<T> = {
  initialState: T;
};

export function createStore<T>({ initialState }: CreateStoreOptions<T>) {
  let subscribers: Listener[] = [];
  let state = initialState;

  const notifyStateChanged = () => {
    subscribers.forEach((fn) => fn());
  };

  return {
    subscribe(fn: Listener) {
      subscribers.push(fn);
      return () => {
        subscribers = subscribers.filter((l) => l !== fn);
      };
    },
    getSnapshot() {
      return state;
    },
    setState(newState: T) {
      state = newState;
      notifyStateChanged();
    },
  };
}

export type Store<T> = ReturnType<typeof createStore<T>>;

export function createUseStore<T>(store: Store<T>) {
  return () => {
    return [useSyncExternalStore(store.subscribe, store.getSnapshot), store.setState] as const;
  };
}
