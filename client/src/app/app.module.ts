import { AddProfileModal } from './../components/add-profile-modal/add-profile-modal';
import { UserDAO } from './../providers/user-dao';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
		AddProfileModal
  ],
  imports: [
    BrowserModule,
		HttpModule,
    IonicModule.forRoot(MyApp, {
			platforms: {
				core: {
					tabsPlacement: 'top'
				}
			}
		}),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [Http]
			}
		})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
		AddProfileModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
		UserDAO,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

export function createTranslateLoader(http: Http)
{
	return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}