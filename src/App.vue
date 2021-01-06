<template>
  <div id="app">

    <div class="container__difference" :style="{ background: 'linear-gradient(' + mouse.angle + 'deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)' }">
    <div class="container__circles">


      <div class="row__circles up">
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
      </div>
      <div class="row__circles down">
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
      </div>
      <div class="row__circles up">
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
      </div>
      <div class="row__circles down">
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
      </div>
      <div class="row__circles up">
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
        <div class="circle" @mouseover="hoverMouse(true)" @mouseleave="hoverMouse(false)"></div>
      </div>
    </div>
    <div id="nav">
      <router-link to="/"><div class="menu logo" @mouseover="hover = true" @mouseleave="hover = false">erik van zummeren</div></router-link>
    </div>

    <h1 class="heading">RadiTube RadiTube RadiTube RadiTube RadiTube RadiTube RadiTube RadiTube RadiTube RadiTube</h1>
        <div class="cursor" :class="{ active: hoverCursor }" :style="{ left: mouse.x + 'px', top: mouse.y + 'px' }">
      <span class="score" :class="{ score__visible: hoverCursor }">-1</span>
    </div>
    </div>




    <div class="points">score: {{score}}</div>

    <div class="container__content">
      <div class="browser step" data-step="raditube">

<svg class="browser-ui" width="860" height="28" viewBox="0 0 860 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="14" r="8" fill="#EFEFEF"/>
<circle cx="29" cy="14" r="8" fill="#EFEFEF"/>
<circle cx="49" cy="14" r="8" fill="#EFEFEF"/>
<rect x="173" width="687" height="28" rx="6" fill="#EFEFEF"/>
<path d="M81.2929 13.2929C80.9024 13.6834 80.9024 14.3166 81.2929 14.7071L87.6569 21.0711C88.0474 21.4616 88.6805 21.4616 89.0711 21.0711C89.4616 20.6805 89.4616 20.0474 89.0711 19.6569L83.4142 14L89.0711 8.34315C89.4616 7.95262 89.4616 7.31946 89.0711 6.92893C88.6805 6.53841 88.0474 6.53841 87.6569 6.92893L81.2929 13.2929ZM93 13L82 13V15L93 15V13Z" fill="#EFEFEF"/>
<path d="M115.707 14.7071C116.098 14.3166 116.098 13.6834 115.707 13.2929L109.343 6.92893C108.953 6.53841 108.319 6.53841 107.929 6.92893C107.538 7.31946 107.538 7.95262 107.929 8.34315L113.586 14L107.929 19.6569C107.538 20.0474 107.538 20.6805 107.929 21.0711C108.319 21.4616 108.953 21.4616 109.343 21.0711L115.707 14.7071ZM104 15L115 15L115 13L104 13L104 15Z" fill="#EFEFEF"/>
<path d="M182.467 9.12H183.427V12.816H183.475C183.627 12.464 183.839 12.184 184.111 11.976C184.391 11.768 184.763 11.664 185.227 11.664C185.867 11.664 186.371 11.872 186.739 12.288C187.115 12.696 187.303 13.276 187.303 14.028V18H186.343V14.196C186.343 13.084 185.875 12.528 184.939 12.528C184.747 12.528 184.559 12.552 184.375 12.6C184.199 12.648 184.039 12.72 183.895 12.816C183.751 12.912 183.635 13.036 183.547 13.188C183.467 13.332 183.427 13.504 183.427 13.704V18H182.467V9.12ZM190.656 18C190.32 18 190.064 17.908 189.888 17.724C189.72 17.532 189.636 17.284 189.636 16.98V12.648H188.616V11.808H189.192C189.4 11.808 189.54 11.768 189.612 11.688C189.692 11.6 189.732 11.452 189.732 11.244V10.092H190.596V11.808H191.952V12.648H190.596V17.16H191.856V18H190.656ZM194.757 18C194.421 18 194.165 17.908 193.989 17.724C193.821 17.532 193.737 17.284 193.737 16.98V12.648H192.717V11.808H193.293C193.501 11.808 193.641 11.768 193.713 11.688C193.793 11.6 193.833 11.452 193.833 11.244V10.092H194.697V11.808H196.053V12.648H194.697V17.16H195.957V18H194.757ZM197.596 11.808H198.556V12.816H198.604C198.764 12.424 198.996 12.136 199.3 11.952C199.612 11.76 199.984 11.664 200.416 11.664C200.8 11.664 201.148 11.74 201.46 11.892C201.772 12.044 202.036 12.26 202.252 12.54C202.476 12.82 202.644 13.16 202.756 13.56C202.876 13.96 202.936 14.408 202.936 14.904C202.936 15.4 202.876 15.848 202.756 16.248C202.644 16.648 202.476 16.988 202.252 17.268C202.036 17.548 201.772 17.764 201.46 17.916C201.148 18.068 200.8 18.144 200.416 18.144C199.576 18.144 198.972 17.76 198.604 16.992H198.556V20.4H197.596V11.808ZM200.152 17.28C200.696 17.28 201.124 17.112 201.436 16.776C201.748 16.432 201.904 15.984 201.904 15.432V14.376C201.904 13.824 201.748 13.38 201.436 13.044C201.124 12.7 200.696 12.528 200.152 12.528C199.936 12.528 199.728 12.56 199.528 12.624C199.336 12.68 199.168 12.76 199.024 12.864C198.88 12.968 198.764 13.096 198.676 13.248C198.596 13.392 198.556 13.548 198.556 13.716V16.02C198.556 16.22 198.596 16.4 198.676 16.56C198.764 16.712 198.88 16.844 199.024 16.956C199.168 17.06 199.336 17.14 199.528 17.196C199.728 17.252 199.936 17.28 200.152 17.28ZM206.417 18.144C205.841 18.144 205.357 18.036 204.965 17.82C204.581 17.596 204.249 17.3 203.969 16.932L204.653 16.38C204.893 16.684 205.161 16.92 205.457 17.088C205.753 17.248 206.097 17.328 206.489 17.328C206.897 17.328 207.213 17.24 207.437 17.064C207.669 16.888 207.785 16.64 207.785 16.32C207.785 16.08 207.705 15.876 207.545 15.708C207.393 15.532 207.113 15.412 206.705 15.348L206.213 15.276C205.925 15.236 205.661 15.176 205.421 15.096C205.181 15.008 204.969 14.896 204.785 14.76C204.609 14.616 204.469 14.44 204.365 14.232C204.269 14.024 204.221 13.776 204.221 13.488C204.221 13.184 204.277 12.92 204.389 12.696C204.501 12.464 204.653 12.272 204.845 12.12C205.045 11.968 205.281 11.856 205.553 11.784C205.825 11.704 206.117 11.664 206.429 11.664C206.933 11.664 207.353 11.752 207.689 11.928C208.033 12.104 208.333 12.348 208.589 12.66L207.953 13.236C207.817 13.044 207.617 12.872 207.353 12.72C207.089 12.56 206.757 12.48 206.357 12.48C205.957 12.48 205.653 12.568 205.445 12.744C205.245 12.912 205.145 13.144 205.145 13.44C205.145 13.744 205.245 13.964 205.445 14.1C205.653 14.236 205.949 14.336 206.333 14.4L206.813 14.472C207.501 14.576 207.989 14.776 208.277 15.072C208.565 15.36 208.709 15.74 208.709 16.212C208.709 16.812 208.505 17.284 208.097 17.628C207.689 17.972 207.129 18.144 206.417 18.144ZM211.137 18.144C210.881 18.144 210.693 18.08 210.573 17.952C210.461 17.824 210.405 17.656 210.405 17.448V17.292C210.405 17.084 210.461 16.916 210.573 16.788C210.693 16.66 210.881 16.596 211.137 16.596C211.393 16.596 211.577 16.66 211.689 16.788C211.809 16.916 211.869 17.084 211.869 17.292V17.448C211.869 17.656 211.809 17.824 211.689 17.952C211.577 18.08 211.393 18.144 211.137 18.144ZM211.137 13.212C210.881 13.212 210.693 13.148 210.573 13.02C210.461 12.892 210.405 12.724 210.405 12.516V12.36C210.405 12.152 210.461 11.984 210.573 11.856C210.693 11.728 210.881 11.664 211.137 11.664C211.393 11.664 211.577 11.728 211.689 11.856C211.809 11.984 211.869 12.152 211.869 12.36V12.516C211.869 12.724 211.809 12.892 211.689 13.02C211.577 13.148 211.393 13.212 211.137 13.212ZM212.997 19.812L216.129 9.12H216.993L213.861 19.812H212.997ZM216.149 19.812L219.281 9.12H220.145L217.013 19.812H216.149ZM221.007 11.808H221.943L222.603 14.484L223.263 17.196H223.287L224.043 14.484L224.823 11.808H225.675L226.479 14.484L227.247 17.196H227.271L227.907 14.484L228.579 11.808H229.479L227.835 18H226.647L225.783 15.024L225.243 13.14H225.219L224.691 15.024L223.827 18H222.663L221.007 11.808ZM230.218 11.808H231.154L231.814 14.484L232.474 17.196H232.498L233.254 14.484L234.034 11.808H234.886L235.69 14.484L236.458 17.196H236.482L237.118 14.484L237.79 11.808H238.69L237.046 18H235.858L234.994 15.024L234.454 13.14H234.43L233.902 15.024L233.038 18H231.874L230.218 11.808ZM239.429 11.808H240.365L241.025 14.484L241.685 17.196H241.709L242.465 14.484L243.245 11.808H244.097L244.901 14.484L245.669 17.196H245.693L246.329 14.484L247.001 11.808H247.901L246.257 18H245.069L244.205 15.024L243.665 13.14H243.641L243.113 15.024L242.249 18H241.085L239.429 11.808ZM249.536 18.144C249.28 18.144 249.092 18.08 248.972 17.952C248.86 17.824 248.804 17.656 248.804 17.448V17.292C248.804 17.084 248.86 16.916 248.972 16.788C249.092 16.66 249.28 16.596 249.536 16.596C249.792 16.596 249.976 16.66 250.088 16.788C250.208 16.916 250.268 17.084 250.268 17.292V17.448C250.268 17.656 250.208 17.824 250.088 17.952C249.976 18.08 249.792 18.144 249.536 18.144ZM252.194 18V11.808H253.154V12.948H253.214C253.326 12.652 253.526 12.388 253.814 12.156C254.102 11.924 254.498 11.808 255.002 11.808H255.374V12.768H254.81C254.29 12.768 253.882 12.868 253.586 13.068C253.298 13.26 253.154 13.504 253.154 13.8V18H252.194ZM261.053 18C260.693 18 260.433 17.904 260.273 17.712C260.121 17.52 260.025 17.28 259.985 16.992H259.925C259.789 17.376 259.565 17.664 259.253 17.856C258.941 18.048 258.569 18.144 258.137 18.144C257.481 18.144 256.969 17.976 256.601 17.64C256.241 17.304 256.061 16.848 256.061 16.272C256.061 15.688 256.273 15.24 256.697 14.928C257.129 14.616 257.797 14.46 258.701 14.46H259.925V13.848C259.925 13.408 259.805 13.072 259.565 12.84C259.325 12.608 258.957 12.492 258.461 12.492C258.085 12.492 257.769 12.576 257.513 12.744C257.265 12.912 257.057 13.136 256.889 13.416L256.313 12.876C256.481 12.54 256.749 12.256 257.117 12.024C257.485 11.784 257.949 11.664 258.509 11.664C259.261 11.664 259.845 11.848 260.261 12.216C260.677 12.584 260.885 13.096 260.885 13.752V17.16H261.593V18H261.053ZM258.293 17.328C258.533 17.328 258.753 17.3 258.953 17.244C259.153 17.188 259.325 17.108 259.469 17.004C259.613 16.9 259.725 16.78 259.805 16.644C259.885 16.508 259.925 16.36 259.925 16.2V15.18H258.653C258.101 15.18 257.697 15.26 257.441 15.42C257.193 15.58 257.069 15.812 257.069 16.116V16.368C257.069 16.672 257.177 16.908 257.393 17.076C257.617 17.244 257.917 17.328 258.293 17.328ZM266.923 16.992H266.875C266.499 17.76 265.895 18.144 265.063 18.144C264.679 18.144 264.331 18.068 264.019 17.916C263.707 17.764 263.439 17.548 263.215 17.268C262.999 16.988 262.831 16.648 262.711 16.248C262.599 15.848 262.543 15.4 262.543 14.904C262.543 14.408 262.599 13.96 262.711 13.56C262.831 13.16 262.999 12.82 263.215 12.54C263.439 12.26 263.707 12.044 264.019 11.892C264.331 11.74 264.679 11.664 265.063 11.664C265.495 11.664 265.863 11.76 266.167 11.952C266.479 12.136 266.715 12.424 266.875 12.816H266.923V9.12H267.883V18H266.923V16.992ZM265.327 17.28C265.543 17.28 265.747 17.252 265.939 17.196C266.139 17.14 266.311 17.06 266.455 16.956C266.599 16.844 266.711 16.712 266.791 16.56C266.879 16.4 266.923 16.22 266.923 16.02V13.716C266.923 13.548 266.879 13.392 266.791 13.248C266.711 13.096 266.599 12.968 266.455 12.864C266.311 12.76 266.139 12.68 265.939 12.624C265.747 12.56 265.543 12.528 265.327 12.528C264.783 12.528 264.355 12.7 264.043 13.044C263.731 13.38 263.575 13.824 263.575 14.376V15.432C263.575 15.984 263.731 16.432 264.043 16.776C264.355 17.112 264.783 17.28 265.327 17.28ZM270.404 10.356C270.196 10.356 270.044 10.308 269.948 10.212C269.86 10.108 269.816 9.976 269.816 9.816V9.66C269.816 9.5 269.86 9.372 269.948 9.276C270.044 9.172 270.196 9.12 270.404 9.12C270.612 9.12 270.76 9.172 270.848 9.276C270.944 9.372 270.992 9.5 270.992 9.66V9.816C270.992 9.976 270.944 10.108 270.848 10.212C270.76 10.308 270.612 10.356 270.404 10.356ZM269.924 11.808H270.884V18H269.924V11.808ZM274.292 18C273.956 18 273.7 17.908 273.524 17.724C273.356 17.532 273.272 17.284 273.272 16.98V12.648H272.252V11.808H272.828C273.036 11.808 273.176 11.768 273.248 11.688C273.328 11.6 273.368 11.452 273.368 11.244V10.092H274.232V11.808H275.588V12.648H274.232V17.16H275.492V18H274.292ZM280.947 16.992H280.899C280.835 17.136 280.755 17.28 280.659 17.424C280.571 17.56 280.459 17.684 280.323 17.796C280.187 17.9 280.023 17.984 279.831 18.048C279.639 18.112 279.415 18.144 279.159 18.144C278.519 18.144 278.011 17.94 277.635 17.532C277.259 17.116 277.071 16.532 277.071 15.78V11.808H278.031V15.612C278.031 16.724 278.503 17.28 279.447 17.28C279.639 17.28 279.823 17.256 279.999 17.208C280.183 17.16 280.343 17.088 280.479 16.992C280.623 16.896 280.735 16.776 280.815 16.632C280.903 16.48 280.947 16.3 280.947 16.092V11.808H281.907V18H280.947V16.992ZM283.952 9.12H284.912V12.816H284.96C285.12 12.424 285.352 12.136 285.656 11.952C285.968 11.76 286.34 11.664 286.772 11.664C287.156 11.664 287.504 11.74 287.816 11.892C288.128 12.044 288.392 12.26 288.608 12.54C288.832 12.82 289 13.16 289.112 13.56C289.232 13.96 289.292 14.408 289.292 14.904C289.292 15.4 289.232 15.848 289.112 16.248C289 16.648 288.832 16.988 288.608 17.268C288.392 17.548 288.128 17.764 287.816 17.916C287.504 18.068 287.156 18.144 286.772 18.144C285.932 18.144 285.328 17.76 284.96 16.992H284.912V18H283.952V9.12ZM286.508 17.28C287.052 17.28 287.48 17.112 287.792 16.776C288.104 16.432 288.26 15.984 288.26 15.432V14.376C288.26 13.824 288.104 13.38 287.792 13.044C287.48 12.7 287.052 12.528 286.508 12.528C286.292 12.528 286.084 12.56 285.884 12.624C285.692 12.68 285.524 12.76 285.38 12.864C285.236 12.968 285.12 13.096 285.032 13.248C284.952 13.392 284.912 13.548 284.912 13.716V16.02C284.912 16.22 284.952 16.4 285.032 16.56C285.12 16.712 285.236 16.844 285.38 16.956C285.524 17.06 285.692 17.14 285.884 17.196C286.084 17.252 286.292 17.28 286.508 17.28ZM293.241 18.144C292.817 18.144 292.433 18.068 292.089 17.916C291.753 17.764 291.461 17.548 291.213 17.268C290.973 16.98 290.785 16.64 290.649 16.248C290.521 15.848 290.457 15.4 290.457 14.904C290.457 14.416 290.521 13.972 290.649 13.572C290.785 13.172 290.973 12.832 291.213 12.552C291.461 12.264 291.753 12.044 292.089 11.892C292.433 11.74 292.817 11.664 293.241 11.664C293.657 11.664 294.029 11.74 294.357 11.892C294.685 12.044 294.965 12.256 295.197 12.528C295.429 12.792 295.605 13.108 295.725 13.476C295.853 13.844 295.917 14.248 295.917 14.688V15.144H291.465V15.432C291.465 15.696 291.505 15.944 291.585 16.176C291.673 16.4 291.793 16.596 291.945 16.764C292.105 16.932 292.297 17.064 292.521 17.16C292.753 17.256 293.013 17.304 293.301 17.304C293.693 17.304 294.033 17.212 294.321 17.028C294.617 16.844 294.845 16.58 295.005 16.236L295.689 16.728C295.489 17.152 295.177 17.496 294.753 17.76C294.329 18.016 293.825 18.144 293.241 18.144ZM293.241 12.468C292.977 12.468 292.737 12.516 292.521 12.612C292.305 12.7 292.117 12.828 291.957 12.996C291.805 13.164 291.685 13.364 291.597 13.596C291.509 13.82 291.465 14.068 291.465 14.34V14.424H294.885V14.292C294.885 13.74 294.733 13.3 294.429 12.972C294.133 12.636 293.737 12.468 293.241 12.468ZM297.876 18.144C297.62 18.144 297.432 18.08 297.312 17.952C297.2 17.824 297.144 17.656 297.144 17.448V17.292C297.144 17.084 297.2 16.916 297.312 16.788C297.432 16.66 297.62 16.596 297.876 16.596C298.132 16.596 298.316 16.66 298.428 16.788C298.548 16.916 298.608 17.084 298.608 17.292V17.448C298.608 17.656 298.548 17.824 298.428 17.952C298.316 18.08 298.132 18.144 297.876 18.144ZM302.72 18.144C302.288 18.144 301.9 18.068 301.556 17.916C301.212 17.764 300.92 17.548 300.68 17.268C300.448 16.988 300.268 16.648 300.14 16.248C300.02 15.848 299.96 15.4 299.96 14.904C299.96 14.408 300.02 13.96 300.14 13.56C300.268 13.16 300.448 12.82 300.68 12.54C300.92 12.26 301.212 12.044 301.556 11.892C301.9 11.74 302.288 11.664 302.72 11.664C303.336 11.664 303.828 11.8 304.196 12.072C304.572 12.336 304.852 12.684 305.036 13.116L304.232 13.524C304.12 13.204 303.936 12.956 303.68 12.78C303.424 12.604 303.104 12.516 302.72 12.516C302.432 12.516 302.18 12.564 301.964 12.66C301.748 12.748 301.568 12.876 301.424 13.044C301.28 13.204 301.172 13.4 301.1 13.632C301.028 13.856 300.992 14.104 300.992 14.376V15.432C300.992 15.976 301.136 16.424 301.424 16.776C301.72 17.12 302.152 17.292 302.72 17.292C303.496 17.292 304.056 16.932 304.4 16.212L305.096 16.68C304.896 17.128 304.596 17.484 304.196 17.748C303.804 18.012 303.312 18.144 302.72 18.144ZM308.721 18.144C308.305 18.144 307.925 18.068 307.581 17.916C307.237 17.764 306.941 17.548 306.693 17.268C306.453 16.98 306.265 16.64 306.129 16.248C305.993 15.848 305.925 15.4 305.925 14.904C305.925 14.416 305.993 13.972 306.129 13.572C306.265 13.172 306.453 12.832 306.693 12.552C306.941 12.264 307.237 12.044 307.581 11.892C307.925 11.74 308.305 11.664 308.721 11.664C309.137 11.664 309.513 11.74 309.849 11.892C310.193 12.044 310.489 12.264 310.737 12.552C310.985 12.832 311.177 13.172 311.313 13.572C311.449 13.972 311.517 14.416 311.517 14.904C311.517 15.4 311.449 15.848 311.313 16.248C311.177 16.64 310.985 16.98 310.737 17.268C310.489 17.548 310.193 17.764 309.849 17.916C309.513 18.068 309.137 18.144 308.721 18.144ZM308.721 17.292C309.241 17.292 309.665 17.132 309.993 16.812C310.321 16.492 310.485 16.004 310.485 15.348V14.46C310.485 13.804 310.321 13.316 309.993 12.996C309.665 12.676 309.241 12.516 308.721 12.516C308.201 12.516 307.777 12.676 307.449 12.996C307.121 13.316 306.957 13.804 306.957 14.46V15.348C306.957 16.004 307.121 16.492 307.449 16.812C307.777 17.132 308.201 17.292 308.721 17.292ZM313.096 18V11.808H314.056V12.816H314.104C314.176 12.656 314.256 12.508 314.344 12.372C314.44 12.228 314.552 12.104 314.68 12C314.816 11.896 314.972 11.816 315.148 11.76C315.324 11.696 315.532 11.664 315.772 11.664C316.18 11.664 316.556 11.764 316.9 11.964C317.244 12.156 317.5 12.476 317.668 12.924H317.692C317.804 12.588 318.012 12.296 318.316 12.048C318.628 11.792 319.048 11.664 319.576 11.664C320.208 11.664 320.7 11.872 321.052 12.288C321.412 12.696 321.592 13.276 321.592 14.028V18H320.632V14.196C320.632 13.644 320.524 13.228 320.308 12.948C320.092 12.668 319.748 12.528 319.276 12.528C319.084 12.528 318.9 12.552 318.724 12.6C318.556 12.648 318.404 12.72 318.268 12.816C318.132 12.912 318.024 13.036 317.944 13.188C317.864 13.332 317.824 13.504 317.824 13.704V18H316.864V14.196C316.864 13.644 316.756 13.228 316.54 12.948C316.324 12.668 315.988 12.528 315.532 12.528C315.34 12.528 315.156 12.552 314.98 12.6C314.804 12.648 314.648 12.72 314.512 12.816C314.376 12.912 314.264 13.036 314.176 13.188C314.096 13.332 314.056 13.504 314.056 13.704V18H313.096Z" fill="#BEBEBE"/>
</svg>

