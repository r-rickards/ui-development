<img src="https://avatars.slack-edge.com/2018-06-15/381981653473_31dc1ac2d2e06485a84d_36.png" align=right width=36 style="border-radius: 50%; margin-top: -8px" />

# Honeybadger

Used for error reporting.

<img src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" align=right width=36 style="border-radius: 50%;" />

## Slack integration

Frontend errors come into the slack channel: **bot-errors-frontend**

## Errors on slack

Contain the following meta data:

```
Sunday, September 1st

Honeybadger APP 12:32 PM

Error: Image is too large - the filesize
must be less than 250kb

Project: software-frontend

Environment: production
```

## Check daily

We need to be vigilant and fix errors.

## Review the error at

Clicking on `Error` takes you to the details of the error at:

app.honeybadger.io

## Check the backtrace and context

The backtrace can help you find the error.

```
Full Backtrace
e is undefined

Slider.js  196  67 unknown(...)

https://app.software.com/static/js/components/music/Slider.js:196:67:in `unknown'

194      * @returns {JSX} <GridListTile />
195      */
196     listitem = ({ album, artist, name, genre, artists }, index) => {
197         const {
198             classes,

```

Context can help you find the user.

For example:

```
{
  "user_id" => 115077,
  "user_jwt" => "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE1MDc3LCJpYXQiOjE1NjczNjU4NjN9.61s83VyJQ7VQ_9R8SqDtt4BvW__1-w8HOd-x1Zx971U"
}
```

Once the issue is resolved - click the `Resolve` button (on slack).
