webrtc + headtrackr + processing
======

Combines webRTC and processing JS<br/>
goal is to pixelate only your face.
<br/><br/>
works ok, but very choppy.
Problem is with getting color of the pixelated section.<br/>
Sampling a coordinate that appears to be out of range, therefore returning black.
<br/><br/>

<b>Libraries</b><br/>
processing.js
headtrackr.js


Set Up
======
<code>
	npm install
	nodemon server.js
</code>

then
<code>
http://localhost:3000
</code>