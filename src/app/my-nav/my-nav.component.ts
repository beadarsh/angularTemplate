import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NavService } from './nav.service';
import { NavItem } from './models/nav-item';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss'],
  animations: [
    trigger('rotateUpDownArrow', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MyNavComponent {

  expanded = false;
  height = 100;
  navItems: NavItem[] = [];
  @ViewChild('appDrawer') appDrawer: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private navService: NavService) {
    this.navItems = navService.navItems;
  }

  showNestedItems() {
    this.height = 100;
  }

  getHeight() {
    return this.height;
  }

}



  // this.navItems.push(new NavItem({
  //   displayText: 'Home',
  //   iconName: 'home',
  //   children: null
  // }));

  //   this.navItems.push(new NavItem({
  //     displayText: 'Speakers',
  //     iconName: 'group',
  //     children: [new NavItem({
  //       displayText: 'Papa',
  //       iconName: 'person',
  //       children: null
  //     }),
  //     new NavItem({
  //       displayText: 'kkk',
  //       iconName: 'person',
  //       children: null
  //     })
  //   ]
  //   }));

  //   this.navItems.push(new NavItem({
  //     displayText: 'Speakers',
  //     iconName: 'group',
  //     children: [new NavItem({
  //       displayText: 'Papa',
  //       iconName: 'person',
  //       children: null
  //     }),
  //     new NavItem({
  //       displayText: 'kkk',
  //       iconName: 'person',
  //       children: null
  //     })
  //   ]
  //   }));

  //   this.navItems.push(new NavItem({
  //     displayText: 'Speakers',
  //     iconName: 'group',
  //     children: [new NavItem({
  //       displayText: 'Papa',
  //       iconName: 'person',
  //       children: [new NavItem({
  //         displayText: 'Papa',
  //         iconName: 'person',
  //         children: null
  //       }),
  //       new NavItem({
  //         displayText: 'kkk',
  //         iconName: 'person',
  //         children: null
  //       })
  //     ]
  //     }),
  //     new NavItem({
  //       displayText: 'kkk',
  //       iconName: 'person',
  //       children: null
  //     })
  //   ]
  //   }));
