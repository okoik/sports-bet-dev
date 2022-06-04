import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sports-bet';
  foo = {};

  constructor(
    private helloService: HelloService
) { }

async ngOnInit() {
    this.foo = await this.helloService.getFoo();
    console.log(this.foo);
}
}
