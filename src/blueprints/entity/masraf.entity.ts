import { BaseEntity } from './base-entity';
import { ID } from 'blueprints/constant';

export interface Masraf extends BaseEntity {

	isim: string;
	tutar: number;
	tarih: Date;
	aciklama: string;

}

// export interface MasrafDTO {
// 
// 	entities: {
// 		masraflar: Record<string, Masraf>;
// 	};
// 	result: ID[];
// 
// }
