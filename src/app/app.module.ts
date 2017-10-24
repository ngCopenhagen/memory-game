import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemorygameModule } from './memorygame/memorygame.module';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    MemorygameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
