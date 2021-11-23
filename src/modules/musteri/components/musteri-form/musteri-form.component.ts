import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Musteri } from 'blueprints';
import { isInvalid } from 'modules/shared';

@Component({
	selector: 'app-musteri-form',
	templateUrl: './musteri-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusteriFormComponent implements OnChanges {

	@Input() musteri: Musteri | null | undefined;

	@Output() save: EventEmitter<Musteri> = new EventEmitter();

	form: FormGroup;

	constructor(
		fb: FormBuilder
	) {

		this.form = fb.group({
			id: [''],
			name: ['', Validators.required],
			title: [''],
			birthdate: [''],
			mobile: [''],
			phone: [''],
		});

	}

	ngOnChanges(changes: SimpleChanges): void {

		const musteri: Musteri = changes.musteri?.currentValue;
		if (musteri)
			this.form.patchValue({
				...musteri,
                birthdate: new Date(musteri.birthdate),
			});

	}

	onSave(): void {

		if (isInvalid(this.form))
			return;

		this.save.emit(this.form.value);

	}

}
