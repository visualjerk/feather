import themeDark from '@@/tokens/generated/theme.dark'
import themeLight from '@@/tokens/generated/theme.light'

const themes = { themeLight, themeDark }
let currentTheme = 'themeLight'
let stylesheet = null

export default {
  install(Vue) {
    Vue.prototype.$toggleTheme = () => {
      currentTheme = currentTheme === 'themeLight' ? 'themeDark' : 'themeLight'
      useTheme(themes[currentTheme])
      console.log('toggle theme', currentTheme)
    }
  }
}

const useTheme = (theme) => {
  if (!stylesheet) {
    stylesheet = document.createElement('style')
    document.querySelector('head').append(stylesheet)
  }
  const variables = Object.keys(theme).map(key => {
    return `${key}: ${theme[key]};`
  }).join('\n')
  stylesheet.innerHTML = `:root {
  ${variables}
}`
}