/**
 * Title: composer-list.component.ts
 * Author: Jennifer Hoitenga
 * Date: August 30, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Rename Projects video by Professor Krasso (https://youtu.be/T7ef0bOOWs4)
 * Angular Tutorial for Beginners: Classes and Interfaces video by Professor Krasso (https://youtu.be/vvXSW_Cldvg)
 * Angular Tutorial for Beginners: How to Pass Data to Routes by Professor Krasso (https://www.youtube.com/watch?v=KTVHu4hafUs)
 * Angular Tutorial for Beginners: Services video by Professor Krasso (https://youtu.be/vpcJciyUrFg)
 * Angular Tutorial for Beginners: Understanding Dependency Injection by Professor Krasso (https://youtu.be/0LazaSSO2LI)
 * Angular Tutorial for Beginners: Handling Form Events with Observables, Part 1 by Professor Krasso (https://youtu.be/4O7eAN3sZ24)
 * Angular Tutorial for Beginners: Handling Form Events with Observables, Part 2 by Professor Krasso (https://youtu.be/ha8ND1BqZ0k)
 */

// Import necessary Angular modules and classes.
import { Component, OnInit } from '@angular/core'; // Component selector used in HTML templates.
import { IComposer } from '../composer.interface'; // URL to the HTML template file.
import { ComposerService } from '../composer.service'; // Import the 'ComposerService' class.
import { FormControl } from '@angular/forms'; // FormControl for input binding.
import { debounceTime } from 'rxjs/operators'; // Operator for debouncing input.
import { Observable } from 'rxjs'; // Import statement for Observable.

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Observable<IComposer[]>; // An observable that holds an array of composer data.
  txtSearchControl = new FormControl(''); // Create a FormControl for the search input.

  constructor(private composerService: ComposerService) {
    // Inject the ComposerService to fetch the list of composers and initialize the 'composers' array.
    this.composers = this.composerService.getComposers();
    // Subscribe to changes in the 'txtSearchControl' value with a debounce of 500 milliseconds and call 'filterComposers' with the new value.
    this.txtSearchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => this.filterComposers(val));
  }

  ngOnInit(): void {}

  // Filter and process composer data.
  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }
}
