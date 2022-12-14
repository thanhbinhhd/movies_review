import { environment } from 'src/environments/environment';

export const apiUrl: string = environment.apiUrl;

export interface SigninResponse {
  user: {
    username: string;
  };
}
