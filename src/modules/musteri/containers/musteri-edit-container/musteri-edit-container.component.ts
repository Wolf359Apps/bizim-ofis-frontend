import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Entities, Musteri } from 'blueprints';
import { Observable } from 'rxjs';
import * as actions from 'store';
import * as selectors from 'store';

@Component({
	selector: 'app-musteri-edit-container',
	templateUrl: './musteri-edit-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusteriEditContainerComponent {

	musteri$: Observable<Musteri>;

	constructor(
		private store: Store
	) {

		this.musteri$ = store.select(selectors.activeEntity);

	}

	onSave(musteri: Musteri): void {

		this.store.dispatch(
			actions.modifyEntity({
				entity: Entities.musteriler,
				id: musteri.id,
				body: musteri,
				after: { redirect: true, showSuccess: true }
			})
		);

	}

}
