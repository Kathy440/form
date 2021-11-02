import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../model/tutorial.model';
import { AppState } from './../app.state';
import * as TutorialActions from './../actions/tutorial.actions';
import { LocalStorageService } from '../service/localStorage.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  storage$: Observable<any>;

  // Section 1
  tutorials: Observable<Tutorial[]>;

  // Section 2 -> Nous accédons au magasin à partir de ngrx dans le constructeur, puis sélectionnons le  didacticiel  qui est défini comme la propriété de app.module.ts dans StoreModule.forRoot({}).
  //Cela appelle le réducteur de didacticiel et renvoie l'état du didacticiel.
  constructor(
    private store: Store<AppState>,
    private storage: LocalStorageService
  ) {
    this.tutorials = store.select('tutorial');
    this.storage$ = this.storage.getData('count');
  }

  ngOnInit(): void {}

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
}
