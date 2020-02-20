// import {Injectable} from '@angular/core';

// export interface NoticeElement {
//     position: number;
//     pkNotice: number;
//     imo: number;
//     name: string;
//     portCode: string;
//     comeDate: string;
//     decisionAdmin: string;
//     timeoutDocuments: string;
//     editDelete: string;
  
//   }
//   @Injectable({providedIn: 'root'})
//   export class NoticeService {
//      ELEMENT_DATA: NoticeElement[] = [
//         {position: 1, pkNotice: 1551, imo: 11, name: 'Hydrogen', portCode: 'UAODS',  comeDate: '11.01.2020 01:02:03', decisionAdmin: '21.01.2020 01:02:03', timeoutDocuments: '10.02.2020 01:02:03', editDelete: "     "},
//         {position: 2, pkNotice: 25156, imo: 8542, name: 'Helium',  portCode: 'UACher', comeDate: '10.01.2020 01:02:03', decisionAdmin: '22.01.2020 01:02:03', timeoutDocuments: '11.02.2020 01:02:03', editDelete: ""},
//         {position: 3, pkNotice: 3417, imo: 224, name: 'Lithium',  portCode: 'UABerd', comeDate: '8.01.2020 01:02:03', decisionAdmin: '23.01.2020 01:02:03', timeoutDocuments: '12.02.2020 01:02:03', editDelete: ""},
//         {position: 4, pkNotice: 44222, imo: 674931, name: 'Beryllium',  portCode: 'RUSCH',  comeDate: '25.01.2020 01:02:03', decisionAdmin: '24.01.2020 01:02:03', timeoutDocuments: '13.02.2020 01:02:03', editDelete: ""},
//         {position: 5, pkNotice: 5114, imo: 9849997, name: 'Boron',  portCode: 'USNY', comeDate: '8.01.2020 01:02:03', decisionAdmin: '25.01.2020 01:02:03', timeoutDocuments: '14.02.2020 01:02:03', editDelete: ""},
//         {position: 6, pkNotice: 652828, imo: 7487, name: 'Carbon',  portCode: 'TKRSTL', comeDate: '5.01.2020 01:02:03', decisionAdmin: '26.01.2020 01:02:03', timeoutDocuments: '15.02.2020 01:02:03', editDelete: ""},
//         {position: 7, pkNotice: 1551, imo: 11, name: 'Hydrogen', portCode: 'UAODS',  comeDate: '11.01.2020 01:02:03', decisionAdmin: '21.01.2020 01:02:03', timeoutDocuments: '10.02.2020 01:02:03', editDelete: "     "},
//         {position: 8, pkNotice: 25156, imo: 8542, name: 'Helium',  portCode: 'UACher', comeDate: '10.01.2020 01:02:03', decisionAdmin: '22.01.2020 01:02:03', timeoutDocuments: '11.02.2020 01:02:03', editDelete: ""},
//         {position: 9, pkNotice: 3417, imo: 224, name: 'Lithium',  portCode: 'UABerd', comeDate: '8.01.2020 01:02:03', decisionAdmin: '23.01.2020 01:02:03', timeoutDocuments: '12.02.2020 01:02:03', editDelete: ""},
//         {position: 10, pkNotice: 44222, imo: 674931, name: 'Beryllium',  portCode: 'RUSCH',  comeDate: '25.01.2020 01:02:03', decisionAdmin: '24.01.2020 01:02:03', timeoutDocuments: '13.02.2020 01:02:03', editDelete: ""},
//         {position: 11, pkNotice: 5114, imo: 9849997, name: 'Boron',  portCode: 'USNY', comeDate: '8.01.2020 01:02:03', decisionAdmin: '25.01.2020 01:02:03', timeoutDocuments: '14.02.2020 01:02:03', editDelete: ""},
//         {position: 12, pkNotice: 652828, imo: 7487, name: 'Carbon',  portCode: 'TKRSTL', comeDate: '5.01.2020 01:02:03', decisionAdmin: '26.01.2020 01:02:03', timeoutDocuments: '15.02.2020 01:02:03', editDelete: ""}
      
//       ];
//       getById(number){
//           return this.ELEMENT_DATA.find(p => p .)
//       }
//   }
