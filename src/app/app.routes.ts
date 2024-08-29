import { Routes } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { YanatileComponent } from './components/pages/yanatile/yanatile.component';
import { HimnoComponent } from './components/pages/yanatile/himno/himno.component';
import { FestividadesComponent } from './components/pages/yanatile/festividades/festividades.component';
import { AtractivosComponent } from './components/pages/yanatile/atractivos/atractivos.component';
import { HistoriaComponent } from './components/pages/yanatile/historia/historia.component';
import { NoticiasComponent } from './components/pages/noticias/noticias.component';
import { AlcaldeComponent } from './components/pages/municipalidad/alcalde/alcalde.component';
import { RegidoresComponent } from './components/pages/municipalidad/regidores/regidores.component';
import { MvisionComponent } from './components/pages/municipalidad/mvision/mvision.component';
import { OrganigramaComponent } from './components/pages/municipalidad/organigrama/organigrama.component';
import { CpobladosComponent } from './components/pages/yanatile/cpoblados/cpoblados.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
{ path: 'inicio', component: InicioComponent},
{ path: 'yanatile', component: YanatileComponent},
{ path: 'alcalde', component: AlcaldeComponent },
{ path: 'regidores', component: RegidoresComponent },
{ path: 'mvision', component: MvisionComponent },
{ path: 'organigrama', component: OrganigramaComponent },
{ path: 'cpoblados', component: CpobladosComponent },
{ path: 'himno', component: HimnoComponent },
{ path: 'festividades', component: FestividadesComponent },
{ path: 'atractivos', component: AtractivosComponent },
{ path: 'historia', component: HistoriaComponent },
{ path: 'noticias', component: NoticiasComponent },
{ path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];
