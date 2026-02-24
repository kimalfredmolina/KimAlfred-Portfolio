// src/constants/icons.js

// Programming Languages
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import javascript from '../assets/icons/javascript.png';
import python from '../assets/icons/python.png';
import php from '../assets/icons/php.png';
import java from '../assets/icons/java.png';
import typescript from '../assets/icons/typescript.png';
import csharp from '../assets/icons/csharp.png';
import vbnet from '../assets/icons/vbnet.png';

// Frameworks
import react from '../assets/icons/react.png';
import native from '../assets/icons/native.png';
import tailwind from '../assets/icons/tailwind.png';
import django from '../assets/icons/django.svg';
import node from '../assets/icons/node.png';
import express from '../assets/icons/express.png'
import next from '../assets/icons/next.webp';

// Databases
import mysql from '../assets/icons/mysql.png';
import firebase from '../assets/icons/firebase.png';
import mongodb from '../assets/icons/mongodb.png';
import postgre from '../assets/icons/postgre.png';
import mssql from '../assets/icons/mssql.png';

// Tools
import git from '../assets/icons/git.png';
import github from '../assets/icons/github.png';
import figma from '../assets/icons/figma.png';
import cicd from '../assets/icons/cicd.png';
import jest from '../assets/icons/jest.png';
import expo from '../assets/icons/expo.png';
import android from '../assets/icons/android.png';
import clickup from '../assets/icons/clickup.png';
import actions from '../assets/icons/actions.png';
import docker from '../assets/icons/docker.png'

//SE
import sdlc from '../assets/icons/sdlc.png';
import agile from '../assets/icons/agile.png';

export const ICONS = {
    // Languages
    HTML: html,
    CSS: css,
    JavaScript: javascript,
    Python: python,
    PHP: php,
    Java: java,
    TypeScript: typescript,
    'C#': csharp,
    'VB.Net': vbnet,

    // Frameworks
    'React.js': react,
    'React Native': native,
    'Tailwind CSS': tailwind,
    Django: django,
    'Node.js': node,
    'Express.js': express,
    'Next.js': next, 

    // Databases
    MySQL: mysql,
    Firebase: firebase,
    MongoDB: mongodb,
    PostgreSQL: postgre,
    'MS SQL Server': mssql,

    // Tools
    Git: git,
    Github: github,
    'Github Actions': actions,
    Figma: figma,
    'CI/CD': cicd,
    Jest : jest,
    Expo : expo,
    Docker: docker,
    Android: android,
    ClickUp: clickup,

    // Software Engineering
    SDLC: sdlc,
    Agile: agile,
};

// Helper function
export const getIconPath = (name) => ICONS[name] || null;
