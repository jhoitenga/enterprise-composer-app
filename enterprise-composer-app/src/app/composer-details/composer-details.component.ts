/**
 * Title: composer-details.component.spec.ts
 * Author: Jennifer Hoitenga
 * Date: August 30, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Rename Projects video by Professor Krasso (https://youtu.be/T7ef0bOOWs4)
 * Angular Tutorial for Beginners: Classes and Interfaces video by Professor Krasso (https://youtu.be/vvXSW_Cldvg)
 * Angular Tutorial for Beginners: How to Pass Data to Routes by Professor Krasso (https://www.youtube.com/watch?v=KTVHu4hafUs)
 * Angular Tutorial for Beginners: Services video by Professor Krasso (https://youtu.be/vpcJciyUrFg)
 * Angular Tutorial for Beginners: Understanding Dependency Injection by Professor Krasso (https://youtu.be/0LazaSSO2LI)
 */

// Import necessary Angular modules and classes.
import { Component, OnInit } from '@angular/core';
// Import the composer interface.
import { IComposer } from '../composer.interface';
// Import the ComposerService class.
import { ComposerService } from '../composer.service';
// Import ActivatedRoute for accessing route parameters.
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details', // Component selector used in HTML templates.
  templateUrl: './composer-details.component.html', // URL to the HTML template file.
  styleUrls: ['./composer-details.component.css'], // Array of URLs to style files.
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number; // Store the composer's ID obtained from the route parameter.
  composer: IComposer; // Store the composer details.

  constructor(
    private route: ActivatedRoute,
    private composerService: ComposerService
  ) {
    // Retrieve the 'composerId' route parameter and convert it to a number.
    this.composerId = parseInt(
      this.route.snapshot.paramMap.get('composerId'),
      10
    );

    // If a valid 'composerId' is obtained, fetch the composer details.
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {}
}
