import {Component, Inject, OnInit} from '@angular/core';
import {GenericProvider, ItemTest} from './services/generic-provider';
import {GENERIC_PROVIDER_TOKEN} from './services/generic-provider-token';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    {
      provide: GENERIC_PROVIDER_TOKEN, useExisting: UserService
    }
    //todo
    // with builder


    // {
    //   provide: GENERIC_PROVIDER_TOKEN, useExisting: BookService
    // }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  constructor(
    @Inject(GENERIC_PROVIDER_TOKEN)
    private genericProvider: GenericProvider<ItemTest>,
  ) {
  }

  ngOnInit(): void {
    this.genericProvider.fetch();
  }
}
