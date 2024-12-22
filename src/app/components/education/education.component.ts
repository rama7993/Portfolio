import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educationItems = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      college: 'National Institute of Technology Rourkela, Odisha',
      date: 'June 2022',
      duration: 'August 2018 - June 2022',
      icon: 'pi-graduation-cap',
      description:
        'Completed a comprehensive Computer Science and Engineering program, engaging in various technical projects and activities',
      CGPA: '9.06',
      image: './assets/images/education/university.jpg',
      driveLink:
        'https://drive.google.com/file/d/1Hf6pt3gh1cPgDmhZ4WHa44js7f4DAuuV/view?usp=sharing',
    },
    {
      degree: 'Intermediate Education (Class 12)',
      college: 'Bhashyam Junior College, Guntur, Andhra Pradesh',
      date: 'May 2018',
      duration: 'May 2016 - June 2018',
      icon: 'pi-building-columns',
      description:
        'Studied Mathematics, Physics, and Chemistry with a strong academic record.',
      Percentage: '97.1%',
      image: './assets/images/education/college.jpg',
      driveLink:
        'https://drive.google.com/file/d/1LaBSiN2s8tejNqHyMne7W4P0bCCrXfBb/view?usp=sharing',
    },
    {
      degree: 'Secondary Education (Class 10)',
      college: 'Bhashyam Public School, Guntur, Andhra Pradesh',
      date: 'April 2016',
      duration: 'March 2015 - April 2016',
      icon: 'pi-briefcase',
      description:
        'Achieved a solid academic performance in the state board curriculum.',
      CGPA: '9.8',
      image: './assets/images/education/school.png',
      driveLink:
        'https://drive.google.com/file/d/1UtqZoL1JJg-wN5ucC-bS-WjIlLj0Gjct/view?usp=sharing',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
