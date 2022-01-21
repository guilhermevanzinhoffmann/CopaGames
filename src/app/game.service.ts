import { Injectable } from '@angular/core';
import { Game } from './models/game';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private url = 'https://l3-processoseletivo.azurewebsites.net/api/Competidores?copa=games';
  constructor(private http: HttpClient) { }

  getGames(): Observable<Array<Game>>{
      return this.http.get<Array<Game>>(this.url)
        .pipe(
          catchError(this.handleError<Array<Game>>('getGames', []))
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
