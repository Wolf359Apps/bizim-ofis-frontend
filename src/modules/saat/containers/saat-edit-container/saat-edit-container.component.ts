import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Entities, Saat } from 'blueprints';
import { Observable } from 'rxjs';
import * as actions from 'store';
import * as selectors from 'store';

@Component({
	selector: 'app-saat-edit-container',
	templateUrl: './saat-edit-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaatEditContainerComponent {

	saat$: Observable<Saat>;

	constructor(
		private store: Store
	) {

		this.saat$ = store.select(selectors.activeEntity);

	}

	onSave(saat: Saat): void {

		this.store.dispatch(
			actions.modifyEntity({
				entity: Entities.saatler,
				id: saat.id,
				body: saat,
				after: { redirect: true, showSuccess: true }
			})
		);

	}

}
