/**
 * Title: composer.service.spec.ts
 * Author: Jennifer Hoitenga
 * Date: August 30, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Rename Projects video by Professor Krasso (https://youtu.be/T7ef0bOOWs4)
 * Angular Tutorial for Beginners: Classes and Interfaces video by Professor Krasso (https://youtu.be/vvXSW_Cldvg)
 * Angular Tutorial for Beginners: How to Pass Data to Routes by Professor Krasso (https://www.youtube.com/watch?v=KTVHu4hafUs)
 * Angular Tutorial for Beginners: Services video by Professor Krasso (https://youtu.be/vpcJciyUrFg)
 * Angular Tutorial for Beginners: Understanding Dependency Injection by Professor Krasso (https://youtu.be/0LazaSSO2LI)
 */

// Imports
import { TestBed } from '@angular/core/testing';
import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
