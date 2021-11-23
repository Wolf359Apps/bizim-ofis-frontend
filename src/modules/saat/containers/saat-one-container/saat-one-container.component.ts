import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthRole, Entities, ID, Saat } from 'blueprints';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import * as actions from 'store';
import * as selectors from 'store';

@Component({
	selector: 'app-saat-one-container',
	templateUrl: './saat-one-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaatOneContainerComponent {

	AuthRole= AuthRole;

	saat$: Observable<Saat>;

	constructor(
		private store: Store,
		private confirmationService: ConfirmationService
	) {

		this.saat$ = store.select(selectors.activeEntity);

	}

	onRefresh(id: ID): void {

		this.store.dispatch(
			actions.loadEntity({
				entity: Entities.saatler,
				id,
				skipCache: true
			})
		);

	}

	onDelete(id: ID, btn: HTMLButtonElement): void {

		this.confirmationService.confirm({
			target: btn,
			message: 'Are you sure that you want to proceed?',
			icon: 'fas fa-exclamation-triangle',
			acceptButtonStyleClass: 'p-button-danger',
			acceptLabel: 'Delete',
			accept: () => this.store.dispatch(actions.deleteEntity({ entity: Entities.saatler, id }))
		});

	}

}
