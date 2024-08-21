import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ClientService } from './clientservice';
import { Client } from './client';
import { GalleriaModule } from 'primeng/galleria';


@Component({
  selector: 'app-our-clients',
  standalone: true,
  imports: [CardModule, ButtonModule, GalleriaModule],
  templateUrl: './our-clients.component.html',
  styleUrl: './our-clients.component.scss',
  providers: [ClientService]
})

export class OurClientsComponent  {

    images: Client[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private clientService: ClientService) {}
    ngOnInit() {
        this.images = this.clientService.getClientsData();
    }
    onImagesChange(event: any) {
        this.images = event;
    }
    navigateToLink(link: string) {
        window.open(link, '_blank');
    }
}
