import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthRole, Entities, Saat } from 'blueprints';
import { Observable } from 'rxjs';
import * as actions from 'store';
import * as selectors from 'store';

@Component({
	selector: 'app-saat-list-container',
	templateUrl: './saat-list-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaatListContainerComponent implements OnInit {

	AuthRole= AuthRole;

	saatler$: Observable<Saat[]>;

	constructor(
		private store: Store
	) {

		this.saatler$ = store.select(selectors.activeEntities);

	}

	ngOnInit(): void {

		this.store.dispatch(
			actions.loadEntities({
				entity: Entities.saatler
			})
		);

	}

	onRefresh(): void {

		this.store.dispatch(
			actions.loadEntities({
				entity: Entities.saatler,
				skipCache: true
			})
		);

	}

}
