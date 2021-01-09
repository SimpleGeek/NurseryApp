# Nursery App

## Miscellaneous Tips

### Running locally
To run locally, remember that you will first have to expand your amount
of file system watchers.  Use this command:
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

Next, start Metro by changing into the project root directory, and running this command:
npx react-native start

Finally, start the app on your phone by opening another terminal, changing into the project
root directory, and running this command:
npx react-native run-android

### Importing From External Files
When importing an object exported as default, do not use curly bracse ({ MyThing }).
This is only needed when there isn't a default export in the file.

## Connectivity to backend
TODO

## Menus

### Generic
Login menu

### Functionality
Just a sign-in screen asking for number
    - This will show pictures of guardian and baby
    - This will ask for confirmation before moving on (to confirm right guardian is there)
### Reporting
???

### Admin
???

## Info to store
### General
Guardian info (inc. pictures)
Alert number
Nursery (1 yr old, 2, etc.)
Allergies
Is banned
Is potty trained
Special info (custody issue, health problems)
### Attendance specific
Sustained injuries
Which guardian brought/picked them up
Which service
### Worker stuff
Have workers sign in
