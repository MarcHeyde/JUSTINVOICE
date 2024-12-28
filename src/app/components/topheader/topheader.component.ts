import { Component }            from '@angular/core';
import { TranslateService }     from '@ngx-translate/core';
import { CommonModule }         from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-topheader',
    standalone: true,
    templateUrl: './topheader.component.html',
    styleUrls: ['./topheader.component.scss'],
    imports: [
        CommonModule,
        TranslateModule
    ]
  })
export class TopHeaderComponent {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('nl')
        this.translate.use('nl');
    }

    get currentLang(): string {
        return this.translate.currentLang;
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);
    }
}