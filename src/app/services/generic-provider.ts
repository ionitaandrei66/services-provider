// = ItemGenericOne:
// Aceasta este valoarea implicită pentru T.
//   Dacă nu specifici un tip când folosești GenericProvider, automat va folosi ItemGenericOne


export interface GenericProvider<T extends ItemGenericOne | ItemGenericTwo = ItemGenericOne> {
  fetch(): void;

  getNumberWithText(text: string): number;

  getTextWithNumber(number: number): string;

  getBooleanIfMoreFive?(number: number): boolean;

  getWithItemGeneric?(item: T): boolean;
}

export interface ItemGenericOne {
  name: string;
  id: number;
}

export interface ItemGenericTwo {
  name: string;
  case: number;
}

export interface ItemTest extends ItemGenericTwo {
  name: string;
  case: number;
  phone: number;
}
