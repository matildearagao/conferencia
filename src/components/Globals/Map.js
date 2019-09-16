import React from 'react'

export default function Map() {
  return (
    <div className="container">
      <div class="mapouter">
          <div class="gmap_canvas">
            <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=universidade%20de%20lisboa&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
            </div>
        </div>
      </div>
  )
}
