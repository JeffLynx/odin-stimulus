import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
    static targets = ["first", "second"]

    swap() {
      this.firstTarget.classList.add("hidden")
      this.secondTarget.classList.remove("hidden")
  }
}
