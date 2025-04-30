import EmblaCarousel, { type EmblaOptionsType } from "embla-carousel";
import { addPrevNextBtnsClickHandlers } from "./carousel-buttons";
import { addDotBtnsAndClickHandlers } from "./carousel-dots";

const OPTIONS: EmblaOptionsType = { containScroll: false };

const emblaNode = <HTMLElement>document.querySelector(".embla");
const viewportNode = <HTMLElement>emblaNode.querySelector(".embla__viewport");
const prevBtnNode = <HTMLElement>(
	emblaNode.querySelector(".embla__button--prev")
);
const nextBtnNode = <HTMLElement>(
	emblaNode.querySelector(".embla__button--next")
);
const dotsNode = <HTMLElement>emblaNode.querySelector(".embla__dots");

const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
	emblaApi,
	prevBtnNode,
	nextBtnNode
);
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
	emblaApi,
	dotsNode
);

emblaApi.on("destroy", removePrevNextBtnsClickHandlers);
emblaApi.on("destroy", removeDotBtnsAndClickHandlers);
