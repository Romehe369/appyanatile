import { Component } from '@angular/core';
import { AlcaldeComponent } from "./alcalde/alcalde.component";
import { MvisionComponent } from "./mvision/mvision.component";
import { RegidoresComponent } from "./regidores/regidores.component";

@Component({
  selector: 'app-municipalidad',
  standalone: true,
  imports: [AlcaldeComponent, MvisionComponent, RegidoresComponent],
  templateUrl: './municipalidad.component.html',
  styleUrl: './municipalidad.component.css'
})
export class MunicipalidadComponent {

}
