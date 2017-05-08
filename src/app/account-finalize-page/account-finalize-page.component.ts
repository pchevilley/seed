import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

import {} from '@types/googlemaps';

@Component({
  selector: 'account-finalize-page',
  templateUrl: './account-finalize-page.component.html',
  styleUrls: ['./account-finalize-page.component.scss'],
  animations: [
    trigger('test', [

    ])
  ]
})
export class AccountFinalizePageComponent implements OnInit {
  private progress: number = 20;
  private first_name: string;
  private last_name: string;
  private address: string;
  private phone: string;
  private place: google.maps.places.PlaceResult;

  private currentStep: string = 'basic';

  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor( private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    this.searchControl = new FormControl();

     this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          this.place = autocomplete.getPlace();
        });
      });
    });
  }

  increaseProgress(){
    this.progress += 10;

    this.currentStep = this.currentStep === 'basic' ? '' : 'basic';

    if(this.progress >= 100){
      this.progress = 0;
    }
  }
}
