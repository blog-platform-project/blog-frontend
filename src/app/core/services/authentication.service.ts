import {HttpClient, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AuthDto, authenticationData, IAuthenticationService} from "@core/interfaces/authentication.interface";
import {environment} from "../../../environtments/enviroment";
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationService implements IAuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(payload: authenticationData): Observable<HttpResponse<AuthDto>> {
    return this.http.post<AuthDto>(`${environment}/api/User/login`, payload, { observe: 'response' })
  }
}
