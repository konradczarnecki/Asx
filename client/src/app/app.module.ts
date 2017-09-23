import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigService } from './config.service';
import { GameComponent } from './game/game.component';
import { ConsoleComponent } from './console/console.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ConsoleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
