import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthRole } from 'blueprints';
import { AuthorizedGuard } from 'services';
import { SaatEditPageComponent } from './pages/saat-edit-page/saat-edit-page.component';
import { SaatListPageComponent } from './pages/saat-list-page/saat-list-page.component';
import { SaatNewPageComponent } from './pages/saat-new-page/saat-new-page.component';
import { SaatOnePageComponent } from './pages/saat-one-page/saat-one-page.component';

const routes: Route[] = [
	{
		path: '',
		component: SaatListPageComponent,
		canActivate: [AuthorizedGuard],
		data: {
			roles: [
				AuthRole.SAAT_VIEW
			]
		}
	},
	{
		path: ':id/edit',
		component: SaatEditPageComponent,
		canActivate: [AuthorizedGuard],
		data: {
			roles: [
				AuthRole.SAAT_EDIT
			]
		}
	},
	{
		path: 'new',
		component: SaatNewPageComponent,
		canActivate: [AuthorizedGuard],
		data: {
			roles: [
				AuthRole.SAAT_ADD
			]
		}
	},
	{
		path: ':id',
		component: SaatOnePageComponent,
		canActivate: [AuthorizedGuard],
		data: {
			roles: [
				AuthRole.SAAT_VIEW
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
export class SaatRoutingModule { }
