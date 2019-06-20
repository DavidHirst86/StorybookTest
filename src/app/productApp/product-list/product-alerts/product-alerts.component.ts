import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; // for outputting the alert
import { AlertController, ActionSheetController } from '@ionic/angular';
import { CssSelector } from '@angular/compiler';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter; //outputs the notify using the eventemitter.

  constructor(private alertController: AlertController, private actionSheet: ActionSheetController) {
  }

  async presentAlert() {
    //const is like a variable. when its created save the following values.
    const alert = await this.alertController.create({
      header: 'Achtung',
      subHeader: 'Sub achtung',
      message: "You are in danger!",
      //buttons: ['I accept'], as a string
      buttons: [{ //passing an object instead
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log("you clicked me");
        }
      },
      {
        text: 'Okay',
        cssClass: 'secondary',
        handler: () => {
          console.log("second handler")
        }
      },
      {
        text: 'Open action sheet',
        cssClass: 'primary',
        handler: async () => {
          const action = await this.actionSheet.create({
            header: 'Testing action sheet feature',
            buttons: [
              {
                text: 'Test',
                role: 'cancel',
                icon: 'trash',
                handler: () => {
                  console.log('Hello world');
                }
              },
              {
                text: 'Share',
                icon: 'share',
                handler: () => {
                  console.log('Share clicked');
                }
              }, {
                text: 'Play (open modal)',
                icon: 'arrow-dropright-circle',
                handler: () => {
                  console.log('Play clicked');
                }
              }, {
                text: 'Favorite',
                icon: 'heart',
                handler: () => {
                  console.log('Favorite clicked');
                }
              }, {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          });
          await action.present();
        }
      }
      ]
    });
    //output the alert when its called
    await alert.present();
  }


  ngOnInit() { }

}
