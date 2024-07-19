import { Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ExpenseComponent } from './expense/expense.component';
import { MediaComponent } from './media/media.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { QueryComponent } from './query/query.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    { path:'main-index', component:DashboardPageComponent},
    { path:'expense-page', component:ExpenseComponent},
    { path:'media-page', component:MediaComponent},
    { path:'newsletter-page', component:NewsletterComponent},
    { path:'query-page', component:QueryComponent},
    { path:'reports-page', component:ReportsComponent},
    { path:'users-page', component:UsersComponent},
    { path:'sidebar-page', component:SideBarComponent},
    { path:'login-page', component:LoginPageComponent},
    { path: '**', redirectTo: 'login-page' } // Redirect unknown paths to login

];
