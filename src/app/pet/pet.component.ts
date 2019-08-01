import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  private _petName = 'pupie';
  private _petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';


  get petName(): string {
    return this._petName;
  }

  set petName(value: string) {
    this._petName = value;
  }

  get petImage(): string {
    return this._petImage;
  }

  set petImage(value: string) {
    this._petImage = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
