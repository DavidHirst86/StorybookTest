import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-demo-button',
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.scss'],
})
export class DemoButtonComponent implements OnInit {
  @Input('btnText') btnText = "Click me";

  constructor(private alertController: AlertController) { }

  async presentAlert() {
    //const is like a variable. when its created save the following values.
    const alert = await this.alertController.create({
      header: 'Achtung',
      subHeader: 'Sub achtung',
      message: "You are in danger!",
      //buttons: ['I accept'], as a string
      buttons: [{ //passing an object instead
        text: 'I accept',
        role: 'cancel',
        handler: () => {
          console.log("you clicked me");
        }
      }]
    })
    await alert.present();

  }


  ngOnInit() { }

}
