import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthRole } from 'blueprints';
import { AuthorizedGuard } from 'services';
import { MusteriEditPageComponent } from './pages/musteri-edit-page/musteri-edit-page.component';
import { MusteriListPageComponent } from './pages/musteri-list-page/musteri-list-page.component';
import { MusteriNewPageComponent } from './pages/musteri-new-page/musteri-new-page.component';
import { MusteriOnePageComponent } from './pages/musteri-one-page/musteri-one-page.component';

const routes: Route[] = [
	{
		path: '',
		component: MusteriListPageComponent,
		canActivate: [AuthorizedGuard],
		data: {
			roles: [
				AuthRole.MUSTERI_VIEW
			]
		}
	},
	{
		path: ':id/edit',
		component: MusteriEditPageComponent,
		canActivate: [AuthorizedGuard],
		data: {
			roles: [
				AuthRole.MUSTERI_EDIT
			]
		}
	},
	{
		path: 'new',
		component: MusteriNewPageComponent,
		canActivate: [AuthorizedGuard],
		data: {
			roles: [
				AuthRole.MUSTERI_ADD
			]
		}
	},
	{
		path: ':id',
		component: MusteriOnePageComponent,
		canActivate: [AuthorizedGuard],
		data: {
			roles: [
				AuthRole.MUSTERI_VIEW
			]
		}
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class MusteriRoutingModule { }
