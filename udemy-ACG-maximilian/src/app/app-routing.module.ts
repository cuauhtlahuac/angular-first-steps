import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipieDetailComponent } from './recipes/recipie-detail/recipie-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes = [
	{
		path: 'recipes',
		component: RecipesComponent,
		children: [
			{ path: '', component: RecipeStartComponent },
			{ path: 'new', component: RecipeEditComponent },
			{ path: ':id', component: RecipieDetailComponent },
			{ path: ':id/edit', component: RecipeEditComponent },
		],
	},
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: '**', redirectTo: '/recipes' },
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ],
})
export class AppRoutingModule {}
