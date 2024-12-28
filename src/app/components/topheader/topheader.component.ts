import { Component }            from '@angular/core';
import { TranslateService }     from '@ngx-translate/core';
import { CommonModule }         from '@angular/common';

import { TranslateModule }      from '@ngx-translate/core';

import { SharedService }        from '../../services/shared.service';

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
    currentTab: string = 'dossiers';  // Default tab

    constructor(private translate: TranslateService, private sharedService: SharedService) {
        this.translate.setDefaultLang('nl')
        this.translate.use('nl');
        this.sharedService.updateLanguage('nl');
    }

    get currentLang(): string {
        return this.translate.currentLang;
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);
        this.sharedService.updateLanguage('nl');
    }

    switchFile(tab: string){
        this.currentTab = tab;
    }
}