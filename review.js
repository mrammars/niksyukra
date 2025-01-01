/** @link https://www.snorkl.tv/greensock-staggers-with-seamless-loops/ */

document.addEventListener("DOMContentLoaded", () => {
// Settings
const CONTAINER_SELECTOR = '.js-slider', // Container of elements to display
	  ELEMENT_SELECTOR   = '.js-slider__slide', // Elements to display
	  DISPLAY_TIME       = 7, // Time (seconds) to display each item
	  TRANSITION_TIME    = 0.7; // Time (seconds) to transition to next item;

let container   = document.querySelector(CONTAINER_SELECTOR),
	elements    = gsap.utils.toArray( ELEMENT_SELECTOR ),
	numElements = elements.length,
	staggerTime = DISPLAY_TIME + TRANSITION_TIME,
	// repeatDelay = ( staggerTime * ( numElements - 1 ) ) + DISPLAY_TIME,
	prevButton  = document.querySelector( '.js-slider__prev' ),
	nextButton  = document.querySelector( '.js-slider__next' ),
	getElementAtIndex = gsap.utils.wrap(elements),
	autoAdvance = gsap.delayedCall(DISPLAY_TIME, () => seek(1)),
	curIndex = 0;

gsap.set(container, { autoAlpha: 1 } );
gsap.set(elements, {autoAlpha: 0, y: 70});

gsap.to(getElementAtIndex(curIndex), {y: 0, autoAlpha: 1, duration: TRANSITION_TIME});

function seek(direction) {
	let oldEl = getElementAtIndex(curIndex),
		newEl = getElementAtIndex((curIndex += direction));
	gsap.to(oldEl, {y: -70, autoAlpha: 0, overwrite: "auto", duration: TRANSITION_TIME})
	gsap.fromTo(newEl, {y: 70, autoAlpha: 0}, {y: 0, autoAlpha: 1, overwrite: "auto", duration: TRANSITION_TIME});
	autoAdvance.restart(true);
}

// Prev button click
prevButton.addEventListener( 'click', () => seek(-1));

// Next button click
nextButton.addEventListener( 'click', () => seek(1));
});