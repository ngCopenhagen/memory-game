import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemorygameModule } from './memorygame/memorygame.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MemorygameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
