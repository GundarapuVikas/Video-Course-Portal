import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { DisplayCoursesComponent } from './features/display-courses/display-courses.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { NewCourseFormComponent } from './features/new-course-form/new-course-form.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {
    path:':userName',
    component:MainPageComponent,
    children:[
      {
        path:'',redirectTo:'courses',pathMatch:'full'
      },
      {
        path:'courses',component:DisplayCoursesComponent,
      },
      {
        path:'new-course',component:NewCourseFormComponent
      },
      {
        path:'new-course/:id',component:NewCourseFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
