import { Component } from '@angular/core';

@Component({
  selector: 'example-badge-round',
  template: `
    <md-badge [rounded]="true">Default</md-badge><br />
    <md-badge [rounded]="true" color="blue">Blue</md-badge><br />
    <md-badge [rounded]="true" color="red">Read</md-badge><br />
    <md-badge [rounded]="true" color="yellow">Yellow</md-badge><br />
    <md-badge [rounded]="true" color="green">Green</md-badge><br />
    <md-badge [rounded]="true" color="mint">Mint</md-badge><br />
    <md-badge [rounded]="true" color="pastel">Default Pastel</md-badge><br />
    <md-badge [rounded]="true" color="blue-pastel">Blue Pastel</md-badge
    ><br />
    <md-badge [rounded]="true" color="red-pastel">Red Pastel</md-badge><br />
    <md-badge [rounded]="true" color="yellow-pastel">Yellow Pastel</md-badge
    ><br />
    <md-badge [rounded]="true" color="green-pastel">Green Pastel</md-badge
    ><br />
    <md-badge [rounded]="true" color="mint-pastel">Mint Pastel</md-badge>
  `,
})
export class ExampleBadgeRoundComponent {}
