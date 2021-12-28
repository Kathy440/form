import { Component, OnInit } from '@angular/core';
import { Matiere } from '../model/matieres.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../store/index';
import { select, Store } from '@ngrx/store';
import { MatiereListModule } from '../actions/matiere.action';
import {
  selectMatiereListEntitiesConverted$,
  selectMatieresLoading$
} from '../selector/matiere.selector';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.scss']
})
export class MatieresComponent implements OnInit {
  public matieres$: Observable<Matiere[]>;
  public matieresLoading: Observable<boolean>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.matieres$ = store.pipe(select(selectMatiereListEntitiesConverted$));

    this.matieresLoading = store.pipe(select(selectMatieresLoading$));
  }

  ngOnInit() {
    this.store.dispatch(new MatiereListModule.LoadInitMatieres());
  }

  goToAddMatiere() {
    this.router.navigateByUrl('/ajout-matiere');
  }

  deleteMatiere(id: number) {
    this.store.dispatch(new MatiereListModule.LoadDeleteMatiere(id));
  }
}
