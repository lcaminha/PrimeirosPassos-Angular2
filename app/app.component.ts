import { Component } from '@angular/core';
import { HeaderBlock } from './block/header.block';

@Component({
  selector: 'simples',
  template: '<my-header></my-header>',
  directives: [HeaderBlock]
})

export class AppComponent { }
