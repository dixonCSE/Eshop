import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  navmenus = [
    {
      name: 'Dashboard',
      routerLink: '/user',
      icon: '',
      title: 'Dashboard',
    },
    {
      name: 'SAC',
      routerLink: 'sac',
      icon: '',
      title: 'sac',
    },
    {
      name: 'Profile',
      routerLink: 'profile',
      icon: '',
      submenus: [
        {
          name: 'profile',
          routerLink: 'profile',
          icon: '',
        },
        {
          name: 'Update',
          routerLink: 'profile/update',
          icon: '',
        },
        {
          name: 'Password',
          routerLink: 'profile/password',
          icon: '',
        },
        {
          name: 'Image',
          routerLink: 'profile/image',
          icon: '',
        },
      ],
    },
    {
      name: 'Transaction',
      routerLink: 'transaction',
      icon: '',
      submenus: [
        {
          name: 'Transfer',
          routerLink: 'transaction',
          icon: '',
          submenus: [
            {
              name: 'Send',
              routerLink: 'transaction',
              icon: '',
            },
            {
              name: 'Send Report',
              routerLink: 'transaction/send/report',
              icon: '',
            },
            {
              name: 'Receive Report',
              routerLink: 'transaction/receive/report',
              icon: '',
            },
          ],
        },
        {
          name: 'Withdraw',
          routerLink: 'withdraw',
          icon: '',
          submenus: [
            {
              name: 'Withdraw',
              routerLink: 'withdraw',
              icon: '',
            },
            {
              name: 'Report',
              routerLink: 'withdraw/report',
              icon: '',
            },
          ],
        },
        {
          name: 'Exchange',
          routerLink: 'exchange',
          icon: '',
          submenus: [
            {
              name: 'Exchange',
              routerLink: 'exchange',
              icon: '',
            },
            {
              name: 'Report',
              routerLink: 'exchange/report',
              icon: '',
            },
          ],
        },
        {
          name: 'Add Fund',
          routerLink: 'user_add_fund',
          icon: '',
          submenus: [
            {
              name: 'Add Fund',
              routerLink: 'user_add_fund',
              icon: '',
            },
            {
              name: 'Report',
              routerLink: 'user_add_fund/report',
              icon: '',
            },
          ],
        },
      ],
    },
    {
      name: 'Trade',
      routerLink: 'trade',
      icon: '',
      submenus: [
        {
          name: 'Trade',
          routerLink: 'trade',
          icon: '',
        },
        {
          name: 'Inter',
          routerLink: 'trade/inter',
          icon: '',
        },
        {
          name: 'Insert',
          routerLink: 'trade/insert',
          icon: '',
        },
        {
          name: 'Report',
          routerLink: 'trade/report',
          icon: '',
        },
      ],
    },
    // {
    //     name: 'Deposit',
    //     routerLink: 'deposit',
    //     icon: '',
    //     submenus: [
    //         {
    //             name: 'deposit',
    //             routerLink: 'deposit',
    //             icon: '',
    //         },
    //         {
    //             name: 'Report',
    //             routerLink: 'deposit/report',
    //             icon: '',
    //         },
    //     ],
    // },
  ];

  level: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
