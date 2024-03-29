export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((UserEvent) => {
        html.removeEventListener(UserEvent, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((UserEvent) => {
      setTimeout(() => {
        html.addEventListener(UserEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }
}
