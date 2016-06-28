var Xray = require('x-ray');
var querystring = require("querystring");

appshopper = {}

appshopper.base = function(){
    var x = Xray({
        filters: {
        clean_appleid: function(value){
            return typeof value === 'string' ? value.split('_')[1] : value;
        },
        clean_price: function (value) {
            return typeof value === 'string' ? value.replace('was','').trim() : value;
        },
        trim: function (value) {
            return typeof value === 'string' ? value.replace(/^\s+|\s+$/g, "") : value;
        },
        first: function (value) {
            if( typeof value === 'string' ){
            return value.split(/\s/)[0];
            }else{
            return value;
            }
        },
        }
    });
    return x;
}

appshopper.query = function(query){
    var x = this.base()
    var query_x = x('http://appshopper.com/search?search='+querystring.escape(query), '[data-appId]', [{
        title: 'h2.dark-links',
        'image': '.icon img@src',
        'version' : '.version',
        'last_updated' : '.last-updated',
        'link': 'a.block-link@href',
        'price': '.price | clean_price | first',
        'old_price': '.old-price:not(.hide) | clean_price',
        'change' : '.change-capsule',
    }])
    return query_x
}

appshopper.detail = function(url){
    var x = this.base()
    var detail_x = x( url , 'body', {
      title: 'h1',
      image: '.app-detail-header img@src',
      type: 'h2 nobr',
      category: 'h2 span',
      'appid' :'.app-detail .own@id | clean_appleid',
      'description' : '.description-text | trim',
      'price': '.price | clean_price | first',
      'old_price': '.old-price:not(.hide) | clean_price',
      'activities' : x('.activity li',[
          {
            'title':'b',
            'date': '.update-date'
          }
       ]),
       'iphone': x('#iphone img' , [ '@src' ] ),
       'ipad': x('#ipad img' , [ '@src' ] ),
       'mac': x('#mac img' , [ '@src' ] )
    })
    return detail_x
}

module.exports = appshopper