import { Component, OnInit } from '@angular/core';
import { showHide, showHideModal } from '../animations';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  animations: [ showHide, showHideModal ]
})
export class NotesComponent implements OnInit {
  
  isVisible:boolean = true;
  isVisibleModal:boolean = false;
  isPresent:boolean = false;
  noteStoredText;
  
  constructor() { }

  /* Minimize & maximize note buttons */
  minimizeNote() { this.isVisible = false; }
  maximizeNote() { this.isVisible = true; }

  /* Storing note's text to local storage */
  getNoteText(value:any) { localStorage.setItem('notesText', value.noteText); }

  /* Minimize & maximize note modal buttons */
  maximizeOrMinimize() { 

    if (this.isVisibleModal === false) {
      this.isVisibleModal = true; 
      this.isPresent = true

    } else {
      this.isVisibleModal = false
      setTimeout(() => {    
        this.isPresent = false
    }, 300);

    }
  }
  
  
  ngOnInit() { this.noteStoredText = localStorage.getItem('notesText');      }


}
