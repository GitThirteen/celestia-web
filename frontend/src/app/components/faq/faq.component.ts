import { Component, OnInit } from '@angular/core';
import faq from '../../../assets/questions/questions.json';

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
  readonly questions: Question[] = faq.questions;

  constructor() { }

  ngOnInit(): void {
  }
}
