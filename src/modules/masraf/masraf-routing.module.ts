import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthRole } from 'blueprints';
import { AuthorizedGuard } from 'services';
import { MasrafEditPageComponent } from './pages/masraf-edit-page/masraf-edit-page.component';
import { MasrafListPageComponent } from './pages/masraf-list-page/masraf-list-page.component';
import { MasrafNewPageComponent } from './pages/masraf-new-page/masraf-new-page.component';
import { MasrafOnePageComponent } from './pages/masraf-one-page/masraf-one-page.component';

const routes: Route[] = [
	{
		path: '',
		component: MasrafListPageComponent,
		canActivate: [AuthorizedGuard],
		data: {
			roles: [
				AuthRole.MASRAF_VIEW
			]
		}
	},
	{
		path: ':id/edit',
		component: MasrafEditPageComponent,
		canActivate: [AuthorizedGuard],
		data: {
			roles: [
				AuthRole.MASRAF_EDIT
			]
		}
	},
	{
		path: 'new',
		component: MasrafNewPageComponent,
		canActivate: [AuthorizedGuard],
		data: {
			roles: [
				AuthRole.MASRAF_ADD
			]
		}
	},
	{
		path: ':id',
		component: MasrafOnePageComponent,
		canActivate: [AuthorizedGuard],
		data: {
			roles: [
				AuthRole.MASRAF_VIEW
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
export class MasrafRoutingModule { }
