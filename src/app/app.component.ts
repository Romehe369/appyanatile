import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { InicioComponent } from "./components/pages/inicio/inicio.component";
import { MvisionComponent } from "./components/pages/municipalidad/mvision/mvision.component";
import { NoticiasComponent } from "./components/pages/noticias/noticias.component";
import { HistoriaComponent } from "./components/pages/yanatile/historia/historia.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, InicioComponent, MvisionComponent, NoticiasComponent, HistoriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appyanatile';
}
