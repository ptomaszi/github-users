import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { UsersListService } from './users-list.service';

@NgModule({
  imports: [CommonModule],
  declarations: [UsersListComponent],
  providers: [UsersListService],
  exports: [UsersListComponent],
})
export class UsersListModule {}
