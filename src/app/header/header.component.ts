import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { IonMenuToggle, IonMenu, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(
    private routerOutlet: IonRouterOutlet,
    private router: Router
  ) { }

  @ViewChild(IonMenu) menuToggle!: IonMenu;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.url;
        this.currentRoute = currentRoute;
        currentRoute == '/home' ? (this.hideBack = true) : (this.hideBack = false)
      }
    });

  }

  hideBack:boolean = true;
  currentRoute:string='';
  back() { this.routerOutlet.pop(); }

  closeMenu() {
    this.menuToggle.close()
  }

}
