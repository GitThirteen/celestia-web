import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  readonly gitHubPath = './../../../assets/images/icons/GitHub-Mark-Light-32px.png';
  readonly gitHubRepo = 'https://github.com/GitThirteen/CelestiaWeb';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showFooter(): boolean {
    return !this.router.url.includes('404');
  }

  getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }
}
