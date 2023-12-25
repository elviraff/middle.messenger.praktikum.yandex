import Handlebars from 'handlebars'
import avatarPic from '../../img/ellipse.png'

export {default as AvatarImg} from './avatarImg.hbs?raw'

Handlebars.registerHelper('avatarImage', () => {
    return  avatarPic
})
