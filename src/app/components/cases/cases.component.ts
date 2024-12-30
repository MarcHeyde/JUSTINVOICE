import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-cases',
    templateUrl: './cases.component.html',
    styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit{
    filter: string = 'all';

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.subscribe((data) => {
            this.filter = data['filter'];
            this.applyFilter();
        });
    }

    applyFilter() {
    }
}