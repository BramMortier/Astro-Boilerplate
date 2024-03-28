class Accordion extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.trigger = this.querySelector(".c-accordion__trigger")

		this.addEventListener("click", this.toggleAccordion)
	}

	toggleAccordion() {
		this.classList.toggle("c-accordion--open")
	}
}

customElements.define("js-accordion", Accordion)
