import {Component, EventEmitter, Input, Output} from '@angular/core';

export type styleButtonType = 'blue' |
'dark'|
'light'|
'green' |
'red' |
'yellow' |
'purple' |
'gradient-blue' |
'gradient-green' |
'gradient-teal' |
'gradient-red' |
'gradient-purple' |
'duotone-blue' |
'duotone-cyan' |
'duotone-purple' |
'outline-blue' |
'outline-dark' |
'outline-green' |
'outline-red' |
'outline-yellow' |
'outline-purple';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Output() onClick = new EventEmitter<MouseEvent>();
  @Input() styleButton: styleButtonType = 'blue';

  onClickButton(event: MouseEvent) {
    this.onClick.emit(event);
  }

}
