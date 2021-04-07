import '../src/index.css';

// Configure Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}