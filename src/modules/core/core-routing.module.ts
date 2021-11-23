import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

const routes: Routes = [
	{
		path: '',
		component: CorePageComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('modules/home/home.module').then(m => m.HomeModule)
			},
			{
				path: 'profile',
				loadChildren: () => import('modules/session/profile/profile.module').then(m => m.ProfileModule)
			},
			{
				path: 'change-password',
				loadChildren: () => import('modules/session/change-password/change-password.module').then(m => m.ChangePasswordModule)
			},
			{
				path: 'admin/users',
				loadChildren: () => import('modules/admin/auth-user/auth-user.module').then(m => m.AuthUserModule)
			},
			{
				path: 'admin/constants',
				loadChildren: () => import('modules/admin/constant/constant.module').then(m => m.ConstantModule)
			},
            			{
				path: 'musteriler',
				loadChildren: () => import('modules/musteri/musteri.module').then(m => m.MusteriModule)
			},
			{
				path: 'saatler',
				loadChildren: () => import('modules/saat/saat.module').then(m => m.SaatModule)
			},
			{
				path: 'masraflar',
				loadChildren: () => import('modules/masraf/masraf.module').then(m => m.MasrafModule)
			},
			{
				path: '403',
				component: UnauthorizedComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule],
	providers: []
})
export class CoreRoutingModule { }
