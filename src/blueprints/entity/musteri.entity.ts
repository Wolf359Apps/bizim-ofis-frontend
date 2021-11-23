import { BaseEntity } from './base-entity';
import { ID } from 'blueprints/constant';

export interface Musteri extends BaseEntity {

	name: string;
	title: string;
	birthdate: Date;
	mobile: string;
	phone: string;

}

// export interface MusteriDTO {
// 
// 	entities: {
// 		musteriler: Record<string, Musteri>;
// 	};
// 	result: ID[];
// 
// }
