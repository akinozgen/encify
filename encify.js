const encify = function(enc = 'base64', type = 'json') {
    const encoders = {
        base64: {
            json: {
                encode(o) {
                    return btoa(unescape(encodeURIComponent(JSON.stringify(o))));
                },

                decode(str) {
                    return JSON.parse(atob(decodeURIComponent(escape(str.replace(/\=/g, '')))));
                }
            },
            string: {
                encode(str) {
                    return btoa(unescape(encodeURIComponent((str))));
                },
                decode(str) {
                    return (atob(escape(decodeURIComponent(str.replace(/\=/g, '')))));
                }
            }
        },
        httpQuery: {
            json: {
                serialize(o) {
                    return Object.keys(o).map(key => `${key}=${o[key]}`).join('&')
                },
                deserialize(str) {
                    const o = {};
                    str.split('&').forEach(i => {
                        const ps = i.split('=');
                        o[ps[0]] = ps[1];
                    });
                    return o;
                }
            }
        }
    };
    return encoders[enc][type];
};

export default encify;
