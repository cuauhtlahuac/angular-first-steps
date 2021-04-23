import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes = [
  { path: 'recipes', component: RecipesComponent },
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: '**', redirectTo: '/recipes' },
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ],
})
export class AppRoutingModule {}
