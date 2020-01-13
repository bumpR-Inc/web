import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // trigger('center-to-top', [
    //   transition('void => *', [
    //     style({margin: "10em"}),
    //     animate(4000, style({margin: "10em"})),
    //     animate(500, style({margin: "5em"}))
    //   ])
    // ]),
    trigger('delayed-fade', [
      transition('void => *', [
        style({opacity:0}),
        animate(3700, style({opacity: 0})),
        animate(500, style({opacity: 1}))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'web';
}
