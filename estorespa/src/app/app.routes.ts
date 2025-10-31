import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
        { path: '', component: HomeComponent },         // Default route
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
         {
        path: 'products',
        component: ListComponent,
                    children: [
                        { path: 'details/:id', component: DetailsComponent },
                        { path: 'update/:id', component: UpdateComponent }
                    ]
        },
        { path: '**', redirectTo: '' }    
];
