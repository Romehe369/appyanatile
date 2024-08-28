import { Routes } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { YanatileComponent } from './components/pages/yanatile/yanatile.component';
import { HimnoComponent } from './components/pages/yanatile/himno/himno.component';
import { FestividadesComponent } from './components/pages/yanatile/festividades/festividades.component';
import { AtractivosComponent } from './components/pages/yanatile/atractivos/atractivos.component';
import { HistoriaComponent } from './components/pages/yanatile/historia/historia.component';
import { NoticiasComponent } from './components/pages/noticias/noticias.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
{ path: 'inicio', component: InicioComponent},
{ path: 'yanatile', component: YanatileComponent},
{ path: 'himno', component: HimnoComponent },
{ path: 'festividades', component: FestividadesComponent },
{ path: 'atrativos', component: AtractivosComponent },
{ path: 'historia', component: HistoriaComponent },
{ path: 'noticias', component: NoticiasComponent },
{ path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];
