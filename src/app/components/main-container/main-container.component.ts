import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllCharacters, Character } from 'src/app/interfaces/characters-interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  showCharacters: boolean = false;
  allCharacters: Character[] = [];
  characterForm: FormGroup;
  character: Character;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onShowAll(): void {
    this.showCharacters = true;
    if ( this.allCharacters && this.allCharacters.length) {
      return;
    }
    this.dataService.getAllCharacters().subscribe((data: AllCharacters) => {
      // console.log('data:', data)
      this.allCharacters = data.results;
    })
  }

  onHideAll(): void {
    this.showCharacters = false;
  }

  onShowCharacter(): void {
    // console.log('characterForm:', this.characterForm.value.characterNumber)
    this.dataService.getASingleCharacter(this.characterForm.value.characterNumber).subscribe((data: Character) => {
      if (data) {
        this.character = data;
        // console.log('character:', this.character)
      }
    })
  }

  private initForm(): void {
    this.characterForm = this.formBuilder.group({
      characterNumber: [null, Validators.required]
    })
  }
}
