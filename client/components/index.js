/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserProfile} from './user-profile'
export {Login, Signup} from './auth-form'
// our hobbies components here:
export {default as AllHobbies} from './AllHobbies'
export {default as SingleHobby} from './SingleHobby'
export {default as Cart} from './Cart'
