let windowVisible = $state(false);
let currentTitle = $state("");

export const changeVisibility = () => {
  windowVisible = !windowVisible;
};

export const getVisibility = () => {
  return windowVisible;
};

export const changeTitle = (toSet) => {
  currentTitle = toSet;
};

export const getTitle = () => {
  return currentTitle;
};
