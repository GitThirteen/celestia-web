import { Component, OnInit } from '@angular/core';
import faq from '../../../assets/questions/questions.json';
import { Title } from '@angular/platform-browser';

type Question = {
  category: string,
  question: string,
  answer: string
};

type AltString = {
  magic: string;
  first: string;
  format: string;
  second: string;
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
    if (text.includes('$')) {
      const fs = this.stringSplit(text);

      switch (fs.magic) {
        case 'code': {
          const answer = document.getElementById('answer_' + index);
          if (answer) { answer.innerHTML = `${fs.first} <span style="background-color: black">${fs.format}</span>${fs.second}`; }
          break;
        }
        default: console.log('yeet');
      }
    }

    return text;
  }

  count(): number {
    if (this.counter >= this.elLength) {
      this.counter = 0;
    }
    this.counter++;
    return this.counter;
  }

  private stringSplit(text: string): AltString {
    const firSeg = text.split('$');
    const secSeg = (text.split('{').pop() as string).split('}');

    return {
      first: firSeg[0],
      magic: firSeg[1],
      format: secSeg[0],
      second: secSeg[1]
    };
  }
}
