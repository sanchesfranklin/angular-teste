import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteSelectFilterComponent } from './teste-select-filter/teste-select-filter.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgDragDropModule } from 'ng-drag-drop';
import { FormsModule } from '@angular/forms';

import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteSelectFilterComponent,
    DragAndDropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    NgDragDropModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
