import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-courtcost',
    templateUrl: './courtcost.component.html',
    styleUrls: ['./courtcost.component.css']
})
export class CourtCostComponent{
    @Input() items: any;
}