import {InjectionToken} from '@angular/core';
import {GenericProvider} from './generic-provider';

export const GENERIC_PROVIDER_TOKEN: InjectionToken<GenericProvider> =
  new InjectionToken<GenericProvider>('GenericProvider');
