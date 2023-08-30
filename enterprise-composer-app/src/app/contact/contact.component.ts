/**
 * Title: contact.component.ts
 * Author: Jennifer Hoitenga
 * Date: August 23, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Rename Projects video by Professor Krasso (https://youtu.be/T7ef0bOOWs4)
 * Angular Tutorial for Beginners: Classes and Interfaces video by Professor Krasso (https://youtu.be/vvXSW_Cldvg)
 * Angular Tutorial for Beginners: How to Pass Data to Routes by Professor Krasso (https://www.youtube.com/watch?v=KTVHu4hafUs)
 */

// Import necessary modules from Angular.
import { Component, OnInit } from '@angular/core';

// Declare the ContactComponent class.
@Component({
  selector: 'app-contact', // Selector used to identify this component in HTML templates.
  templateUrl: './contact.component.html', // URL to the HTML template file for this component.
  styleUrls: ['./contact.component.css'], // Array of URLs to style files for this component.
})
export class ContactComponent implements OnInit {
  // Constructor for the ContactComponent class.
  constructor() {}

  ngOnInit(): void {}
}
