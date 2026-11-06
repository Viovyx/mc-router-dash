import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  host = environment.mcRouterApi;
}
