import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="character-counter"
export default class extends Controller {
  static targets = ["input", "count"]
  static values = { max: Number }

  update() {
    const length = this.inputTarget.value.length
    const remaining = this.maxValue - length

    this.countTarget.textContent = `${remaining} characters remaining`

    this.countTarget.classList.toggle("warning", remaining <= 20)
    this.countTarget.classList.toggle("over", remaining < 0)
  }
}
