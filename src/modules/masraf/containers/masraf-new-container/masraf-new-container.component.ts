import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Entities, Masraf } from 'blueprints';
import * as actions from 'store';

@Component({
	selector: 'app-masraf-new-container',
	templateUrl: './masraf-new-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasrafNewContainerComponent {

	constructor(
		private store: Store
	) {	}

	onSave(masraf: Masraf): void {

		this.store.dispatch(
			actions.createEntity({
				entity: Entities.masraflar,
				body: masraf,
				after: { redirect: true, showSuccess: true }
			})
		);

	}

}
