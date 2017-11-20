import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ConsoleComponent } from './console/console.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { UserService} from "./login/user.service";
import {GameService} from "./game/logic/game";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ConsoleComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
