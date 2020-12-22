import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LiveTestsComponent } from './live-tests/live-tests.component';
import { OrganizeComponent } from './organize/organize.component';
import { TestComponent } from './test/test.component';
import { ResultComponent } from './result/result.component';
import { StartComponent } from './start/start.component';
import { SorryComponent } from './sorry/sorry.component';
import { ShowCandComponent } from './show-cand/show-cand.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [{ path : '', component : HomeComponent }, 
                        {path : 'take', component : LiveTestsComponent},
                        
                         { path : 'take/:id', component : TestComponent},
                          { path : 'take/:id/start', component : StartComponent},
                         
                         { path : 'take/:id/result', component : ResultComponent},
                         
                        {path : 'organize', component : OrganizeComponent },
                         {path : 'sorry', component : SorryComponent } ,
                         {path : 'admin', component : ShowCandComponent },
                         {path : 'admin/:id/report', component : ReportComponent } 
                        
                        

                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
