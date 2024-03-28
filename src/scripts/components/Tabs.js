class Tabs extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.controlOptions = this.querySelectorAll(".c-tabs__control-option")
		this.tabOptions = this.querySelectorAll(".c-tabs__tab-option")

		this.switchTab(0)

		this.controlOptions.forEach((option, index) => {
			option.addEventListener("click", () => this.switchTab(index))
		})
	}

	switchTab(index) {
		this.controlOptions.forEach((option) => {
			option.classList.remove("c-tabs__control-option--active")
		})

		this.tabOptions.forEach((option) => {
			option.classList.remove("c-tabs__tab-option--active")
		})

		this.tabOptions[index].classList.add("c-tabs__tab-option--active")
		this.controlOptions[index].classList.add(
			"c-tabs__control-option--active"
		)
	}
}

customElements.define("js-tabs", Tabs)
