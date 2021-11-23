import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Saat } from 'blueprints';

@Component({
	selector: 'app-saat-one',
	templateUrl: './saat-one.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaatOneComponent {

	@Input() saat: Saat | undefined | null;

}
