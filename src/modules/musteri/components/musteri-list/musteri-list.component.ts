import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Musteri } from 'blueprints';

@Component({
	selector: 'app-musteri-list',
	templateUrl: './musteri-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusteriListComponent {

	@Input() musteriler: Musteri[] | null | undefined = [];

}
