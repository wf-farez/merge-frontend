import { Component } from '@angular/core';
import {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { FormsModule } from '@angular/forms';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CardModule, InputTextModule, ImageModule, FormsModule, IconsComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  message: string = '';
  //send message for whatsapp
  sendMessage() {
    const phone = '+593987266475'; 
    const messageToSend = this.message.trim() || 'Hola Innotec, estoy buscando...';
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(messageToSend)}`;
    window.open(url, "_blank");
    this.message = ''; 
  }
}


