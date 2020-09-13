import { Component } from '@angular/core';
import { NotificationService } from './toastr-notification/toastr-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-toaster-notification';

  constructor(private notificationService: NotificationService) {

  }

  public showSuccessNotification(): void {
    this.notificationService.success('This is the success message');
  }

  public showErrorNotification(): void {
    this.notificationService.error('This is the error message');
  }

  public showInfoNotification(): void {
    this.notificationService.info('This is the info message');
  }
}
