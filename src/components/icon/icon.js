import Handlebars from 'handlebars'
import iconImage from '../../img/icon.svg'

export {default as Icon} from './icon.hbs?raw'

Handlebars.registerHelper('iconImg', () => {
    return  iconImage
})

