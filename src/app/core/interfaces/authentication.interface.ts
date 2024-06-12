import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";

export interface IAuthenticationService {
  authenticate(payload: authenticationData): Observable<HttpResponse<AuthDto>>;
}

export interface authenticationData {
  email: string;
  password: string;
}

export interface AuthDto {
  flag: boolean,
  message: string,
  token: string,
}
