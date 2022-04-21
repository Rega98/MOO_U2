import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppMainComponent } from './app.main.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { VerCitasComponent } from './components/ver-citas/ver-citas.component';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { TestComponent } from './components/test/test.component';
import { BajaPersonalComponent } from './components/baja-personal/baja-personal.component';
import { CancelarCitaComponent } from './components/cancelar-cita/cancelar-cita.component';
import { HistorialPacienteComponent } from './components/historial-paciente/historial-paciente.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { ListaPersonalComponent } from './components/lista-personal/lista-personal.component';
import { ReciboComponent } from './components/recibo/recibo.component';
import { RegistraConsultaComponent } from './components/registra-consulta/registra-consulta.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: LoginComponent,
            },
            {
                path: 'home', component: AppMainComponent,
                children: [
                    { path: '', component: DashboardComponent },
                    { path: 'pages/citas', component: VerCitasComponent },
                    { path: 'pages/agregarcita', component: AgendarCitaComponent },
                    { path: 'pages/test', component: TestComponent },
                    { path: 'pages/bajaPersonal/:userId', component: BajaPersonalComponent },
                    { path: 'pages/cancelarCita/:citaId', component: CancelarCitaComponent },
                    { path: 'pages/historialPaciente', component: HistorialPacienteComponent },
                    { path: 'pages/listaPacientes', component: ListaPacientesComponent },
                    { path: 'pages/listaPersonal', component: ListaPersonalComponent },
                    { path: 'pages/recibo/:citaId', component: ReciboComponent },
                    { path: 'pages/registraConsulta', component: RegistraConsultaComponent },
                    { path: 'pages/registraUsuario/:tipo', component: RegistrarUsuarioComponent },
                ],
            },
            { path: 'pages/error', component: ErrorComponent },
            { path: 'pages/notfound', component: NotfoundComponent },
            { path: '**', redirectTo: 'pages/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
