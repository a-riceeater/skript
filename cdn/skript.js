// SKRIPT JS BOOKMARK INJECTION VERSION
// MADE BY GHOSTY/DARTHVADER1925

// frame creation and detection
var ihte = false;
var eler = false;
var style_change = true;
var last_console;
var url = document.URL;

if (String(url) == "https://skript.darthvader1925.repl.co/installation.html" && document.getElementById("update_modal").style.display == "block") {
  document.querySelector("#updatemodal1").style.display = "none"
  document.querySelector("#updatemodal4").style.display = "none"
  document.querySelector("#loading").style.display = "block"
  move()
  if (document.body.contains(document.getElementById("skscript")) && document.head.contains(document.getElementById('skstyle')) && document.head.contains(document.getElementById('skstyle2'))) {
    setTimeout(function() {
      document.querySelector("#loading").style.display = "none"
      if (document.getElementById("skscript").getAttribute("src") == 'https://skript.darthvader1925.repl.co/script.js' && document.getElementById("skstyle").getAttribute("href") == 'https://skript.darthvader1925.repl.co/style.css' && document.getElementById("skstyle2").getAttribute("href") == 'https://fonts.googleapis.com/css?family=Mulish') {
        if (document.getElementById("skscript").getAttribute("data") == null) {
          document.querySelector("#updatemodal1").style.display = "none"
          document.querySelector("#updatemodal2").style.display = "none"
          document.querySelector("#updatemodal3").style.display = "block"
          document.querySelector("#updatemodal4").style.display = "none"
        }
        else if (document.getElementById("skscript").getAttribute("data") == "v1.01193391235") {
          document.querySelector("#updatemodal1").style.display = "none"
          document.querySelector("#updatemodal2").style.display = "block"
          document.querySelector("#updatemodal3").style.display = "none"
          document.querySelector("#updatemodal4").style.display = "none"
        }
        else {
          document.querySelector("#updatemodal1").style.display = "none"
          document.querySelector("#updatemodal2").style.display = "none"
          document.querySelector("#updatemodal3").style.display = "block"
          document.querySelector("#updatemodal4").style.display = "none"
        }
      }
      else {
        document.querySelector("#updatemodal1").style.display = "none"
        document.querySelector("#updatemodal2").style.display = "none"
        document.querySelector("#updatemodal3").style.display = "block"
        document.querySelector("#updatemodal4").style.display = "none"
      }
    }, 2000)
  }
  else {
    setTimeout(function() {
      document.querySelector("#loading").style.display = "none"
      document.querySelector("#updatemodal1").style.display = "none"
      document.querySelector("#updatemodal2").style.display = "none"
      document.querySelector("#updatemodal3").style.display = "none"
      document.querySelector("#updatemodal4").style.display = "block"
    }, 2000)
  }
}

var btn = document.createElement("button")
btn.setAttribute("onclick", 'document.getElementById("skriptframe").style.display = "block"; document.getElementById("skshade").style.display = "block"')
btn.setAttribute("title", "You must use \"\\\" first, or else the button will not work.")
btn.setAttribute("style", "position: fixed; top: 0%; right: 0.1%; z-index: 198; width: 100px; height: 40px; cursor: pointer; color: white; background: red; font-family: 'Roboto'; padding: 10px; border: none; margin: 10px; font-size: 13.5px; cursor: not-allowed; opacity: 1;") // #272B2D
btn.setAttribute("id", "skframebtn")
btn.setAttribute("disabled", 'true')
btn.setAttribute('class', "skframebtn")
btn.innerHTML = "SkFrame (\\)"
document.body.appendChild(btn)


