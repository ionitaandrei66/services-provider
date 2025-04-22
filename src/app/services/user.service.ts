import { Injectable } from '@angular/core';
import {GenericProvider} from './generic-provider';

@Injectable({
  providedIn: 'root'
})
export class UserService implements GenericProvider{

  constructor() {
  }

  fetch(): void {
    console.log('UserService fetch');
  }

  getNumberWithText(text: string): number {
    return 5;
  }

  getTextWithNumber(number: number): string {
    return 'test';
  }
}
