import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-library-cards',
  templateUrl: './library-characters.component.html',
  styleUrls: ['./library-characters.component.scss']
})
export class LibraryCharactersComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Character Library - Celestia');
  }

}
