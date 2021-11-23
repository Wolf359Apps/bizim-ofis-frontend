import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Entities, Saat } from 'blueprints';
import * as actions from 'store';

@Component({
	selector: 'app-saat-new-container',
	templateUrl: './saat-new-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaatNewContainerComponent {

	constructor(
		private store: Store
	) {	}

	onSave(saat: Saat): void {

		this.store.dispatch(
			actions.createEntity({
				entity: Entities.saatler,
				body: saat,
				after: { redirect: true, showSuccess: true }
			})
		);

	}

}
