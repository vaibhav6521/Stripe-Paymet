import { Component } from '@angular/core';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UPIComponent {

  paymentLink: string = 'https://buy.stripe.com/test_5kA8y6dvP9zL5heaEE'; // Replace with your generated payment link
  paymentSuccess: boolean = false;
  paymentFailure: boolean = false;

  openPaymentLink() {
    const paymentWindow = window.open(this.paymentLink, '_blank');

    // Simulating payment success after a delay (Replace with actual success/failure handling)
    setTimeout(() => {
      if (paymentWindow?.closed) {
        this.paymentSuccess = true;
        this.paymentFailure = false;
      } else {
        this.paymentSuccess = false;
        this.paymentFailure = true;
      }
    }, 5000); // Simulating a delay - replace with actual success/failure handling logic
  }
}
