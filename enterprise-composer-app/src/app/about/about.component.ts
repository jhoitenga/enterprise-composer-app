/**
 * Title: about.component.ts
 * Author: Jennifer Hoitenga
 * Date: August 23, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Rename Projects video by Professor Krasso (https://youtu.be/T7ef0bOOWs4)
 * Angular Tutorial for Beginners: Classes and Interfaces video by Professor Krasso (https://youtu.be/vvXSW_Cldvg)
 * Angular Tutorial for Beginners: How to Pass Data to Routes by Professor Krasso (https://www.youtube.com/watch?v=KTVHu4hafUs)
 */

// Import necessary Angular modules and classes.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about', // Component selector used in HTML templates.
  templateUrl: './about.component.html', // URL to the HTML template file.
  styleUrls: ['./about.component.css'], // Array of URLs to style files.
})
export class AboutComponent implements OnInit {
  constructor() {
    // Constructor for the AboutComponent class.
  }

  ngOnInit(): void {}
}
