import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log("app init")
  }
  title = 'video-course-portal';
  renderApp(){
    console.log('app-re-render');
  }
}
