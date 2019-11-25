import { trigger, transition, style, animate, state } from '@angular/animations';

//Animation used to show/hide note
  export let showHide = trigger('showHide', [
    state('shown', style ({
        height: '*',
        padding: '5px 10px 10px 10px' 
    })),
    
    state('hidden', style ({
        height: '0',
        padding: '0px 0px 0px 10px'
    })),

    transition('shown <=> hidden', [
      animate('300ms')
    ])
  ]) 



  //Animation used to show/hide note's modal
  export let showHideModal = trigger('showHideModal', [
    state('shown', style ({
      opacity: '1' 
    })),
    
    state('hidden', style ({
      opacity: "0"
    })),

    transition('shown <=> hidden', [
      animate('200ms')
    ])
  ]) 

//Animation (NOT IN USE RIGHT NOW)
export let fade = trigger('fade', [
    transition('void => *', [
      style({ backgroundColor: 'yellow', opacity: 0 }),
      animate(300)
    ])
  ]) 

