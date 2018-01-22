import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'toggle-layout-2',
    templateUrl: 'toggle.html'
})
export class ToggleLayout2 {
    @Input('data') data: any;
    @Input('events') events: any;

    constructor() { }

    ngOnChanges(changes: { [propKey: string]: any }) {
        this.data = changes['data'].currentValue;
    }
    
    onEvent = (event: string, item: any): void => {
        if (this.events[event]) {
            this.events[event](item);
        }
    }
}
