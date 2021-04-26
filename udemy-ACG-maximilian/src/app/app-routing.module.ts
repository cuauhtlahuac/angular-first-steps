import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipieItemComponent } from './recipes/recipie-list/recipie-item/recipie-item.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

const appRoutes = [
	{
		path: 'recipes',
		component: RecipesComponent,
		children: [
			{ path: '', component: RecipeStartComponent },
			{ path: ':id', component: RecipieItemComponent },
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
