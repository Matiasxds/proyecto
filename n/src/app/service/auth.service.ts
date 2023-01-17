import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../Model/jwt-dto';
import { Login } from '../Model/login';
import { NuevoUsuario } from '../Model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authURL = `https://backend-afit.onrender.com/auth/`;
  constructor(private httpClient:HttpClient) { }


  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: Login): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
}
}
