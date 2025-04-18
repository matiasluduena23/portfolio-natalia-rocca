import { transformBoolToString } from "./utils";

const btnHamburger = document.querySelector(
	"#btnHamburger"
) as HTMLButtonElement;
const links = document.querySelectorAll(".link-group");
const navigation = document.querySelector("#navigation") as HTMLButtonElement;
const overlayElement = document.querySelector("#overlay") as Element;

//open navigation on click hamburger
btnHamburger?.addEventListener("click", (e) => {
	e.preventDefault();
	const isOpen =
		(btnHamburger as HTMLButtonElement).getAttribute("aria-expanded") ===
		"false";

	btnHamburger.setAttribute("aria-expanded", transformBoolToString(!isOpen));
	navigation.setAttribute("aria-expanded", transformBoolToString(!isOpen));
	overlayElement.classList.toggle("nav-open");
});

// close navigation on link click  - add class to link selected
links.forEach((item) => {
	item.addEventListener("click", () => {
		addClassToLinkSelected(item);
		removeOverlay();
		closeNavigation();
	});
});

//close navigation on resize window
window.addEventListener("resize", () => {
	const width = window.innerWidth;
	if (width > 400) {
		removeOverlay();
		closeNavigation();
	}
});

function removeClassItems(items: NodeListOf<Element>, className: string) {
	items.forEach((item) => {
		item.classList.remove(className);
	});
}

function removeOverlay() {
	overlayElement.classList.remove("nav-open");
}

function closeNavigation() {
	btnHamburger.setAttribute("aria-expanded", "false");
	navigation.setAttribute("aria-expanded", "false");
}

function addClassToLinkSelected(item: Element) {
	removeClassItems(links, "selected");
	item.classList.add("selected");
}

(function closeNavigationOnOutClick() {
	overlayElement.addEventListener("click", () => {
		removeOverlay();
		closeNavigation();
	});
})();
