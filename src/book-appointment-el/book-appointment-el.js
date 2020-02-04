import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
/**
 * @customElement
 * @polymer
 */
class BookAppointmentEl extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h1> Employee list: </h1>
      <dom-repeat items="{{employees}}">
        <template>
          <div>First name: <span>{{item.first}}</span></div>
          <div>Last name: <span>{{item.last}}</span></div>
        </template>
      </dom-repeat>
    `;
  }
  static get is() { return 'employee-list'; }
  static get properties() {
    return {
      employees: {
        value() {
          return [
            {first: 'Bob', last: 'Smith'},
            {first: 'Sally', last: 'Johnson'}
          ]
        }
      }
    };
  }
}

window.customElements.define('book-appointment-el', BookAppointmentEl);
