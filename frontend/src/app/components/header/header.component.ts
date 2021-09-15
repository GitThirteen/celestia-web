import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type HeaderPage = 'Guides'|'Library'|'FAQ'|'Donate'|'Commands'|'Patchnotes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  compactMenu = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showHeader(): boolean {
    return !this.router.url.includes('404');
  }

  goTo(page: HeaderPage): void {
    const site = page.toLowerCase();
    this.router.navigate([site]).then(() => this.compactMenu = false);
  }

  onResize(event: any): void {
    const width = event.target.innerWidth;
    if (width > 1200 && this.compactMenu) {
      this.compactMenu = false;
    }
  }

  toggleCompactMenu(): void {
    this.compactMenu = !this.compactMenu;
  }
}
