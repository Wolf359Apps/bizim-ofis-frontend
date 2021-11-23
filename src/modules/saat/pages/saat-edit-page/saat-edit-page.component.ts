import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Entities, ID } from 'blueprints';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as actions from 'store';

@Component({
	selector: 'app-saat-edit-page',
	templateUrl: './saat-edit-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaatEditPageComponent {

	id$: Observable<ID>;

	constructor(
		private route: ActivatedRoute,
		private store: Store
	) {

		this.id$ = this.route.params.pipe(

			map(params => params.id),
			tap(id =>
				this.store.dispatch(
					actions.activateEntity({
						entityName: Entities.saatler.plural,
						id
					})
				)
			)

		);

	}

}