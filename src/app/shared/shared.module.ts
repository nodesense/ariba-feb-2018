import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './components/like/like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LikeComponent, 
                HighlightDirective, 
                PowerPipe, 
                FilterPipe, 
                SortPipe],

  exports: [
    LikeComponent,

    HighlightDirective,
    PowerPipe,
    FilterPipe, 
    SortPipe
  ],

  // all services goes here
  // module level, means singleton
  providers: [
    DataService
  ]
})
export class SharedModule { }
