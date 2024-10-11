const btnThemeSwitcher = document.getElementById('themeSwitcher')
btnThemeSwitcher.innerText = "Light Mode"
const html = document.documentElement

btnThemeSwitcher.addEventListener('click', function(){

  if(html.classList == 'darkMode'){
      html.classList = 'lightMode'
      btnThemeSwitcher.innerText = 'Dark Mode'
  }
  else if(html.classList == 'lightMode'){
      html.classList = 'darkMode'
      btnThemeSwitcher.innerText = 'Light Mode'
  }

  if(html.classList == 'darkMode'){
    html.style.setProperty('--background', '#2C3333')
    html.style.setProperty('--navbar-background', '#ffffff3d')
    html.style.setProperty('--navbar-hoverbackground', '#7ba59b')
    html.style.setProperty('--color-apresentation', '#3c6666')
    html.style.setProperty('--color-h1Informations', '#0E8388')
    html.style.setProperty('--text', '#e5e7eb')
    html.style.setProperty('--text-bodyColor', '#CBE4DE')
    html.style.setProperty('--cvbutton', '#245b4e')

  }
  else if(html.classList == 'lightMode'){
    html.style.setProperty('--background', '#dee2e6')
    html.style.setProperty('--navbar-background', '#2f38393d')
    html.style.setProperty('--navbar-hoverbackground', '')
    html.style.setProperty('--color-apresentation', '')
    html.style.setProperty('--color-h1Informations', '#0e7088b5')
    html.style.setProperty('--text', '#2C3333')
    html.style.setProperty('--text-bodyColor', '#346d5a')
    html.style.setProperty('--cvbutton', '#469582')

  }

})