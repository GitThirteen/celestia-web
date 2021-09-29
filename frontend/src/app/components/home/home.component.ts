import { Component, Inject, OnInit } from '@angular/core';
import { DiscordService } from '../../services/discord.service';
import { DiscordUserData } from '../../dtos/discordUserData';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: DiscordUserData[] = [];

  constructor(
    private discordService: DiscordService,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Celestia');
    this.discordService.loadDiscordUserData().subscribe(data => {
      this.data = data;
    }, error => {
      console.log(error);
    });
  }

  goToInvite(): void {
    window.open(this.discordService.invite, '_blank');
  }
}
