import{i as q,v as K,_ as i,n as c,t as z,W as P,b as $,e as R,s as G,r as U,w as J,H as Q,L as Y,a as ee,c as te,d as ae,f as re,g as oe,E as ne}from"./chunk.JAAVYFGY.DX5P043y.js";/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ie=q`
  :host {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.375em 0.625em;
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    font-size: max(var(--wa-font-size-3xs), 0.75em);
    font-weight: var(--wa-font-weight-semibold);
    line-height: 1;
    vertical-align: middle;
    white-space: nowrap;
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
    border-radius: var(--wa-border-radius-s);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;

    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    --pulse-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));

    color: var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance='filled']) {
    --pulse-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    --pulse-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));
  }

  :host([appearance='accent']) {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
  }

  /* Pill modifier */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }

  /* Pulse attention */
  :host([attention='pulse']) {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  /* Bounce attention */
  :host([attention='bounce']) {
    animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-2px);
    }
  }

  /* Prevents vertical space when icons with vertical-align are slotted in - https://github.com/shoelace-style/webawesome/issues/2280 */
  [part='start'],
  [part='end'] {
    line-height: 0;
  }

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.375em;
  }

  slot[name='end']::slotted(*) {
    margin-inline-start: 0.375em;
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var f=class extends P{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return $`
      <span part="start">
        <slot name="start"></slot>
      </span>

      <span part="base badge" role="status">
        <slot></slot>
      </span>

      <span part="end">
        <slot name="end"></slot>
      </span>
    `}};f.css=[K,ie];i([c({reflect:!0})],f.prototype,"variant",2);i([c({reflect:!0})],f.prototype,"appearance",2);i([c({type:Boolean,reflect:!0})],f.prototype,"pill",2);i([c({reflect:!0})],f.prototype,"attention",2);f=i([z("wa-badge")],f);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var se=q`
  :host {
    --gap: var(--wa-space-s);
    --width: 28rem;
    --reorder-duration: var(--wa-transition-normal);

    display: flex;
    flex-direction: column;
    position: fixed;
    width: var(--width);
    height: 100dvh;
    max-height: 100dvh;
    margin: 0;
    padding: var(--wa-space-m);
    overflow-y: auto;
    gap: var(--gap);
    border: none;
    background: transparent;
    pointer-events: none;
    scrollbar-width: thin;

    /* Reset inset properties so placement changes work correctly */
    inset-block-start: auto;
    inset-block-end: auto;
    inset-inline-start: auto;
    inset-inline-end: auto;
    translate: none;
    align-content: normal;
    justify-content: normal;
  }

  :host(:not(:popover-open)) {
    display: none;
  }

  /* Placement positioning using logical properties for RTL support */
  :host([placement='top-start']) {
    inset-block-start: 0;
    inset-inline-start: 0;
  }

  :host([placement='top-center']) {
    inset-block-start: 0;
    inset-inline-start: 50%;
    translate: -50% 0;
  }

  :host([placement='top-end']) {
    inset-block-start: 0;
    inset-inline-start: auto;
    inset-inline-end: 0;
  }

  :host([placement='bottom-start']) {
    inset-block-end: 0;
    inset-inline-start: 0;
    align-content: end;
  }

  :host([placement='bottom-center']) {
    inset-block-end: 0;
    inset-inline-start: 50%;
    translate: -50% 0;
    align-content: end;
  }

  :host([placement='bottom-end']) {
    inset-block-end: 0;
    inset-inline-start: auto;
    inset-inline-end: 0;
    align-content: end;
  }

  /* Bottom placements: justify content to end */
  :host([placement^='bottom']) {
    justify-content: end;
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    width: 100%;
    pointer-events: auto;
  }

  /* Bottom placements: reverse stack order so newest appears at bottom */
  :host([placement^='bottom']) .stack {
    flex-direction: column-reverse;
  }

  /* Mobile: full width */
  @media (max-width: 480px) {
    :host {
      width: 100%;
      padding: var(--wa-space-s);
    }
  }
