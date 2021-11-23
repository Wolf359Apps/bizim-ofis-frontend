import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'modules/shared/shared.module';
import { SaatRoutingModule } from './saat-routing.module';
import * as fromConfig from './saat.config';

@NgModule({
	declarations: fromConfig.components,
	imports: [
		CommonModule,
		SaatRoutingModule,
		ReactiveFormsModule,
		SharedModule
	]
})
export class SaatModule { }
