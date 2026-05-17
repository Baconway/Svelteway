let windowVisible = $state(false);

export const changeVisibility = () => {
  windowVisible = !windowVisible;
};

export const getVisibility = () => {
  return windowVisible;
};
