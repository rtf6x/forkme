const forkme = class {
  constructor(opts){
    this.classes = ['forkme', ...opts.classes];
    this.link = opts.link || '';
    this.forkMeText = opts.forkMeText || 'Fork Me On GitHub';

    const template = `<div class="${this.classes.join(' ')}"><a class="forkme-link" target="_blank" href="${this.link}"><span class="forkme-text">${this.forkMeText}</span></a></div>`;
    document.addEventListener("DOMContentLoaded", function(){
      document.body.insertAdjacentHTML('beforeend', template);
    });
  }
};