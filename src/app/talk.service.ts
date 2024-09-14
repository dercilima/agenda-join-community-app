import { Injectable } from '@angular/core';
import { Talk } from './talk.model';

@Injectable({
  providedIn: 'root',
})
export class TalkService {
  talks: Talk[] = [
    {
      title:
        'Caso de uso real da IA e AWS para classificação de documentos na área da Saúde',
      speaker: 'Dan Rezende',
    },
    {
      title: 'GitHub Actions e AWS',
      speaker: 'José Vicente',
    },
    {
      title: 'Server-Driven UI: Engolindo Flutter e React Native com nativo',
      speaker: 'pedrofsn',
    },
    {
      title: 'Angular + Firebase: Construindo aplicações robustas e escaláveis',
      speaker: 'Derci Santos',
    },
  ];

  constructor() {}

  getAll(): Talk[] {
    return this.talks;
  }

  add(talk: Talk) {
    this.talks.push(talk);
  }

  update(talk: Talk) {
    const indexOf = this.talks.indexOf(talk);
    this.talks.splice(indexOf, 1, talk);
  }

  delete(talk: Talk) {
    const indexOf = this.talks.indexOf(talk);
    this.talks.splice(indexOf, 1);
  }
}
