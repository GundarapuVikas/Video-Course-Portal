import { Component,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  renderFooter(){
    console.log('footer re-render')
  }
}
