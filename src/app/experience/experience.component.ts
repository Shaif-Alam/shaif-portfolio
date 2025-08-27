import { Component, OnInit } from '@angular/core';
interface Project {
  name: string;
  image: string;
  description: string;
  link: string;
  showMore: boolean;
}
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
 projects: Project[] = [
   {
      name: 'HealthMagus',
      image: '../../assets/Projects/Healthmagus.png',
      description: `Built a healthcare management platform using Angular frontend and Node.js backend with secure REST APIs and microservices architecture. Led the UI team as team leader, managing 4+ junior developers to design responsive, user-friendly interfaces. Implemented appointment scheduling, real-time notifications for patients and doctors, and optimized workflows to enhance usability and system performance across devices.`,
      link: 'https://healthmagus.lvtlabs.com/login',
      showMore: false
    },
    {
      name: 'Carve Chat Application',
      image: '../../assets/Projects/Carve.png',
      description: `Developed a secure real-time chat platform that enables two members to communicate privately in dedicated rooms, ensuring full confidentiality and seamless interaction. Built with an Angular frontend and Node.js backend, integrating Socket.io for real-time messaging. Designed a privacy-first architecture with RESTful APIs, responsive UI, and continuous integration for reliable global user experience.`,
      link: 'https://carve-sage.vercel.app/home',
      showMore: false
    },
    {
      name: 'To-Do List Application',
      image: '../../assets/Projects/Todo.jpg',
      description: `Developed a To-Do List management application that allows users to add, edit, mark as complete, and delete tasks with a clean and intuitive interface. The frontend was built using Angular and Material Design, ensuring responsiveness and accessibility across desktop and mobile devices. On the backend, Node.js and Express were used to handle APIs, while MongoDB was used for persistent storage. Implemented features like task filtering, due date reminders, and real-time updates.`,
      link: 'https://task-management-seven-umber.vercel.app/',
      showMore: false
    },
    {
      name: 'Tic Tac Toe',
      image: '../../assets/Projects/Tic.jpg',
      description: `Developed a Tic Tac Toe game using Angular with Material Design and Bootstrap for responsive UI. The game supports two players with interactive gameplay, win detection, and score tracking. Implemented clean and intuitive interfaces, responsive layouts for mobile and desktop, and reusable Angular components. Used TypeScript for game logic, ensuring smooth state management and seamless player experience across devices.`,
      link: 'https://tic-tac-toe-beta-amber-96.vercel.app/',
      showMore: false
    },
    {
      name: 'Falling Insects',
      image: '../../assets/Projects/insects.png',
      description: `Developed an interactive browser-based game where users catch falling insects and count the number of each type collected. Built with Angular and TypeScript for the frontend, ensuring smooth animations and responsive controls across devices. Implemented collision detection, score tracking, and real-time updates. Designed a user-friendly interface with dynamic feedback and engaging visuals to enhance gameplay and learning.`,
      link: 'https://falling-insects-game.vercel.app/',
      showMore: false
    },
    {
      name: 'Masque and society',
      image: '../../assets/Projects/Masque.png',
      description: `Developed a responsive website for a Masque and charitable society with Angular frontend and Node.js backend. Features include tracking donations monthly and yearly, managing events, publishing news, and sending real-time updates to users via phone notifications, email, and WhatsApp for programs or announcements. Ensured seamless UI/UX, data security, and accessibility.`,
      link: 'https://masque-jamiya-ahle-sunnat.vercel.app/',
      showMore: false
    },
    {
      name: 'Connotation-AI',
      image: '../../assets/Projects/Aii.png',
      description: `Developed Connotation-AI, an AI-powered web application integrated with Google services, built from scratch using Angular frontend and Node.js backend. Designed the user interface in Figma, implemented a microservices architecture, and set up CI/CD pipelines for automated deployment. Delivered a responsive, user-friendly experience while integrating AI features for intelligent content generation and seamless project functionality.`,
      link: 'https://connotation-ai.vercel.app/home',
      showMore: false
    },
    {
      name: 'Upcoming',
      image: '../../assets/Projects/upcoming.png',
      description: `A new one is about to arrive.`,
      link: 'https://',
      showMore: false
    },
  ];

  toggleView(index: number) {
    this.projects[index].showMore = !this.projects[index].showMore;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
