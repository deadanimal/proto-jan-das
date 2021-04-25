import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { AuditPrestasiComponent } from './audit-prestasi/audit-prestasi.component';
import { PrestasiSPPIIComponent } from './prestasi-sppii/prestasi-sppii.component';
import { PrestasiGPISComponent } from './prestasi-gpis/prestasi-gpis.component';
import { AuditKewanganComponent } from './audit-kewangan/audit-kewangan.component';
import { KewanganIgfmasComponent } from './kewangan-igfmas/kewangan-igfmas.component';
import { KewanganFaisComponent } from './kewangan-fais/kewangan-fais.component';
import { KewanganLppsaComponent } from './kewangan-lppsa/kewangan-lppsa.component';
import { AuditSyarikatKerajaanComponent } from './audit-syarikat-kerajaan/audit-syarikat-kerajaan.component';
import { SyarikatSyarikatKerajaanComponent } from './syarikat-syarikat-kerajaan/syarikat-syarikat-kerajaan.component';
import { SyarikatPengauditanComponent } from './syarikat-pengauditan/syarikat-pengauditan.component';
import { KewanganAkaunKerajaanComponent } from './kewangan-akaun-kerajaan/kewangan-akaun-kerajaan.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    AuditPrestasiComponent,
    PrestasiSPPIIComponent,
    PrestasiGPISComponent,
    AuditKewanganComponent,
    KewanganIgfmasComponent,
    KewanganFaisComponent,
    KewanganLppsaComponent,
    AuditSyarikatKerajaanComponent,
    SyarikatSyarikatKerajaanComponent,
    SyarikatPengauditanComponent,
    KewanganAkaunKerajaanComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
