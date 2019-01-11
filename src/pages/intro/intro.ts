import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';


@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  imgUrl = 'link'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  /**
   * Vai para pagina de login
   */
  goLogin(){
    this.navCtrl.push(LoginPage)
  }

  /**
   * Vai para pagina de cadastro
   */
  goSignUp(){
    this.navCtrl.push(CadastroPage)
  }



}
