let windowVisible = $state(false);
let bannerDescription = $state({
  name: null,
  palette: ["#d7dae8", "#a2a8c6", "#c3c8de"],
});

export const changeVisibility = () => {
  windowVisible = !windowVisible;
};

export const getVisibility = () => {
  return windowVisible;
};

export const setDescription = (newDescription) => {
  bannerDescription = newDescription;
};

export const getDescription = () => {
  return bannerDescription;
};
