import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<BookingConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { selectedTimeSlot: string }
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  confirmBooking() {
    // Handle booking confirmation logic here
    // You can send data to your backend service, etc.
    // Close the dialog when done
    this.dialogRef.close();
  }
}
