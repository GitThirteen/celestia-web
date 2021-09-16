import { Component, OnInit } from '@angular/core';
import { DiscordService } from '../../services/discord.service';
import { DiscordUserData } from '../../dtos/discordUserData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: DiscordUserData[] | undefined;

  constructor(private discordService: DiscordService) { }

  ngOnInit(): void {
    this.discordService.loadDiscordUserData().subscribe(data => {
      this.data = data;
    }, error => {
      console.log(error);
    });
  }
}
