import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"


const Cli = ({windowName,setWindowsState}) => {
  const commands = {}

  commands.echo = {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  }

  commands.help = {
    description: 'List available commands.',
    usage: 'help',
    fn() {
      const lines = Object.keys(commands).map(
        name => `${name} - ${commands[name].description}`
      )

      return ['Available commands:', ...lines].join('\n')
    }
  }

  commands.about = {
    description: 'About me',
    usage: 'about',
    fn: () =>
      'Fatima Qureshi — Frontend Developer passionate about building modern web applications.'
  }

  commands.skills = {
    description: 'Show skills',
    usage: 'skills',
    fn: () =>
      'React, JavaScript, HTML, CSS, SCSS, Tailwind CSS, Node.js, MongoDB'
  }

  commands.projects = {
    description: 'Show projects',
    usage: 'projects',
    fn: () =>
      `Projects:
- Portfolio Website
- Spotify Clone
- Donation Website
- Zomato Reels App`
  }

  commands.contact = {
    description: 'Contact information',
    usage: 'contact',
    fn: () =>
      `GitHub: github.com/fatimaq07
Email: fatima@example.com`
  }

  commands.resume = {
    description: 'Resume summary',
    usage: 'resume',
    fn: () =>
      'B.Tech AI & DS graduate. Frontend Developer with React and JavaScript experience.'
  }

  const welcomeMessage = `
Welcome to Fatima's Portfolio CLI

Type 'help' to see available commands.

Available Commands:
about-Learn about me
skills - View my technical skills
projects - check out my work
contact- u can contact me through
experience- see my career history

help
`

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          noDefaults
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel="fatimaqureshi:~$"
          promptLabelStyle={{ color: '#00ff00' }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli