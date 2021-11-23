import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Saat } from 'blueprints';

@Component({
	selector: 'app-saat-list',
	templateUrl: './saat-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaatListComponent {

	@Input() saatler: Saat[] | null | undefined = [];

}
