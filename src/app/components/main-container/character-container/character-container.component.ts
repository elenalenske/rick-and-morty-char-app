import { Component, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/interfaces/characters-interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-container',
  templateUrl: './character-container.component.html',
  styleUrls: ['./character-container.component.scss']
})
export class CharacterContainerComponent implements OnInit {
  @Input() character: Character;
  @Output() changeACharacter: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChangeCharacter(): void {
    this.changeACharacter.emit(true);
  }
}
