import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Entities, Musteri } from 'blueprints';
import * as actions from 'store';

@Component({
	selector: 'app-musteri-new-container',
	templateUrl: './musteri-new-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusteriNewContainerComponent {

	constructor(
		private store: Store
	) {	}

	onSave(musteri: Musteri): void {

		this.store.dispatch(
			actions.createEntity({
				entity: Entities.musteriler,
				body: musteri,
				after: { redirect: true, showSuccess: true }
			})
		);

	}

}
