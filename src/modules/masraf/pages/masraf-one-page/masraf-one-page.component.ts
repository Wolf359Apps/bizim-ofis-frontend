import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Entities } from 'blueprints';
import { Subscription } from 'rxjs';
import * as actions from 'store';

@Component({
	selector: 'app-masraf-one-page',
	templateUrl: './masraf-one-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasrafOnePageComponent implements OnInit, OnDestroy {

	subscription = new Subscription();

	constructor(
		private route: ActivatedRoute,
		private store: Store
	) { }

	ngOnInit(): void {

		this.subscription.add(

			this.route.params.subscribe(params =>
				this.store.dispatch(
					actions.activateEntity({
						entityName: Entities.masraflar.plural,
						id: params.id
					})
				)
			)

		);

	}

	ngOnDestroy(): void {

		this.subscription.unsubscribe();

	}

}
