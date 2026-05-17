import AppCon from '../assets/certificates/AppCon.jpg'
import IMCEST from '../assets/certificates/IMCEST.jpg'
import MongoDB from '../assets/certificates/MongoDB.jpg'

export const certificates = [
  {
    id: 1,
    title: 'AI & Development Webinar',
    issuer: 'OTIS Philippines Inc.',
    date: 'November 2024',
    image:  AppCon,
    credentialUrl: 'https://www.facebook.com/OTisPhilippinesInc',
    skills: ['AI', 'Development']
  },
  {
    id: 2,
    title: 'IMCEST Thesis Paper Presentation',
    issuer: 'IMCEST',
    date: 'November 2025',
    image: IMCEST,
    credentialUrl: '',
    skills: ['Thesis Paper']
  },
  {
    id: 3,
    title: 'Monitoring MongoDB with Built-in Tools',
    issuer: 'MongoDB',
    date: 'May 2026',
    image: MongoDB,
    credentialUrl: 'https://www.credly.com/badges/63a7360f-fa59-4211-9d0a-631ab60ee97f/public_url',
    skills: ['Monitoring', 'MongoDB']
  },
];