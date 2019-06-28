Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot>backup content</slot>
        <footer>
            <slot name="footer"></slot>
        </footer>
      </div>
    `
  })
var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});