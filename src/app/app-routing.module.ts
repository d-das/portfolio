import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CodeComponent } from './code/code.component';
import { WritingComponent } from './writing/writing.component';
import { PhotoComponent } from './photo/photo.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { CivilizationComponent } from './civilization/civilization.component'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "code", component: CodeComponent },
  { path: "writing", component: WritingComponent },
  { path: "photo", component: PhotoComponent },
  { path: "contact", component: ContactComponent },
  { path: "writing/civilization", component: CivilizationComponent},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonListComponent } from "../pokemon-list/pokemon-list.component";

const appRoutes: Routes = [
  {
    path: "pokemons",
    component: PokemonListComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
*/
