import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthRole, Entities, Musteri } from 'blueprints';
import { Observable } from 'rxjs';
import * as actions from 'store';
import * as selectors from 'store';

@Component({
	selector: 'app-musteri-list-container',
	templateUrl: './musteri-list-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusteriListContainerComponent implements OnInit {

	AuthRole= AuthRole;

	musteriler$: Observable<Musteri[]>;

	constructor(
		private store: Store
	) {

		this.musteriler$ = store.select(selectors.activeEntities);

	}

	ngOnInit(): void {

		this.store.dispatch(
			actions.loadEntities({
				entity: Entities.musteriler
			})
		);

	}

	onRefresh(): void {

		this.store.dispatch(
			actions.loadEntities({
				entity: Entities.musteriler,
				skipCache: true
			})
		);

	}

}
