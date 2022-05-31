// PLUGIN: Video Sync

(function ( Popcorn ) {


    var videos = {
        a: Popcorn("#v1"),
        b: Popcorn("#v2"),
        c:  Popcorn("#v3"),
        d: Popcorn("#v4"),
        e: Popcorn("#v5"),
        f: Popcorn("#v6"),
        g: Popcorn("#v7"),
        h: Popcorn("#v8"),
        i: Popcorn("#v9"),
        j: Popcorn("#v10"),
      },
      scrub = $("#scrub"),
      loadCount = 0,
      events = "play pause timeupdate seeking".split(/\s+/g);

    // iterate both media sources
    Popcorn.forEach(videos, function(media, type) {

      // when each is ready...
      media.on("canplayall", function() {

        // trigger a custom "sync" event
        this.emit("sync");

        // set the max value of the "scrubber"
        scrub.attr("max", this.duration());

        // Listen for the custom sync event...
      }).on("sync", function() {

        // Once both items are loaded, sync events
        if (++loadCount == 10) {

          // Iterate all events and trigger them on the video B
          // whenever they occur on the video A
          events.forEach(function(event) {

            videos.a.on(event, function() {

              // Avoid overkill events, trigger timeupdate manually
              if (event === "timeupdate") {

                if (!this.media.paused) {
                  return;
                }
                videos.b.emit("timeupdate");
                  videos.c.emit("timeupdate");
                  videos.d.emit("timeupdate");
                  videos.e.emit("timeupdate");
                  videos.f.emit("timeupdate");
                  videos.g.emit("timeupdate");
                  videos.h.emit("timeupdate");
                  videos.i.emit("timeupdate");
                  videos.j.emit("timeupdate");

                // update scrubber
                scrub.val(this.currentTime());

                return;
              }

              if (event === "seeking") {
                videos.b.currentTime(this.currentTime());
                  videos.c.currentTime(this.currentTime());
                  videos.d.currentTime(this.currentTime());
                  videos.e.currentTime(this.currentTime());
                  videos.f.currentTime(this.currentTime());
                  videos.g.currentTime(this.currentTime());
                  videos.h.currentTime(this.currentTime());
                  videos.i.currentTime(this.currentTime());
                  videos.j.currentTime(this.currentTime());
              }

              if (event === "play" || event === "pause") {
                videos.b[event]();
                  videos.c[event]();
                  videos.d[event]();
                  videos.e[event]();
                  videos.f[event]();
                  videos.g[event]();
                  videos.h[event]();
                  videos.i[event]();
                  videos.j[event]();
              }
            });
          });
        }
      });
    });

    scrub.bind("change", function() {
      var val = this.value;
      videos.a.currentTime(val);
      videos.b.currentTime(val);
        videos.c.currentTime(val);
        videos.d.currentTime(val);
        videos.e.currentTime(val);
        videos.f.currentTime(val);
        videos.g.currentTime(val);
        videos.h.currentTime(val);
        videos.i.currentTime(val);
        videos.j.currentTime(val);
    });

    // With requestAnimationFrame, we can ensure that as
    // frequently as the browser would allow,
    // the video is resync'ed.
    function syncb() {
      if (videos.b.media.readyState === 4) {
        videos.b.currentTime(
          videos.a.currentTime()
        );
      }
      requestAnimationFrame(syncb);
    }

    sync();
    
    function syncc() {
      if (videos.c.media.readyState === 4) {
        videos.c.currentTime(
          videos.a.currentTime()
        );
      }
      requestAnimationFrame(syncc);
    }

    sync();
    
    function syncd() {
      if (videos.d.media.readyState === 4) {
        videos.d.currentTime(
          videos.a.currentTime()
        );
      }
      requestAnimationFrame(syncd);
    }

    sync();
    
    function synce() {
      if (videos.e.media.readyState === 4) {
        videos.e.currentTime(
          videos.a.currentTime()
        );
      }
      requestAnimationFrame(synce);
    }

    sync();
    
    function syncf() {
      if (videos.f.media.readyState === 4) {
        videos.f.currentTime(
          videos.a.currentTime()
        );
      }
      requestAnimationFrame(syncf);
    }

    sync();
    
    function syncg() {
      if (videos.g.media.readyState === 4) {
        videos.g.currentTime(
          videos.a.currentTime()
        );
      }
      requestAnimationFrame(syncg);
    }

    sync();
    
    function synch() {
      if (videos.h.media.readyState === 4) {
        videos.h.currentTime(
          videos.a.currentTime()
        );
      }
      requestAnimationFrame(synch);
    }

    sync();
    
    function synci() {
      if (videos.i.media.readyState === 4) {
        videos.i.currentTime(
          videos.a.currentTime()
        );
      }
      requestAnimationFrame(synci);
    }

    sync();
    
    function syncj() {
      if (videos.j.media.readyState === 4) {
        videos.j.currentTime(
          videos.a.currentTime()
        );
      }
      requestAnimationFrame(syncj);
    }

    sync();
    
})( Popcorn );
