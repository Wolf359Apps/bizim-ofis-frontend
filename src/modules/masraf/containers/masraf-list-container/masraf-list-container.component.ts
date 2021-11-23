import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthRole, Entities, Masraf } from 'blueprints';
import { Observable } from 'rxjs';
import * as actions from 'store';
import * as selectors from 'store';

@Component({
	selector: 'app-masraf-list-container',
	templateUrl: './masraf-list-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasrafListContainerComponent implements OnInit {

	AuthRole= AuthRole;

	masraflar$: Observable<Masraf[]>;

	constructor(
		private store: Store
	) {

		this.masraflar$ = store.select(selectors.activeEntities);

	}

	ngOnInit(): void {

		this.store.dispatch(
			actions.loadEntities({
				entity: Entities.masraflar
			})
		);

	}

	onRefresh(): void {

		this.store.dispatch(
			actions.loadEntities({
				entity: Entities.masraflar,
				skipCache: true
			})
		);

	}

}
