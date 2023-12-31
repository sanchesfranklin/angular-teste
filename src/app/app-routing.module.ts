import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteSelectFilterComponent } from './teste-select-filter/teste-select-filter.component';
import { DragAndDropComponent} from './drag-and-drop/drag-and-drop.component';
import { AppComponent } from './app.component';
import { TesteDragDropDragulaComponent } from './teste-drag-drop-dragula/teste-drag-drop-dragula.component';

const routes: Routes = [
  { path: 'teste', component: TesteSelectFilterComponent, pathMatch: 'full' },
  { path: 'drag-drop', component: DragAndDropComponent, pathMatch: 'full' },
  {
    path: 'dragula',
    component: TesteDragDropDragulaComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
