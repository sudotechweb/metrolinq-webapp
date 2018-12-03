import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { JsmapComponent } from './components/jsmap/jsmap.component';

export const appRoutes: Routes = [
  { path: 'create',
    component: CreateComponent
  },
  { path: 'index',
    component: IndexComponent
  },
  {
    path: 'requested-trips',
    component: JsmapComponent
  },
  {
    path: 'pending-trips',
    component: JsmapComponent
  },
  {
    path: '',
    redirectTo: '/requested-trips',
    pathMatch: 'full'
  }
];
