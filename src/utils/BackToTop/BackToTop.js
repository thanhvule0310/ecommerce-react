const backToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(backToTop);
    window.scrollTo(0, c - c / 15);
  }
};
export default backToTop;
