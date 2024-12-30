import { Component, Input }             from '@angular/core';
import { TranslateService }             from '@ngx-translate/core';
import { CommonModule }                 from '@angular/common';

import { TranslateModule }              from '@ngx-translate/core';
import { SharedService }                from '../../services/shared.service';
import { Router}                        from '@angular/router'

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
    currentTab: string = 'FILES';

    supportedLanguages: string[] = ['nl', 'fr', 'de', 'en'];
    tabs = [
        { key: 'FILES', translationKey: 'FILES' },
        { key: 'NEWFILES', translationKey: 'NEWFILES' },
        { key: 'MYTASKS', translationKey: 'MYTASKS' }
    ]

    currentLanguage: string = 'nl';


    constructor(private translate: TranslateService, private sharedService: SharedService, private router: Router) {
        this.setInitialLanguage();
    }

    get currentLang(): string {
        return this.translate.currentLang;
    }

    private setInitialLanguage() {
        const defaultLang = this.translate.getBrowserLang != undefined
            ? this.supportedLanguages.includes(this.translate.getBrowserLang()!)
                ? this.translate.getBrowserLang()
                : 'nl'
            : 'nl'

        this.translate.setDefaultLang(defaultLang!);
        this.translate.use(defaultLang!);
        this.sharedService.updateLanguage(defaultLang!);
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);
        this.sharedService.updateLanguage(lang);
    }

    switchTab(tabKey: string){
        this.currentTab = tabKey;
        this.router.navigate([`/${tabKey.toLowerCase()}`]);
    }
}