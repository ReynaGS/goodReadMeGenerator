// function to generate markdown for README
function generateMarkdown(data) {
  return `
  License

  ${data.license}
  
  # ${data.title}
  
  Description

  ${data.description}

  Instalation

  ${data.instalation}

  Usage

  ${data.usage}

  Contribution

  ${data.contribution}

  Instructions

  ${data.instructions}

  gitHub User Name

  ${data.gitHubUser}

  Email Adress 

  ${data.email}

`;
}

module.exports = generateMarkdown;
