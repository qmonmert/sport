import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ACTIVITIES_FEATURE_KEY, initialState as activitiesInitialState, activitiesReducer } from './+state/activities.reducer';
import { ActivitiesEffects } from './+state/activities.effects';
import { ActivitiesFacade } from './+state/activities.facade';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(ACTIVITIES_FEATURE_KEY, activitiesReducer, { initialState: activitiesInitialState }), EffectsModule.forFeature([ActivitiesEffects])],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [ActivitiesFacade]
})
export class ActivitiesModule {}
