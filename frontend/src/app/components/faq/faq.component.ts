import { Component, OnInit } from '@angular/core';
import faq from '../../../assets/questions/questions.json';
import {DomSanitizer, SafeHtml, Title} from '@angular/platform-browser';

type Question = {
  category: string,
  question: string,
  answer: string
};

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  categories = ['GENERAL', 'GAMEPLAY', 'DONATIONS', 'MISC'];
  questions: Map<string, Question[]>;

  private counter = 0;
  private elLength = 0;

  constructor(
    private titleService: Title,
    private sanitizer: DomSanitizer
  ) {
    this.questions = this.loadQuestions();
  }

  ngOnInit(): void {
    this.titleService.setTitle('FAQ - Celestia');
  }

  format(text: string): SafeHtml {
    // **bold** text
    const bold = text.match(/\*\*[^*].*\*\*/g);
    if (bold) {
      for (const seg of bold) {
        const value = `<b>${seg.replace(/\*\*/g, '')}</b>`;
        text = text.replace(seg, value);
      }
    }

    // ```code segment```
    const code = text.match(/```[^`].*```/g);
    if (code) {
      for (const seg of code) {
        const value = `<span style="background-color: black; border-radius: 5px; padding: 2px">${seg.replace(/```/g, '')}</span>`;
        text = text.replace(seg, value);
      }
    }

    // ```<br> break```
    const lineBreak = text.match(/<br>/g);
    if (lineBreak) {
      for (const seg of lineBreak) {
        const value = `<br>`;
        text = text.replace(seg, value);
      }
    }

    // ||spoiler|| text
    const spoiler = text.match(/\|\|[^|].*\|\|/g);
    if (spoiler) {
      for (const seg of spoiler) {
        const value = `<span style="background-color: #1A1919; border-radius: 3px; color: transparent; cursor: pointer;">${seg.replace(/\|\|/g, '')}</span>`;
        text = text.replace(seg, value);
      }
    }

    return this.sanitizer.bypassSecurityTrustHtml(text);
  }

  count(): number {
    if (this.counter >= this.elLength) {
      this.counter = 0;
    }
    this.counter++;
    return this.counter;
  }

  private loadQuestions(): Map<string, Question[]> {
    const questions = new Map<string, Question[]>();
    for (const category of this.categories) {
      const array = faq.questions.filter(question => question.category.toLowerCase() === category.toLowerCase());
      this.elLength += array.length;

      questions.set(category, array);
    }
    return questions;
  }
}
