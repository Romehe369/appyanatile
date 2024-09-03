import { Component } from '@angular/core';
import { RegidoresComponent } from "../municipalidad/regidores/regidores.component";
import { OrdeanzamdyComponent } from '../transparencia/ordeanzamdy/ordeanzamdy.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RegidoresComponent,OrdeanzamdyComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  

}
