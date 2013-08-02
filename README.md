webrtc
======

Combing web RTC and processing JS<br/>
goal was to pixelate only your face.
<br/><br/>
works ok, but very choppy.
Problem is with getting color of the pixelated section.  Sampling a coordinate that appears to be out of range, therefore returning black.
<br/><br/>

<b>Libraries</b>
processing.js
headtrackr.js


Use
======
<code>
	npm install
	nodemon server.js
</code>

go to localhost:3000