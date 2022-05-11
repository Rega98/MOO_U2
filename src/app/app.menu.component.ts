import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items:[
                    {label: 'Tablero',icon: 'pi pi-fw pi-home', routerLink: ['/home']},
                    {label: 'Generar Recibo', icon: 'pi pi-fw pi-wallet', routerLink:'pages/recibo/citaId'},
                    {label: 'Registrar Consulta', icon: 'pi pi-fw pi-pencil', routerLink:'pages/registraConsulta'},
                    
                ]
            },
            {
                label: 'Citas',
                items: [
                    {label: 'Citas', icon: 'pi pi-fw pi-id-card', routerLink: 'pages/citas'},
                    {label: 'Agregar Cita', icon: 'pi pi-fw pi-plus-circle', routerLink: 'pages/agregarcita'},
                    {label: 'Cancelar Cita', icon: 'pi pi-fw pi-minus-circle', routerLink:'pages/cancelarCita'},
                ]
            },
            {
                label:'Pacientes',
                items:[
                    {label: 'Lista de Pacientes', icon: 'pi pi-fw pi-users', routerLink:'pages/listaPacientes'},
                    {label: 'Historial del paciente', icon: 'pi pi-fw pi-file', routerLink:'pages/historialPaciente'},
                ]
            },
            {
                label:'Personal',
                items:[
                    {label: 'Lista de Personal ', icon: 'pi pi-fw pi-user', routerLink:'pages/listaPersonal'},
                    {label: 'Registrar Usuario', icon: 'pi pi-fw pi-user-plus', routerLink:'pages/registraUsuario'},
                    {label: 'Baja de Personal', icon: 'pi pi-fw pi-user-minus', routerLink:'pages/bajaPersonal/user'},
                ]
            },
            {
                label:'Sesión',
                items:[
                    {label: 'Cerrar Sesión', icon: 'pi pi-fw pi-user', routerLink:'pages/test'},
                ]
            }
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
