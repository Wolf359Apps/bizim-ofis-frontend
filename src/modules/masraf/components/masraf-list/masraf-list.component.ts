import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Masraf } from 'blueprints';

@Component({
	selector: 'app-masraf-list',
	templateUrl: './masraf-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasrafListComponent {

	@Input() masraflar: Masraf[] | null | undefined = [];

}
