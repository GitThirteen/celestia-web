import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-library-picker',
  templateUrl: './library-picker.component.html',
  styleUrls: ['./library-picker.component.scss']
})
export class LibraryPickerComponent implements OnInit {
  readonly assetsPath = '../../../assets/images/library';

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Library - Celestia');
  }
}