// key detection
document.addEventListener("keydown", function(e) {
  var keycode = e.keyCode;
  if (keycode == 220) {
    if (document.body.contains(document.getElementById("skriptframe")) && document.getElementById('skzprevent').checked) e.preventDefault()
    if (document.body.contains(document.getElementById("skriptframe"))) {
      document.getElementById("skriptframe").style.display = "block"
      document.getElementById("skshade").style.display = "block"
      if (document.body.contains(document.getElementById('skconsole'))) {
        var element = document.createElement("p")
        element.innerHTML = "<span style='color: yellow'>Frame loaded.</span>";
        document.getElementById("skcf").appendChild(element)
      }
      if (document.body.contains(document.getElementById("skconsole"))) document.getElementById('skconsole').style.display = "none"
      return
    }

    var frame = document.createElement("div")
    frame.setAttribute("class", "skframe")
    frame.setAttribute("id", "skriptframe")
    if (document.body.contains(document.getElementById("skconsole"))) document.getElementById('skconsole').style.display = "none"
    var html = '<div style="margin-top: 100px;"><span style="color: red">Not all functions will work on certain websites! Styles may also be different!</span><br><span>Right arrow - console | \\ - Frame menu</span><br><input type="checkbox" id="skzprevent" checked> Prevent Typing when pressing frame key<br><input id="skzsb" type="checkbox" checked> Show open frame button<br><input id="RLRCK" type="checkbox" checked> Reload when removing script (removes keyEvents and bugs)<br><button id="sket">Edit Text</button><button id="skeih">Edit innerHTML (useful for HTML tags)</button><button id="elerb">Remove Element</button><br><button id="remove_script_btn">Remove Script</button></div>';

    frame.innerHTML = html;

    if (!document.body.contains(document.getElementById("skshade"))) {
      var shade = document.createElement("div")
      shade.setAttribute("id", "skshade")
      document.body.appendChild(shade)
    }

    // apend elements to body
    document.body.appendChild(frame)
    if (document.body.contains(document.getElementById('skconsole'))) {
      var element = document.createElement("p")
      element.innerHTML = "<span style='color: yellow'>Frame created.</span>";
      document.getElementById("skcf").appendChild(element)
    }

    document.getElementById('skframebtn').style.background = "#272B2D"
    document.getElementById("skframebtn").style.cursor = 'pointer'
    document.getElementById("skframebtn").disabled = false;
  }

  else if (keycode == 27) {
    // /if (document.getElementById('skzprevent').checked && document.body.contains(document.getElementById('skriptframe'))) e.preventDefault()
    if (document.body.contains(document.getElementById('skconsole'))) document.getElementById('skconsole').style.display = 'none'
    if (document.body.contains(document.getElementById('skriptframe'))) document.getElementById("skriptframe").style.display = "none"
    document.getElementById("skshade").style.display = "none"
  }

  else if (keycode == 39) {
    // console
    if (document.body.contains(document.getElementById("skconsole")) && document.getElementById("skconsole").style.display == "block") return
    if (!document.body.contains(document.getElementById('skconsole'))) {
      var element = document.createElement('div')
      element.setAttribute('id', 'skconsole')

      var h = '<span style="position: relative; top: 0; left: 3%; font-family: monospace;">Console</span><div id="skcf"><p style="color: yellow;">Console created.</p></div><br><input type="text" id="skcoi" placeholder=">"<br><span style="color: white; position: relative; left: 3%; top: 2%;">Input JS Commands (press up to write last command)</span>'
      element.innerHTML = h;

      if (!document.body.contains(document.getElementById("skshade"))) {
        var shade = document.createElement("div")
        shade.setAttribute("id", "skshade")
        document.body.appendChild(shade)
      }

      // apend elements
      document.body.appendChild(element)
    }
    else {
      document.getElementById('skconsole').style.display = 'block'
      document.getElementById("skshade").style.display = 'block'
      var element = document.createElement("p")
      element.innerHTML = "<span style='color: yellow'>Console loaded.</span>";
      document.getElementById("skcf").appendChild(element)
    }
    document.getElementById('skriptframe').style.display = "none"
    document.getElementById('skshade').style.display = "block"
  }

  else if (keycode == 13) {
    if (!document.getElementById("skcoi") == document.activeElement) return
    var string = document.getElementById("skcoi")
    if (string.value.replaceAll(" ", "") == "") return
    try {
      if (string.value.split(" ")[0] == "sk") {
        var command = string.value.replace("sk ", "")
        if (command == "remove script" || command == "remove") remove_script()
        if (command == "docs" || command == "documentation") {
          var element = document.createElement("p")
          element.innerHTML = "<span style='color: yellow'><a style='color: yellow' href='https://script.darthvader1925.repl.co/documentation' target='_blank'>https://script.darthvader1925.repl.co/documentation</a></span>";
          document.getElementById("skcf").appendChild(element)
        }
        if (command == "info") {
          if (document.getElementById("skscript").getAttribute("data") == null || document.getElementById("skscript").getAttribute("data") == "") {
            var element = document.createElement("p")
            element.innerHTML = "<span style='color: yellow'Skcript<br>Documentation: <a style='color: blue' href='https://script.darthvader1925.repl.co/documentation' target='_blank'>https://script.darthvader1925.repl.co/documentation</a><br>Created: 9/1/22<br>Last updated: pretty recently<br>Version: <span style='color: blue;'>Unknown</span><br>Up to date? <a href='https://script.darthvader1925.repl.co/installation.html#update' style='color: blue;' target='_blank'>Check for updates</span>";
            document.getElementById("skcf").appendChild(element)
          }
          else {
            var element = document.createElement("p")
            element.innerHTML = "<span style='color: yellow'Skcript<br>Documentation: <a style='color: blue' href='https://script.darthvader1925.repl.co/documentation' target='_blank'>https://script.darthvader1925.repl.co/documentation</a><br>Created: 9/1/22<br>Last updated: pretty recently<br>Version: <span style='color: blue;'>" + document.getElementById("skscript").getAttribute("data") + "</span><br>Up to date? <a href='https://script.darthvader1925.repl.co/installation.html#update' style='color: blue;' target='_blank'>Check for updates</span>";
            document.getElementById("skcf").appendChild(element)
          }
        }
        last_console = string.value;
        string.value = ''
        var skcf = document.getElementById("skcf");
        skcf.scrollTop = skcf.scrollHeight;
        return
      }
      var e = eval(string.value)
      var element = document.createElement("p")
      element.innerHTML = "<span style='color: green'>'" + sanitize(e) + "'</span>";
      document.getElementById("skcf").appendChild(element)
    }
    catch (err) {
      var element = document.createElement("p")
      element.innerHTML = "<span style='color: red'>" + err + "</span>";
      document.getElementById("skcf").appendChild(element)
    }
    last_console = string.value;
    string.value = ''
    var skcf = document.getElementById("skcf");
    skcf.scrollTop = skcf.scrollHeight;
  }

  else if (keycode == 38) {
    if (last_console == null) return
    var string = document.getElementById("skcoi")
    string.value = last_console;
  }
})

