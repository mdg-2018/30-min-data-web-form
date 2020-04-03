### 30-min-data-web-form (no stitch)
This is an adaptation of the 30-min-data-web-form application from a recent webinar by Mike Lynn
Original webinar: https://www.twitch.tv/videos/571160817
Original app: https://github.com/mrlynn/30-min-data-web-form

The backend of this application has been changed from Stitch to a regular node.js app. This change allows the app to be used for presentations that don't involve Atlas.

### Using the app
- Put your mongodb connection string in <code>index.js</code>
- Put the password for your mongodb connection in <code>key.json</code> (it's set up this way to avoid showing everyone your password during the presentation)
- The page <code>thankyou.html</code> is intended to have some embedded visuals from MongoDB charts, so add the links to your visualizations to <code>thankyou.html</code>