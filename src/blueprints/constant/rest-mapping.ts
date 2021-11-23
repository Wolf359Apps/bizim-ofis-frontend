import { AuthRole } from 'blueprints';
import { environment } from 'environments/environment';
import { ID } from './common.constant';

export const backendUrl = environment.backendUrl;
export const backendWSUrl = environment.backendWSUrl;

export interface BackendUrl {

	value: string;

}

export class BackendUrls {

	static AUTH_LOGIN				= ()						:BackendUrl => ({ value: `${backendUrl}/auth/login` });
	static AUTH_ONLINE				= ()						:BackendUrl => ({ value: `${backendWSUrl}/auth/online` });
	static AUTH_ONLINE_LIST			= ()						:BackendUrl => ({ value: `${backendWSUrl}/auth/online/list` });
	static AUTH_REMIND_PASSWORD		= ()						:BackendUrl => ({ value: `${backendUrl}/auth/remind-password` });
	static AUTH_CHANGE_PASSWORD		= ()						:BackendUrl => ({ value: `${backendUrl}/auth/change-password` });
	static AUTH_REGISTER			= ()						:BackendUrl => ({ value: `${backendUrl}/auth/register` });
	static AUTH_USERS_ID_ROLES_NAME	= (id: ID, role: AuthRole)	:BackendUrl => ({ value: `${backendUrl}/auth/users/${id}/roles/${role}` });
	static AUTH_USERS_ID_ENABLE		= (id: ID)					:BackendUrl => ({ value: `${backendUrl}/auth/users/${id}/enable` });
	static AUTH_USERS_ID_DISABLE	= (id: ID)					:BackendUrl => ({ value: `${backendUrl}/auth/users/${id}/disable` });

	static CONSTANTS                = ()                        : BackendUrl => ({ value: `${backendUrl}/constants` });

	static TOPIC_WHO_IS_ONLINE          = ()                    : BackendUrl => ({ value: `/topic/whoIsOnline` });
	static TOPIC_LOGGED_IN_USER_CHANGES = (id: ID)              : BackendUrl => ({ value: `/topic/loggedInUserChanges/${id}` });

}
