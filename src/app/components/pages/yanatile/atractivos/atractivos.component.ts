import { Component } from '@angular/core';
import { FestividadesComponent } from "../festividades/festividades.component";

@Component({
  selector: 'app-atractivos',
  standalone: true,
  imports: [FestividadesComponent],
  templateUrl: './atractivos.component.html',
  styleUrl: './atractivos.component.css'
})
export class AtractivosComponent {

}
