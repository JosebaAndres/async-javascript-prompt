import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openPrompt() {
    var popup = document.createElement('div');
    popup.innerHTML = `<div
    style="
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.7);
    "
  >
    <div style="background: white">
      <div>Click an option to execute the trigger</div>
      <div>
        <label>URL</label>
        <input />
      </div>
      <div>
        <button id='loadstart'>loadstart</button>
        <button id='loaderror'>loaderror</button>
        <button id='exit'>exit</button>
        <button id='beforereload'>beforereload</button>
        <button id='message'>message</button>
        <button id='close'>close</button>
      </div>
    </div>
  </div>`;
    document.body.appendChild(popup);

    const loadstart = document.getElementById('loadstart');
    const loaderror = document.getElementById('loaderror');
    const exit = document.getElementById('exit');
    const beforereload = document.getElementById('beforereload');
    const message = document.getElementById('message');
    const close = document.getElementById('close');

    if (loadstart) {
      loadstart.addEventListener('click', () => {
        alert('loadstart');
      });
    }
    if (loaderror) {
      loaderror.addEventListener('click', () => {
        alert('loaderror');
      });
    }
    if (exit) {
      exit.addEventListener('click', () => {
        alert('exit');
      });
    }
    if (beforereload) {
      beforereload.addEventListener('click', () => {
        alert('beforereload');
      });
    }
    if (message) {
      message.addEventListener('click', () => {
        alert('message');
      });
    }
    if (close) {
      close.addEventListener('click', () => {
        if (loadstart && loadstart.removeAllListeners) {
          loadstart.removeAllListeners();
        }
        if (loaderror && loaderror.removeAllListeners) {
          loaderror.removeAllListeners();
        }
        if (exit && exit.removeAllListeners) {
          exit.removeAllListeners();
        }
        if (beforereload && beforereload.removeAllListeners) {
          beforereload.removeAllListeners();
        }
        if (message && message.removeAllListeners) {
          message.removeAllListeners();
        }
        if (close && close.removeAllListeners) {
          close.removeAllListeners();
        }
        popup.remove();
      });
    }
  }
}
