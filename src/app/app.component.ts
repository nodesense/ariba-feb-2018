import {Component, OnInit} from '@angular/core';

interface Address {
    city: string;
    state?: string;
}

// Must, app must have one main component

// meta deta, understood by ng framework
@Component({
    // name, html tag/element name
    selector: 'app-root',

    // view 
    templateUrl: 'app.component.html',

    // component specific styles
    // scopped style, only for this component
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent implements OnInit {
    title: string = 'Product App';

    year: number = 2018;

    address: Address = {city: 'Bangalore'};

    // before loading view into browser
    constructor() {
        console.log('App component created');
    }

    // called after view loaded into browser
    ngOnInit() {
        console.log('App View ready');
    }

    


    // to be called by child component
    onContact(msg: any) {

        console.log("Received ", msg);

    }

}
