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

  private elLength = 0;
  private counter = 0;

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

  count(): number {
    if (this.counter >= this.elLength) {
      this.counter = 0;
    }
    this.counter++;
    return this.counter;
  }
}
