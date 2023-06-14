import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotComponent } from './bot/bot.component';

// import { ClientComponent } from './client/client.component';

const routes: Routes = [
  
  
  
  // {path:'',component:ClientComponent},
  // { path: 'bot', component: BotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

