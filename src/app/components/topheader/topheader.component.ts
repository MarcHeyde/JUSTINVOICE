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
        translate.use('nl');
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);
    }
}