import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'modules/shared/shared.module';
import { MusteriRoutingModule } from './musteri-routing.module';
import * as fromConfig from './musteri.config';

@NgModule({
	declarations: fromConfig.components,
	imports: [
		CommonModule,
		MusteriRoutingModule,
		ReactiveFormsModule,
		SharedModule
	]
})
export class MusteriModule { }
