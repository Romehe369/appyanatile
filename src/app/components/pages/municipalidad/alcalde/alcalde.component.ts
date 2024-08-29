import { Component } from '@angular/core';
import { RegidoresComponent } from "../regidores/regidores.component";

@Component({
  selector: 'app-alcalde',
  standalone: true,
  imports: [RegidoresComponent],
  templateUrl: './alcalde.component.html',
  styleUrl: './alcalde.component.css'
})
export class AlcaldeComponent {

}
