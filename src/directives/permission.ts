import { Directive, DirectiveBinding } from "vue";

function isAuth(el: Element, binding: any) {}

const mounted = (el: Element, binding: DirectiveBinding<string | string[]>) => {
  isAuth(el, binding);
};

const ahtuDirective: Directive = {
  mounted,
};

export default ahtuDirective;
