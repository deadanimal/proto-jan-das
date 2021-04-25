import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { AuditPrestasiComponent } from './audit-prestasi/audit-prestasi.component';
import { PrestasiSPPIIComponent } from './prestasi-sppii/prestasi-sppii.component';
import { PrestasiGPISComponent } from './prestasi-gpis/prestasi-gpis.component';
import { AuditKewanganComponent } from './audit-kewangan/audit-kewangan.component';
import { KewanganAkaunKerajaanComponent } from './kewangan-akaun-kerajaan/kewangan-akaun-kerajaan.component';
import { KewanganIgfmasComponent } from './kewangan-igfmas/kewangan-igfmas.component';
import { KewanganFaisComponent } from './kewangan-fais/kewangan-fais.component';
import { KewanganLppsaComponent } from './kewangan-lppsa/kewangan-lppsa.component';
import { AuditSyarikatKerajaanComponent } from './audit-syarikat-kerajaan/audit-syarikat-kerajaan.component';
import { SyarikatSyarikatKerajaanComponent } from './syarikat-syarikat-kerajaan/syarikat-syarikat-kerajaan.component';
import { SyarikatPengauditanComponent } from './syarikat-pengauditan/syarikat-pengauditan.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'audit-prestasi',
                children:[
                    {
                        path: 'audit-prestasi',
                        component: AuditPrestasiComponent
                    },
                    {
                        path: 'prestasi-gpis',
                        component: PrestasiGPISComponent
                    },
                    {
                        path: 'prestasi-sppii',
                        component: PrestasiSPPIIComponent
                    }
                ]
            },
            {
                path: 'audit-kewangan',
                children:[
                    {
                        path: 'kewangan-akaun-kerajaan',
                        component: KewanganAkaunKerajaanComponent
                    },
                    {
                        path: 'kewangan-igfmas',
                        component: KewanganIgfmasComponent
                    },
                    {
                        path: 'kewangan-fais',
                        component: KewanganFaisComponent
                    },
                    {
                        path: 'kewangan-lppsa',
                        component: KewanganLppsaComponent
                    },
                ]
            },
            {
                path: 'audit-syarikat-kerajaan',
                children:[
                    {
                        path: 'syarikat-syarikat-kerajaan',
                        component: SyarikatSyarikatKerajaanComponent
                    },
                    {
                        path: 'syarikat-pengauditan',
                        component: SyarikatPengauditanComponent
                    }
                ]
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            }
        ]
    }
]