<video class="video" autoplay loop muted>
  <source src="./assets/raditube_hq.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
      </div>

      <div class="container__bubbles">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>

      <div class="block step">
        <p><span class="bold">RadiTube</span> is a search engine that allows journalists and researchers to search through 'hidden' radical content on YouTube.</p>
      </div>

    </div>
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import anime from 'animejs';
import gsap from 'gsap';
import "intersection-observer";
import scrollama from "scrollama"; 

export default {
  name: 'App',
  data() {
    return {
      mouse: {
        x: 0,
        y: 0,
        angle: 0
      },
      score: 0,
      hoverCursor: false
    }
  },
  mounted: function() {
    var _this = this;

    (function() {
      document.onmousemove = handleMouseMove;
      function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event;

        if (event.pageX == null && event.clientX != null) {
          eventDoc = (event.target && event.target.ownerDocument) || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;

          event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
            }

            _this.mouse.x = event.x - 25;
            _this.mouse.y = event.y - 25;

            var dy = event.y - (window.innerHeight/2);
            var dx = event.x - (window.innerWidth/2);
            var theta = Math.atan2(dy, dx); // range (-PI, PI]
            theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
            if (theta < 0) theta = 360 + theta; // range [0, 360)
            _this.mouse.angle = theta + 90;

        }
    })();

    // anime({
    //   targets: '.up .circle',
    //   translateY: '-14rem',
    //   loop: true,
    //   duration: 20000,
    //   easing: 'linear'
    // });

    gsap.to(".up .circle", { // selector text, Array, or object
      y: '-14rem',
      duration: 20,
      ease: "linear",
      repeat: -1 
    });

    gsap.to(".down .circle", { // selector text, Array, or object
      y: '14rem',
      duration: 20,
      ease: "linear",
      repeat: -1 
    });

    this.scroller();

  },
  methods: {

    hoverMouse(bool) {
      this.hoverCursor = bool;
      if(bool === true) {
        this.score = this.score - 1;
      }
    },
    scroller() {
      // instantiate the scrollama
      const scroller = scrollama();

      // setup the instance, pass callback functions
      scroller
      .setup({
        step: ".step",
      })
      .onStepEnter((response) => {
        if(response.element.dataset.step === "raditube") {
          this.showHeading();
        }
        console.log(response.element.dataset.step)
      // { element, index, direction }
      })
      .onStepExit((response) => {
        console.log(response)
      // { element, index, direction }
      });

      // setup resize event
      window.addEventListener("resize", scroller.resize);

    },
    showHeading() {

      var tl = anime.timeline({
        targets: '.heading',
        // delay: function(el, i) { return i * 200 },
        // duration: 500, // Can be inherited
        loop: true,
        easing: 'linear', // Can be inherited
      });

      tl.add({
        targets: '.heading',
        opacity: 1,
        translateX: '-1.4rem',
        duration: 2000        
      }).add({
        targets: '.heading',
        translateX: '-14rem',
        duration: 20000,
        easing: 'linear'
      });
    }
  }
}
</script>

