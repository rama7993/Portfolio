import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Sportify (Music Search)',
      imageUrl: './assets/images/projects/music_search.png',
      description:
        'Developed a music search platform using the Spotify API for real-time data. Focused on providing a smooth user experience with features like Shimmer effect for loading states.',
      techStack: 'Angular, SCSS, Bootstrap, Spotify API, Shimmer effect',
      githubLink: 'https://github.com/rama7993/music-search',
      link: 'https://rama7993.github.io/music-search/',
    },
    {
      name: 'Weather Search',
      imageUrl: './assets/images/projects/weather_search.png',
      description:
        'Created a responsive weather application that displays current and forecasted weather details. Utilized Angular and Bootstrap to build a clean and intuitive user interface.',
      techStack: 'Angular, SCSS, Bootstrap',
      githubLink: 'https://github.com/rama7993/weather-search',
      link: 'https://rama7993.github.io/weather-search/',
    },
    {
      name: 'Edairy',
      imageUrl: './assets/images/projects/eDairy.png',
      description:
        'Designed and developed a static website for an online dairy product ordering service, focusing on a visually appealing and user-friendly layout.',
      techStack: 'HTML, CSS, JavaScript',
      githubLink: 'https://github.com/rama7993/eDairy',
      link: 'https://rama7993.github.io/eDairy/',
    },
    {
      name: 'News Search',
      imageUrl: './assets/images/projects/project.jpg',
      description:
        'Built a dynamic news search platform with features like category filtering and infinite scrolling for enhanced browsing experience.',
      techStack: 'Angular, SCSS, Bootstrap, Infinite scrolling',
      githubLink: 'https://github.com/rama7993/news-search',
      link: 'https://rama7993.github.io/news-search/',
    },
    // {
    //   name: 'Dashboard',
    //   imageUrl: './assets/images/projects/project.jpg',
    //   description:
    //     'Developed an interactive dashboard with a guided tour feature to help users navigate the platform effectively. Focused on creating a user-friendly interface.',
    //   techStack: 'Angular, SCSS, Bootstrap',
    //  githubLink:'', link: 'https://rama7993.github.io/dashboard/',
    // },
  ];

  ngOnInit(): void {}
}
