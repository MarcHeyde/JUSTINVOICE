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
    currentLanguage: string = 'nl';
    @Input() currentTab: string = 'dossiers';  // Default tab

    constructor(private translate: TranslateService, private sharedService: SharedService, private router: Router) {
        this.translate.setDefaultLang(this.currentLanguage)
        this.translate.use(this.currentLanguage);
        this.sharedService.updateLanguage(this.currentLanguage);
    }

    get currentLang(): string {
        return this.translate.currentLang;
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);
        this.sharedService.updateLanguage(lang);
    }

    switchFile(tab: string, newFile : boolean = false){
        this.currentTab = tab;
        if (!newFile)
            this.router.navigate([`/${tab}`]);
        else
            this.router.navigate([`/${tab}/`]);

    }

    navigateTo(page: string){

    }
}