import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  news: any[] = [
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident ab quia ducimus illo nostrum enim sequi in necessitatibus accusantium quae obcaecati voluptatibus beatae. Temporibus!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident ab quia ducimus illo nostrum enim sequi in necessitatibus accusantium quae obcaecati voluptatibus beatae. Temporibus!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident ab quia ducimus illo nostrum enim sequi in necessitatibus accusantium quae obcaecati voluptatibus beatae. Temporibus!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident ab quia ducimus illo nostrum enim sequi in necessitatibus accusantium quae obcaecati voluptatibus beatae. Temporibus!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident ab quia ducimus illo nostrum enim sequi in necessitatibus accusantium quae obcaecati voluptatibus beatae. Temporibus!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident ab quia ducimus illo nostrum enim sequi in necessitatibus accusantium quae obcaecati voluptatibus beatae. Temporibus!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident ab quia ducimus illo nostrum enim sequi in necessitatibus accusantium quae obcaecati voluptatibus beatae. Temporibus!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident ab quia ducimus illo nostrum enim sequi in necessitatibus accusantium quae obcaecati voluptatibus beatae. Temporibus!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident ab quia ducimus illo nostrum enim sequi in necessitatibus accusantium quae obcaecati voluptatibus beatae. Temporibus!',
    },
  ];
}
