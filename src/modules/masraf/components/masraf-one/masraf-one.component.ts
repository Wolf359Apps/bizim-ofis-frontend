import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Masraf } from 'blueprints';

@Component({
	selector: 'app-masraf-one',
	templateUrl: './masraf-one.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasrafOneComponent {

	@Input() masraf: Masraf | undefined | null;

}
