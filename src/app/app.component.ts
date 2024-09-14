import { Component, OnInit } from '@angular/core';
import { Talk } from './talk.model';
import { MatDialog } from '@angular/material/dialog';
import { TalkDialogComponent } from './components/talk-dialog/talk-dialog.component';
import { TalkDialogResult } from './components/talk-dialog/dialog-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  talks: Talk[] = [
    {
      title: 'Caso de uso real da IA e AWS para classificação de documentos na área da Saúde',
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

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  addNewTalk() {
    const dialogRef = this.dialog.open(TalkDialogComponent, {
      width: '500px',
      data: {
        talk: {},
      },
    });
    dialogRef.afterClosed().subscribe((result: TalkDialogResult) => {
      if (result && result.talk) {
        this.talks.push(result.talk);
      }
    });
  }

  editTalk(talk: Talk) {
    const dialogRef = this.dialog.open(TalkDialogComponent, {
      width: '500px',
      data: {
        talk: talk,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: TalkDialogResult) => {
      if (result) {
        const indexOf = this.talks.indexOf(talk);
        if (result?.deleted) {
          this.talks.splice(indexOf, 1);
        }
        if (result?.talk) {
          this.talks.splice(indexOf, 1, result.talk);
        }
      }
    });
  }
}
