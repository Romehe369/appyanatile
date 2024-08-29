import { Component } from '@angular/core';
import { RegidoresComponent } from "../municipalidad/regidores/regidores.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RegidoresComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
