import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="highlight"
export default class extends Controller {
  toggle(event) {
    this.element.classList.toggle("highlighted", event.target.checked)
  }
}