// FUNCTIONS 

function change_skz() {
  if (document.getElementById("skzsb").checked) {
    document.getElementById("skframebtn").style.display = "block"
  }
  else {
    document.getElementById("skframebtn").style.display = "none"
  }
}

document.querySelector("#skeih").addEventListener("click", change_skz)


function edit_text() {
  if (document.getElementById("sket").style.background == "green") {
    document.body.contentEditable = false;
    document.getElementById("sket").style.background = "#272B2D"
  }
  else {
    document.body.contentEditable = true;
    document.getElementById("skriptframe").style.display = "none"
    document.getElementById("skshade").style.display = "none"
    document.getElementById("sket").style.background = "green"
  }

}

document.querySelector("#sket").addEventListener("click", edit_text)

function remove_script() {
  if (document.getElementById("RLRCK").checked) window.location = ''
  document.getElementById("skriptframe").remove()
  document.getElementById("skshade").remove()
  document.getElementById("skstyle").remove()
  document.getElementById("skframebtn").remove()
  document.getElementById("skscript").remove()
}

document.querySelector("#remove_script_btn").addEventListener("click", remove_script)

function edit_ihtml() {
    if (document.getElementById("skeih").style.background == "green") {
      ihte = false;
      document.getElementById("skeih").style.background = "#272B2D"
      document.body.style.cursor = "auto"
    }
    else {
      ihte = true;
      document.getElementById("skeih").style.background = "green" // not becoming green and toggling
      document.getElementById("skriptframe").style.display = "none"
      document.getElementById("skshade").style.display = "none"
      document.body.style.cursor = "crosshair"
    }

  }

document.querySelector("#skeih").addEventListener("click", edit_ihtml)

function elerb() {
    if (document.getElementById('elerb').style.background == 'green') {
      eler = false;
      document.getElementById("elerb").style.background = "#272B2D"
      document.body.style.cursor = "auto"
    }
    else {
      document.getElementById('elerb').style.background = 'green'
      eler = true;
      document.getElementById("skriptframe").style.display = "none"
      document.getElementById("skshade").style.display = "none"
      document.body.style.cursor = "crosshair"
    }
  }

document.querySelector("#elerb").addEventListener("click", elerb)

document.onclick = function(e) {
    if (eler == true) {
      if (e.target.id == "elerb") return
      if (e.target.id == 'skframebtn') return
      e.preventDefault()
      e.target.remove();
      return
    }

    else if (ihte == true) {
      if (e.target.id == "skeih") return
      if (e.target.id == 'skframebtn') return
      e.preventDefault()
      var new_html = prompt("New innerHTML string")
      if (new_html == '' || new_html == null) return
      e.target.innerHTML = new_html
      return
    }

    else if (style_change) {
      e.preventDefault()
      var property = prompt("Property (background, color, etc)")
      var ncolor = prompt("Property value (hex/name)")
      e.target.style.setProperty(property, ncolor, "important")
    }
  }

function sanitize(unsafe) {
    var temp = String(unsafe)
    return temp
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

