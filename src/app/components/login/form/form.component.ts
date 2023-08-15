import { Component,Input } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() pageName?:string;
  @Input() buttonText?:string;
  @Input() promptText?:string;
  @Input() promptAction?:string;
  @Input() textBoxView?:string;
  @Input() promptLink?:string;
  @Input() nextPageLink?:string;
}
