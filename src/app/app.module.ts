// logical collection of components, directive
// pipes, services

// Must, one main module
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';

// contains web-browser support
import {BrowserModule} 
    from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';

import {FormsModule} from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

// configure url to component
import {Routes, RouterModule} from '@angular/router';

//import { ProductModule } from './product/product.module';

//import { Observable } from 'rxjs/Observable';
//declare var subject:Observable<any>;

const routes: Routes = [
    {
        path: '', 
        component: HomeComponent
    }, 
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },

    {
        // lazy loading
        path: 'products',
        // filepath#ClassName
        loadChildren: 'app/product/product.module#ProductModule'
    },

    {
        path: '**', // not found
        component: NotFoundComponent
    }
];

import {HttpClientModule} from '@angular/common/http';


@NgModule({
    // reference to other module
    imports: [
        BrowserModule,
        FormsModule,

        SharedModule,
        HttpClientModule,

        // forRoot returns a module
        RouterModule.forRoot(routes),

        // ProductModule

        //ProductModule,
        //SharedModule
    ],

    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        AboutComponent,
        ContactComponent,
        NotFoundComponent,

        //HeaderComponent,
        //HomeComponent
        //...
    ],

    // the main app component
    bootstrap: [
        AppComponent
    ],

    providers: [
        // {
        //     provide: 'globalService',
        //     useValue:  subject
        // }
    ]
})
export class AppModule {

}
