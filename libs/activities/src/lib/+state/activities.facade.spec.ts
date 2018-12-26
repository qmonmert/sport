import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { ActivitiesEffects } from './activities.effects';
import { ActivitiesFacade } from './activities.facade';

import { activitiesQuery } from './activities.selectors';
import { LoadActivities, ActivitiesLoaded } from './activities.actions';
import {
  ActivitiesState,
  Entity,
  initialState,
  activitiesReducer
} from './activities.reducer';

interface TestSchema {
  activities: ActivitiesState;
}

describe('ActivitiesFacade', () => {
  let facade: ActivitiesFacade;
  let store: Store<TestSchema>;
  let createActivities;

  beforeEach(() => {
    createActivities = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('activities', activitiesReducer, {
            initialState
          }),
          EffectsModule.forFeature([ActivitiesEffects])
        ],
        providers: [ActivitiesFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(ActivitiesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allActivities$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allActivities$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `ActivitiesLoaded` to manually submit list for state management
     */
    it('allActivities$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allActivities$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new ActivitiesLoaded([
            createActivities('AAA'),
            createActivities('BBB')
          ])
        );

        list = await readFirst(facade.allActivities$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
