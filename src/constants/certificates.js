import AppCon from '../assets/certificates/AppCon.jpg'
import IMCEST from '../assets/certificates/IMCEST.jpg'
import MongoDB from '../assets/certificates/MongoDB.jpg'
import Coursera1 from '../assets/certificates/Molina-Coursera1.jpg'
import Coursera2 from '../assets/certificates/Molina-Coursera2.jpg'

export const certificates = [
  {
    title: 'Project Initiation: Starting a Successful Project',
    issuer: 'Google',
    date: 'June 2026',
    image: Coursera2,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/ABB11N0C8ZIF',
    skills: ['Project Initiation', 'Google']
  },
  {
    title: 'Foundations of Project Management',
    issuer: 'Google',
    date: 'June 2026',
    image: Coursera1,
    credentialUrl: 'https://coursera.org/share/cc80d642e85cb7d6fba3b43a24cfa211',
    skills: ['Project Management', 'Google']
  },
  {
    title: 'Monitoring MongoDB with Built-in Tools',
    issuer: 'MongoDB',
    date: 'May 2026',
    image: MongoDB,
    credentialUrl: 'https://www.credly.com/badges/63a7360f-fa59-4211-9d0a-631ab60ee97f/public_url',
    skills: ['Monitoring', 'MongoDB']
  },
  {
    title: 'IMCEST Thesis Paper Presentation',
    issuer: 'IMCEST',
    date: 'November 2025',
    image: IMCEST,
    credentialUrl: 'https://www.facebook.com/TaguigCityUniversity',
    skills: ['Thesis Paper']
  },
  {
    title: 'AI & Development Webinar',
    issuer: 'OTIS Philippines Inc.',
    date: 'November 2024',
    image: AppCon,
    credentialUrl: 'https://www.facebook.com/OTisPhilippinesInc',
    skills: ['AI', 'Development']
  },
];