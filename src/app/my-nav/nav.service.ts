import { NavItem } from "./models/nav-item";
export class NavService
{
    navItems: NavItem[] = [];
    constructor()
    {
        this.addNavItems();
    }

    addNavItems()
    {
        this.navItems.push(new NavItem({
            displayText: 'Home',
            iconName: 'home',
            children: [],
            route: 'home'
        }),
        new NavItem({
          displayText: 'Dashboard',
          iconName: 'dashboard',
          children: [],
          route: 'dashboard'
        }),
        new NavItem({
          displayText: 'Inbox',
          iconName: 'inbox',
          children: [],
          route: 'inbox'
        }),
        new NavItem({
          displayText: 'Chat',
          iconName: 'chat',
          children: [],
          route: 'chat'
        }),
        new NavItem({
          displayText: 'Components',
          iconName: 'layers',
          children: [],
          route: 'components'
        })
      );
        this.navItems.push(new NavItem({
            displayText: 'Forms',
            iconName: 'description',
            children: [new NavItem({
                displayText: 'Form Elements',
                iconName: 'map',
                children: [],
                route:'forms-component-1'
                }),
               new NavItem({
                          displayText: 'Form Wizard',
                          iconName: 'menu',
                          children: [],
                          route: 'forms-component'
                            })]
                        }));

                        this.navItems.push(new NavItem({
                          displayText: 'Tables',
                          iconName: 'format_line_spacing',
                          children: [new NavItem({
                              displayText: 'Simple Table',
                              iconName: 'mouse',
                              children: []
                              }),
                             new NavItem({
                                        displayText: 'All-In-One Table',
                                        iconName: 'maps',
                                        children: []
                                          })]
                                      }));


                                      this.navItems.push(new NavItem({
                                        displayText: 'Custom Forms',
                                        iconName: 'web',
                                        children: [new NavItem({
                                            displayText: 'Login Page',
                                            iconName: 'web',
                                            children: []
                                            }),
                                           new NavItem({
                                                      displayText: 'All-In-One Table',
                                                      iconName: 'maps',
                                                      children: []
                                                        })]
                                                    }));


        this.navItems.push(new NavItem({
            displayText: 'Speakers',
            iconName: 'group',
            children: [new NavItem({
                displayText: 'Papa',
                iconName: 'person',
                children: []
            }), new NavItem({
                displayText: 'kkk',
                iconName: 'person',
                children: []
            })]
        }));
        this.navItems.push(new NavItem({
            displayText: 'Speakers',
            iconName: 'group',
            children: [new NavItem({
                displayText: 'Papa',
                iconName: 'person',
                children: [new NavItem({
                    displayText: 'Papa',
                    iconName: 'person',
                    children: []
                }), new NavItem({
                    displayText: 'kkk',
                    iconName: 'person',
                    children: []
                })]
}), new NavItem({
                displayText: 'kkk',
                iconName: 'person',
                children: []
})]
        }));

    }
}
