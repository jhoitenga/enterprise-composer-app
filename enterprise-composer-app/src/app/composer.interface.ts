/**
 * Title: composer.interface.ts
 * Author: Jennifer Hoitenga
 * Date: August 23, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Rename Projects video by Professor Krasso (https://youtu.be/T7ef0bOOWs4)
 * Angular Tutorial for Beginners: Classes and Interfaces video by Professor Krasso (https://youtu.be/vvXSW_Cldvg)
 * Angular Tutorial for Beginners: How to Pass Data to Routes by Professor Krasso (https://www.youtube.com/watch?v=KTVHu4hafUs)
 */

// Interface representing a composer's information.
export interface IComposer {
  // Unique identifier for the composer.
  composerId: number;
  // The full name of the composer.
  fullName: string;
  // The musical genre associated with the composer.
  genre: string;
}
