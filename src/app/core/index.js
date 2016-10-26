//import { LoggedInGuard } from '../guards/logged-in.guard';
//import { LoggedOutGuard } from '../guards/logged-out.guard';
import { AppComponent } from '../components/app/app.component';
import { NewsComponent } from '../components/news/news.component';

export { AppComponent };

export const CORE_PROVIDERS = [ /*LoggedInGuard, LoggedOutGuard*/ ];
export const CORE_DECLARATIONS = [ AppComponent, NewsComponent ];