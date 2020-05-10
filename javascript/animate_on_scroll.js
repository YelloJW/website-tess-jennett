var scroll = window.requestAnimationFrame ||
                function(callback) {
                  window.setTimeout(callback, 1000/60)
                };

const elementsToAnimate = document.querySelectorAll('.move-on-scroll');

const loop = () => {
  elementsToAnimate.forEach((element) => {
    if (isElementInViewport(element)) {
    element.classList.add('is-visible')
    } else {
    element.classList.remove('is-visible')
    }
  });
  scroll(loop);
}

loop();

function isElementInViewport (el) {

    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    const rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

isElementInViewport();


