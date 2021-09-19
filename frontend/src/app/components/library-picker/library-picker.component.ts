import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

type LibraryPage = 'Characters'|'Companions'|'Stickers';

@Component({
  selector: 'app-library-picker',
  templateUrl: './library-picker.component.html',
  styleUrls: ['./library-picker.component.scss']
})
export class LibraryPickerComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Library - Celestia');
  }

  goTo(page: LibraryPage): void {
    const path = this.router.url;
    const dest = page.toLowerCase();
    this.router.navigate([`${path}/${dest}`]);
  }
}
