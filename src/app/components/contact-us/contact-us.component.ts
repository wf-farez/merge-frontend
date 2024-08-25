import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FontAwesomeModule, HttpClientModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  faCoffee = faCoffee;
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  contact = {
    name: '',
    email: '',
    telephone: '',
    company: '',
    message: '',
  }
  constructor(private http: HttpClient) {}
  toaster = inject(ToastrService)
  onSubmit(form: NgForm) {
    const { name, email, telephone, company, message } = this.contact;
    this.http.post('https://code-merge.vercel.app/send-email', {
      name,
      email,
      telephone,
      company,
      message
    }, { responseType: 'text' }).pipe(
      catchError(error => {
        this.toaster.success("No se ha podido enviar su mensaje", "Notificación error",{
          positionClass:'toast-bottom-right'
        });
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        this.toaster.success("Mensaje enviado correctamente", "Notificación",{
          positionClass:'toast-bottom-right',
          
        });
        this.contact = {
          name: '',
          email: '',
          telephone: '',
          company: '',
          message: ''
        };
        form.reset()
      }
    });
  }




}
