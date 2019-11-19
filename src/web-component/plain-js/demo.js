class CustomAnchor extends HTMLElement {
    constructor () {
        super();
        let shadow = this.attachShadow({ mode: 'open' })
        let a = document.createElement('a')
        a.href = 'https://angular.cn'
        a.innerText = 'angular'
        shadow.appendChild(a)
    }


}

customElements.define('custom-anchor', CustomAnchor);