import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Masraf } from 'blueprints';
import { isInvalid } from 'modules/shared';

@Component({
	selector: 'app-masraf-form',
	templateUrl: './masraf-form.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasrafFormComponent implements OnChanges {

	@Input() masraf: Masraf | null | undefined;

	@Output() save: EventEmitter<Masraf> = new EventEmitter();

	form: FormGroup;

	constructor(
		fb: FormBuilder
	) {

		this.form = fb.group({
			id: [''],
			isim: ['', Validators.required],
			tutar: ['', Validators.required],
			tarih: ['', Validators.required],
			aciklama: ['', Validators.required],
		});

	}

	ngOnChanges(changes: SimpleChanges): void {

		const masraf: Masraf = changes.masraf?.currentValue;
		if (masraf)
			this.form.patchValue({
				...masraf,
                tarih: new Date(masraf.tarih),
			});

	}

	onSave(): void {

		if (isInvalid(this.form))
			return;

		this.save.emit(this.form.value);

	}

}
