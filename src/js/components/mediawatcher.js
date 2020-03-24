/**
 * Class for watching resolution changes.
 * 
 * Usage:
 * import MediaWatcher from './components/mediawatcher'
 * 
 * function action(when) {
 *  console.log('sm ' + when)
 * }
 * 
 * let m = MediaWatcher.addListener('sm', action)
 * 
 * @var {string} when initial|change
 */
export default class MediaWatcher {
    static mediaQueries() {
        return {
            sm: '(min-width: 576px)',
            md: '(min-width: 768px)',
            lg: '(min-width: 992px)',
            xl: '(min-width: 1200px)'
        }
    }

    static dynamicMediaQueries() {
        return {
            xs: '(max-width: 575px)',
            sm: '(min-width: 576px) and (max-width: 767px)',
            md: '(min-width: 768px) and (max-width: 992px)',
            lg: '(min-width: 993px) and (max-width: 1199px)',
            xl: '(min-width: 1200px)'
        }
    }

    static getWatchMedia(query) {
        return window.matchMedia(this.mediaQueries()[query])
    }

    /**
     * Add listener method.
     * 
     * @param {*} query 
     * @param {*} callback 
     */
    static addListener(query, callback) {
        let media = window.matchMedia(this.mediaQueries()[query])

        if (media.matches) {
            callback('initial')
        }

        media.addListener(
            function(media) {
                if (media.matches) {
                    callback('change')
                }
            }
        )
        
        return media
    }

    /**
     * Listens to all media queries.
     * Fires on change of any of them.
     * 
     * @param {*} callback 
     */
    static addDynamicListener(callback) {
        let allMedia = this.dynamicMediaQueries()

        Object.keys(allMedia).forEach(function (item) {
            let media = window.matchMedia(allMedia[item])

            if (media.matches) {
                callback(item)
            }

            media.addListener(
                function(media) {
                    if (media.matches) {
                        callback(item)
                    }
                }
            )
        })
    }
} 
