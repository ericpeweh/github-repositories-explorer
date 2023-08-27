// Types
import { IUser } from "../common/user";

export interface IGetUsersByUsernameResponse {
	total_count: number;
	incomplete_results: boolean;
	items: IUser[];
}
