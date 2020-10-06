import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatDividerModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatDividerModule,
  ],
  providers: [],
})
export class MaterialModule { }
