# React-Redux-Tutorial-Code Notes
These are the notes I took while going through the <i>Fundamentals of Redux Course from Dan Abramov</i> lessons. The notes represent my own understanding of the material. Along with these notes, this reposity includes some sample react native app projects using Redux which I formulated along the way. 
<hr/>

## 01. Intro and Principles of Redux

Overall concepts for this are as follows:

1. All mutations/changes in the state in Redux are explicit.
2. All changes in the application are contained within a single javascript object called the state.
3. The state is read-only (immutable), and can only be modified by dispatching actions to a reducer. 
4. Pure functions are those whose return value depends only on the values of their arguements and do not override any of their values. Examples would be a function which returns the square of a number.
5. Impure functions are those which may have side-effects such as fetching data from a server, operating on the DOM, or overriding the parameters. 
6. State mutations must be described by a pure function called a Reducer. 

<hr/>

## 02. Reducer and Store

Overall concepts for this are as follows:

1. A reducer is expected to return an object representing an initial state if the state is not yet defined.
2. A reducer takes a state and an action as variables. The reducer performs certain state mutations based on the action passed in. This action is usually a string. 
3. createStore creates a store which binds together the three main principles of Redux (holding the current application state object, allowing you to dispatch actions, and a reducer must be passed in to handle those dispatched actions on createStore)
4. getState() retrieves the current state of a Redux store. 
5. dispatch() dispatches an action to the store, which is then handled by the reducer.
6. subscribe() registers a callback that the redux store will call when any action is dispatched. This is useful for updating the UI of your application to reflect the current application state. 

The following code snippet represents the createStore written from scratch:

<code> 
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({}); // dummy dispatch

  return { getState, dispatch, subscribe };

};
</code>