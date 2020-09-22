import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {company} from './company';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor( private http: HttpClient) { }


  private url:string="https://trn.api.alqasim.net/ico";
      /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
 

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getcompanies():Observable<company[]>{
    return this.http.get<company[]>(this.url);

  }

  
addcompany(newcompany:company): Observable<company> {
  return this.http.post<company>(this.url,newcompany, this.httpOptions)
  .pipe(
 catchError(this.handleError<company>('error'))
  );;


}

  
deletecompany(code:string): Observable<company> {
  console.log(`the code to be deleted is ${code}`);
    let url = `${this.url}/${code}`;
    console.log(`the url is ${url}`);
  
    return this.http.delete<company>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<company>('delete'))
    );
  }

  getsinglecompany(code:string):Observable<company>{
    let url=`${this.url}/${code}`;
    return this.http.get<company>(url);
      }




 
updatecompany(company:company,code:string): Observable<company> {
  console.log(`the code is ${code}`);
 let url=`${this.url}/${code}`;
  return this.http.put(url,company, this.httpOptions).pipe(
  
    catchError(this.handleError<any>('update'))
  );
}

}

