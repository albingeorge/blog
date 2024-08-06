title: "Task logger"
layout: "post"
tags:
  - task
  - track
  - log
  - sync
  - dropbox
---

Problem
------

Everyday I work on multiple issues for multiple clients. So, it's difficult to track what I do on a daily basis.

To track this, I wanted a solution which lets me track the stuff that I do everyday. This also needs to sync across multiple devices, so that I can continue adding my personal tasks that I do as well from my PC.


Features
-----

For this, I created a simple script which does the below:

1. Lets me add the task I'm currently working on
2. Syncs them across all my devices
3. Lets me view these tasks history, so that if I want to know what I was working on, say the last Monday, I can view it easily.



Design decisions
------

These are the questions and the solutions that came to my mind:

1. How am I going to add entries to it?

    Here, I wanted a quick solution. So, I decided to go with a shell script, which I can execute from my terminal.

2. How should I store the data?
    I could store it in a SQLite database, however I decided against that. Reason being, if any of my devices does not have SQLite installed, I would have to set it up.

    To reduce the dependencies, I decided to go with files.

    Each day's data would be stored in a file in the format YYYY_MM-DD.log. This is the simplest storage mechanism I could come up with. Maybe group these data files in month and year as required.

3. Where should I store the data?

    Initially, I thought I would store the data in a directory and setup a cronjob which rsyncs the data with my DO server. This is still a viable option(Refer [this](http://stackoverflow.com/a/9287/1936532)).

    However, since I'm using Dropbox, I thought I would store it into a directory that syncs with Dropbox. This would not have the hassle of setting up the cronjob for rsync on all of my devices.


Code
-----

You can add the below snippet to your `.bash_profile` or `.bashrc` file.

```
# Logs the data to a Dropbox directory
w() {
    if [[ $# -eq 0 ]] ; then
        tail -n 20 ~/Dropbox/tracker/$(date +%Y_%m_%d.log)
    else
        filename=~/Dropbox/tracker/$(date +%Y_%m_%d.log)
        content="$(date +%H:%M:%S) - ${@}"
        echo "$content" >> $filename
    fi
}
```

Gist link:

https://gist.github.com/albingeorge/e334eb3e33e76c5f2169d0b2b6477130


Usage
----

To add an entry:

```
$ w "Creating post on task logger"
```

To view the last few entries:

```
$ w
01:45:27 - Back from badminton
02:21:39 - Creating post on task logger

```


Limitations
-----------

1. You can not log tasks from a mobile
    - I'm okay with this, since I created this just so that I can track the tasks from work.

2. Dependency on Dropbox
    - Later on if I decide to not use Dropbox, I'll have to look for alternatives. Right now, I do have the rsync alternative though.

To do
-----

 - Group files by month and year
