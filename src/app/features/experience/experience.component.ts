import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  title: string;
  organization: string;
  date: string;
  description: string[];
  tags?: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  imports: [CommonModule],
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Web Development Intern',
      organization: 'Geekinn (Private) Limited',
      date: 'July 2025 – September 2025',
      description: [
        'Completed a Web Development Internship in the Web Development Department.',
        'Worked on real-world projects, gaining hands-on experience in frontend and backend technologies.',
        'Improved problem-solving skills and adaptability in a fast-paced environment.',
        'Collaborated with industry professionals, receiving mentorship and guidance.',
        'Gained expertise in modern web technologies, project workflows, and teamwork.',
      ],
      tags: [
        'Web Development',
        'Internship',
        'Frontend',
        'Backend',
        'Teamwork',
      ],
    },
    {
      title: 'Competitive Programmer',
      organization: 'PF PUCon 25 – PUCIT',
      date: 'April 2025',
      description: [
        'Participated in PF PUCon, a competitive programming showdown hosted at PUCIT – FCIT.',
        'Secured 5th Rank in Round 1 and solved a challenging problem in Round 2.',
        'Contributed as a member of Team "Greedy Hunters" alongside teammates Fiza Ejaz and Bushra Noor.',
        'Enhanced problem-solving, logical thinking, and teamwork under time pressure.'
      ],
      tags: [
        'Competitive Programming',
        'Teamwork',
        'Problem Solving',
        'Logic',
        'Coding Challenges',
      ],
    },

    {
      title: 'Teacher Assistant – Object-Oriented Programming (OOP)',
      organization: 'TAShip Program, PUCIT',
      date: 'September – December 2025',
      description: [
        'Assisted the faculty in teaching the Object-Oriented Programming (OOP) course.',
        'Helped students understand core OOP concepts like classes, objects, inheritance, polymorphism, and encapsulation.',
        'Provided support during lab sessions and guided students in debugging and implementing projects.',
        'Enhanced communication, teaching, and leadership skills in a classroom environment.',
      ],
      tags: ['OOP', 'Teaching', 'Mentorship', 'Problem Solving', 'Leadership'],
    },

    {
      title: 'Dev Weekends Fellowship',
      organization: 'PUCIT Dev Weekends',
      date: 'June – AUgust 2025',
      description: [
        'Participated in the Dev Weekends Fellowship, enhancing problem-solving and development skills.',
        'Worked collaboratively in a growth-driven environment under mentor Zainab Hussain.',
        'Strengthened technical foundations, logical thinking, and approach to real-world challenges.',
        'Gained mentorship and built a network with peers and professionals.',
      ],
      tags: ['Problem Solving', 'Development', 'Collaboration'],
    },
  ];
}
