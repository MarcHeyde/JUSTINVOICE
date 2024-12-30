import { HttpClient }           from '@angular/common/http';
import { catchError }           from 'rxjs/operators';
import { Observable, of }       from 'rxjs';
import { APP_Settings }         from '../app.settings'

export class CourtCostService {
    constructor(private http: HttpClient) {
    }

    getData(tab: string, pageIndex: number = 0, pageSize: number = 10): Observable<any> {
        const endpoint = tab === 'files' ? APP_Settings.endpoints.getFiles : APP_Settings.endpoints.getNewFiles;
        const url = `${APP_Settings.rootUrl}${endpoint}?page=${pageIndex + 1}&size=${pageSize}`;

        return this.http.get<any>(url).pipe(
          catchError((error) => {
            console.error('API request failed:', error);
            return of([]);  // Return empty array in case of error
          })
        );
    }

    getServiceType(): Observable<string>{
        return this.http.get<string>(`${APP_Settings.rootUrl}${APP_Settings.endpoints.getServiceTypes}`)
    }
}