import { Injectable } from '@angular/core';
    
@Injectable()
export class ClientService {

    getClientsData() {
        return [
            {
                itemImageSrc: 'images/empresa1.png',
                thumbnailImageSrc: 'images/empresa1.png',
                alt: 'Description for Empresa 1',
                title: 'Empresa 1',
                link: 'https://www.facebook.com/lite/'
            },
            {
                itemImageSrc: 'images/empresa2.png',
                thumbnailImageSrc: 'images/empresa2.png',
                alt: 'Description for Empresa 2',
                title: 'Empresa 2',
                link: 'https://www.canva.com/es_es/'
            },
            {
                itemImageSrc: 'images/empresa3.png',
                thumbnailImageSrc: 'images/empresa3.png',
                alt: 'Description for Empresa 3',
                title: 'Empresa 3',
                link: 'https://es.pinterest.com/'
            },
            
        ];
    }
};