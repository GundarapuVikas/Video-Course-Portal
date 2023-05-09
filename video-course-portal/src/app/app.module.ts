import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LoginComponent } from './features/login/login.component';
import { NewCourseFormComponent } from './features/new-course-form/new-course-form.component';
import { DisplayCoursesComponent } from './features/display-courses/display-courses.component';
import { CourseComponent } from './features/course/course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './features/main-page/main-page.component';
import { DatePipePipe } from './shared/pipes/datePipe/date-pipe.pipe';
import { TimePipe } from './shared/pipes/timePipe/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NewCourseFormComponent,
    DisplayCoursesComponent,
    CourseComponent,
    MainPageComponent,
    TimePipe,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
