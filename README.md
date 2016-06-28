# appshopper-extract
Use [x-ray](https://github.com/lapwinglabs/x-ray) to extract appshopper's webpage. Very useful you want to keep track of the update of an app or the price change history.

## Installation
```  
npm install  
```

## Start a server:
```
nam start
```
Default PORT is 8081

## Try it
and go to check out [http://localhost:8081/query/facebook](http://localhost:8081/query/facebook) . You should see a JSON like:
```
[
  {
  "title": "Facebook",
  "image": "http://cdn.appshopper.com/icons/284/882215_larger.png",
  "version": "V 58.0",
  "last_updated": "4 days ago",
  "link": "http://appshopper.com/social-networking/facebook",
  "price": "Free",
  "change": "Update"
  },
 ..
]  
```

For the app's detail information , go to check out [http://localhost:8081/detail/social-networking/facebook](http://localhost:8081/detail/social-networking/facebook)

You should see a JSON like:
```
{
  "title": "Facebook",
  "image": "http://cdn.appshopper.com/icons/284/882215_larger.png",
  "type": "iOS Universal",
  "category": "Social Networking",
  "appid": "284882215",
  "description": "Keeping up with friends is faster than ever. • See what friends are up to• Share updates, photos and video• Get notified when friends like and comment on your posts• Watch and interact with live video• Play games and use your favorite appsRead our Data Use Policy, Terms and other important info in the legal section of our App Store description. Continued use of GPS running in the background can dramatically decrease battery life. Facebook doesn't run GPS in the background unless you give us permission by turning on optional features that require this.\n                                Show More...",
  "price": "Free",
  "old_price": "Free",
  "activities": [
    {
      "title": "Version 58.0",
      "date": "Jun 24 '16"
    },
    {
      "title": "Version 57.0",
      "date": "Jun 09 '16"
    }
  ],
  "iphone": [
    "http://a3.mzstatic.com/us/r30/Purple49/v4/a3/30/6c/a3306c7e-a974-b2dd-92c5-26633b41ec41/screen1136x1136.jpeg",
    "http://a4.mzstatic.com/us/r30/Purple49/v4/61/86/8a/61868a0f-7c20-decf-4d51-cb991ff736f9/screen1136x1136.jpeg",
    "http://a1.mzstatic.com/us/r30/Purple49/v4/f5/61/31/f56131be-da99-a6a5-98c6-a82366dfb675/screen1136x1136.jpeg",
    "http://a2.mzstatic.com/us/r30/Purple49/v4/82/c4/00/82c40088-63ab-3bf9-1b64-1edc8bf403db/screen1136x1136.jpeg",
    "http://a5.mzstatic.com/us/r30/Purple49/v4/fe/71/f5/fe71f5e2-8a15-f90b-85a1-54b038d144f7/screen1136x1136.jpeg"
  ],
  "ipad": [
    "http://a5.mzstatic.com/us/r30/Purple49/v4/84/8b/36/848b36a9-5782-6fea-62aa-94090de6a604/screen1024x1024.jpeg",
    "http://a5.mzstatic.com/us/r30/Purple49/v4/fc/e0/7e/fce07e72-ebd9-7a4a-c0bd-d1753bbcf869/screen1024x1024.jpeg",
    "http://a4.mzstatic.com/us/r30/Purple49/v4/da/2c/e0/da2ce02d-f2b1-f739-d60e-0f7477a10f08/screen1024x1024.jpeg"
  ],
  "mac": []
}
```