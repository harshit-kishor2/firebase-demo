/*
export { default as Comp1 } from './Comp1.jsx';
// before
module.exports = require('./inner.js');
// nowadays
export default from './inner.js';

*/
export {default as RouteName} from './routesName';
export {default as ImageConst} from './images';
export {strings as Strings, loadingStatus as LoadingStatus} from './strings';
