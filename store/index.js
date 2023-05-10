import Vue from 'vue'

export const state = () => ({
  value: Vue.observable({
    users: [
      {
        name: 'Bessie Cooper',
        id: Math.random() * 2,
        role: 'Team Leader',
        location: 'Home',
        department: 'D4',
        status: 'On break',
        image: 'https://whitesmith-chat.web.app/_nuxt/img/user1.fce9ef9.png',
        isOnline: true

      },
      {
        name: 'Darrell Steward',
        id: Math.random() * 2,
        role: 'Agent',
        location: 'Office',
        department: 'D3',
        status: 'In a meeting',
        image: 'https://whitesmith-chat.web.app/_nuxt/img/user2.2d03203.png'
      },
      {
        name: 'Jerry Nelson',
        id: Math.random() * 2,
        role: 'Agent',
        location: 'Office',
        department: 'D2',
        status: 'Troubleshooting'
      },
      {
        name: 'Jenny Wilson',
        id: Math.random() * 2,
        role: 'Agent',
        location: 'Home',
        department: 'D2',
        status: '',
        image: 'https://whitesmith-chat.web.app/_nuxt/img/user3.dcd97b6.png',
        isOnline: true

      },
      {
        name: 'Arlene McCoy',
        id: Math.random() * 2,
        role: 'Manager',
        location: 'Office',
        department: 'D1',
        status: 'In a meeting',
        image: 'https://whitesmith-chat.web.app/_nuxt/img/user4.1956968.png'
      },
      {
        name: 'Theresa Webb',
        id: Math.random() * 2,
        role: 'IT',
        location: 'Home',
        department: 'D1'
      },
      {
        name: 'John Doe',
        id: Math.random() * 2,
        role: 'IT',
        location: 'Home',
        department: 'D1'
      },
      {
        name: 'Akmar Nafi ',
        id: Math.random() * 2,
        role: 'IT',
        location: 'Home',
        department: 'D1',
        status: '',
        isOnline: true
      }
    ]
  })
})
