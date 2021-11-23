import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Saat } from 'blueprints';
import { isInvalid } from 'modules/shared';

@Component({
	selector: 'app-saat-form',
	templateUrl: './saat-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaatFormComponent implements OnChanges {

	@Input() saat: Saat | null | undefined;

	@Output() save: EventEmitter<Saat> = new EventEmitter();

	form: FormGroup;

	constructor(
		fb: FormBuilder
	) {

		this.form = fb.group({
			id: [''],
			name: ['', Validators.required],
			sure: ['', Validators.required],
			baslangic: ['', Validators.required],
			bitis: [''],
			aciklama: [''],
		});

	}

	ngOnChanges(changes: SimpleChanges): void {

		const saat: Saat = changes.saat?.currentValue;
		if (saat)
			this.form.patchValue({
				...saat,
                baslangic: new Date(saat.baslangic),
                bitis: new Date(saat.bitis),
			});

	}

	onSave(): void {

		if (isInvalid(this.form))
			return;

		this.save.emit(this.form.value);

	}

}
