import { Component } from '@angular/core';
import { SayHello } from './say.hello'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-header',
  templateUrl: '/view/header.html',
  styleUrls: ['static/css/block/header.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/say-hello',
    name: 'sayHello',
    component: SayHello
  }
])

export class HeaderBlock {}
