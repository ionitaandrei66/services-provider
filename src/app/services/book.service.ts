import { Injectable } from '@angular/core';
import {GenericProvider} from './generic-provider';

@Injectable({
  providedIn: 'root'
})
export class BookService implements GenericProvider {

  constructor() { }


  fetch(): void {
    console.log('BookService fetch');
  }

  getNumberWithText(text: string): number {
    return 9;
  }

  getTextWithNumber(number: number): string {
    return 'test second';
  }
}
