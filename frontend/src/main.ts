import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './app/interceptors/token.interceptor'; // ✅ Importa el interceptor funcional

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([TokenInterceptor]) // ✅ Inyecta el interceptor
    )
  ]
}).catch(err => console.error(err));





