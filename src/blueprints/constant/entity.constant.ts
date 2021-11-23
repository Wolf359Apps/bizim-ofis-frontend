import { BackendUrl, backendUrl, ID } from 'blueprints';
import * as fromEntities from 'blueprints/entity';

export class Entity {

	constructor(
		public name: string,
		public plural: string = name,
		public customEndpoint: string = plural,
		public customRoute: string = plural
	) { }

	public endpointUrl(id?: ID): BackendUrl {

		return ({ value: `${backendUrl}/${this.customEndpoint}${id ? '/' + id : ''}` });

	}

	public routeUrl(id?: ID): string {

		return `/${this.customRoute}${id ? '/' + id : ''}`;

	}

}

interface IEntities {

	authUsers: Entity;
	constants: Entity;
	musteriler: Entity;
	saatler: Entity;
	masraflar: Entity;
	onlineUsers: Entity;

}

export declare type EntityType =
	fromEntities.Musteri |
	fromEntities.Saat |
	fromEntities.Masraf |
	fromEntities.AuthUser |
	fromEntities.Constant;

export const Entities: IEntities = {

	authUsers: new Entity('authUser', 'authUsers', 'auth/users', 'admin/users'),
	constants: new Entity('constant', 'constants', 'auth/constants', 'admin/constants'),
	musteriler: new Entity('musteri', 'musteriler', 'musteriler', 'musteriler'),
	saatler: new Entity('saat', 'saatler', 'saatler', 'saatler'),
	masraflar: new Entity('masraf', 'masraflar', 'masraflar', 'masraflar'),
	onlineUsers: new Entity('onlineUser', 'onlineUsers')

}
