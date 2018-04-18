import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { VerifyEmailComponent } from './VerifyEmail/index';
import { RecoverAccountComponent } from './RecoverAccount/index';
import { ChoosePasswordComponent } from './ChoosePassword/index';
import { PhoneNumberComponent } from './PhoneNumber/index';
import { LayoutComponent } from './Layout/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: LayoutComponent, canActivate: [AuthGuard]  },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'login/:id', component: LayoutComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
    { path: 'ChoosePassword', component:  ChoosePasswordComponent, canActivate: [AuthGuard] },
    { path: 'PhoneNumber', component:  PhoneNumberComponent, canActivate: [AuthGuard] },
    { path: 'VerifyEmail', component:  VerifyEmailComponent, canActivate: [AuthGuard] },
    { path: 'RecoverAccount/:id', component:  RecoverAccountComponent },
    { path: 'RecoverAccount/:id/:Email', component:  RecoverAccountComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);