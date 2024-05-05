<script>
    window.Userback = window.Userback || {};
    Userback.access_token = '39412|78333|SZ3V7Tn9nW7abMqDf52EdjdeK';
    (function(d) {
        var s = d.createElement('script');s.async = true;
        s.src = 'https://static.userback.io/widget/v1.js';
        (d.head || d.body).appendChild(s);
    })(document);
</script>
/* chameleon.io script */

!function(d,w){var t="SoKHsUghVLiHytB1JeFSRv2lov0SQvYkrCNhVBGZJEO5I3-1Rynn3-EXJZu1cUTqdy9kox",c="chmln",i=d.createElement("script");if(w[c]||(w[c]={}),!w[c].root){w[c].accountToken=t,w[c].location=w.location.href.toString(),w[c].now=new Date,w[c].fastUrl='https://fast.chameleon.io/';var m="identify alias track clear set show on off custom help _data".split(" ");for(var s=0;s<m.length;s++){!function(){var t=w[c][m[s]+"_a"]=[];w[c][m[s]]=function(){t.push(arguments);};}();}i.src=w[c].fastUrl+"messo/"+t+"/messo.min.js",i.async=!0,d.head.appendChild(i);}}(document,window);

/* trychameleon.com user identification and data */

// IMPORTANT: Replace USER.ID_IN_DB, USER.EMAIL, USER.FULL_NAME below with your app's actual variable names.

chmln.identify(USER.ID_IN_DB, {   // REQUIRED, the unique ID of each user in your database (e.g. 23443 or "690b80e5f433ea81b96c9bf6")
  uid_hash: USER.ID_HASH_FROM_BACKEND, // REQUIRED, the sha256 of the User ID as outlined here => https://github.com/chamaeleonidae/verification/* chameleon.io user identification and data */
  // Example user properties; to use these replace the placeholders (e.g. USER.SIGN_UP_DATE) with your app’s actual variable names.
  email: USER.EMAIL,                // RECOMMENDED, email is used as the key to map user data for integrations
  name: USER.FULL_NAME,             // RECOMMENDED, name can be used to greet and/or personalize content
  created: USER.SIGN_UP_DATE,       // RECOMMENDED, must be ISO8601 or unix timestamp format (e.g. "2029-07-01T03:21:10Z" or 1431432000).
  role: USER.ROLE,                  // OPTIONAL, properties such as ‘role’, ‘admin’, ‘membership’, etc. are useful for targeting types of users.
  logins: USER.LOGIN_COUNT,         // OPTIONAL, data about user engagement (e.g. 39).
  project: USER.PROJECT_ID,         // OPTIONAL, any other unique data that might appear in any page URLs (e.g. 09876 or "12a34b56").
})

chmln.on('app:navigate', (opts) => {
  /*
    Nagivate with React router / Vue router / pushState / call window.open / etc.
    Frameworks:
      - React info here => https://www.npmjs.com/package/@chamaeleonidae/chmln
      - Add more frameworks with a PR to this file and receive a $50 gift card

    opts.to is the url configured in the SearchAction configured with "kind=navigate"
  */
});

