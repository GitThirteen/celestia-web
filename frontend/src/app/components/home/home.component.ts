import { Component, OnInit } from '@angular/core';
import {DiscordService} from "../../services/discord.service";
import {Dev} from '../../dtos/dev';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  avatars: Dev[] | undefined;

  constructor(private discordService: DiscordService) { }

  ngOnInit(): void {
    this.discordService.loadProfileImages().then(() => {
      this.discordService.getProfileImage('All').subscribe(avatars => {
        this.avatars = avatars;
      }, error => {
        console.error(error);
      });
    });
  }
}