`;let ce="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",le=(e=21)=>{let t="",a=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=ce[a[e]&63];return t};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */function de(e=""){return`${e}${le()}`}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */async function ue(e,t,a){return e.animate(t,a).finished.catch(()=>{})}function D(e,t){return new Promise(a=>{const o=new AbortController,{signal:r}=o;if(e.classList.contains(t))return;e.classList.add(t);let n=!1,l=()=>{n||(n=!0,e.classList.remove(t),a(),o.abort())};e.addEventListener("animationend",l,{once:!0,signal:r}),e.addEventListener("animationcancel",l,{once:!0,signal:r}),requestAnimationFrame(()=>{!n&&e.getAnimations().length===0&&l()})})}function he(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var T=null,L=0;function pe(){if(L+=1,T||typeof document>"u")return;const e=document.createElement("div");e.id=de("wa-toast-live-region-"),e.setAttribute("data-wa-toast-live-region",""),e.style.cssText=`
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip-path: inset(50%);
    pointer-events: none;
    top: 0;
    left: 0;
  `,document.body.append(e),T=e}function me(){L=Math.max(0,L-1),!(L>0)&&(T?.remove(),T=null)}function fe(e,t){if(typeof document>"u")return;const a=T;if(!a)return;const o=e.trim();if(!o)return;const r=document.createElement("div");r.setAttribute("role",t==="danger"?"alert":"status"),r.setAttribute("aria-live",t==="danger"?"assertive":"polite"),r.setAttribute("aria-atomic","true"),a.append(r),requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.textContent=o})}),setTimeout(()=>r.remove(),1e3)}var A=class extends P{constructor(){super(...arguments),this.activatedToastItems=new WeakSet,this.positionCache=new Map,this.placement="top-end",this.handleDocumentKeyDown=async e=>{if(await new Promise(t=>setTimeout(t)),e.key==="Escape"&&!e.defaultPrevented){const t=this.getToastItems();t.length>0&&(e.preventDefault(),t[t.length-1]?.hide())}},this.handleAfterHide=async e=>{const t=e.target;t.parentElement===this&&(this.capturePositions(),t.remove(),await this.animatePositions()),this.getToastItems().length===0&&this.hideStack()}}connectedCallback(){super.connectedCallback(),this.popover="manual",pe(),document.addEventListener("keydown",this.handleDocumentKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener?.("keydown",this.handleDocumentKeyDown),me()}handleSlotChange(){const e=this.getToastItems(),t=[];e.forEach(a=>{this.activatedToastItems.has(a)||t.push(a)}),t.length>0&&(this.capturePositions(),t.forEach(a=>{this.activatedToastItems.add(a),this.showStack(),a.startTimer(),this.announceToastItem(a)}),requestAnimationFrame(()=>this.animatePositions()))}announceToastItem(e){fe(e.textContent??"",e.variant)}getToastItems(){return[...this.querySelectorAll(":scope > wa-toast-item")]}capturePositions(){this.positionCache.clear();for(const e of this.getToastItems())this.positionCache.set(e,e.getBoundingClientRect())}async animatePositions(){if(he()){this.positionCache.clear();return}const e=[];for(const t of this.getToastItems()){const a=this.positionCache.get(t);if(!a)continue;const o=t.getBoundingClientRect(),r=a.top-o.top;if(Math.abs(r)>1){const n=ue(t,[{transform:`translateY(${r}px)`},{transform:"translateY(0)"}],{duration:200,easing:"cubic-bezier(0.2, 0, 0, 1)"});e.push(n)}}this.positionCache.clear(),await Promise.all(e)}showStack(){this.matches(":popover-open")||(this.showPopover(),this.customStates.set("visible",!0))}hideStack(){this.matches(":popover-open")&&(this.hidePopover(),this.customStates.set("visible",!1))}async create(e,t){const a={allowHtml:!1,duration:5e3,variant:"neutral",size:"m",...t},o=document.createElement("wa-toast-item");if(o.variant=a.variant,o.size=a.size,o.duration=a.duration,a.allowHtml?o.innerHTML=e:o.textContent=e,a.icon){const r=document.createElement("wa-icon");r.setAttribute("slot","icon"),typeof a.icon=="string"?r.setAttribute("name",a.icon):(r.setAttribute("name",a.icon.name),a.icon.library&&r.setAttribute("library",a.icon.library),a.icon.family&&r.setAttribute("family",a.icon.family),a.icon.variant&&r.setAttribute("variant",a.icon.variant)),o.prepend(r)}return this.activatedToastItems.add(o),this.capturePositions(),this.showStack(),this.prepend(o),await o.updateComplete,this.animatePositions(),o.startTimer(),this.announceToastItem(o),o}render(){return $`
      <div part="stack" class="stack" @wa-after-hide=${this.handleAfterHide}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};A.css=se;i([R(".stack")],A.prototype,"stack",2);i([c({reflect:!0})],A.prototype,"placement",2);A=i([z("wa-toast")],A);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ve=q`
  :host {
    --accent-width: 4px;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);
    --accent-color: var(--wa-color-fill-loud);

    display: block;
    pointer-events: auto;
  }

  /* Sizes */
  :host([size='xs']) {
    --padding: var(--wa-space-xs);
  }
  :host([size='s']),
  :host([size='small']) {
    --padding: var(--wa-space-s);
  }
  :host([size='m']),
  :host([size='medium']) {
    --padding: var(--wa-space-m);
  }
  :host([size='l']),
  :host([size='large']) {
    --padding: var(--wa-space-l);
  }
  :host([size='xl']) {
    --padding: var(--wa-space-xl);
  }

  .toast-item {
    display: flex;
    align-items: stretch;
    background: var(--wa-color-surface-raised);
    border: var(--wa-border-width-s) solid var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    box-shadow: var(--wa-shadow-l);
    overflow: hidden;
  }

  /* Animations */
  .toast-item.show {
    animation: toast-show var(--show-duration) var(--wa-transition-easing) forwards;
  }

  .toast-item.hide {
    animation: toast-hide var(--hide-duration) var(--wa-transition-easing) forwards;
  }

  @keyframes toast-show {
    from {
      opacity: 0;
      translate: 0 -0.5rem;
    }
    to {
      opacity: 1;
      translate: 0;
    }
  }

  @keyframes toast-hide {
    from {
      opacity: 1;
      translate: 0;
    }
    to {
      opacity: 0;
      translate: 0 -0.5rem;
    }
  }

  /* Accent line */
  .accent {
    flex: 0 0 auto;
    width: var(--accent-width);
    background: var(--accent-color);
  }

  /* Icon - only show if slot has content */
  .icon {
    display: flex;
    align-items: center;
    padding: var(--padding);
    padding-inline-end: 0;
    color: var(--accent-color);
    font-size: 1.25em;
  }

  .toast-item:not(.toast-item--has-icon) .icon {
    display: none;
  }

  /* Content */
  .content {
    flex: 1 1 auto;
    align-self: center;
    min-width: 0;
    padding: var(--padding);
    color: var(--wa-color-text-normal);
  }

  /* Close button */
  .close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    padding-inline: var(--padding);
    background: transparent;
    border: none;
    border-start-end-radius: var(--border-radius);
    border-end-end-radius: var(--border-radius);
    color: var(--wa-color-neutral-on-quiet);
    font-size: inherit;
    cursor: pointer;
    transition: background-color var(--wa-transition-fast);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: calc(var(--wa-focus-ring-width) * -1);
    }
  }

  /* Progress ring styling */
  wa-progress-ring {
    --size: var(--wa-form-control-height);
    --track-width: 0.125rem;
    --indicator-width: 0.125rem;
    --track-color: var(--wa-color-neutral-fill-quiet);
    --indicator-color: var(--accent-color);
    --indicator-transition-duration: 50ms;
  }

  /* Hide progress ring indicator when no duration */
  .toast-item:not(.toast-item--has-duration) wa-progress-ring {
    --track-color: transparent;
    --indicator-color: transparent;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .toast-item.show,
    .toast-item.hide {
      animation: none;
    }
  }
`;/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var we=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ge=class extends Event{constructor(e){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var be=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ye=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var u=class extends P{constructor(){super(...arguments),this.hasSlotController=new Q(this,"icon"),this.localize=new Y(this),this.animationFrame=null,this.startTime=null,this.isHovering=!1,this.isFocused=!1,this.timeLeft=100,this.variant="neutral",this.size="m",this.duration=5e3,this.withIcon=!1,this.tick=()=>{if(!this.startTime)return;const e=performance.now()-this.startTime,t=Math.min(e/this.duration,1);this.timeLeft=100*(1-t),t<1?this.animationFrame=requestAnimationFrame(this.tick):this.hide()},this.handlePointerEnter=e=>{(e.pointerType==="mouse"||e.pointerType==="pen")&&(this.isHovering=!0,this.pauseTimer())},this.handlePointerLeave=()=>{this.isHovering&&(this.isHovering=!1,this.resumeTimer())},this.handleFocusIn=()=>{this.isFocused=!0,this.pauseTimer()},this.handleFocusOut=()=>{this.isFocused=!1,this.resumeTimer()}}handleSizeChange(){ee(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerenter",this.handlePointerEnter),this.addEventListener("pointerleave",this.handlePointerLeave)}disconnectedCallback(){super.disconnectedCallback(),this.stopTimer(),this.removeEventListener("pointerenter",this.handlePointerEnter),this.removeEventListener("pointerleave",this.handlePointerLeave)}async startTimer(){const e=new we;this.dispatchEvent(e),!e.defaultPrevented&&(await this.updateComplete,await D(this.toastItemElement,"show"),this.dispatchEvent(new ye),this.duration>0&&Number.isFinite(this.duration)&&(this.startTime=performance.now(),this.timeLeft=100,this.tick()))}stopTimer(){this.animationFrame!==null&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null)}async hide(){this.stopTimer();const e=new ge;this.dispatchEvent(e),!e.defaultPrevented&&(await D(this.toastItemElement,"hide"),this.dispatchEvent(new be),this.remove())}handleCloseClick(){this.hide()}pauseTimer(){this.stopTimer(),this.timeLeft=100}resumeTimer(){!this.isHovering&&!this.isFocused&&this.duration>0&&(this.startTime=performance.now(),this.tick())}render(){const e=this.hasUpdated?this.hasSlotController.test("icon"):this.withIcon,t=this.duration>0;return $`
      <div
        part="toast-item"
        class=${te({"toast-item":!0,"toast-item--has-icon":e,"toast-item--has-duration":t})}
      >
        <div part="accent" class="accent"></div>

        <div part="icon" class="icon">
          <slot name="icon"></slot>
        </div>

        <div part="content" class="content">
          <slot></slot>
        </div>

        <button
          part="close-button"
          class="close-button"
          type="button"
          aria-label=${this.localize.term("close")}
          @click=${this.handleCloseClick}
          @focusin=${this.handleFocusIn}
          @focusout=${this.handleFocusOut}
        >
          <wa-progress-ring
            part="progress-ring"
            exportparts="
              base:progress-ring__base,
              label:progress-ring__label,
              track:progress-ring__track,
              indicator:progress-ring__indicator
            "
            value=${this.timeLeft}
            aria-hidden="true"
          >
            <wa-icon
              part="close-icon"
              exportparts="svg:close-icon__svg"
              name="xmark"
              library="system"
              variant="solid"
            ></wa-icon>
          </wa-progress-ring>
        </button>
      </div>
    `}};u.css=[ve,K,G];i([R(".toast-item")],u.prototype,"toastItemElement",2);i([U()],u.prototype,"timeLeft",2);i([c({reflect:!0})],u.prototype,"variant",2);i([c({reflect:!0})],u.prototype,"size",2);i([J("size")],u.prototype,"handleSizeChange",1);i([c({type:Number})],u.prototype,"duration",2);i([c({attribute:"with-icon",type:Boolean})],u.prototype,"withIcon",2);u=i([z("wa-toast-item")],u);/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var ke=q`
  :host {
    --size: 8rem;
    --track-width: 0.25em; /* avoid using rems here */
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-width: var(--track-width);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N="important",xe=" !"+N,H=ae(class extends re{constructor(e){if(super(e),e.type!==oe.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const o=e[a];return o==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:a}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?a.removeProperty(o):a[o]=null);for(const o in t){const r=t[o];if(r!=null){this.ft.add(o);const n=typeof r=="string"&&r.endsWith(xe);o.includes("-")||n?a.setProperty(o,n?r.slice(0,-11):r,n?N:""):a[o]=r}}return ne}});/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */var m=class extends P{constructor(){super(...arguments),this.localize=new Y(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),a=2*Math.PI*t,o=a-this.value/100*a;this.indicatorOffset=`${o}px`}}render(){return $`
      <div
        part="base progress-ring"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${H({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${H({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};m.css=ke;i([R(".indicator")],m.prototype,"indicator",2);i([U()],m.prototype,"indicatorOffset",2);i([c({type:Number,reflect:!0})],m.prototype,"value",2);i([c()],m.prototype,"label",2);m=i([z("wa-progress-ring")],m);m.disableWarning?.("change-in-update");const X=e=>e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),I=document.querySelector("[data-picker]"),h=I?.querySelector("[data-picker-trigger]"),v=I?.querySelector("[data-picker-panel]"),B=I?.querySelector("[data-picker-value]"),s=[...v?.querySelectorAll('[role="option"]')??[]];let E="all",d=-1,b=!1;function F({src:e,title:t,url:a,compact:o=!1}){const r=document.querySelector("#am-embed"),n=document.querySelector("#am-player-caption-text"),l=document.querySelector("#am-player-kind"),y=document.querySelector("#am-player-open");if(!r||!e)return;r.src=e,r.removeAttribute("aria-hidden"),r.height=o?"175":"450",r.title=`Apple Music player: ${t}`,n&&(n.textContent=`${t} · official preview`),l&&(l.textContent=o?"Track":"Album"),y&&a&&(y.href=a);const w=document.querySelector("#am-player");if(w){w.dataset.loaded="true";const M=w.getBoundingClientRect();M.top<window.innerHeight*.55&&M.bottom>0||w.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"})}}function k(e){s.length&&(d=Math.max(0,Math.min(e,s.length-1)),s.forEach((t,a)=>t.toggleAttribute("data-active",a===d)),s[d].scrollIntoView({block:"nearest"}),s[d].focus({preventScroll:!0}))}function W(){if(!v||!h||b)return;b=!0,v.hidden=!1,h.setAttribute("aria-expanded","true");const e=s.findIndex(t=>t.dataset.value===E);k(e>=0?e:0)}function x({focusTrigger:e=!0}={}){!v||!h||!b||(b=!1,v.hidden=!0,h.setAttribute("aria-expanded","false"),s.forEach(t=>t.removeAttribute("data-active")),e&&h.focus({preventScroll:!0}))}function j(e){const t=e.dataset.value;E=t,s.forEach(a=>a.setAttribute("aria-selected",String(a===e))),B&&(B.textContent=e.querySelector(".picker-option-label")?.textContent??""),x(),t!=="all"&&e.dataset.embed&&F({src:e.dataset.embed,title:e.querySelector(".picker-option-label")?.textContent??"Release",url:e.dataset.url,compact:!1}),S()}h&&v&&(h.addEventListener("click",()=>b?x():W()),h.addEventListener("keydown",e=>{(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),W())}),v.addEventListener("keydown",e=>{e.key==="ArrowDown"?(e.preventDefault(),k(d+1)):e.key==="ArrowUp"?(e.preventDefault(),k(d-1)):e.key==="Home"?(e.preventDefault(),k(0)):e.key==="End"?(e.preventDefault(),k(s.length-1)):e.key==="Enter"||e.key===" "?(e.preventDefault(),s[d]&&j(s[d])):e.key==="Escape"?(e.preventDefault(),x()):e.key==="Tab"&&x({focusTrigger:!1})}),s.forEach(e=>{e.addEventListener("click",()=>j(e)),e.addEventListener("pointermove",()=>{const t=s.indexOf(e);t!==d&&(d=t,s.forEach((a,o)=>a.toggleAttribute("data-active",o===t)))})}),document.addEventListener("pointerdown",e=>{b&&!I.contains(e.target)&&x({focusTrigger:!1})}));const g=[...document.querySelectorAll(".track")],Ee=[...document.querySelectorAll(".track-group")],O=document.querySelector(".track-jumps"),p=document.querySelector("#song-search"),_=document.querySelector("#hide-repeats"),Te=new Map(g.map(e=>[e,X(e.dataset.search??"")]));let V;function Z(e){const t=document.querySelector("#track-status");t&&(clearTimeout(V),V=setTimeout(()=>{t.textContent=e},650))}function S(){if(!g.length)return;const e=X(p?.value??"");let t=0;for(const r of g){const n=(E==="all"||r.dataset.album===E)&&(!e||Te.get(r).includes(e))&&(!_?.checked||r.dataset.repeat!=="true");r.hidden=!n,n&&t++}for(const r of Ee){const n=[...r.querySelectorAll(".track")],l=n.filter(w=>!w.hidden).length;r.hidden=l===0;const y=r.querySelector(".track-group-count");y&&(y.textContent=l===n.length?`${n.length} tracks`:`${l} of ${n.length} tracks`)}O&&(O.hidden=E!=="all"||!!e||!!_?.checked);const a=document.querySelector("#track-visible"),o=document.querySelector("#track-empty");a&&(a.textContent=`${t} of ${g.length} tracks`),o&&(o.hidden=t!==0),Z(`${t} of ${g.length} tracks shown`),!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&[...g.filter(r=>!r.hidden)].slice(0,12).forEach((r,n)=>{r.animate([{opacity:0,transform:"translate3d(8px,0,0)"},{opacity:1,transform:"none"}],{duration:300,delay:Math.min(n,9)*30,easing:"cubic-bezier(.22,1,.36,1)"})})}p?.addEventListener("input",S);_?.addEventListener("change",S);p?.addEventListener("keydown",e=>{e.key==="Escape"&&p.value&&(p.value="",S())});document.addEventListener("keydown",e=>{if(e.key!=="/"||e.metaKey||e.ctrlKey||e.altKey)return;const t=e.target;t instanceof HTMLElement&&/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)||p&&(e.preventDefault(),p.focus(),p.select())});S();const C=document.querySelector("[data-player-load]");C?.addEventListener("click",()=>{F({src:C.dataset.src,title:C.dataset.title??"Apple Music",url:C.dataset.url,compact:!1})});const Ae=[...document.querySelectorAll(".track-play[data-embed]")];Ae.forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll('.track[data-loaded="true"]').forEach(t=>{t.removeAttribute("data-loaded")}),e.closest(".track")?.setAttribute("data-loaded","true"),F({src:e.dataset.embed,title:e.dataset.caption??"Apple Music",url:e.dataset.url,compact:!0}),Z(`Loaded ${e.dataset.caption??"track"} in the Apple Music player`)})});const Se=document.querySelector("[data-copy-link]"),Ce=document.querySelector("#copy-toast"),Le=document.querySelector("#am-player-open"),qe=async e=>{try{return await navigator.clipboard.writeText(e),!0}catch{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.append(t),t.select();const a=document.execCommand("copy");return t.remove(),a}};Se?.addEventListener("click",async()=>{const e=Le?.href||window.location.href,t=await qe(e);Ce?.create(t?"Link copied":"Could not copy. Use the address bar.",{variant:t?"success":"danger"})});
