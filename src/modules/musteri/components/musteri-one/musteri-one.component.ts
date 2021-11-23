import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Musteri } from 'blueprints';

@Component({
	selector: 'app-musteri-one',
	templateUrl: './musteri-one.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusteriOneComponent {

	@Input() musteri: Musteri | undefined | null;

}
