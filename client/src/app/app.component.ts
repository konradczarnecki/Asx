import { Component, Inject } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers : []
})
export class AppComponent {

    logged: boolean;

    constructor(){}

    ngOnInit(){

      this.logged = false;
    }

    onLogin(result: boolean): void {
      this.logged = result;
    }


}

