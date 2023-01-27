import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-elemento",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  constructor() {}
  miRotacion: string;

  ngOnInit() {
    this.miRotacion = `rotateZ(0deg)`;
  }

  onChange(valorSlider) {
    this.miRotacion = `rotateZ(${valorSlider}deg)`;
  }
}
