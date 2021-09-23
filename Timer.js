class Timer{
  constructor(el, onLap){
    this.el = el;
    this.render();
    this.onLap = onLap;
  }
  render(){
    this.label = document.createElement('span');
    this.label.innerHTML = 0;
    this.el.appendChild(this.label);
    this.button = document.createElement('button');
    this.button.innerHTML = 'start';
    this.el.appendChild(this.button);
    this.button.addEventListener('click', ()=> {
      if(this.interval){
        window.clearInterval(this.interval);
        this.interval = null;
        this.button.innerHTML = 'start';
        this.button.classList.remove('running');
        if(this.onLap){
          this.onLap(this.label.innerHTML*1);
        }
      }
      else {
        this.start();
        this.button.classList.add('running');
      }
    });
  }
  start(){
    this.label.innerHTML = '0.00';
    this.interval = window.setInterval(()=> {
      this.label.innerHTML = (this.label.innerHTML*1 + 0.01).toFixed(2);
    }, 10);
    this.button.innerHTML = 'stop';
  }
}
