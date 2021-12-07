import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { DownloadmenuComponent } from './downloadmenu/downloadmenu.component';
import { AdvancedownloadComponent } from './advancedownload/advancedownload.component';


const routes: Routes = [
  
    


  { path:'downloadmenu', component: DownloadmenuComponent},
  { path: 'advancedownload' , component : AdvancedownloadComponent },
  {
    path: '',
    redirectTo: '/admin/download/downloadmenu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatMenuModule],
  exports: [RouterModule],
})
export class downloadRoutingModule {}
