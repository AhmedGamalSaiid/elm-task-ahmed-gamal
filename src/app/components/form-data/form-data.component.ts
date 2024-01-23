import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.scss'
})
export class FormDataComponent {
  value: string | undefined;
}
