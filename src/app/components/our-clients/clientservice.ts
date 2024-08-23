import { Injectable } from '@angular/core';
    
@Injectable()
export class ClientService {

    getClientsData() {
        return [
            {
                itemImageSrc: 'images/empresa1.png',
                thumbnailImageSrc: 'images/empresa1.png',
                title: 'Empresa 1',
                alt: 'Description for Empresa 1',
                op1:"alternative 1",
                op2:"alternative 2",
                op3:"alternative 3",
                link: 'https://www.facebook.com/lite/'
            },
            {
                itemImageSrc: 'images/empresa2.png',
                thumbnailImageSrc: 'images/empresa2.png',
                title: 'Empresa 2',
                alt: 'Description for Empresa 2',
                op1:"alternative 1",
                op2:"alternative 2",
                op3:"alternative 3",
                link: 'https://www.canva.com/es_es/'
            },
            {
                itemImageSrc: 'images/empresa3.png',
                thumbnailImageSrc: 'images/empresa3.png',
                title: 'Empresa 3',
                alt: 'Description for Empresa 3',
                op1:"alternative 1",
                op2:"alternative 2",
                op3:"alternative 3",
                link: 'https://es.pinterest.com/'
            },
            
        ];
    }
};