import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../../animations/animation';

interface Experience {
  logo: string;
  designation: string;
  companyName: string;
  duration: string;
  description: string;
  details: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [fadeInAnimation],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      logo: './assets/images/satisfic.jpg',
      designation: 'Junior Software Developer',
      companyName: 'Satisfic',
      duration: 'July 2022 - Present',
      description:
        'Worked as part of a small team, contributing to various projects and gaining hands-on experience in software development. Recognized with the Rising Star Award in 2023 for dedication and growth.',
      details: [
        'Developed and maintained CRM data table functionalities, focusing on improving user experience and data accessibility.',
        'Assisted in the execution of marketing campaigns, integrating campaign data with the CRM platform to support business goals.',
        'Worked on graph implementation and reports in marketing and home dashboards, and created a launch guide to document all modules.',
        'Implemented login, signup, and two-factor authentication (2FA) using Keycloak, enhancing the security of user authentication processes.',
        'Integrated infinite scroll with dynamic height calculation across all modules and implemented nested dynamic permissions toggling for user groups.',
        'Participated in regular code reviews and team meetings, contributing to the ongoing improvement of our development practices.',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
