import { BaseEntity } from './base-entity';
import { ID } from 'blueprints/constant';

export interface Saat extends BaseEntity {

	name: string;
	sure: number;
	baslangic: Date;
	bitis: Date;
	aciklama: string;

}

// export interface SaatDTO {
// 
// 	entities: {
// 		saatler: Record<string, Saat>;
// 	};
// 	result: ID[];
// 
// }