<style>
@import 'styles/_reset.scss';

* { cursor: none !important; box-sizing: border-box; }

html, body {
  height: 100%;
  width: 100%;
}

body {
  font-size: 16px;
  background: white;
}

@font-face {
  font-family: 'dw-med';
  src: url('./assets/fonts/dwmedium.woff2') format('woff2'), /* Super Modern Browsers */
       url('./assets/fonts/dwmedium.ttf')  format('truetype'); /* Safari, Android, iOS */
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

.container__difference {
  height: 100vh;
  will-change: background;
  position: fixed;
  width: 100vw;
}

#nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 100px;
}

#nav a {
  min-width: 100%;
  line-height: 3rem;
  font-family: 'dw-med';
  font-size: 1.25rem;
  width: 10%;
  text-decoration: none;
  color: white;
  text-align: center;
  mix-blend-mode: difference;
}

.logo {
  line-height: 1.5rem;
}

.logo img {
  max-width: 6rem;
  margin-top: -1rem;
}

.menu {
  min-width: 20%;
}

.cursor {
  width: 50px;
  height: 50px;
  /* background: white; */
  border: 1px solid white;
  position: absolute;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 10;
  transform: rotate(45deg);
  transition: transform .5s, rotate .5s, border-radius .5s;
  cursor: none !important;
  /* clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); */
}

