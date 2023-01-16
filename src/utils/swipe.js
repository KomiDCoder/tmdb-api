export const swipe = (event, refHook) => {
  const widthSize = refHook.current.offsetWidth;
  if (event.target.innerHTML === "&gt;") {
    refHook.current.scrollLeft = refHook.current.scrollLeft + widthSize;
  } else {
    refHook.current.scrollLeft = refHook.current.scrollLeft - widthSize;
  }
};
