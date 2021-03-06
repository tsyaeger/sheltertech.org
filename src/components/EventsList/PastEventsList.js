import React from 'react'

import ImageDinner from './assets/dinner.jpg'
import ImageDinner2 from './assets/dinner2.png'
import ImageBurrito from './assets/burrito.png'
import ImageDatathon1 from './assets/datathon.jpg'
import ImageDatathon2 from './assets/datathon2.jpg'
import ImageDatathon3 from './assets/datathon3.jpg'
import ImageDatathon4 from './assets/datathon4.jpg'
import ImageDatathon5 from './assets/datathon5.jpg'
import ImageDatathon6 from './assets/datathon6.jpg'
import ImageHackathon from './assets/hackathon.jpg'
import ImageBurstTheBubble from './assets/burst-the-bubble.jpg'
import ImageMayoralEvent from './assets/mayoral-event.jpg'
import ImageMusic from './assets/music.jpg'
import ImageTacklingHomelessness from './assets/tackling-homelessness.jpg'

const pastEventsList = [
  {
    id: `27`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Sun, Oct 28 04:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/o/sheltertech-10605816644',
    location: 'Ruby SF',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon4
  },
  {
    id: `26`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Wed, Oct 17 02:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/o/sheltertech-10605816644',
    location: 'Google Community Space',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon5
  },
  {
    id: `25`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Oct 16 06:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/o/sheltertech-10605816644',
    location: 'AdRoll',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon6
  },
  {
    id: `24`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Oct 9 06:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/o/sheltertech-10605816644',
    location: 'WeWork',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon2
  },
  {
    id: `23`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Thu, Oct 4 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/o/sheltertech-10605816644',
    location: 'WeWork',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon1
  },
  {
    id: `22`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Sep 25 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/o/sheltertech-10605816644',
    location: 'Unity Technologies',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon2
  },
  {
    id: `21`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Sep 18 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-sept-18th-volunteer-opportunity-tickets-49411240350',
    location: 'Runway',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon3
  },
  {
    id: `20`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Sep 11 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-sep-11th-volunteer-opportunity-tickets-49411220290',
    location: 'Intersection for the Arts',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon4
  },
  {
    id: `19`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Thu, Sep 6 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/o/sheltertech-10605816644',
    location: "Women's Building",
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon5
  },
  {
    id: `18`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Aug 21 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-aug-21st-volunteer-opportunity-tickets-48321486868?aff=ebdssbdestsearch',
    location: 'Unity Technologies',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon4
  },
  {
    id: `17`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Aug 7 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-aug-7th-volunteer-opportunity-tickets-48310200109?aff=ebdssbdestsearch',
    location: 'Unity Technologies',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon5
  },
  {
    id: `16`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Jul 24 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-july-24th-volunteer-opportunity-tickets-47339944047?aff=efbeventtix',
    location: 'Unity Technologies',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon1
  },
  {
    id: `15`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Jul 10 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-july-10th-volunteer-opportunity-tickets-47339895903',
    location: 'Unity Technologies',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon2
  },
  {
    id: `14`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Sun, Jul 1 01:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-june-16th-volunteer-opportunity-tickets-46767081600',
    location: 'Downtown SF',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon3
  },
  {
    id: `13`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Sat, Jun 30 01:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-june-30th-volunteer-opportunity-tickets-46773909021',
    location: 'Noe Valley Branch Library',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon4
  },
  {
    id: `12`,
    show: true,
    title: 'Burrito Project SF',
    date: 'Mon, Jun 25 04:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.facebook.com/events/443087502819734/',
    location: 'Martin De Porres House Foundation',
    description: 'Join us as we team up with Burrito Project SF to make and distribute burritos to our hungry and homeless neighbors',
    img: ImageBurrito
  },
  {
    id: `11`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Sun, Jun 17 10:30AM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-june-16th-volunteer-opportunity-tickets-46767081600',
    location: 'Saint Anthony´s Foundation',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon5
  },
  {
    id: `10`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Sat, Jun 16 10:30AM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-june-16th-volunteer-opportunity-tickets-46767081600',
    location: 'Saint Anthony´s Foundation',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon6
  },
  {
    id: `9`,
    show: true,
    title: 'Dinner With Your Neighbor',
    date: 'Fri, Jun 1 7:00PM',
    cost: 'Free',
    link: 'https://eatfeastly.com/meals/d/191475228/dinner-with-your-neighbor-3/',
    location: 'SOMA',
    description: 'Share a table and a meal with housed and unhoused residents of SF',
    img: ImageDinner2
  },
  {
    id: `8`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Sun, May 20 1:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-may-20th-volunteering-opportunity-no-skills-required-tickets-45091072612',
    location: 'Downtown San Francisco',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon1
  },
  {
    id: `7`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Sat, May 19 1:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-may-19th-volunteering-opportunity-tickets-45091044528',
    location: 'Downtown San Francisco',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon2
  },
  {
    id: `6`,
    show: true,
    title: 'Homelessness and the Mayoral Election',
    date: 'Mon, May 7 6:30PM',
    cost: 'Free',
    link: 'https://www.eventbrite.com/e/what-would-you-tell-the-next-mayor-about-homelessness-in-sf-tickets-45281357760',
    location: 'FeelGood Enterprises',
    description: 'What Would You Tell the Next Mayor about Homelessness?',
    img: ImageMayoralEvent
  },
  {
    id: `5`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Sat, May 5 6:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-may-6th-volunteer-event-tickets-45090922162',
    location: 'Noe Valley Library',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon3
  },
  {
    id: `4`,
    show: true,
    title: 'AngelHack Hackathon',
    date: 'Sat, Apr 28 10:00AM',
    cost: 'Free',
    link: 'https://www.hackathon.io/angelhack-silicon-valley-2018',
    location: 'Fremont',
    description: "Hack for good! Build a project on ShelterTech's human services API at our first hackathon",
    img: ImageHackathon
  },
  {
    id: `3`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Sun, Apr 22 1:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-april-22nd-volunteering-opportunity-tickets-45090816847',
    location: 'Runway',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon4
  },
  {
    id: `2`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Sat, Apr 21 1:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/o/sheltertech-10605816644',
    location: 'Runway',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon5
  },
  {
    id: `1`,
    show: true,
    title: 'Concert in a Shelter',
    date: 'Sun, Apr 15 12:00PM',
    cost: 'Free',
    link: 'https://www.eventbrite.com/o/sheltertech-10605816644',
    location: 'Saint Anthony´s Foundation',
    description: 'The SF Symphony Orchestra is playing for people experiencing homelessnss at a local shelter',
    img: ImageMusic
  },
  {
    id: `0`,
    show: true,
    title: 'Dinner with Your Neighbor',
    date: 'Mon, Feb 19 7:30PM',
    cost: 'Free',
    link: 'https://eatfeastly.com/meals/d/191326028/sheltertech-dinner-the-union-2/',
    location: 'Russian Hill',
    description: 'Share a table and a meal with housed and unhoused residents of SF',
    img: ImageDinner
  }
]

export default pastEventsList
