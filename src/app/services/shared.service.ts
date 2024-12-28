import { Injectable }       from "@angular/core";
import { Subject }          from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private valueSource = new Subject<string>();
    currentLanguage$ = this.valueSource.asObservable();

    updateLanguage(newValue: string) {
        this.valueSource.next(newValue);  // Emit the new value
    }
}