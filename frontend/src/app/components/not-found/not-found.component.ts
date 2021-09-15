import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const SURPRISE_LINKS: string[] = [
  'https://youtu.be/Zd6pX3CeMRU?autoplay=1&cc_load_policy=1', // A↑ba↓ba→ba→ba↓ba↑ba↓ba↓ba↑ba→ba→ 10 Hours
  'https://youtu.be/dQw4w9WgXcQ?autoplay=1&cc_load_policy=1', // Rick Astley - Never Gonna Give You Up (Official Music Video)
  'https://youtu.be/zv9FXqoq3kw?autoplay=1&cc_load_policy=1', // Forrest Gump Beatboxing Scene
  'https://youtu.be/0vHDGx8nozs?autoplay=1&cc_load_policy=1', // Doubleslap
  'https://youtu.be/V3hL0IEKbq4?autoplay=1&cc_load_policy=1', // Slavic train with hardbass
  'https://youtu.be/nk7Cj209GQg?autoplay=1&cc_load_policy=1', // Anomaly - I selled my wife for internet connection
  'https://youtu.be/eLYhnBaWOzc?autoplay=1&cc_load_policy=1', // ULTRA DRAGON DREAM FEET
  'https://youtu.be/EQYL_70MuZ4?autoplay=1&cc_load_policy=1', // Credit Report .com Baby
  'https://youtu.be/3eXwtHDze88?autoplay=1&cc_load_policy=1', // korone classic funk
  'https://youtu.be/B62ACxuq8Pw?autoplay=1&cc_load_policy=1', // Discombobulate
  'https://youtu.be/0RemmBhKUMU?autoplay=1&cc_load_policy=1', // to catch a predator
  'https://youtu.be/N16E37GN9m8?autoplay=1&cc_load_policy=1', // Do you know de way, komrade?
  'https://youtu.be/NbVK9aMjwm0?autoplay=1&cc_load_policy=1', // Donald Trump - Night of Nights (Wall of Walls)
  'https://youtu.be/q5-cZIpldFk?autoplay=1&cc_load_policy=1', // Yoshi.mp4
  'https://youtu.be/xTd3Bry-ZT4?autoplay=1&cc_load_policy=1', // Sonic Boom - Knuckles explains Feminism
  'https://youtu.be/nHc288IPFzk?autoplay=1&cc_load_policy=1', // Duck Army
  'https://youtu.be/0hEvBW2NFQU?autoplay=1&cc_load_policy=1', // SPEED OF KIRB 10.0
  'https://youtu.be/6E6G_W8cNN4?autoplay=1&cc_load_policy=1', // Let's talk about Marina (ORIGINAL POST)
];

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  getSurprised(): void {
    const randomURL = SURPRISE_LINKS[Math.floor(Math.random() * SURPRISE_LINKS.length)];
    window.open(randomURL, '_blank');
  }
}
