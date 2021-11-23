import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Entities, Masraf } from 'blueprints';
import { Observable } from 'rxjs';
import * as actions from 'store';
import * as selectors from 'store';

@Component({
	selector: 'app-masraf-edit-container',
	templateUrl: './masraf-edit-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasrafEditContainerComponent {

	masraf$: Observable<Masraf>;

	constructor(
		private store: Store
	) {

		this.masraf$ = store.select(selectors.activeEntity);

	}

	onSave(masraf: Masraf): void {

		this.store.dispatch(
			actions.modifyEntity({
				entity: Entities.masraflar,
				id: masraf.id,
				body: masraf,
				after: { redirect: true, showSuccess: true }
			})
		);

	}

}
