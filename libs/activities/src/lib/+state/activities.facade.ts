import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { ActivitiesPartialState } from './activities.reducer';
import { activitiesQuery } from './activities.selectors';
import { LoadActivities } from './activities.actions';

@Injectable()
export class ActivitiesFacade {
  loaded$ = this.store.pipe(select(activitiesQuery.getLoaded));
  allActivities$ = this.store.pipe(select(activitiesQuery.getAllActivities));
  selectedActivities$ = this.store.pipe(
    select(activitiesQuery.getSelectedActivities)
  );

  constructor(private store: Store<ActivitiesPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadActivities());
  }
}
