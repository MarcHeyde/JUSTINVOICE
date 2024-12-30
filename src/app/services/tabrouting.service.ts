import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TabRoutingService {
  private tabToRouteMap: Record<string, string> = {
    dossiers: 'dossiers',
    newDossiers: 'new-dossiers',
    myTasks: 'my-tasks'
  };

  constructor(private translate: TranslateService) {}

  getRouteForTab(tab: string): string {
    return this.tabToRouteMap[tab] || 'dossiers'; // Default route
  }

  getTabLabel(tab: string): string {
    return this.translate.instant(`TABS.${tab.toUpperCase()}`);
  }
}