import { Component, OnInit } from '@angular/core';
import faq from '../../../assets/questions/questions.json';
import { Title } from '@angular/platform-browser';

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
  counter = 0;

  private elLength = 0;

  constructor(private titleService: Title) {
    this.questions = this.loadQuestions();
  }

  ngOnInit(): void {
    this.titleService.setTitle('FAQ - Celestia');
  }

  loadQuestions(): Map<string, Question[]> {
    const questions = new Map<string, Question[]>();
    for (const category of this.categories) {
      const array = faq.questions.filter(question => question.category.toLowerCase() === category.toLowerCase());
      this.elLength += array.length;

      questions.set(category, array);
    }
    return questions;
  }

  format(text: string, index: number): string {
    const answer = document.getElementById('answer_' + index);
    if (!answer) {
      console.error(`Failed parsing answer with ID 'answer_${index}'.`);
      return text;
    }

    const bold = text.match(/\*\*[^*].*\*\*/g);
    if (bold) {
      for (const seg of bold) {
        const value = `<b>${seg.replace(/\*\*/g, '')}</b>`;
        text = text.replace(seg, value);
      }
    }

    const code = text.match(/```[^`].*```/g);
    if (code) {
      for (const seg of code) {
        const value = `<span style="background-color: black; border-radius: 5px; padding: 2px">${seg.replace(/```/g, '')}</span>`;
        text = text.replace(seg, value);
      }
    }

    const lineBreak = text.match(/>{3}/g);
    if (lineBreak) {
      for (const seg of lineBreak) {
        const value = `<br>`;
        text = text.replace(seg, value);
      }
    }

    const spoiler = text.match(/\|\|[^|].*\|\|/g);
    if (spoiler) {
      for (const seg of spoiler) {
        const value = `<span style="background-color: #1A1919; border-radius: 3px; color: transparent; cursor: pointer;">${seg.replace(/\|\|/g, '')}</span>`;
        text = text.replace(seg, value);
      }
    }

    answer.innerHTML = text;
    return text;
  }

  count(): number {
    if (this.counter >= this.elLength) {
      this.counter = 0;
    }
    this.counter++;
    return this.counter;
  }
}
