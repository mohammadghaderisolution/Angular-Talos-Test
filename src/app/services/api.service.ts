import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable } from "rxjs";
import { CONFIGS } from "../utility/confige";
import { map } from "rxjs/internal/operators/map";
import { catchError } from "rxjs/internal/operators/catchError";

@Injectable()
export class ApiService{
    constructor(private _http:HttpClient){

    }
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
      
        return Observable.throw(new Error(`${"error"} ${err.message}`));
      }
    getData<T>(url: string): Observable<T> {
        // response base on status code for error handling in view
        
        return this._http.get(`${CONFIGS.BASE_URL}${url}`,{observe: 'response'}).pipe(
          map((response:Response) => {
            console.log(response)
           return { status: response.status, data: response.body }
          }),
          catchError(this.handleError)
        );
      }
    
      postData<T>(url: string, body?: object): Observable<T> {
        // regular response handling
        return this._http
          .post(`${CONFIGS.BASE_URL}${url}`, body)
          .pipe(
            map(data => <T>data),
            catchError(this.handleError)
          );
      }
      uploadImage<T>(url: string, image:FormData): Observable<T> {
        return this._http
          .put(`${CONFIGS.BASE_URL}${url}`, image)
          .pipe(
            map(data => <T>data),
            catchError(this.handleError)
          );
      }
}
