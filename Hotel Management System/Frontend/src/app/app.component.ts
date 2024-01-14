import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  myimage:string="assets/img/carousel-1.jpg"
  myimage2:string="assets/img/carousel-2.jpg"
  about1:string="assets/img/about-1.jpg"
  about2:string="assets/img/about-2.jpg"
  about3:string="assets/img/about-3.jpg"
  about4:string="assets/img/about-4.jpg"
  room1:string="assets/img/room-1.jpg"
  room2:string="assets/img/room-2.jpg"
  room3:string="assets/img/room-3.jpg"
  room4:string="assets/img/room-4.jpg"
  room5:string="assets/img/room-5.jpg"
  room6:string="assets/img/room-6.jpg"
  background:string="assets/img/Background-1"
  service:string="assets/img/robot-1.jpg"
  service1:string="assets/img/doctor-1.jpg"
  service3:string="assets/img/play.jpg"
  logo:string="assets/img/logo.png"
}
