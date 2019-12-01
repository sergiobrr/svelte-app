import { writable } from 'svelte/store';

let nuanceStore = writable([
  {
    id: 'n1',
    name: 'Amici di Fiorello',
    subtitle: 'Quelli che guardano la tv',
    descrizione: 'Individuare quelli che seguono la trasmissione',
    componenti: ['Fiorello', 'Il gabibbo'],
    fondatore: 'Zino Zani',
    email: 'zino@zani.com',
    creato: '23/04/2019',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI74-HyanJa4kp4ysCc9ejaNNnbV86pEFFli9tgd27LmoCxuYj&s'
  },
  {
    id: 'n2',
    name: 'Destroidi',
    subtitle: 'Quelli che razzano',
    descrizione: 'Individuare quelli che sono razzisti',
    componenti: ['Salvini', 'Meloni', 'Fiori'],
    fondatore: 'Zino Zani',
    email: 'zino@zani.com',
    creato: '23/08/2019',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI74-HyanJa4kp4ysCc9ejaNNnbV86pEFFli9tgd27LmoCxuYj&s'
  },
  {
    id: 'n3',
    name: 'Amici di Trump',
    subtitle: 'Quelli che gli piace trump',
    descrizione: 'Individuare quelli votano a destra un us',
    componenti: ['The donald', 'Steve Bannon'],
    fondatore: 'Licia Laccia',
    email: 'licia@mentre.noi',
    creato: '2/10/2019',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI74-HyanJa4kp4ysCc9ejaNNnbV86pEFFli9tgd27LmoCxuYj&s'
  }
]);

export default nuanceStore;
