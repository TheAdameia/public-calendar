<h1>Public Calendar</h1>

<h3>Framework</h3>

<p>This application uses a vite + react framework to allow users to create, view, update, and delete events, as
well as track those events and create and edit a profile with which those events are associated. It has a
non-secure, facade-like login process that allows the simulation of user registration and restricted viewing.</p>

<h3>Pages</h3>

<p>The application has eight unique pages. The home page is only accessible after logging in and displays events
that the user has tracked. There is a login and a user registration page. There is a page that allows a user
to create events. There is a page that allows a user to view all events regardless of the user's interest. There
is a page that allows users to view only the events they have created, with the option to edit or delete those
events. That same page contains links to pages that allow the user to modify their events or their profile.</p>

<h3>Code Structure</h3>

<p>In terms of the file structure, most code is modularized according to the functions it serves. All functions
that interface with the JSON database, for example, are in the services directory.</p>