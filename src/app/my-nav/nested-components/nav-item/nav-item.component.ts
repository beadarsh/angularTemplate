import { Component, OnInit, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { NavItem } from '../../models/nav-item';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  animations: [
    trigger('rotateUpDownArrow', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-30%)'}),
        animate('220ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('220ms ease-in', style({transform: 'translateX(-30%)'}))
      ])
    ])
  ]
})
export class NavItemComponent implements OnInit {

  @Input() navItem: NavItem;
  @Input() nestingFromRoot: number;
  expanded: boolean;

  constructor( public router: Router) { }

  ngOnInit() {
  }


  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      //this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      //this.expanded = !this.expanded;
    }
  }

  isNavItemActive(): boolean {
    return this.router.isActive(this.navItem.route, true);
  }

}