.active {
  width: 100px;
  height: 100px;
  transform: rotate(0deg);
  margin-left: -25px;
  margin-top: -25px;
  transition: transform .5s, rotate .5s, border-radius .5s;
  border-radius: 100%;
}

.container__circles {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
}

.row__circles {
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.circle {
  border-radius: 100%;
  min-width: 12rem;
  min-height: 12rem;
  border: 1px solid white;
  mix-blend-mode: difference;
  margin-top: 2rem;
  text-align: center;
  will-change: transform;
}

.score {
  color: white;
  width: 100px;
  line-height: 100px;
  text-align: center;
  display: none;
  font-family: 'dw-med';
  font-size: 1rem;
  position: absolute;
}

.score__visible {
  display: block;
  animation-name: score;
  animation-duration: 2s;
}

@keyframes score {
  0%   {top: 0; opacity: 1}
  100%  {top: -2rem; opacity: 0}
}

.points {
  font-family: 'dw-med';
  font-size: 2rem;
  color: white;
  mix-blend-mode: difference;
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  font-size: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  padding: 1rem;
  background: black;
}

.container__content {
  width: 100vw;
  z-index: 100;
  position: absolute;
  display: flex;
  margin-top: 40rem;
  justify-content: center;
  padding-bottom: 30rem;
  pointer-events: none;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

.browser {
  width: 64rem;
  height: 36rem;
  background: white;
  border: 1px solid black;
  border-radius: 5px;
}

.bubble {
  width: 2rem;
  height: 2rem;
  background: white;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: 1.5rem;
}

.block {
  width: 32rem;
  margin-top: 1.5rem;
  background: white;
  border-radius: 5px;
  border: 1px solid black;
  text-align: center;
  font-family: 'IBM Plex Sans', sans-serif;
  padding: 2rem;
}

h1 {
  font-family: 'dw-med';
  color: white;
  mix-blend-mode: difference;
  font-size: 3rem;
  line-height: 100vh;
  white-space: nowrap;
  position: absolute;
  top: 0;
  opacity: 0;
  pointer-events: none;
  will-change: transform;
}

.bold {
  font-weight: 500;
}

.container__bubbles .bubble:first-child {
  transform: scale(.5);
}

.container__bubbles .bubble:nth-child(2) {
  transform: scale(.75)
}

.browser-ui {
  margin: .75rem;
}

.video {
  width: 100%;
}
</style>
