import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent implements OnInit {
  certifications = [
    {
      name: 'Problem Solving, SQL, Python, and JavaScript Certifications',
      platform: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/88274e81bd0d',
    },
    {
      name: '100-day streak badge and full streak in a month badge',
      platform: 'LeetCode',
      link: 'https://leetcode.com/u/rama_koti_reddy/',
    },
    {
      name: 'C, C++, Python, Java, SQL, HTML, CSS, and JavaScript Certifications',
      platform: 'Programming Hub',
      link: 'https://drive.google.com/drive/folders/14ROTUxxHsBt1mKr6JTuFChGnrqhrlf5j',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
