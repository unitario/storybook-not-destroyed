import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: "{{ type }}",
  styles: []
})
export class AppComponent {
  @Input() type: string = "";
  ngOnInit() {
    console.log("ngOnInit")
  }
  ngOnDestroy() {
    console.log("ngOnDestroy")
  }
}
