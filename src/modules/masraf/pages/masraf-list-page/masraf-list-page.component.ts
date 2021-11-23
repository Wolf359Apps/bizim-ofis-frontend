import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Entities } from 'blueprints';
import * as actions from 'store';

@Component({
	selector: 'app-masraf-list-page',
	templateUrl: './masraf-list-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasrafListPageComponent implements OnInit {

	constructor(private store: Store) { }

	ngOnInit(): void {

		this.store.dispatch(
			actions.activateEntity({
				entityName: Entities.masraflar.plural
			})
		);

	}

}
