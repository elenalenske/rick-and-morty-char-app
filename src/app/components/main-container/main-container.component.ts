import { Component, OnInit } from '@angular/core';
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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
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
}
