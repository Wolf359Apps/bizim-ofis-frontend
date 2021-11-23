import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'modules/shared/shared.module';
import { MasrafRoutingModule } from './masraf-routing.module';
import * as fromConfig from './masraf.config';

@NgModule({
	declarations: fromConfig.components,
	imports: [
		CommonModule,
		MasrafRoutingModule,
		ReactiveFormsModule,
		SharedModule
	]
})
export class MasrafModule { }
